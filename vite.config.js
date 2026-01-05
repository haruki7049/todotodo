import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig((command, mode, isSsrBuild, isPreview) => {
  let base = "/";

  if (command === "build") {
    base = "/todotodo";
  }

  return {
    plugins: [vue()],
    base: base,
  };
});
