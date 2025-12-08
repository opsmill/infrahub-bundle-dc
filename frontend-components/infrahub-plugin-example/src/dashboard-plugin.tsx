import type { DashboardPluginProps, PluginManifest } from "@infrahub/plugin-sdk";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie,
  Legend,
} from "recharts";

/**
 * Dashboard plugin manifest - shows interface roles breakdown
 */
export const manifest: PluginManifest = {
  id: "interface-roles-chart",
  name: "Interface Roles",
  kinds: [], // Empty for dashboard plugins
  position: "dashboard",
  panelTitle: "Interfaces by Role",
  icon: "mdi:chart-bar",
  priority: 10,
  dashboardSize: {
    colSpan: 2,
    rowSpan: 2,
  },
  query: {
    type: "inline",
    query: `
      query {
        DcimInterface {
          edges {
            node {
              __typename
              role {
                value
              }
            }
          }
        }
      }
    `,
  },
};

interface InterfaceNode {
  __typename: string;
  role: { value: string } | null;
}

interface QueryData {
  DcimInterface?: {
    edges: Array<{ node: InterfaceNode }>;
  };
}

// Color palette for roles (hex colors for recharts)
const ROLE_COLORS: Record<string, string> = {
  backbone: "#8b5cf6",    // purple
  upstream: "#3b82f6",    // blue
  peering: "#22c55e",     // green
  peer: "#10b981",        // emerald
  server: "#f97316",      // orange
  spare: "#9ca3af",       // gray
  loopback: "#06b6d4",    // cyan
  management: "#eab308",  // yellow
  leaf: "#14b8a6",        // teal
  unassigned: "#64748b",  // slate
  default: "#64748b",     // slate
};

function getColorForRole(role: string): string {
  return ROLE_COLORS[role.toLowerCase()] ?? ROLE_COLORS.default;
}

/**
 * Dashboard plugin component - shows interface roles as charts using recharts
 */
export default function InterfaceRolesPlugin({
  queryData,
  isQueryLoading,
  queryError,
}: DashboardPluginProps) {
  if (isQueryLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" />
      </div>
    );
  }

  if (queryError) {
    return (
      <div className="p-4">
        <div className="bg-red-50 border border-red-200 rounded-lg p-3">
          <p className="text-red-600 text-sm">{queryError.message}</p>
        </div>
      </div>
    );
  }

  const data = queryData as QueryData | undefined;
  const interfaces = data?.DcimInterface?.edges ?? [];

  // Count interfaces by role
  const roleCounts = interfaces.reduce(
    (acc, { node }) => {
      const role = node.role?.value ?? "Unassigned";
      acc[role] = (acc[role] ?? 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  // Convert to chart data and sort by count descending
  const chartData = Object.entries(roleCounts)
    .map(([name, value]) => ({
      name,
      value,
      fill: getColorForRole(name),
    }))
    .sort((a, b) => b.value - a.value);

  const totalInterfaces = interfaces.length;

  if (chartData.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-gray-500">
        No interface data available
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col gap-2">
      {/* Header with total */}
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">
          {totalInterfaces} total interface{totalInterfaces !== 1 ? "s" : ""}
        </span>
        <span className="text-sm text-gray-500">
          {chartData.length} role{chartData.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Charts side by side */}
      <div className="flex-1 flex gap-4 min-h-0">
        {/* Bar Chart */}
        <div className="flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} layout="vertical" margin={{ left: 0, right: 20 }}>
              <XAxis type="number" hide />
              <YAxis
                type="category"
                dataKey="name"
                width={80}
                tick={{ fontSize: 11 }}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip
                formatter={(value: number) => [value, "Interfaces"]}
                contentStyle={{ fontSize: 12 }}
              />
              <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                {chartData.map((entry) => (
                  <Cell key={entry.name} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="w-40">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={25}
                outerRadius={50}
                paddingAngle={2}
              >
                {chartData.map((entry) => (
                  <Cell key={entry.name} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: number, name: string) => [value, name]}
                contentStyle={{ fontSize: 12 }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
