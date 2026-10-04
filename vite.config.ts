import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import { siteUrl } from './src/lib/site-config'

export default defineConfig({
  base: '/',
  plugins: [
    viteTsConfigPaths({ projects: ['./tsconfig.json'] }),
    tailwindcss(),
    tanstackStart({
      pages: [{ path: '/' }, { path: '/servicos/', sitemap: { exclude: true } }],
      prerender: {
        enabled: true,
        crawlLinks: true,
        autoSubfolderIndex: true,
        failOnError: true,
      },
      sitemap: {
        enabled: true,
        host: siteUrl,
      },
    }),
    viteReact(),
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
