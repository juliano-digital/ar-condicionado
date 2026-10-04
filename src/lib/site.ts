import { siteUrl } from './site-config'

export { siteUrl }
export const siteName = 'Argelado | Instalação de Ar-Condicionado em Canoas, RS'
export const siteDescription = 'Instalação de ar-condicionado split em Canoas, RS. Soluções para casas, apartamentos e empresas. Fale com a Argelado e solicite seu orçamento pelo WhatsApp.'
export const phone = '(51) 99366-7248'
export const phoneHref = 'tel:+5551993667248'

export const sectionPages = [
  { id: 'servicos', path: '/servicos', label: 'Nossos serviços', title: 'Serviços de instalação de ar-condicionado em Canoas', description: 'Conheça as soluções da Argelado para instalação de ar-condicionado split em casas, apartamentos e empresas em Canoas, RS.' },
  { id: 'por-que-argelado', path: '/por-que-argelado', label: 'Por que Argelado?', title: 'Por que escolher a Argelado em Canoas?', description: 'Conheça a forma de atendimento da Argelado: conversa sobre seu ambiente, clareza no orçamento e cuidado com a instalação em Canoas.' },
  { id: 'como-funciona', path: '/como-funciona', label: 'Como funciona', title: 'Como solicitar sua instalação de ar-condicionado', description: 'Saiba como reunir as informações do aparelho, solicitar um orçamento pelo WhatsApp e combinar sua instalação com a Argelado em Canoas.' },
  { id: 'duvidas', path: '/duvidas', label: 'Dúvidas frequentes', title: 'Dúvidas sobre instalação de ar-condicionado em Canoas', description: 'Tire suas dúvidas sobre orçamento, infraestrutura, equipamentos e agendamento de instalação de ar-condicionado com a Argelado.' },
  { id: 'atendimento', path: '/atendimento', label: 'Atendimento em Canoas', title: 'Atendimento de instalação de ar-condicionado em Canoas', description: 'Fale com a Argelado para consultar o atendimento no seu bairro em Canoas, RS, e informar as necessidades da sua casa ou empresa.' },
  { id: 'contato', path: '/contato', label: 'Contato e orçamento', title: 'Contato e orçamento de instalação com a Argelado', description: 'Entre em contato com a Argelado pelo WhatsApp (51) 99366-7248 e prepare sua mensagem de orçamento para instalação de ar-condicionado em Canoas.' },
] as const

export type SectionId = typeof sectionPages[number]['id']

export function sectionHead(sectionId: SectionId) {
  const page = sectionPages.find(page => page.id === sectionId)!
  const title = `${page.title} | Argelado`
  const url = `${siteUrl}${page.path}`
  return {
    meta: [{ title }, { name: 'description', content: page.description }, { property: 'og:title', content: title }, { property: 'og:description', content: page.description }, { property: 'og:url', content: url }],
    links: [{ rel: 'canonical', href: url }],
  }
}

export function whatsappUrl(message = 'Olá, Argelado! Gostaria de um orçamento para instalação de ar-condicionado em Canoas.') {
  return `https://wa.me/5551993667248?text=${encodeURIComponent(message)}`
}

export const services = [
  {
    slug: 'instalacao-split-canoas',
    label: 'Instalação de split',
    title: 'Instalação de ar-condicionado split em Canoas',
    description: 'O conforto começa na instalação. Planejamento do local, atenção ao acabamento e orientação para o seu equipamento.',
    intro: 'Uma boa instalação de ar-condicionado split começa com a avaliação do ambiente. A Argelado atende em Canoas, RS, e conversa com você para entender o equipamento, a infraestrutura disponível e o melhor caminho para a instalação.',
    sections: [
      { title: 'Cada ambiente pede uma avaliação', text: 'A posição das unidades interna e externa, o trajeto da tubulação e o ponto de drenagem precisam ser avaliados antes do serviço. Envie fotos do ambiente e o modelo do equipamento pelo WhatsApp para iniciar a conversa.' },
      { title: 'O que entra no orçamento?', text: 'O escopo depende do modelo do aparelho e das condições do local. Distância entre as unidades, acesso à área externa e materiais necessários são pontos que podem alterar o orçamento. Confirme os itens incluídos antes de agendar.' },
      { title: 'Já comprou seu ar-condicionado?', text: 'Informe a marca, o modelo e a capacidade em BTUs. Se ainda não escolheu o aparelho, explique como é o ambiente para conversar sobre as informações necessárias antes da compra. As condições de instalação devem seguir as orientações do fabricante.' },
    ],
  },
  {
    slug: 'instalacao-residencial-canoas',
    label: 'Para sua casa',
    title: 'Instalação de ar-condicionado residencial em Canoas',
    description: 'Mais conforto no quarto, na sala ou no home office. Uma instalação pensada para a rotina da sua casa.',
    intro: 'Quarto, sala ou home office: cada espaço tem suas particularidades. A Argelado realiza instalação de ar-condicionado em residências em Canoas, com uma conversa inicial para avaliar o ambiente e definir o serviço necessário.',
    sections: [
      { title: 'Casas e apartamentos', text: 'Em casas, é importante avaliar o acesso ao local da unidade externa e o trajeto da instalação. Em apartamentos, consulte também as regras do condomínio para a fachada, a varanda e os horários permitidos para o serviço.' },
      { title: 'Prepare o ambiente para a instalação', text: 'Envie fotos da parede onde pretende instalar o aparelho, do local da unidade externa e da infraestrutura existente. Informe se o imóvel já possui tubulação ou ponto elétrico destinado ao ar-condicionado.' },
      { title: 'Agendamento combinado com você', text: 'O agendamento é definido após a análise das informações e a confirmação do orçamento. A duração do serviço depende das condições do imóvel, do acesso e das características do equipamento.' },
    ],
  },
  {
    slug: 'instalacao-comercial-canoas',
    label: 'Para sua empresa',
    title: 'Instalação de ar-condicionado comercial em Canoas',
    description: 'Um ambiente agradável para quem trabalha e para quem chega. Instalação para escritórios, lojas e pequenos negócios.',
    intro: 'Um ambiente confortável faz parte da experiência de quem trabalha e de quem visita seu negócio. A Argelado atende pedidos de instalação de ar-condicionado em espaços comerciais em Canoas, RS.',
    sections: [
      { title: 'Escritórios, lojas e espaços de atendimento', text: 'Conte como o espaço é utilizado, quantas pessoas costumam frequentá-lo e quais equipamentos deseja instalar. Essas informações ajudam a organizar a avaliação e a conversar sobre as necessidades do serviço.' },
      { title: 'Planejamento para a rotina do negócio', text: 'A instalação precisa considerar o acesso às áreas de trabalho, os horários de funcionamento e as condições do imóvel. Combine o agendamento e os detalhes do serviço antes da execução.' },
      { title: 'Um orçamento com escopo definido', text: 'Informe a quantidade e os modelos dos aparelhos, envie imagens da infraestrutura e descreva os locais de instalação. Materiais, acesso e condições de execução são avaliados para elaborar a proposta.' },
    ],
  },
] as const

export const faqs = [
  { question: 'Vocês fazem instalação de ar-condicionado em Canoas?', answer: 'Sim. A Argelado atende em Canoas, Rio Grande do Sul, com instalação de ar-condicionado para casas, apartamentos e espaços comerciais. Envie seu bairro pelo WhatsApp para combinar os detalhes do atendimento.' },
  { question: 'Quanto custa instalar um ar-condicionado?', answer: 'O valor depende do modelo do aparelho, da distância entre as unidades, da infraestrutura existente, dos materiais e das condições de acesso. Envie fotos do local e os dados do equipamento para solicitar um orçamento adequado ao seu caso.' },
  { question: 'Quais informações preciso enviar para pedir um orçamento?', answer: 'Informe seu bairro em Canoas, o tipo de imóvel, a marca e o modelo do aparelho, a capacidade em BTUs e se já existe infraestrutura. Fotos da parede e do local da unidade externa também ajudam na avaliação.' },
  { question: 'É possível instalar ar-condicionado em apartamento?', answer: 'Sim, desde que as condições do imóvel permitam. Antes do agendamento, confira com o condomínio as regras para instalação da unidade externa, alterações na fachada e horários de serviço. A infraestrutura também precisa ser avaliada.' },
  { question: 'Quanto tempo leva a instalação?', answer: 'O tempo varia conforme a infraestrutura, o acesso, a distância entre as unidades e as características do aparelho. A previsão é combinada após a avaliação do serviço, junto com o agendamento.' },
  { question: 'Ainda não comprei o aparelho. Posso falar com vocês?', answer: 'Pode. Conte como é o ambiente e o que você precisa. Antes da compra, vale conversar sobre a infraestrutura disponível, as condições de instalação e as especificações do equipamento.' },
] as const

export const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HVACBusiness',
  '@id': `${siteUrl}/#empresa`,
  name: 'Argelado',
  description: siteDescription,
  url: siteUrl,
  telephone: '+55-51-99366-7248',
  areaServed: { '@type': 'City', name: 'Canoas', containedInPlace: { '@type': 'State', name: 'Rio Grande do Sul' } },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Instalação de ar-condicionado em Canoas',
    itemListElement: services.map(service => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: service.title, url: `${siteUrl}/servicos/${service.slug}`, areaServed: 'Canoas, RS' } })),
  },
}
