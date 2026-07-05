import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// Deployed as a GitHub Pages project site at
// https://wenhaoyu-bryan.github.io/AI-PM-Manifesto/
export default defineConfig({
  site: "https://wenhaoyu-bryan.github.io",
  base: "/AI-PM-Manifesto/",
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
