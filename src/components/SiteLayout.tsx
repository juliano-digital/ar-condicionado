import { useState } from 'react'
import { useRouterState } from '@tanstack/react-router'
import { ArrowUpRight, MapPin, Menu, Phone, Snowflake, X } from 'lucide-react'
import type { ReactNode } from 'react'
import { phone, phoneHref, sectionPages, whatsappUrl } from '@/lib/site'

export function WhatsAppIcon({ className = '' }: { className?: string }) {
  return <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.5 11.7a8.6 8.6 0 0 1-12.8 7.5L3 20.5l1.3-4.6a8.6 8.6 0 1 1 16.2-4.2Z"/><path d="M8.4 7.8c-.6.2-.9 1-.7 1.8.7 2.7 2.8 4.8 5.5 5.6.8.2 1.6-.1 1.9-.7l.5-1-2.3-1.1-.8.8a7.3 7.3 0 0 1-2.9-2.9l.7-.8-1.1-2.3-.8.6Z"/></svg>
}

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return <a href="/" className={`brand${inverse ? ' brand-inverse' : ''}`} aria-label="Argelado — início"><span className="brand-symbol"><Snowflake size={26} strokeWidth={1.65}/></span><span>argelado<span className="brand-dot">.</span></span></a>
}

export function SiteLayout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = useRouterState({ select: state => state.location.pathname.replace(/\/$/, '') })
  return <>
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <div className="announcement"><div className="container announcement-inner"><span><MapPin size={13}/> Canoas, Rio Grande do Sul</span><span>O conforto que você procura, pertinho de você.</span><a href={phoneHref}><Phone size={12}/>{phone}</a></div></div>
    <header className="site-header"><div className="container header-inner">
      <Brand/>
      <nav className="desktop-nav" aria-label="Navegação principal">{sectionPages.slice(0, 4).map(page => <a key={page.id} href={page.path} aria-current={pathname === page.path ? 'page' : undefined}>{page.id === 'duvidas' ? 'Dúvidas' : page.label}</a>)}</nav>
      <a className="button button-small header-contact" href="/contato" aria-current={pathname === '/contato' ? 'page' : undefined}><WhatsAppIcon/> Fale com a gente <ArrowUpRight size={16}/></a>
      <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
    </div>
    {menuOpen && <nav id="mobile-menu" className="mobile-nav" aria-label="Navegação móvel"><a href="/" onClick={() => setMenuOpen(false)} aria-current={pathname === '' ? 'page' : undefined}>Início</a>{sectionPages.map(page => <a key={page.id} href={page.path} onClick={() => setMenuOpen(false)} aria-current={pathname === page.path ? 'page' : undefined}>{page.label}</a>)}<a href="/guia/instalacao-ar-condicionado" onClick={() => setMenuOpen(false)}>Guia de instalação</a><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">Conversar pelo WhatsApp <ArrowUpRight size={17}/></a></nav>}
    </header>
    {children}
    <footer className="site-footer"><div className="container"><div className="footer-top"><div><Brand inverse/><p>O clima muda lá fora.<br/>O conforto fica aqui dentro.</p></div><div className="footer-links"><span>Explore</span>{sectionPages.map(page => <a key={page.id} href={page.path}>{page.label}</a>)}<a href="/guia/instalacao-ar-condicionado">Guia de instalação</a></div><div className="footer-links"><span>Vamos conversar</span><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer"><WhatsAppIcon/> {phone}</a><a href={phoneHref}><Phone size={16}/> Ligar para a Argelado</a><span className="footer-location"><MapPin size={16}/> Canoas, RS</span></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Argelado. Todos os direitos reservados.</span><span>Instalação de ar-condicionado em Canoas, RS.</span><a href="/privacidade">Privacidade</a></div></div></footer>
    <a className="floating-whatsapp" href={whatsappUrl()} target="_blank" rel="noopener noreferrer" aria-label="Conversar com a Argelado pelo WhatsApp"><WhatsAppIcon/></a>
  </>
}
