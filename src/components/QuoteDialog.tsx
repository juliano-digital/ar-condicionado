import { useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { ArrowUpRight, Check, X } from 'lucide-react'
import { WhatsAppIcon } from './SiteLayout'
import { whatsappUrl } from '@/lib/site'

const emptyDraft = { name: '', neighborhood: '', property: 'Casa', equipment: 'Já tenho o ar-condicionado', details: '' }

export function QuoteDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [error, setError] = useState('')
  const [preparedLink, setPreparedLink] = useState('')
  const [draft, setDraft] = useState(emptyDraft)
  useEffect(() => {
    const dialog = dialogRef.current
    if (open) {
      setError('')
      setPreparedLink('')
      setDraft(emptyDraft)
      dialog?.showModal()
      const previousOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => { dialog?.close(); document.body.style.overflow = previousOverflow }
    }
    dialog?.close()
  }, [open])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') || '').trim()
    const neighborhood = String(data.get('neighborhood') || '').trim()
    if (!name || !neighborhood) { setError('Preencha seu nome e bairro para preparar a mensagem.'); return }
    const currentDraft = { name, neighborhood, property: String(data.get('property')), equipment: String(data.get('equipment')), details: String(data.get('details') || '').trim() }
    setDraft(currentDraft)
    const message = `Olá, Argelado! Meu nome é ${name} e gostaria de um orçamento.\nBairro em Canoas: ${neighborhood}\nTipo de imóvel: ${currentDraft.property}\nEquipamento: ${currentDraft.equipment}\nDetalhes: ${currentDraft.details || 'Gostaria de conversar sobre a instalação.'}`
    setError('')
    setPreparedLink(whatsappUrl(message))
  }

  return <dialog ref={dialogRef} className="quote-dialog" onCancel={onClose} onClick={event => { if (event.target === event.currentTarget) onClose() }} aria-labelledby="quote-title">
    <button className="dialog-close" type="button" onClick={onClose} aria-label="Fechar orçamento"><X size={21}/></button>
    <span className="eyebrow">UM PASSO PARA MAIS CONFORTO</span><h2 id="quote-title">Vamos falar do<br/>seu ambiente?</h2>
    {preparedLink ? <div className="quote-success" role="status"><span className="success-icon"><Check/></span><h3>Sua mensagem está pronta.</h3><p>Continue no WhatsApp para enviar as informações à Argelado. O pedido só é enviado quando você confirma a mensagem no aplicativo.</p><a className="button button-primary" href={preparedLink} target="_blank" rel="noopener noreferrer"><WhatsAppIcon/> Continuar no WhatsApp <ArrowUpRight size={18}/></a><button className="text-button" type="button" onClick={() => setPreparedLink('')}>Editar informações</button></div> : <>
      <p className="dialog-intro">Conte o básico. A gente continua a conversa no WhatsApp.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-grid"><label>Seu nome<input name="name" defaultValue={draft.name} required maxLength={80} autoComplete="given-name" placeholder="Como podemos te chamar?"/></label><label>Bairro em Canoas<input name="neighborhood" defaultValue={draft.neighborhood} required maxLength={100} autoComplete="address-level3" placeholder="Em qual bairro você está?"/></label></div>
        <div className="form-grid"><label>Tipo de imóvel<select name="property" defaultValue={draft.property}><option>Casa</option><option>Apartamento</option><option>Espaço comercial</option></select></label><label>Sobre o aparelho<select name="equipment" defaultValue={draft.equipment}><option>Já tenho o ar-condicionado</option><option>Ainda não comprei</option><option>Quero instalar mais de um aparelho</option></select></label></div>
        <label>Algum detalhe? <span className="optional">(opcional)</span><textarea name="details" defaultValue={draft.details} rows={3} maxLength={1000} placeholder="Modelo, BTUs ou informações sobre o ambiente..."/></label>
        {error && <p className="form-error" role="alert">{error}</p>}
        <button className="button button-primary" type="submit"><WhatsAppIcon/> Preparar meu orçamento <ArrowUpRight size={18}/></button>
        <p className="form-note">Os dados não são armazenados neste site. A mensagem é enviada por você no WhatsApp. <a href="/privacidade">Saiba mais.</a></p>
      </form>
    </>}
  </dialog>
}
