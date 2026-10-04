import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'

const config = defineConfig({
  base: './', // ✅ Caminhos relativos — essencial para funcionar
  plugins: [
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
    // ❌ REMOVIDO: plugin do Netlify — não funciona na Hostinger
  ],
  build: {
    outDir: 'dist', // ✅ Pasta de saída = dist (igual na Hostinger)
    emptyOutDir: true,
  },
  ssr: {
    noExternal: true, // ✅ Ajuda a empacotar tudo para hospedagem estática
  },
})

export default config