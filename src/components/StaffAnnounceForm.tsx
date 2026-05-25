'use client'

import { useState } from 'react'

type Priority = 'normale' | 'importante' | 'urgente'

const priorities: { value: Priority; label: string }[] = [
  { value: 'normale',    label: 'Normale' },
  { value: 'importante', label: 'Importante' },
  { value: 'urgente',    label: 'Urgente' },
]

const priorityAccent: Record<Priority, string> = {
  normale:    'var(--sand-dk)',
  importante: 'var(--brick)',
  urgente:    '#8b1a1a',
}

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
        <label className="form-label">Titre de l&apos;annonce *</label>
        <input
          type="text"
          className="form-input"
          placeholder="Ex : Événement spécial — Foire d'automne"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="form-label">Message *</label>
        <textarea
          className="form-input"
          placeholder="Contenu de l'annonce..."
          value={message}
          onChange={e => setMessage(e.target.value)}
          required
          style={{ minHeight: '120px', resize: 'vertical' }}
        />
      </div>

      <div>
        <label className="form-label">Priorité</label>
        <div className="flex gap-3 flex-wrap">
          {priorities.map(p => {
            const active = priority === p.value
            const accent = priorityAccent[p.value]
            return (
              <button
                key={p.value}
                type="button"
                onClick={() => setPriority(p.value)}
                style={{
                  padding: '6px 18px',
                  border: `1.5px solid ${active ? accent : 'rgba(42,54,68,0.20)'}`,
                  backgroundColor: active ? `${accent}18` : 'transparent',
                  color: active ? accent : 'var(--fg-60)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  borderRadius: '3px',
                  transition: 'all 0.15s ease',
                }}
              >
                {p.label}
              </button>
            )
          })}
        </div>
      </div>

      {state === 'error' && (
        <p className="label-display" style={{ color: 'var(--brick)' }}>Erreur : {error}</p>
      )}

      <button
        type="submit"
        className="btn-primary"
        disabled={state === 'loading' || !title.trim() || !message.trim()}
        style={{ opacity: state === 'loading' ? 0.6 : 1 }}
      >
        {state === 'loading' ? 'Publication…' : 'Publier sur Discord'}
      </button>
    </form>
  )
}
