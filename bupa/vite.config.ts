import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "aaa",
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
});
