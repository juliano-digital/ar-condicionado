import { createFileRoute } from '@tanstack/react-router'
import { SectionPage } from '@/components/SectionPage'
import { sectionHead } from '@/lib/site'

export const Route = createFileRoute('/por-que-argelado')({
  head: () => sectionHead('por-que-argelado'),
  component: () => <SectionPage sectionId="por-que-argelado"/>,
})
