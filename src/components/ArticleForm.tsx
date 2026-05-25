'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { Article } from '@/lib/kv'

const CATEGORIES = ['Faits divers', 'Politique', 'Justice', 'Avis de décès', 'Annonce commerciale', 'Chronique']

type Props = {
  article?:       Article     // undefined = creation mode
  defaultAuthor?: string
  onCancel?:      () => void
  onSaved?:       () => void
}

export default function ArticleForm({ article, defaultAuthor, onCancel, onSaved }: Props) {
  const router = useRouter()
  const [title,    setTitle]    = useState(article?.title    ?? '')
  const [date,     setDate]     = useState(article?.date     ?? '')
  const [category, setCategory] = useState(article?.category ?? 'Chronique')
  const [author,   setAuthor]   = useState(article?.author   ?? defaultAuthor ?? 'Rédaction')
  const [excerpt,  setExcerpt]  = useState(article?.excerpt  ?? '')
  const [content,  setContent]  = useState(article?.content  ?? '')
  const [featured, setFeatured] = useState(article?.featured ?? false)
  const [preview,  setPreview]  = useState(false)
  const [state,    setState]    = useState<'idle' | 'loading' | 'error'>('idle')
  const [error,    setError]    = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setState('loading')
    setError('')
    try {
      const url    = article ? `/api/staff/articles/${article.id}` : '/api/staff/articles'
      const method = article ? 'PATCH' : 'POST'
      const res    = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ title, date, category, author, excerpt, content, featured }),
      })
      if (!res.ok) throw new Error((await res.json()).error ?? 'Erreur')
      router.refresh()
      if (onSaved) onSaved()
      else if (!article && onCancel) onCancel()
    } catch (err) {
      setState('error')
      setError(err instanceof Error ? err.message : 'Erreur inconnue')
    }
  }

  async function handleDelete() {
    if (!article || !confirm('Supprimer cet article ?')) return
    setState('loading')
    try {
      await fetch(`/api/staff/articles/${article.id}`, { method: 'DELETE' })
      router.refresh()
      if (onCancel) onCancel()
    } catch {
      setState('error')
      setError('Erreur lors de la suppression')
    }
  }

  const inputStyle = {
    backgroundColor: 'rgba(240,230,200,0.05)',
    borderColor:     'rgba(184,134,11,0.3)',
    color:           'var(--parchment)',
  }

  if (preview) {
    const paragraphs = content.split(/\n{2,}/).map(p => p.trim()).filter(Boolean)
    return (
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="label-display" style={{ color: 'var(--gold)', fontSize: '0.65rem' }}>Aperçu</div>
          <button type="button" className="btn-secondary" onClick={() => setPreview(false)}
            style={{ fontSize: '0.7rem', padding: '4px 12px' }}>← Retour à l&apos;édition</button>
        </div>
        <div className="p-6" style={{ border: '1px solid rgba(184,134,11,0.2)', backgroundColor: 'rgba(240,230,200,0.03)' }}>
          <div className="label-display mb-2" style={{ color: 'var(--gold)', fontSize: '0.62rem', letterSpacing: '0.25em' }}>{category}</div>
          <h2 className="section-heading mb-2" style={{ color: 'var(--parchment)', fontSize: '1.4rem', lineHeight: 1.25 }}>{title || 'Sans titre'}</h2>
          <div className="label-display mb-5" style={{ color: 'rgba(240,230,200,0.3)', fontSize: '0.65rem' }}>
            {date || '—'} · {author}
          </div>
          {excerpt && (
            <p className="body-text mb-5 pb-5" style={{ fontStyle: 'italic', color: 'rgba(240,230,200,0.55)', borderBottom: '1px solid rgba(184,134,11,0.15)' }}>
              {excerpt}
            </p>
          )}
          <div className="space-y-4">
            {paragraphs.map((p, i) => (
              <p key={i} className="body-text" style={{ color: 'rgba(240,230,200,0.75)', lineHeight: 1.8 }}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="form-label" style={{ color: 'rgba(240,230,200,0.6)' }}>Titre *</label>
          <input type="text" className="form-input" placeholder="Titre de l'article" value={title}
            onChange={e => setTitle(e.target.value)} required style={inputStyle} />
        </div>
        <div>
          <label className="form-label" style={{ color: 'rgba(240,230,200,0.6)' }}>Date (lore)</label>
          <input type="text" className="form-input" placeholder="Ex : 24 mai 1887" value={date}
            onChange={e => setDate(e.target.value)} style={inputStyle} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="form-label" style={{ color: 'rgba(240,230,200,0.6)' }}>Catégorie</label>
          <select className="form-input" value={category} onChange={e => setCategory(e.target.value)} style={inputStyle}>
            {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label className="form-label" style={{ color: 'rgba(240,230,200,0.6)' }}>Auteur</label>
          <input type="text" className="form-input" placeholder="Nom de l'auteur" value={author}
            onChange={e => setAuthor(e.target.value)} style={inputStyle} />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <input type="checkbox" id="featured" checked={featured} onChange={e => setFeatured(e.target.checked)}
          style={{ width: 16, height: 16, flexShrink: 0 }} />
        <label htmlFor="featured" className="body-text"
          style={{ color: 'rgba(240,230,200,0.6)', textTransform: 'none', letterSpacing: 0, cursor: 'pointer' }}>
          Article à la une
        </label>
      </div>

      <div>
        <label className="form-label" style={{ color: 'rgba(240,230,200,0.6)' }}>Extrait (chapeau)</label>
        <textarea className="form-input" placeholder="Résumé court affiché dans la liste..." value={excerpt}
          onChange={e => setExcerpt(e.target.value)} style={{ ...inputStyle, minHeight: '70px', resize: 'vertical' }} />
      </div>

      <div>
        <div className="flex items-center justify-between mb-1">
          <label className="form-label" style={{ color: 'rgba(240,230,200,0.6)' }}>Contenu complet *</label>
          <span className="label-display" style={{ color: 'rgba(240,230,200,0.2)', fontSize: '0.6rem' }}>
            {content.split(/\s+/).filter(Boolean).length} mots
          </span>
        </div>
        <textarea className="form-input" placeholder="Contenu de l'article… Séparez les paragraphes par une ligne vide." value={content}
          onChange={e => setContent(e.target.value)} required
          style={{ ...inputStyle, minHeight: '220px', resize: 'vertical', lineHeight: 1.65 }} />
      </div>

      {state === 'error' && (
        <p className="label-display" style={{ color: 'var(--rust)' }}>{error}</p>
      )}

      <div className="flex items-center gap-3 flex-wrap">
        <button type="submit" className="btn-gold" disabled={state === 'loading'}>
          {state === 'loading' ? '…' : article ? 'Enregistrer' : 'Publier'}
        </button>
        <button type="button" className="btn-secondary" onClick={() => setPreview(true)}
          style={{ fontSize: '0.78rem' }}>
          Aperçu
        </button>
        {onCancel && (
          <button type="button" className="btn-secondary" onClick={onCancel} disabled={state === 'loading'}>
            Annuler
          </button>
        )}
        {article && (
          <button type="button" onClick={handleDelete} disabled={state === 'loading'}
            style={{ marginLeft: 'auto', padding: '6px 14px', border: '1px solid rgba(139,26,26,0.4)',
              backgroundColor: 'transparent', color: 'rgba(200,80,80,0.7)', fontFamily: 'var(--font-display)',
              fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer' }}>
            Supprimer
          </button>
        )}
      </div>
    </form>
  )
}
