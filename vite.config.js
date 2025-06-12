import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Sustituye 'mi-app-react' por el nombre de tu repo tal cual en GitHub
export default defineConfig({
  base: '/PRACTICA-FINAL/',
  plugins: [react()],
})
