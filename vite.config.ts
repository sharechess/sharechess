import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
  plugins: [
    solidPlugin(),
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
  ],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
});
