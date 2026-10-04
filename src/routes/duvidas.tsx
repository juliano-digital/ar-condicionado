import { createFileRoute } from '@tanstack/react-router'
import { SectionPage } from '@/components/SectionPage'
import { sectionHead } from '@/lib/site'

export const Route = createFileRoute('/duvidas')({
  head: () => sectionHead('duvidas'),
  component: () => <SectionPage sectionId="duvidas"/>,
})
