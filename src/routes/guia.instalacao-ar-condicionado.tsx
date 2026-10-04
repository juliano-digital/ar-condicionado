import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, ChevronRight, ClipboardCheck } from 'lucide-react'
import { SiteLayout, WhatsAppIcon } from '@/components/SiteLayout'
import { siteUrl, whatsappUrl } from '@/lib/site'

const title = 'Instalação de ar-condicionado: o que saber antes de agendar | Argelado'
const description = 'Vai instalar ar-condicionado em Canoas? Saiba quais informações reunir, como preparar o ambiente e o que conferir antes de aprovar o orçamento.'
const url = `${siteUrl}/guia/instalacao-ar-condicionado`

export const Route = createFileRoute('/guia/instalacao-ar-condicionado')({
  head: () => ({
    meta: [{ title }, { name: 'description', content: description }, { property: 'og:title', content: title }, { property: 'og:description', content: description }, { property: 'og:url', content: url }],
    links: [{ rel: 'canonical', href: url }],
  }),
  component: InstallationGuide,
})

function InstallationGuide() {
  const schema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Início', item: siteUrl }, { '@type': 'ListItem', position: 2, name: 'Guia de instalação', item: url }] }
  return <SiteLayout><main id="conteudo" className="container">
    <nav className="breadcrumb" aria-label="Localização"><a href="/">Início</a><ChevronRight size={13}/><span>Guia de instalação</span></nav>
    <header className="article-header"><span className="eyebrow">INFORMAÇÃO PARA UMA BOA ESCOLHA</span><h1>O que saber antes de instalar seu ar-condicionado.</h1><p>A instalação começa antes de o aparelho chegar à parede. Este guia ajuda você a organizar as informações, tirar dúvidas e conversar sobre o seu ambiente com a Argelado, em Canoas.</p></header>
    <div className="article-body"><article className="article-sections">
      <section><h2>1. Reúna os dados do equipamento</h2><p>Se você já comprou o aparelho, tenha em mãos a marca, o modelo e a capacidade em BTUs. Uma foto da etiqueta ou da embalagem ajuda a identificar o equipamento. Guarde também o manual para consultar as condições de instalação e garantia do fabricante.</p></section>
      <section><h2>2. Mostre como é o ambiente</h2><p>Fotos ajudam na conversa inicial. Registre a parede onde imagina instalar a unidade interna, o local previsto para a unidade externa e a infraestrutura existente. Conte se há dificuldade de acesso, restrições de horário ou outras particularidades do imóvel.</p></section>
      <section><h2>3. Converse sobre o equipamento antes da compra</h2><p>Se você ainda não comprou o ar-condicionado, conte como o espaço é utilizado e quais são as características do ambiente. Tenha as medidas do cômodo e informe os equipamentos presentes. Confirme as especificações do fabricante e solicite uma avaliação apropriada, em vez de escolher por uma regra genérica.</p></section>
      <section><h2>4. Confira as regras do condomínio</h2><p>Em apartamentos e imóveis comerciais, confirme onde a unidade externa pode ficar, se há restrições para a fachada e quais horários permitem a realização do serviço. Se houver um padrão de instalação definido pelo condomínio, compartilhe essas informações antes de pedir o orçamento.</p></section>
      <section><h2>5. Entenda o que está incluído no orçamento</h2><p>O valor da instalação depende das condições do serviço. Antes de aprovar, confirme:</p><ul><li>Quais equipamentos e ambientes fazem parte do pedido.</li><li>Quais materiais estão incluídos e se há serviços adicionais.</li><li>Como serão avaliados os pontos elétricos, a tubulação e a drenagem.</li><li>Quais são as condições de acesso às unidades.</li><li>O agendamento e a previsão de duração do serviço.</li></ul><p>Não presuma que alterações na infraestrutura já estejam incluídas. Combine o escopo antes da execução.</p></section>
      <section><h2>6. Consulte o manual e uma avaliação técnica</h2><p>As condições de instalação variam conforme o equipamento e o imóvel. Este guia reúne informações para o atendimento e não substitui o manual do fabricante nem uma avaliação técnica.</p></section>
      <section><h2>Instalação de ar-condicionado em Canoas</h2><p>A Argelado atende pedidos para <a href="/servicos/instalacao-residencial-canoas">casas e apartamentos</a>, <a href="/servicos/instalacao-comercial-canoas">espaços comerciais</a> e <a href="/servicos/instalacao-split-canoas">instalação de aparelhos split</a>. Envie seu bairro e as informações do ambiente pelo WhatsApp para iniciar a conversa.</p></section>
    </article><aside className="article-aside"><ClipboardCheck size={26}/><h2>Já tem as<br/>informações?</h2><p>Envie o modelo do aparelho, seu bairro em Canoas e fotos do ambiente. Vamos conversar sobre a instalação.</p><a className="button button-primary" href={whatsappUrl('Olá, Argelado! Li o guia de instalação e gostaria de pedir um orçamento para meu ambiente em Canoas.')} target="_blank" rel="noopener noreferrer"><WhatsAppIcon/> Pedir orçamento <ArrowUpRight size={16}/></a></aside></div>
  </main><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/></SiteLayout>
}
