import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/fem_024_time-tracking-dashboard",
  plugins: [react()],
})
