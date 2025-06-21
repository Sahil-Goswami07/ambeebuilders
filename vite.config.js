import { defineConfig } from 'vite'
import path from "path"
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// const fluidPlugin = require('fluid-tailwind/plugin');
// import fluid from 'fluid-tailwind/plugin';

// https://vite.dev/config/
export default defineConfig({
   server: {
    host: '0.0.0.0',
    port: 5173
  },
  plugins: [react(), tailwindcss(), ],
   resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
