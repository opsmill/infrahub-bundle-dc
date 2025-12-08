import { useNavigate } from "react-router";

import type { PluginComponentProps, PluginManifest } from "@infrahub/plugin-sdk";

// Import the panel plugin
import QuickStatsPlugin, { manifest as quickStatsManifest } from "./panel-plugin";
// Import the dashboard plugin
import InterfaceRolesPlugin, { manifest as dashboardManifest } from "./dashboard-plugin";

/**
 * Plugin manifest - defines metadata about this plugin
 */
export const manifest: PluginManifest = {
  id: "example-device-info",
  name: "Device Visualization",
  kinds: ["DcimDevice"],
  position: "tab",
  tabLabel: "Visualization",
  icon: "mdi:server",
  priority: 10,
  query: {
    type: "inline",
    query: `
      query GetDeviceInfo($ids: [ID!]) {
        DcimDevice(ids: $ids) {
          edges {
            node {
              id
              display_label
              name { value }
              description { value }
              status { value }
              interfaces {
                count
                edges {
                  node {
                    id
                    display_label
                    name {
                      value
                    }
                    role {
                      value
                    }
                    status {
                      value
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
  },
};

// Color mapping for interface roles
const ROLE_COLORS: Record<string, { bg: string; border: string; text: string; label: string }> = {
  backbone: {
    bg: "bg-purple-100 hover:bg-purple-200",
    border: "border-purple-400",
    text: "text-purple-800",
    label: "Backbone",
  },
  upstream: {
    bg: "bg-blue-100 hover:bg-blue-200",
    border: "border-blue-400",
    text: "text-blue-800",
    label: "Upstream",
  },
  peering: {
    bg: "bg-green-100 hover:bg-green-200",
    border: "border-green-400",
    text: "text-green-800",
    label: "Peering",
  },
  peer: {
    bg: "bg-green-100 hover:bg-green-200",
    border: "border-green-400",
    text: "text-green-800",
    label: "Peer",
  },
  server: {
    bg: "bg-orange-100 hover:bg-orange-200",
    border: "border-orange-400",
    text: "text-orange-800",
    label: "Server",
  },
  spare: {
    bg: "bg-gray-100 hover:bg-gray-200",
    border: "border-gray-400",
    text: "text-gray-600",
    label: "Spare",
  },
  loopback: {
    bg: "bg-cyan-100 hover:bg-cyan-200",
    border: "border-cyan-400",
    text: "text-cyan-800",
    label: "Loopback",
  },
  management: {
    bg: "bg-yellow-100 hover:bg-yellow-200",
    border: "border-yellow-400",
    text: "text-yellow-800",
    label: "Management",
  },
  leaf: {
    bg: "bg-emerald-100 hover:bg-emerald-200",
    border: "border-emerald-400",
    text: "text-emerald-800",
    label: "Leaf",
  },
  default: {
    bg: "bg-slate-100 hover:bg-slate-200",
    border: "border-slate-400",
    text: "text-slate-700",
    label: "Unknown",
  },
};

interface InterfaceData {
  id: string;
  display_label: string;
  name: { value: string };
  role: { value: string } | null;
  status: { value: string } | null;
}

interface DeviceData {
  id: string;
  display_label: string;
  name: { value: string };
  description: { value: string } | null;
  status: { value: string } | null;
  interfaces: {
    count: number;
    edges: Array<{ node: InterfaceData }>;
  };
}

function getRoleColors(role: string | null | undefined) {
  if (!role) return ROLE_COLORS.default;
  const normalizedRole = role.toLowerCase();
  return ROLE_COLORS[normalizedRole] ?? ROLE_COLORS.default;
}

function InterfaceSlot({
  iface,
  onClick,
}: {
  iface: InterfaceData;
  onClick: () => void;
}) {
  const role = iface.role?.value;
  const colors = getRoleColors(role);
  const status = iface.status?.value?.toLowerCase();
  const isActive = status === "active" || status === "enabled";

  return (
    <button
      onClick={onClick}
      className={`
        relative group w-16 h-20 rounded-lg border-2 transition-all duration-200
        ${colors.bg} ${colors.border}
        ${!isActive ? "opacity-50" : ""}
        cursor-pointer shadow-sm hover:shadow-md hover:scale-105
        flex flex-col items-center justify-center p-1
      `}
      title={`${iface.name.value}${role ? ` (${role})` : ""}${status ? ` - ${status}` : ""}`}
    >
      {/* Port indicator */}
      <div
        className={`w-8 h-3 rounded-sm mb-1 ${isActive ? "bg-green-500" : "bg-gray-400"}`}
      />

      {/* Interface name */}
      <span className={`text-xs font-medium ${colors.text} truncate w-full text-center`}>
        {iface.name.value.replace(/^(Ethernet|eth|GigabitEthernet|Gi|xe-|et-)/, "")}
      </span>

      {/* Role badge */}
      {role && (
        <span
          className={`text-[9px] ${colors.text} opacity-75 truncate w-full text-center`}
        >
          {role}
        </span>
      )}

      {/* Hover tooltip */}
      <div
        className="
          absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1
          bg-gray-900 text-white text-xs rounded shadow-lg
          opacity-0 group-hover:opacity-100 transition-opacity
          pointer-events-none whitespace-nowrap z-10
        "
      >
        {iface.display_label || iface.name.value}
        {status && <span className="text-gray-400 ml-1">({status})</span>}
      </div>
    </button>
  );
}

function DeviceVisualization({
  device,
  onInterfaceClick,
}: {
  device: DeviceData;
  onInterfaceClick: (iface: InterfaceData) => void;
}) {
  const interfaces = device.interfaces.edges.map((e) => e.node);

  // Group interfaces by role for the legend
  const roleGroups = interfaces.reduce(
    (acc, iface) => {
      const role = iface.role?.value?.toLowerCase() ?? "default";
      if (!acc[role]) acc[role] = [];
      acc[role].push(iface);
      return acc;
    },
    {} as Record<string, InterfaceData[]>
  );

  return (
    <div className="space-y-6">
      {/* Device chassis */}
      <div className="">
        {/* Device front panel */}
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          {/* Device name plate */}
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-700">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <span className="text-black font-bold text-lg">
                {device.name.value}
              </span>
            </div>
            <div className="flex items-center gap-2">
              {device.status?.value && (
                <span
                  className={`px-2 py-0.5 rounded text-xs font-medium ${
                    device.status.value.toLowerCase() === "active"
                      ? "bg-green-600 text-white"
                      : "bg-yellow-600 text-white"
                  }`}
                >
                  {device.status.value}
                </span>
              )}
            </div>
          </div>

          {/* Interface grid */}
          {interfaces.length > 0 ? (
            <div className="flex flex-wrap gap-2 justify-center">
              {interfaces.map((iface) => (
                <InterfaceSlot
                  key={iface.id}
                  iface={iface}
                  onClick={() => onInterfaceClick(iface)}
                />
              ))}
            </div>
          ) : (
            <div className="text-gray-500 text-center py-8">
              No interfaces configured
            </div>
          )}
        </div>
      </div>

      {/* Legend */}
      {Object.keys(roleGroups).length > 0 && (
        <div className="bg-white rounded-lg border border-gray-200 p-4 mt-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-3">
            Interface Roles
          </h4>
          <div className="flex flex-wrap gap-3">
            {Object.entries(roleGroups).map(([role, ifaces]) => {
              const colors = getRoleColors(role);
              return (
                <div
                  key={role}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full border ${colors.bg} ${colors.border}`}
                >
                  <div className={`w-3 h-3 rounded-full ${colors.border} border-2`} />
                  <span className={`text-sm font-medium ${colors.text}`}>
                    {colors.label}
                  </span>
                  <span className={`text-xs ${colors.text} opacity-70`}>
                    ({ifaces.length})
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="bg-blue-50 rounded-lg p-4 text-center">
          <div className="text-3xl font-bold text-blue-600">
            {device.interfaces.count}
          </div>
          <div className="text-sm text-blue-700">Total Interfaces</div>
        </div>
        <div className="bg-green-50 rounded-lg p-4 text-center">
          <div className="text-3xl font-bold text-green-600">
            {interfaces.filter((i) => {
              const s = i.status?.value?.toLowerCase();
              return s === "active" || s === "enabled";
            }).length}
          </div>
          <div className="text-sm text-green-700">Active</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <div className="text-3xl font-bold text-gray-600">
            {interfaces.filter((i) => {
              const s = i.status?.value?.toLowerCase();
              return s !== "active" && s !== "enabled";
            }).length}
          </div>
          <div className="text-sm text-gray-700">Inactive</div>
        </div>
      </div>
    </div>
  );
}

/**
 * Plugin component - renders an interactive device visualization
 */
export default function DeviceInfoPlugin({
  queryData,
  isQueryLoading,
  queryError,
}: PluginComponentProps) {
  const navigate = useNavigate();

  if (isQueryLoading) {
    return (
      <div className="flex items-center justify-center p-12">
        <div className="flex flex-col items-center gap-3">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500" />
          <span className="text-gray-500 text-sm">Loading device data...</span>
        </div>
      </div>
    );
  }

  if (queryError) {
    return (
      <div className="p-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h4 className="text-red-800 font-medium mb-1">Error loading device</h4>
          <p className="text-red-600 text-sm">{queryError.message}</p>
        </div>
      </div>
    );
  }

  // Extract device data from query response
  const deviceResponse = queryData as {
    DcimDevice?: {
      edges?: Array<{ node: DeviceData }>;
    };
  };
  const device = deviceResponse?.DcimDevice?.edges?.[0]?.node;

  if (!device) {
    return (
      <div className="p-6">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-yellow-700">No device data available</p>
        </div>
      </div>
    );
  }

  const handleInterfaceClick = (iface: InterfaceData) => {
    // Navigate to the interface detail page
    navigate(`/objects/DcimInterface/${iface.id}`);
  };

  return (
    <div className="p-6">
      <DeviceVisualization device={device} onInterfaceClick={handleInterfaceClick} />
    </div>
  );
}

/**
 * Export multiple plugins from this package
 * The Vite plugin will detect this array and register all plugins
 */
export const plugins = [
  { manifest, component: DeviceInfoPlugin },
  { manifest: quickStatsManifest, component: QuickStatsPlugin },
  { manifest: dashboardManifest, component: InterfaceRolesPlugin },
];
