import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
// eslint-disable-next-line import/default
import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    eslintPlugin({
      exclude: ["/virtual:/", "/node_modules/"],
    }),
    react(),
  ],
});
