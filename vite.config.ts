import { resolve } from "node:path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  root: "src",
  plugins: [react()],
  publicDir: resolve(__dirname, "public"),
  build: {
    // distフォルダに出力
    outDir: resolve(__dirname, "dist"),
    // 存在しないときはフォルダを作成する
    emptyOutDir: true,
    copyPublicDir: true,
    rollupOptions: {
      // entry pointがあるindex.htmlのパス
      input: {
        "": resolve(__dirname, "src/index.html"),
      },
      // bundle.jsを差し替えする
      output: {
        entryFileNames: "assets/bundle.js",
      },
    },
  },
});