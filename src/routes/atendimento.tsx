import { createFileRoute } from '@tanstack/react-router'
import { SectionPage } from '@/components/SectionPage'
import { sectionHead } from '@/lib/site'

export const Route = createFileRoute('/atendimento')({
  head: () => sectionHead('atendimento'),
  component: () => <SectionPage sectionId="atendimento"/>,
})
