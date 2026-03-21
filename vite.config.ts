import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    // Ensure sitemap.xml and robots.txt are served correctly in dev mode
    staticDir: ["public"],
  },
  build: {
    // Ensure public assets are copied to dist
    copyPublicDir: true,
  },
});
