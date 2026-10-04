import { createFileRoute } from '@tanstack/react-router'
import { SectionPage } from '@/components/SectionPage'
import { sectionHead } from '@/lib/site'

export const Route = createFileRoute('/contato')({
  head: () => sectionHead('contato'),
  component: () => <SectionPage sectionId="contato"/>,
})
