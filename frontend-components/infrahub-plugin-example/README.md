# @infrahub/plugin-example

Example Infrahub UI plugin demonstrating the plugin system.

## What This Plugin Does

This example plugin adds:

- **Device Visualization Tab** - An interactive visualization of network device interfaces
- **Quick Stats Panel** - A sidebar panel showing attribute/relationship counts

Both appear on `InfraDevice` object detail pages.

## Building the Plugin

```bash
cd frontend/packages/infrahub-plugin-example
npm install
npm run build
```

This creates `dist/index.js` - a standalone bundle ready for runtime loading.

## Installing in Infrahub (Runtime Loading)

### Option 1: Docker Volume Mount (Recommended)

1. Build the plugin:

   ```bash
   npm run build
   ```

2. Create a plugins directory on your host:

   ```bash
   mkdir -p ~/infrahub-plugins/example-device
   cp dist/index.js ~/infrahub-plugins/example-device/
   ```

3. Create `~/infrahub-plugins/plugins.json`:

   ```json
   {
     "plugins": [
       { "id": "example-device", "enabled": true }
     ]
   }
   ```

4. Mount when running Infrahub:

   ```bash
   docker run -v ~/infrahub-plugins:/usr/share/nginx/html/plugins infrahub
   ```

### Option 2: Copy to Container

```bash
# Build the plugin
npm run build

# Create directory and copy files
docker exec infrahub mkdir -p /usr/share/nginx/html/plugins/example-device
docker cp dist/index.js infrahub:/usr/share/nginx/html/plugins/example-device/

# Create plugins.json
echo '{"plugins":[{"id":"example-device","enabled":true}]}' | \
  docker exec -i infrahub tee /usr/share/nginx/html/plugins/plugins.json
```

## Directory Structure

```
/usr/share/nginx/html/plugins/
├── plugins.json              # Config listing enabled plugins
├── example-device/
│   └── index.js              # This plugin's bundle
└── another-plugin/
    └── index.js
```

## plugins.json Format

```json
{
  "plugins": [
    {
      "id": "example-device",
      "enabled": true,
      "overrides": {
        "priority": 100
      }
    }
  ]
}
```

## Creating Your Own Plugin

1. Create a new directory for your plugin

2. Initialize and install dependencies:

   ```bash
   npm init
   npm install @infrahub/plugin-sdk
   npm install -D vite @vitejs/plugin-react typescript @types/react
   ```

3. Copy `vite.config.ts` from this example (update the `name` field)

4. Create your plugin component:

   ```tsx
   // src/index.tsx
   import type { PluginComponentProps, PluginManifest } from "@infrahub/plugin-sdk";

   export const manifest: PluginManifest = {
     id: "my-plugin",
     name: "My Plugin",
     kinds: ["InfraDevice"],  // Which object types to show on
     position: "panel",        // "tab" | "panel" | "page"
     panelTitle: "My Panel",
     icon: "mdi:chart-bar",
   };

   export default function MyPlugin({ object, schema, objectData }: PluginComponentProps) {
     return <div>Hello from {object.displayLabel}!</div>;
   }
   ```

5. Build and install:

   ```bash
   npm run build
   # Then copy dist/index.js to plugins directory
   ```

## Plugin Positions

| Position | Description |
|----------|-------------|
| `tab`    | New tab on object details page |
| `panel`  | Sidebar panel on details page |
| `page`   | Replaces entire detail view |

## Props Available to Plugins

```typescript
interface PluginComponentProps {
  object: {
    id: string;
    displayLabel: string;
    kind: string;
  };
  schema: ModelSchema;           // Full schema definition
  objectData?: unknown;          // All object attributes/relationships
  queryData?: unknown;           // Data from custom GraphQL query
  isQueryLoading?: boolean;
  queryError?: Error;
  refetchQuery?: () => void;
}
```

## Custom GraphQL Queries

Plugins can define custom queries in their manifest:

```typescript
export const manifest: PluginManifest = {
  // ...
  query: {
    type: "inline",
    query: `
      query GetData($ids: [ID!]) {
        InfraDevice(ids: $ids) {
          edges {
            node {
              id
              interfaces { count }
            }
          }
        }
      }
    `,
  },
};
```

The query result is passed to your component as `queryData`.

You can also reference a saved `CoreGraphQLQuery`:

```typescript
query: {
  type: "saved",
  name: "MyDeviceMetricsQuery",
}
```

## Multiple Plugins Per Package

Export a `plugins` array to bundle multiple plugins:

```tsx
export const plugins = [
  { manifest: tabManifest, component: TabPlugin },
  { manifest: panelManifest, component: PanelPlugin },
];
```
