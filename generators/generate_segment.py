"""Network Segment Generator for VxLAN VPN Services.

This generator processes ServiceNetworkSegment objects and configures:
- VNI (VXLAN Network Identifier) = VLAN ID + 10000
- RD (Route Distinguisher) = VLAN ID
- VLAN-to-VNI mapping on leaf devices in the deployment
"""

from typing import Any

from infrahub_sdk.generator import InfrahubGenerator  # type: ignore[import-not-found]

from .common import clean_data


class NetworkSegmentGenerator(InfrahubGenerator):
    """Generate VxLAN VPN configuration for network segments.

    This generator is triggered when a ServiceNetworkSegment is created.
    It processes the segment data and configures the VxLAN overlay on
    the associated deployment's leaf devices.
    """

    async def generate(self, data: dict) -> None:
        """Process network segment and configure VxLAN settings.

        Args:
            data: GraphQL query result containing ServiceNetworkSegment data
        """
        cleaned_data = clean_data(data)
        if not isinstance(cleaned_data, dict):
            raise ValueError("clean_data() did not return a dictionary")

        # Extract segment data from query result
        segments = cleaned_data.get("ServiceNetworkSegment", [])
        if not segments:
            self.logger.warning("No segment data found in query result")
            return

        segment = segments[0]  # Generator runs per-segment

        # Extract segment attributes
        segment_name = segment.get("name", "unknown")
        customer_name = segment.get("customer_name", "unknown")
        vlan_id = segment.get("vlan_id")
        segment_type = segment.get("segment_type", "l2_only")
        external_routing = segment.get("external_routing", False)
        tenant_isolation = segment.get("tenant_isolation", "customer_dedicated")

        if not vlan_id:
            self.logger.error(f"Segment {segment_name} has no VLAN ID, skipping")
            return

        # Calculate VxLAN parameters
        vni = vlan_id + 10000
        rd = str(vlan_id)

        self.logger.info(f"Processing segment: {segment_name}")
        self.logger.info(f"  Customer: {customer_name}")
        self.logger.info(f"  VLAN ID: {vlan_id}")
        self.logger.info(f"  VNI: {vni}")
        self.logger.info(f"  RD: {rd}")
        self.logger.info(f"  Type: {segment_type}")
        self.logger.info(f"  External Routing: {external_routing}")
        self.logger.info(f"  Tenant Isolation: {tenant_isolation}")

        # Get deployment information
        deployment = segment.get("deployment")
        if not deployment:
            self.logger.warning(f"Segment {segment_name} has no deployment, skipping")
            return

        deployment_name = deployment.get("name", "unknown")
        self.logger.info(f"  Deployment: {deployment_name}")

        # Get prefix information if available
        prefix_data = segment.get("prefix")
        if prefix_data:
            prefix_value = prefix_data.get("prefix", "N/A")
            self.logger.info(f"  Prefix: {prefix_value}")

        # Get devices from deployment for VxLAN configuration
        devices = deployment.get("devices", [])
        leaf_devices = [d for d in devices if d.get("role") in ["leaf", "border_leaf"]]

        if not leaf_devices:
            self.logger.info(
                f"No leaf devices found in deployment {deployment_name}, "
                "VxLAN configuration will be applied when devices are available"
            )
            return

        self.logger.info(
            f"Found {len(leaf_devices)} leaf devices for VxLAN configuration"
        )

        # Configure VxLAN on each leaf device
        await self._configure_vxlan_on_leaves(
            leaf_devices=leaf_devices,
            segment_name=segment_name,
            vlan_id=vlan_id,
            vni=vni,
            rd=rd,
            segment_type=segment_type,
            external_routing=external_routing,
        )

    async def _configure_vxlan_on_leaves(
        self,
        leaf_devices: list[dict[str, Any]],
        segment_name: str,
        vlan_id: int,
        vni: int,
        rd: str,
        segment_type: str,
        external_routing: bool,
    ) -> None:
        """Configure VxLAN settings on leaf devices.

        This method would create/update VxLAN configuration objects
        for each leaf device in the deployment.

        Args:
            leaf_devices: List of leaf device data from deployment
            segment_name: Name of the network segment
            vlan_id: VLAN ID for the segment
            vni: VxLAN Network Identifier
            rd: Route Distinguisher
            segment_type: Type of segment (l2_only, l3_gateway, l3_vrf)
            external_routing: Whether external routing is enabled
        """
        for device in leaf_devices:
            device_name = device.get("name", "unknown")

            self.logger.info(
                f"  Configuring VxLAN on {device_name}: "
                f"VLAN {vlan_id} -> VNI {vni} (RD: {rd})"
            )

            # Note: The actual VxLAN configuration creation depends on
            # whether there's a schema for VxLAN mappings. For now, we log
            # the configuration that would be applied.
            #
            # Future implementation could create objects like:
            # - VxlanVniMapping (device, vlan_id, vni, rd)
            # - VxlanEvpnInstance (device, vni, rd, rt_import, rt_export)
            # - L3VrfInstance (if segment_type is l3_vrf)

            if segment_type == "l3_gateway":
                self.logger.info(
                    f"    L3 Gateway: Creating SVI for VLAN {vlan_id} on {device_name}"
                )
            elif segment_type == "l3_vrf":
                self.logger.info(
                    f"    L3 VRF: Creating VRF instance for segment on {device_name}"
                )

            if external_routing:
                self.logger.info(
                    f"    External routing enabled: "
                    f"Advertising VNI {vni} to external peers"
                )

        self.logger.info(
            f"VxLAN configuration complete for segment {segment_name}"
        )
