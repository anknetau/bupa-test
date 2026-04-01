import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path, { resolve } from "path";
import fs from "fs";

export default defineConfig({
  plugins: [
    react(),
    reactRouter(),
    {
      name: "simple mock server",
      configureServer(server) {
        server.middlewares.use("/api/v1/bookowners", (_, res) => {
          const filePath = path.resolve(
            __dirname,
            "src/api/sample_response.json",
          );
          const data = fs.readFileSync(filePath, "utf-8");

          res.setHeader("Content-Type", "application/json");
          res.end(data);
        });
      },
    },
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
