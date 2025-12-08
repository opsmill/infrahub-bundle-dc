#!/bin/bash

# Infrahub Plugin Scaffolding Script
# Usage: ./create-plugin.sh <plugin-name>

set -e

PLUGIN_NAME=$1

if [ -z "$PLUGIN_NAME" ]; then
  echo "Usage: ./create-plugin.sh <plugin-name>"
  echo "Example: ./create-plugin.sh my-custom-widget"
  exit 1
fi

# Convert to valid package name (lowercase, hyphens)
PACKAGE_NAME=$(echo "$PLUGIN_NAME" | tr '[:upper:]' '[:lower:]' | tr '_' '-')
DIR_NAME="infrahub-plugin-$PACKAGE_NAME"

if [ -d "$DIR_NAME" ]; then
  echo "Error: Directory $DIR_NAME already exists"
  exit 1
fi

echo "Creating Infrahub plugin: $PLUGIN_NAME"
echo "Directory: $DIR_NAME"
echo ""

# Create directory structure
mkdir -p "$DIR_NAME/src"
mkdir -p "$DIR_NAME/dev"

# Create package.json
cat > "$DIR_NAME/package.json" << EOF
{
  "name": "@infrahub/plugin-$PACKAGE_NAME",
  "version": "0.1.0",
  "description": "Infrahub UI plugin: $PLUGIN_NAME",
  "type": "module",
  "main": "dist/index.js",
  "types": "src/index.tsx",
  "exports": {
    ".": {
      "import": "./dist/index.js",
      "types": "./src/index.tsx"
    }
  },
  "scripts": {
    "build": "vite build",
    "dev": "vite build --watch",
    "preview": "vite build && npx serve dev -p 3333"
  },
  "dependencies": {
    "@infrahub/plugin-sdk": "file:/home/infrahub/dev/infrahub/frontend/packages/infrahub-plugin-sdk"
  },
  "peerDependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-router": "^7.0.0"
  },
  "devDependencies": {
    "@types/react": "^19.0.0",
    "@vitejs/plugin-react": "^4.3.0",
    "typescript": "^5.9.0",
    "vite": "^6.0.0"
  },
  "license": "Apache-2.0"
}
EOF

# Create tsconfig.json
cat > "$DIR_NAME/tsconfig.json" << 'EOF'
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}
EOF

# Create vite.config.ts
cat > "$DIR_NAME/vite.config.ts" << EOF
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { infrahubPluginWrapper, createPluginConfig } from "@infrahub/plugin-sdk/vite";

export default defineConfig({
  plugins: [react(), infrahubPluginWrapper()],
  ...createPluginConfig({
    name: "$PACKAGE_NAME",
    outDir: "../built",
  }),
});
EOF

# Create .gitignore
cat > "$DIR_NAME/.gitignore" << 'EOF'
node_modules/
dist/
*.log
.DS_Store
EOF

# Create main plugin file
cat > "$DIR_NAME/src/index.tsx" << EOF
import type { PluginComponentProps, PluginManifest } from "@infrahub/plugin-sdk";

/**
 * Plugin manifest - defines where and how the plugin appears
 */
export const manifest: PluginManifest = {
  id: "$PACKAGE_NAME",
  name: "$PLUGIN_NAME",
  kinds: ["DcimDevice"], // Change to your target object types
  position: "panel",     // "tab" | "panel" | "dashboard"
  panelTitle: "$PLUGIN_NAME",
  icon: "mdi:puzzle",
  priority: 10,
};

/**
 * Plugin component
 */
export default function ${PLUGIN_NAME//-/}Plugin({
  object,
  schema,
  objectData,
  queryData,
  isQueryLoading,
  queryError,
}: PluginComponentProps) {
  if (isQueryLoading) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500" />
      </div>
    );
  }

  if (queryError) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded text-red-600 text-sm">
        {queryError.message}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="text-sm text-gray-500">
        Object: <span className="font-medium text-gray-900">{object?.displayLabel}</span>
      </div>
      <div className="text-sm text-gray-500">
        Kind: <span className="font-medium text-gray-900">{object?.kind}</span>
      </div>
      <div className="text-sm text-gray-500">
        Attributes: <span className="font-medium text-gray-900">{schema?.attributes?.length ?? 0}</span>
      </div>
      <div className="text-sm text-gray-500">
        Relationships: <span className="font-medium text-gray-900">{schema?.relationships?.length ?? 0}</span>
      </div>
    </div>
  );
}

// Export for plugin registration
export const plugins = [{ manifest, component: ${PLUGIN_NAME//-/}Plugin }];
EOF

# Create dev preview HTML
cat > "$DIR_NAME/dev/index.html" << EOF
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>$PLUGIN_NAME - Plugin Preview</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 p-8">
  <div class="max-w-2xl mx-auto">
    <h1 class="text-2xl font-bold mb-4">$PLUGIN_NAME Preview</h1>

    <div class="bg-white rounded-lg shadow-md overflow-hidden">
      <div class="border-b border-gray-200 p-3 font-bold">$PLUGIN_NAME</div>
      <div class="p-4">
        <div id="plugin-root"></div>
      </div>
    </div>
  </div>

  <script src="https://unpkg.com/react@19/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@19/umd/react-dom.development.js"></script>

  <script>
    window.InfrahubRuntime = {
      React: React,
      ReactDOM: ReactDOM,
      jsxRuntime: { jsx: React.createElement, jsxs: React.createElement, Fragment: React.Fragment },
      ReactRouter: {
        useNavigate: () => (path) => console.log('Navigate:', path),
        useLocation: () => ({ pathname: '/' }),
        useParams: () => ({}),
        Link: (props) => React.createElement('a', { href: props.to, ...props }),
      },
    };
    window.InfrahubPlugins = {};

    const mockProps = {
      object: { id: '123', displayLabel: 'test-object', kind: 'DcimDevice' },
      schema: {
        id: 's1', name: 'DcimDevice', namespace: 'Dcim',
        attributes: [{ id: 'a1', name: 'name', kind: 'Text' }],
        relationships: [{ id: 'r1', name: 'interfaces', peer: 'DcimInterface', kind: 'Generic', cardinality: 'many' }],
      },
      objectData: { name: { value: 'test-object' } },
    };
  </script>

  <script src="../built/$PACKAGE_NAME/index.js"></script>

  <script>
    setTimeout(() => {
      const plugin = window.InfrahubPlugins['$PACKAGE_NAME'];
      if (plugin) {
        ReactDOM.createRoot(document.getElementById('plugin-root'))
          .render(React.createElement(plugin.component, mockProps));
      } else {
        document.getElementById('plugin-root').innerHTML =
          '<p class="text-red-500">Plugin not found. Run npm run build first.</p>';
      }
    }, 100);
  </script>
</body>
</html>
EOF

# Create README
cat > "$DIR_NAME/README.md" << EOF
# $PLUGIN_NAME

Infrahub UI plugin.

## Development

\`\`\`bash
# Install dependencies
npm install

# Build the plugin
npm run build

# Preview locally
npm run preview
# Open http://localhost:3333

# Watch mode (rebuild on changes)
npm run dev
\`\`\`

## Configuration

Edit \`src/index.tsx\` to customize:

- \`manifest.kinds\` - Object types this plugin applies to
- \`manifest.position\` - Where to display: \`"tab"\`, \`"panel"\`, or \`"dashboard"\`
- \`manifest.query\` - Optional GraphQL query for custom data

## Deploy to Infrahub

1. Build: \`npm run build\`
2. Add to \`plugins.json\`:
   \`\`\`json
   { "plugins": [{ "id": "$PACKAGE_NAME", "enabled": true }] }
   \`\`\`
3. Mount in Docker or copy to Infrahub's plugin directory
EOF

echo ""
echo "✓ Plugin created successfully!"
echo ""
echo "Next steps:"
echo "  cd $DIR_NAME"
echo "  npm install"
echo "  npm run build"
echo "  npm run preview   # Open http://localhost:3333"
echo ""
