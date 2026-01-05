import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig((options) => {
  let base = "/";

  if (options.mode === "production") {
    base = "/todotodo";
  }

  return {
    plugins: [vue()],
    base: base,
  };
});
