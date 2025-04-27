import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/commands/*.ts"],
  outDir: "dist",
  format: ["esm"],
  target: "node18", // or node18 depending on your target
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: false,
  banner: {
    js: "#!/usr/bin/env node",
  },
  skipNodeModulesBundle: true,
});
