import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import process from "process";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 3000,
    proxy: {
      "/api": process.env.BACKEND_SOURCE + ":" + process.env.BACKEND_PORT,
    },
  },
  build: {
    outDir: "build",
  },
})
