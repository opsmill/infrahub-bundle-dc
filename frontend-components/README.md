# Infrahub Frontend Plugins

This directory contains custom UI plugins for Infrahub.

## Quick Start

```bash
cd infrahub-plugin-example

# Install dependencies
npm install

# Build the plugin
npm run build

# Preview locally (without Infrahub)
npm run build && npx serve dev -p 3333
# Open http://localhost:3333
```

## Project Structure

```
frontend-components/
├── built/                      # Compiled plugins (mounted into Infrahub)
│   ├── plugins.json            # Plugin registry
│   └── example-device/
│       └── index.js            # Compiled plugin bundle
├── infrahub-plugin-example/    # Example plugin source
│   ├── src/
│   │   ├── index.tsx           # Main entry, exports all plugins
│   │   ├── panel-plugin.tsx    # Panel plugin (sidebar widget)
│   │   └── dashboard-plugin.tsx # Dashboard plugin (homepage widget)
│   ├── dev/
│   │   └── index.html          # Local preview page
│   ├── vite.config.ts          # Build configuration
│   └── package.json
└── README.md
```

## Creating a Plugin

### 1. Plugin Manifest

Every plugin needs a manifest defining where and how it appears:

```typescript
import type { PluginManifest } from "@infrahub/plugin-sdk";

export const manifest: PluginManifest = {
  id: "my-plugin",              // Unique identifier
  name: "My Plugin",            // Display name
  kinds: ["DcimDevice"],        // Object types (empty [] for dashboard)
  position: "tab",              // "tab" | "panel" | "dashboard"

  // Position-specific options
  tabLabel: "My Tab",           // For tabs
  panelTitle: "My Panel",       // For panels/dashboard
  icon: "mdi:chart-bar",        // Iconify icon name
  priority: 10,                 // Higher = appears first

  // Dashboard size (only for dashboard plugins)
  dashboardSize: {
    colSpan: 2,                 // 1-3 columns
    rowSpan: 2,                 // 1-4 rows
  },

  // Optional GraphQL query
  query: {
    type: "inline",
    query: `
      query GetData($ids: [ID!]) {
        DcimDevice(ids: $ids) {
          edges { node { id name { value } } }
        }
      }
    `,
  },
};
```

### 2. Plugin Component

```typescript
import type { PluginComponentProps, DashboardPluginProps } from "@infrahub/plugin-sdk";

// For tab/panel plugins (have object context)
export default function MyPlugin({
  object,        // { id, displayLabel, kind }
  schema,        // Object schema
  objectData,    // Full object data
  queryData,     // Custom query results
  isQueryLoading,
  queryError,
  refetchQuery,
}: PluginComponentProps) {
  return <div>Plugin content</div>;
}

// For dashboard plugins (no object context)
export default function MyDashboardPlugin({
  queryData,
  isQueryLoading,
  queryError,
  refetchQuery,
}: DashboardPluginProps) {
  return <div>Dashboard widget</div>;
}
```

### 3. Export Plugins

```typescript
// src/index.tsx
import MyPlugin, { manifest } from "./my-plugin";
import AnotherPlugin, { manifest as anotherManifest } from "./another-plugin";

// Export multiple plugins from one package
export const plugins = [
  { manifest, component: MyPlugin },
  { manifest: anotherManifest, component: AnotherPlugin },
];

// Required for single plugin packages
export { manifest };
export default MyPlugin;
```

## Plugin Types

### Tab Plugin

Appears as a tab in object detail views.

```typescript
const manifest: PluginManifest = {
  id: "device-visualization",
  name: "Visualization",
  kinds: ["DcimDevice"],
  position: "tab",
  tabLabel: "Visualize",
  icon: "mdi:server",
};
```

### Panel Plugin

Appears in the sidebar of object detail views.

```typescript
const manifest: PluginManifest = {
  id: "quick-stats",
  name: "Quick Stats",
  kinds: ["DcimDevice"],
  position: "panel",
  panelTitle: "Statistics",
  icon: "mdi:chart-box",
};
```

### Dashboard Plugin

Appears on the homepage dashboard.

```typescript
const manifest: PluginManifest = {
  id: "interface-chart",
  name: "Interface Roles",
  kinds: [],  // Empty for dashboard
  position: "dashboard",
  panelTitle: "Interfaces by Role",
  icon: "mdi:chart-bar",
  dashboardSize: {
    colSpan: 2,
    rowSpan: 2,
  },
};
```

## Build Configuration

The `vite.config.ts` uses the SDK helpers:

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { infrahubPluginWrapper, createPluginConfig } from "@infrahub/plugin-sdk/vite";

export default defineConfig({
  plugins: [react(), infrahubPluginWrapper()],
  ...createPluginConfig({
    name: "example-device",    // Output: built/example-device/index.js
    outDir: "../built",        // Parent directory
  }),
});
```

### Config Options

| Option | Default | Description |
|--------|---------|-------------|
| `entry` | `"src/index.tsx"` | Entry file |
| `name` | - | Plugin name (creates subdirectory) |
| `outDir` | `"dist"` | Output directory |
| `fileName` | `"index.js"` | Output filename |
| `minify` | `false` | Enable minification |
| `sourcemap` | `true` | Generate sourcemaps |
| `external` | `[]` | Additional externals |
| `globals` | `{}` | Additional global mappings |

## Using External Libraries

### Bundled (e.g., recharts)

Install and import normally - it will be bundled:

```bash
npm install recharts
```

```typescript
import { BarChart, Bar, XAxis, YAxis } from "recharts";
```

Note: This increases bundle size.

### From Infrahub Runtime

React and React Router are provided by Infrahub - don't bundle them:

```typescript
// These are automatically externalized
import { useState } from "react";
import { useNavigate } from "react-router";
```

## Local Development

### Preview Without Infrahub

```bash
# Build and serve preview
npm run build
npx serve dev -p 3333

# Or with Python
cd dev && python3 -m http.server 3333
```

Open http://localhost:3333 to see your plugins with mock data.

### Watch Mode

```bash
# Terminal 1: Rebuild on changes
npm run dev

# Terminal 2: Serve preview
npx serve dev -p 3333
```

### Edit Mock Data

Edit `dev/index.html` to customize the mock data for testing.

## Deploying to Infrahub

### 1. Build the Plugin

```bash
npm run build
```

### 2. Configure plugins.json

```json
{
  "plugins": [
    {
      "id": "example-device",
      "enabled": true
    }
  ]
}
```

### 3. Mount in Docker

Add to `docker-compose.override.yml`:

```yaml
services:
  infrahub-server:
    volumes:
      - ./frontend-components/built:/opt/infrahub/frontend/app/dist/assets/plugins:ro
```

### 4. Restart Infrahub

```bash
docker compose restart infrahub-server
```

## Troubleshooting

### Plugin not loading

1. Check browser console for errors
2. Verify `plugins.json` has correct plugin ID
3. Ensure the built JS file exists
4. Check Docker volume mounts

### "InfrahubRuntime not found"

The plugin loaded before the main app. This shouldn't happen in production but may occur in local preview if the mock runtime isn't set up.

### Styles not applying

Plugins use Tailwind CSS classes from the main app. Available classes depend on what's included in Infrahub's Tailwind config.

### Query errors

1. Test your GraphQL query in Infrahub's GraphQL sandbox first
2. Check that field names match your schema
3. Verify the query variables (`$ids` for object context)
