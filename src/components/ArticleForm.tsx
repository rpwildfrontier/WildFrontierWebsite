'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { Article } from '@/lib/kv'

const CATEGORIES = ['Faits divers', 'Politique', 'Justice', 'Avis de décès', 'Annonce commerciale', 'Chronique']

type Props = {
  article?: Article     // undefined = creation mode
  onCancel?: () => void
}

export default function ArticleForm({ article, onCancel }: Props) {
  const router = useRouter()
  const [title,    setTitle]    = useState(article?.title    ?? '')
  const [date,     setDate]     = useState(article?.date     ?? '')
  const [category, setCategory] = useState(article?.category ?? 'Chronique')
  const [excerpt,  setExcerpt]  = useState(article?.excerpt  ?? '')
  const [content,  setContent]  = useState(article?.content  ?? '')
  const [featured, setFeatured] = useState(article?.featured ?? false)
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
        body:    JSON.stringify({ title, date, category, excerpt, content, featured }),
      })
      if (!res.ok) throw new Error((await res.json()).error ?? 'Erreur')
      router.refresh()
      if (!article && onCancel) onCancel()
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
        <div className="flex items-center gap-3 pt-6">
          <input type="checkbox" id="featured" checked={featured} onChange={e => setFeatured(e.target.checked)}
            style={{ width: 16, height: 16 }} />
          <label htmlFor="featured" className="body-text"
            style={{ color: 'rgba(240,230,200,0.6)', textTransform: 'none', letterSpacing: 0, cursor: 'pointer' }}>
            Article à la une
          </label>
        </div>
      </div>

      <div>
        <label className="form-label" style={{ color: 'rgba(240,230,200,0.6)' }}>Extrait (chapeau)</label>
        <textarea className="form-input" placeholder="Résumé court affiché dans la liste..." value={excerpt}
          onChange={e => setExcerpt(e.target.value)} style={{ ...inputStyle, minHeight: '70px', resize: 'vertical' }} />
      </div>

      <div>
        <label className="form-label" style={{ color: 'rgba(240,230,200,0.6)' }}>Contenu complet *</label>
        <textarea className="form-input" placeholder="Contenu de l'article..." value={content}
          onChange={e => setContent(e.target.value)} required
          style={{ ...inputStyle, minHeight: '180px', resize: 'vertical', lineHeight: 1.65 }} />
      </div>

      {state === 'error' && (
        <p className="label-display" style={{ color: 'var(--rust)' }}>{error}</p>
      )}

      <div className="flex items-center gap-3 flex-wrap">
        <button type="submit" className="btn-gold" disabled={state === 'loading'}>
          {state === 'loading' ? '…' : article ? 'Enregistrer les modifications' : 'Publier l\'article'}
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
