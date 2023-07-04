import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: 'club.enigma.code'
    },
  resolve: {
    alias: [
        { find: '@', replacement: path.resolve(__dirname, 'src') },
        { find: '@pages', replacement: path.resolve(__dirname, './src/pages') },
        { find: '@styles', replacement: path.resolve(__dirname, './src/styles') },
        { find: '@theme', replacement: path.resolve(__dirname, './src/theme') },
        { find: '@components', replacement: path.resolve(__dirname, './src/components') },
        { find: '@layout', replacement: path.resolve(__dirname, './src/layout') },
        { find: '@router', replacement: path.resolve(__dirname, './src/router') },
    ],
},
})
