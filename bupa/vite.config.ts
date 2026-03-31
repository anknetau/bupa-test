import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { mockDevServerPlugin } from "vite-plugin-mock-dev-server";

// Installed https://vite-plugin-mock-dev-server.netlify.app/guide/usage

export default defineConfig({
  plugins: [react(), mockDevServerPlugin()],
});
