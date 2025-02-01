import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  builds: [
    {
      src: "vite.config.js",
      use: "@vercel/static-build",
      config: { distDir: "dist" },
    },
  ],
});
