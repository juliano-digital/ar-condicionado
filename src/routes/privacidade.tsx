import { createFileRoute } from '@tanstack/react-router'
import { ChevronRight } from 'lucide-react'
import { SiteLayout } from '@/components/SiteLayout'
import { siteUrl, whatsappUrl } from '@/lib/site'

const title = 'Privacidade | Argelado'
const description = 'Saiba como as informações usadas no pedido de orçamento da Argelado são encaminhadas pelo WhatsApp e como entrar em contato.'

export const Route = createFileRoute('/privacidade')({
  head: () => ({ meta: [{ title }, { name: 'description', content: description }, { property: 'og:title', content: title }, { property: 'og:description', content: description }, { property: 'og:url', content: `${siteUrl}/privacidade` }], links: [{ rel: 'canonical', href: `${siteUrl}/privacidade` }] }),
  component: PrivacyPage,
})

function PrivacyPage() {
  return <SiteLayout><main id="conteudo" className="container">
    <nav className="breadcrumb" aria-label="Localização"><a href="/">Início</a><ChevronRight size={13}/><span>Privacidade</span></nav>
    <header className="article-header"><span className="eyebrow">TRANSPARÊNCIA NO ATENDIMENTO</span><h1>Sobre suas informações.</h1><p>Veja como funciona o contato com a Argelado pelo site.</p></header>
    <div className="article-sections privacy-body">
      <section><h2>Pedido de orçamento</h2><p>O formulário prepara uma mensagem com seu nome, bairro, tipo de imóvel e informações sobre o equipamento. Esses dados não são enviados a um banco de dados do site e não ficam salvos no navegador. Ao continuar no WhatsApp, você revisa e envia a mensagem diretamente à Argelado.</p></section>
      <section><h2>Contato pelo WhatsApp</h2><p>Ao acessar um link de WhatsApp, você sai deste site e utiliza um serviço da Meta, sujeito às condições desse serviço. As informações que você envia à Argelado são usadas para conversar sobre o atendimento e seu pedido de orçamento. Evite enviar dados sensíveis desnecessários.</p></section>
      <section><h2>Recursos externos e funcionamento do site</h2><p>Este site não inclui ferramentas próprias de publicidade ou análise de visitantes. As fontes são carregadas pelo Google Fonts. A hospedagem e a entrega de imagens são realizadas pela Netlify. Ao acessar esses recursos, seu navegador faz solicitações aos respectivos provedores, que podem processar informações técnicas, como endereço IP, para entregar o conteúdo.</p></section>
      <section><h2>Fale sobre suas informações</h2><p>Para tirar dúvidas sobre as informações compartilhadas durante o atendimento, entre em contato com a Argelado pelo <a href={whatsappUrl('Olá, Argelado! Gostaria de conversar sobre minhas informações no atendimento.')} target="_blank" rel="noopener noreferrer">WhatsApp (51) 99366-7248</a>.</p></section>
    </div>
  </main></SiteLayout>
}
