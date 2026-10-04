import { createFileRoute, notFound } from '@tanstack/react-router'
import { ArrowUpRight, ChevronRight, MapPin } from 'lucide-react'
import { SiteLayout, WhatsAppIcon } from '@/components/SiteLayout'
import { services, siteUrl, whatsappUrl } from '@/lib/site'

export const Route = createFileRoute('/servicos/$slug')({
  loader: ({ params }) => {
    const service = services.find(service => service.slug === params.slug)
    if (!service) throw notFound()
    return service
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {}
    const title = `${loaderData.title} | Argelado`
    const description = `${loaderData.description} Atendimento em Canoas, RS. Solicite um orçamento à Argelado pelo WhatsApp.`
    const url = `${siteUrl}/servicos/${loaderData.slug}`
    return {
      meta: [{ title }, { name: 'description', content: description }, { property: 'og:title', content: title }, { property: 'og:description', content: description }, { property: 'og:url', content: url }],
      links: [{ rel: 'canonical', href: url }],
    }
  },
  component: ServicePage,
})

function ServicePage() {
  const service = Route.useLoaderData()
  const url = `${siteUrl}/servicos/${service.slug}`
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Service', name: service.title, description: service.description, url, areaServed: { '@type': 'City', name: 'Canoas' }, provider: { '@id': `${siteUrl}/#empresa`, '@type': 'HVACBusiness', name: 'Argelado', telephone: '+55-51-99366-7248', url: siteUrl } },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Início', item: siteUrl }, { '@type': 'ListItem', position: 2, name: 'Nossos serviços', item: `${siteUrl}/servicos` }, { '@type': 'ListItem', position: 3, name: service.label, item: url }] },
    ],
  }
  return <SiteLayout>
    <main id="conteudo" className="container">
      <nav className="breadcrumb" aria-label="Localização"><a href="/">Início</a><ChevronRight size={13}/><a href="/servicos">Nossos serviços</a><ChevronRight size={13}/><span aria-current="page">{service.label}</span></nav>
      <header className="article-header"><span className="eyebrow">ARGELADO · CANOAS, RS</span><h1>{service.title}</h1><p>{service.intro}</p><a className="button button-primary" href={whatsappUrl(`Olá, Argelado! Tenho interesse em ${service.title.toLowerCase()} e gostaria de um orçamento.`)} target="_blank" rel="noopener noreferrer"><WhatsAppIcon/> Solicitar orçamento <ArrowUpRight size={17}/></a></header>
      <div className="article-body"><div className="article-sections">
        {service.sections.map((section: (typeof services)[number]['sections'][number]) => <section key={section.title}><h2>{section.title}</h2><p>{section.text}</p></section>)}
        <section><h2>Antes de agendar</h2><p>Reúna as informações do aparelho e do imóvel e confira o <a href="/guia/instalacao-ar-condicionado">guia de preparação para a instalação</a>. Se precisar esclarecer algum detalhe, fale diretamente com a Argelado.</p></section>
      </div><aside className="article-aside"><MapPin size={24}/><h2>Seu ambiente.<br/>Nossa conversa.</h2><p>Atendimento em Canoas, RS. Envie seu bairro e as informações do aparelho pelo WhatsApp para começar.</p><a className="button button-primary" href={whatsappUrl()} target="_blank" rel="noopener noreferrer"><WhatsAppIcon/> Falar com a Argelado</a></aside></div>
      <section className="article-related"><h2>Outras soluções para o seu espaço</h2><div className="article-related-links">{services.filter(other => other.slug !== service.slug).map(other => <a href={`/servicos/${other.slug}`} key={other.slug}>{other.label}<ArrowUpRight size={17}/></a>)}</div></section>
    </main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>
  </SiteLayout>
}
