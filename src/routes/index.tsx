import { createFileRoute } from '@tanstack/react-router'
import { HomePage } from '@/components/HomePage'
import { siteDescription, siteName, siteUrl } from '@/lib/site'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: siteName },
      { name: 'description', content: siteDescription },
      { property: 'og:url', content: siteUrl },
    ],
    links: [{ rel: 'canonical', href: `${siteUrl}/` }],
  }),
  component: HomePage,
})
