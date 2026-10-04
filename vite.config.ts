import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import { siteUrl } from './src/lib/site-config'
import { sectionPages, services } from './src/lib/site'

export default defineConfig({
  base: '/',
  plugins: [
    viteTsConfigPaths({ projects: ['./tsconfig.json'] }),
    tailwindcss(),
    tanstackStart({
      pages: [
        { path: '/' },
        ...sectionPages.map(({ path }) => ({ path })),
        ...services.map(({ slug }) => ({ path: `/servicos/${slug}` })),
        { path: '/guia/instalacao-ar-condicionado' },
        { path: '/privacidade' },
      ],
      prerender: {
        enabled: true,
        crawlLinks: false,
        autoSubfolderIndex: true,
        concurrency: 1,
        retryCount: 1,
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
