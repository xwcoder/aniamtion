import * as path from 'path'
import { defineConfig } from 'vite'
import windiCSS from 'vite-plugin-windicss'

export default defineConfig({
  plugins: [
    windiCSS(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
