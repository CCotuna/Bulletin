import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.VITE_NEWS_API_KEY": JSON.stringify(process.env.VITE_NEWS_API_KEY),
  },
});