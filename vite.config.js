import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: "src/index.js",
      name: "VueGlow",
      fileName: "vue-glow",
      formats: ["umd"],
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: { vue: "Vue" },
      },
    },
  },
});
