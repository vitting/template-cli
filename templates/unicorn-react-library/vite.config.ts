/// <reference types="unplugin-fonts/client" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import stylexPlugin from "@stylexjs/rollup-plugin";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    stylexPlugin({
      fileName: "css/stylex.css",
    }),
    dts({ include: ["lib"], exclude: ["lib/styles/variables.stylex.ts"] }),
    viteStaticCopy({
      targets: [
        {
          src: "lib/styles/variables.stylex.ts",
          dest: ".",
        },
      ],
    }),
  ],
  build: {
    copyPublicDir: false,
    // cssCodeSplit: false,
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      formats: ["es"],
      fileName: (format, name) => `${name}.mjs`,
      // fileName: (format, name) => `${name}.${format}.js`,
    },
    sourcemap: true,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name == "style.css") return "css/style.css";
          return assetInfo.name;
        },
      },
      external: ["react", "react-dom", "@stylexjs/stylex"],
    },
  },
});
