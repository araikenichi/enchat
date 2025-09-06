import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages (プロジェクトサイト) 用に必須: /<repo名>/
export default defineConfig({
  plugins: [react()],
  base: '/enchat/',
})
