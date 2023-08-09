import solid from "solid-start/vite";
import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";

export default defineConfig({
  server: { https: true, host: "127.0.0.1", port: 3000 },
  plugins: [
    mkcert(),
    solid({
      ssr: true,
    }),
  ]
});
