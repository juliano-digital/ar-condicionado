import { useState } from 'react'
import { ArrowRight, ArrowUpRight, Check, MapPin, MessageCircle, ShieldCheck, Snowflake, Wind, Wrench } from 'lucide-react'
import { SiteLayout, WhatsAppIcon } from '@/components/SiteLayout'
import { QuoteDialog } from '@/components/QuoteDialog'
import { businessSchema, sectionPages } from '@/lib/site'

export function HomePage() {
  const [quoteOpen, setQuoteOpen] = useState(false)
  return <SiteLayout>
    <main id="conteudo">
      <section className="hero container">
        <div className="hero-copy"><div className="location-pill"><span className="status-dot"/><span>CONFORTO COM ENDEREÇO: CANOAS, RS</span></div>
          <h1>Ar-condicionado<br/>bem instalado.<br/><span>Vida mais leve.</span></h1>
          <p className="hero-description">Seu ambiente na temperatura certa, sem complicação. Instalação de ar-condicionado em <strong>Canoas</strong> para sua casa ou empresa, com atenção em cada detalhe.</p>
          <div className="hero-actions"><button className="button button-primary" type="button" onClick={() => setQuoteOpen(true)}><WhatsAppIcon/> Pedir meu orçamento <ArrowUpRight size={18}/></button><a className="hero-services-link" href="/servicos">Conhecer os serviços <ArrowUpRight size={16}/></a></div>
          <div className="hero-reassurance"><span><Check size={15}/> Orçamento personalizado</span><span><Check size={15}/> Atendimento local</span></div>
          <div className="hero-bottom-note"><span className="mini-snowflake"><Snowflake size={22}/></span><div><strong>Mais conforto. Menos preocupação.</strong><span>Da primeira conversa à instalação.</span></div></div>
        </div>
        <div className="hero-visual"><img className="hero-image" src="/.netlify/images?url=/img/ambiente-argelado.png&w=928&fm=webp&q=85" srcSet="/.netlify/images?url=/img/ambiente-argelado.png&w=480&fm=webp&q=85 480w, /.netlify/images?url=/img/ambiente-argelado.png&w=720&fm=webp&q=85 720w, /.netlify/images?url=/img/ambiente-argelado.png&w=928&fm=webp&q=85 928w" sizes="(max-width: 760px) 92vw, (min-width: 1500px) 586px, 48vw" alt="Ambiente residencial com ar-condicionado split, sofá e iluminação natural, ilustrando o conforto de uma boa instalação" width={928} height={1152} fetchPriority="high"/>
          <div className="visual-top-label"><span className="status-dot"/> O seu lugar de ficar bem.</div>
          <div className="comfort-card"><span className="comfort-icon"><Wind size={27}/></span><div><span>O CLIMA CERTO, TODOS OS DIAS</span><strong>Conforto que se sente.</strong></div><span className="comfort-check"><Check size={15}/></span></div>
          <span className="photo-credit">Imagem ilustrativa de ambiente.</span>
        </div>
      </section>
      <section className="trust-strip" aria-label="Diferenciais"><div className="container trust-inner"><span><ShieldCheck/> Cuidado na instalação</span><span><Wrench/> Atenção ao acabamento</span><span><MessageCircle/> Contato direto, sem complicação</span><span><MapPin/> Aqui em Canoas</span></div></section>

      <section className="section container page-overview"><div className="section-heading"><div><span className="eyebrow">CONHEÇA A ARGELADO</span><h2>Seu próximo passo<br/>para um ambiente melhor.</h2></div><p>Cada assunto tem seu espaço.<br/>Escolha por onde começar.</p></div><div className="page-overview-grid">{sectionPages.map((page, index) => <a className="page-overview-card" href={page.path} key={page.id}><span className="eyebrow">0{index + 1}</span><h3>{page.label}</h3><p>{page.description}</p><span className="text-link">Explorar <ArrowUpRight size={18}/></span></a>)}</div></section>

      <section className="guide-banner container"><div><span className="eyebrow">ANTES DE INSTALAR</span><h3>Um pouco de informação. Uma escolha melhor.</h3><p>Veja o que considerar antes da instalação do seu ar-condicionado.</p></div><a href="/guia/instalacao-ar-condicionado" className="text-link">Ler o guia <ArrowRight size={18}/></a></section>
    </main>
    <QuoteDialog open={quoteOpen} onClose={() => setQuoteOpen(false)}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}/>
  </SiteLayout>
}
