import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: "https://course-api.com/react-useReducer-cart-project",
  },

  plugins: [react()],
});
