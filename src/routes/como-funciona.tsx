import { createFileRoute } from '@tanstack/react-router'
import { SectionPage } from '@/components/SectionPage'
import { sectionHead } from '@/lib/site'

export const Route = createFileRoute('/como-funciona')({
  head: () => sectionHead('como-funciona'),
  component: () => <SectionPage sectionId="como-funciona"/>,
})
