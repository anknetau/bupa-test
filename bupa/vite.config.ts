import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "aaa",
      configureServer(server) {
        server.middlewares.use("/api/test", (_, res) => {
          res.setHeader("Content-Type", "application/json");
          res.end(
            JSON.stringify({
              id: "1",
              name: "Jane",
            }),
          );
        });
      },
    },
  ],
});
