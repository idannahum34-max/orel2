import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
// Removed sourceIdentifierPlugin

export default defineConfig({
  plugins: [
    react(),

  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
