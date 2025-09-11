import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    watch: {
      usePolling: true, // Useful if file changes aren’t detected
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // for cleaner imports
    },
  },
})


