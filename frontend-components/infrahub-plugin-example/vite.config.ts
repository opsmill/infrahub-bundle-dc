import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { infrahubPluginWrapper, createPluginConfig } from "@infrahub/plugin-sdk/vite";

/**
 * Vite config for building Infrahub plugins as standalone bundles.
 */
export default defineConfig({
  plugins: [react(), infrahubPluginWrapper()],
  ...createPluginConfig({
    name: "example-device",
    outDir: "../built",
  }),
});

