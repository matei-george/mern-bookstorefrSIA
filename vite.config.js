// frontend/vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
   plugins: [react()],

   // 💡 SECȚIUNEA NOUĂ PENTRU REZOLVAREA DEPENDENȚELOR
   optimizeDeps: {
      // Forțează Vite să includă 'react-icons' în pre-bundle.
      // Acest lucru ajută Rollup să le găsească în faza de build.
      include: ["react-icons"],
   },
   // ----------------------------------------------------

   test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./src/test/setup.js",
      environmentOptions: {
         jsdom: {
            resources: "usable",
         },
      },
   },
});
