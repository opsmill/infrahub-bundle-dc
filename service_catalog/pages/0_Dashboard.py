"""Infrahub Service Catalog - Dashboard Page.

This page displays Data Centers with associated Network Segments and branch selection capability.
"""

import streamlit as st  # type: ignore[import-untyped]

from utils import (
    DEFAULT_BRANCH,
    INFRAHUB_ADDRESS,
    INFRAHUB_API_TOKEN,
    INFRAHUB_UI_URL,
    InfrahubClient,
    display_error,
)
from utils.api import InfrahubConnectionError, InfrahubHTTPError, InfrahubGraphQLError


# Initialize session state
if "selected_branch" not in st.session_state:
    st.session_state.selected_branch = DEFAULT_BRANCH

if "infrahub_url" not in st.session_state:
    st.session_state.infrahub_url = INFRAHUB_ADDRESS


def main() -> None:
    """Main function to render the home page."""

    # Initialize API client
    client = InfrahubClient(
        st.session_state.infrahub_url,
        api_token=INFRAHUB_API_TOKEN or None,
        ui_url=INFRAHUB_UI_URL
    )

    # Page title
    st.title("Infrahub Service Catalog")
    st.markdown(
        "Welcome to the Infrahub Service Catalog. View and manage your infrastructure resources."
    )

    # Branch selector in sidebar
    st.sidebar.markdown("---")
    st.sidebar.subheader("Branch Selection")

    try:
        # Fetch branches (cache in session state to avoid repeated API calls)
        if "branches" not in st.session_state:
            with st.spinner("Loading branches..."):
                st.session_state.branches = client.get_branches()

        branches = st.session_state.branches

        if branches:
            # Extract branch names
            branch_names = [branch["name"] for branch in branches]

            # Find index of currently selected branch
            try:
                default_index = branch_names.index(st.session_state.selected_branch)
            except ValueError:
                default_index = 0
                st.session_state.selected_branch = (
                    branch_names[0] if branch_names else DEFAULT_BRANCH
                )

            # Display branch selector dropdown
            selected_branch = st.sidebar.selectbox(
                "Select Branch",
                options=branch_names,
                index=default_index,
                help="Choose a branch to view its infrastructure resources",
                key="branch_selector",
            )

            # Update session state if branch changed
            if selected_branch != st.session_state.selected_branch:
                st.session_state.selected_branch = selected_branch
                st.rerun()
        else:
            st.sidebar.warning("No branches found")

    except InfrahubConnectionError as e:
        display_error("Unable to connect to Infrahub", str(e))
        st.stop()
    except InfrahubHTTPError as e:
        display_error(
            f"HTTP Error {e.status_code}", f"{str(e)}\n\nResponse: {e.response_text}"
        )
        st.stop()
    except InfrahubGraphQLError as e:
        display_error("GraphQL Error", str(e))
        st.stop()
    except Exception as e:
        display_error("Unexpected error while fetching branches", str(e))
        st.stop()

    # Display current branch info
    st.sidebar.info(f"Current Branch: **{st.session_state.selected_branch}**")

    # Main content area
    st.markdown("---")

    # Data Centers section
    st.header("Data Centers")

    try:
        with st.spinner(
            f"Loading data centers from branch '{st.session_state.selected_branch}'..."
        ):
            datacenters = client.get_objects(
                "TopologyDataCenter", st.session_state.selected_branch
            )

        if datacenters:
            # Display each datacenter with its network segments
            for dc in datacenters:
                dc_name = dc.get("name", {}).get("value", "Unknown")
                dc_id = dc.get("id", "")
                location_node = dc.get("location", {}).get("node", {})
                location = location_node.get("display_label", "N/A") if location_node else "N/A"
                description = dc.get("description", {}).get("value", "")
                strategy = dc.get("strategy", {}).get("value", "N/A")
                design_node = dc.get("design", {}).get("node", {})
                design = design_node.get("name", {}).get("value", "N/A") if design_node else "N/A"
                dc_link = f"{INFRAHUB_UI_URL}/objects/TopologyDataCenter/{dc_id}?branch={st.session_state.selected_branch}"

                # Create expander for each datacenter
                with st.expander(f"**{dc_name}** - {location}", expanded=True):
                    # Datacenter details row
                    col1, col2, col3, col4 = st.columns([2, 2, 2, 1])
                    with col1:
                        st.markdown(f"**Strategy:** {strategy}")
                    with col2:
                        st.markdown(f"**Design:** {design}")
                    with col3:
                        if description:
                            st.markdown(f"**Description:** {description}")
                    with col4:
                        st.link_button("View in Infrahub", dc_link)

                    # Fetch and display network segments for this datacenter
                    segments = client.get_network_segments_by_deployment(
                        dc_id, st.session_state.selected_branch
                    )

                    if segments:
                        st.markdown("---")
                        st.markdown("**Network Segments:**")
                        segment_data = []
                        for seg in segments:
                            segment_data.append({
                                "Customer": seg.get("customer_name", {}).get("value", "N/A"),
                                "Environment": seg.get("environment", {}).get("value", "N/A"),
                                "Type": seg.get("segment_type", {}).get("value", "N/A"),
                                "VLAN ID": seg.get("vlan_id", {}).get("value", "N/A"),
                                "Isolation": seg.get("tenant_isolation", {}).get("value", "N/A"),
                                "Owner": seg.get("owner", {}).get("value", "N/A"),
                            })
                        st.dataframe(
                            segment_data,
                            use_container_width=True,
                            hide_index=True,
                        )
                    else:
                        st.caption("No network segments associated with this data center.")

            st.caption(f"Found {len(datacenters)} data center(s)")
        else:
            st.info("No data centers found in this branch.")

            # Show debug info if on a non-main branch
            if st.session_state.selected_branch != "main":
                with st.expander("Debug Information"):
                    st.markdown("**Query Details:**")
                    st.code(f"Branch: {st.session_state.selected_branch}")
                    st.code("Object Type: TopologyDataCenter")
                    st.code(f"Infrahub Address: {client.base_url}")

                    # Check for proposed changes
                    try:
                        pcs = client.get_proposed_changes(st.session_state.selected_branch)
                        if pcs:
                            st.markdown("**Proposed Changes on this branch:**")
                            for pc in pcs:
                                pc_name = pc.get("name", {}).get("value", "Unknown")
                                pc_state = pc.get("state", {}).get("value", "Unknown")
                                st.write(f"- {pc_name} (State: {pc_state})")
                        else:
                            st.write("No proposed changes found on this branch.")
                    except Exception as e:
                        st.write(f"Could not fetch proposed changes: {e}")

                    # Check what other objects exist on this branch
                    st.markdown("**Other objects on this branch:**")
                    try:
                        # Query for generic devices
                        device_query = """
                        query {
                          DcimDevice {
                            count
                            edges {
                              node {
                                id
                                name { value }
                                __typename
                              }
                            }
                          }
                        }
                        """
                        result = client.execute_graphql(device_query, branch=st.session_state.selected_branch)
                        device_count = result.get("DcimDevice", {}).get("count", 0)
                        st.write(f"- DcimDevice: {device_count} object(s)")

                        if device_count > 0:
                            devices = result.get("DcimDevice", {}).get("edges", [])
                            for device in devices[:5]:  # Show first 5
                                dev_name = device.get("node", {}).get("name", {}).get("value", "Unknown")
                                st.write(f"  - {dev_name}")
                    except Exception as e:
                        st.write(f"Error checking other objects: {e}")

    except InfrahubConnectionError as e:
        display_error("Unable to connect to Infrahub", str(e))
    except InfrahubHTTPError as e:
        display_error(
            f"HTTP Error {e.status_code} while fetching data centers",
            f"{str(e)}\n\nResponse: {e.response_text}",
        )
    except InfrahubGraphQLError as e:
        display_error("GraphQL Error while fetching data centers", str(e))
    except Exception as e:
        display_error("Unexpected error while fetching data centers", str(e))

    # Footer
    st.markdown("---")
    st.markdown(
        f"Connected to Infrahub at `{st.session_state.infrahub_url}` | "
        f"Branch: `{st.session_state.selected_branch}`"
    )


main()
