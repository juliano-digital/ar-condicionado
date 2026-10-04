import { createFileRoute } from '@tanstack/react-router'
import { SectionPage } from '@/components/SectionPage'
import { sectionHead } from '@/lib/site'

export const Route = createFileRoute('/servicos/')({
  head: () => sectionHead('servicos'),
  component: () => <SectionPage sectionId="servicos"/>,
})
