import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@layouts": path.resolve(__dirname, "src/layouts"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@icons": path.resolve(__dirname, "src/assets/icons"),
      "@store": path.resolve(__dirname, "src/store"),
      "@styled": path.resolve(__dirname, "src/styled"),
      "@types": path.resolve(__dirname, "src/types"),
      "@utils": path.resolve(__dirname, "src/utils"),
    },
  },
});
