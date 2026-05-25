'use client'

import { useState } from 'react'

type Priority = 'normale' | 'importante' | 'urgente'

const priorities: { value: Priority; label: string; color: number; badge: string }[] = [
  { value: 'normale',    label: 'Normale',    color: 0xb8860b, badge: '#7a5e00' },
  { value: 'importante', label: 'Importante', color: 0xe07b00, badge: '#b85c00' },
  { value: 'urgente',    label: 'Urgente',    color: 0x8b1a1a, badge: '#8b1a1a' },
]

export default function StaffAnnounceForm() {
  const [title,    setTitle]    = useState('')
  const [message,  setMessage]  = useState('')
  const [priority, setPriority] = useState<Priority>('normale')
  const [state,    setState]    = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [error,    setError]    = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!title.trim() || !message.trim()) return
    setState('loading')
    setError('')
    try {
      const res = await fetch('/api/staff/announce', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ title, message, priority }),
      })
      if (!res.ok) throw new Error((await res.json()).error ?? 'Erreur serveur')
      setState('success')
      setTitle('')
      setMessage('')
      setPriority('normale')
    } catch (err) {
      setState('error')
      setError(err instanceof Error ? err.message : 'Erreur inconnue')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      {state === 'success' && (
        <div className="p-3" style={{ border: '1px solid rgba(26,92,26,0.3)', backgroundColor: 'rgba(26,92,26,0.06)' }}>
          <p className="label-display" style={{ color: '#1a5c1a' }}>Annonce publiée sur Discord.</p>
        </div>
      )}

      <div>
        <label className="form-label" style={{ color: 'rgba(240,230,200,0.6)' }}>Titre de l&apos;annonce *</label>
        <input
          type="text"
          className="form-input"
          placeholder="Ex : Événement spécial — Foire d'automne"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
          style={{ backgroundColor: 'rgba(240,230,200,0.05)', borderColor: 'rgba(184,134,11,0.3)', color: 'var(--parchment)' }}
        />
      </div>

      <div>
        <label className="form-label" style={{ color: 'rgba(240,230,200,0.6)' }}>Message *</label>
        <textarea
          className="form-input"
          placeholder="Contenu de l'annonce..."
          value={message}
          onChange={e => setMessage(e.target.value)}
          required
          style={{ minHeight: '120px', resize: 'vertical', backgroundColor: 'rgba(240,230,200,0.05)', borderColor: 'rgba(184,134,11,0.3)', color: 'var(--parchment)' }}
        />
      </div>

      <div>
        <label className="form-label" style={{ color: 'rgba(240,230,200,0.6)' }}>Priorité</label>
        <div className="flex gap-3 flex-wrap">
          {priorities.map(p => (
            <button
              key={p.value}
              type="button"
              onClick={() => setPriority(p.value)}
              style={{
                padding: '6px 16px',
                border: `1.5px solid ${priority === p.value ? p.badge : 'rgba(184,134,11,0.2)'}`,
                backgroundColor: priority === p.value ? `${p.badge}22` : 'transparent',
                color: priority === p.value ? 'var(--parchment)' : 'rgba(240,230,200,0.4)',
                fontFamily: 'var(--font-display)',
                fontSize: '0.75rem',
                letterSpacing: '0.1em',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {state === 'error' && (
        <p className="label-display" style={{ color: 'var(--rust)' }}>Erreur : {error}</p>
      )}

      <button
        type="submit"
        className="btn-gold"
        disabled={state === 'loading' || !title.trim() || !message.trim()}
        style={{ opacity: state === 'loading' ? 0.6 : 1 }}
      >
        {state === 'loading' ? 'Publication…' : 'Publier sur Discord'}
      </button>
    </form>
  )
}
