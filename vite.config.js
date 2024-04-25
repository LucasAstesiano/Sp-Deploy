import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    outDir:'dist'
  },
  plugins: [react()],
  base:'https://LucasAstesiano.github.io/sp-deploy/'
})
