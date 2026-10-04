import { createFileRoute } from '@tanstack/react-router'
import { sectionPages, services, siteUrl } from '@/lib/site'

export const Route = createFileRoute('/sitemap.xml')({
  server: {
    handlers: {
      GET: () => {
        const paths = ['/', ...sectionPages.map(page => page.path), ...services.map(service => `/servicos/${service.slug}`), '/guia/instalacao-ar-condicionado', '/privacidade']
        const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(path => `<url><loc>${siteUrl}${path}</loc></url>`).join('')}</urlset>`
        return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8', 'Cache-Control': 'public, max-age=3600' } })
      },
    },
  },
})
