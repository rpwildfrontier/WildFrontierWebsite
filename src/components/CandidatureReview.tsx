'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { Candidature, CandidatureStatus } from '@/lib/kv'

export default function CandidatureReview({ candidature }: { candidature: Candidature }) {
  const router = useRouter()
  const [note,   setNote]   = useState('')
  const [state,  setState]  = useState<'idle' | 'loading' | 'error'>('idle')
  const [error,  setError]  = useState('')

  async function decide(status: CandidatureStatus) {
    setState('loading')
    setError('')
    try {
      const res = await fetch(`/api/staff/candidatures/${candidature.id}`, {
        method:  'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ status, note: note.trim() || undefined }),
      })
      if (!res.ok) throw new Error((await res.json()).error ?? 'Erreur')
      router.refresh()
    } catch (err) {
      setState('error')
      setError(err instanceof Error ? err.message : 'Erreur inconnue')
    }
  }

  const isPending = candidature.status === 'pending'

  return (
    <div className="space-y-4">
      {isPending ? (
        <>
          <div>
            <label className="form-label" style={{ color: 'rgba(240,230,200,0.6)' }}>
              Note interne (optionnelle)
            </label>
            <textarea
              className="form-input"
              placeholder="Motif de la décision, observation..."
              value={note}
              onChange={e => setNote(e.target.value)}
              style={{ minHeight: '80px', resize: 'vertical',
                backgroundColor: 'rgba(240,230,200,0.05)',
                borderColor: 'rgba(184,134,11,0.3)',
                color: 'var(--parchment)' }}
            />
          </div>

          {state === 'error' && (
            <p className="label-display" style={{ color: 'var(--rust)' }}>{error}</p>
          )}

          <div className="flex gap-3 flex-wrap">
            <button
              className="btn-primary"
              onClick={() => decide('approved')}
              disabled={state === 'loading'}
              style={{ backgroundColor: 'rgba(26,92,26,0.15)', borderColor: 'rgba(26,92,26,0.5)', color: '#6ab86a' }}
            >
              {state === 'loading' ? '…' : 'Valider la candidature'}
            </button>
            <button
              className="btn-secondary"
              onClick={() => decide('rejected')}
              disabled={state === 'loading'}
              style={{ borderColor: 'rgba(139,26,26,0.5)', color: 'rgba(200,80,80,0.8)' }}
            >
              {state === 'loading' ? '…' : 'Refuser'}
            </button>
          </div>
        </>
      ) : (
        <div className="p-4" style={{
          border: `1px solid ${candidature.status === 'approved' ? 'rgba(26,92,26,0.3)' : 'rgba(139,26,26,0.3)'}`,
          backgroundColor: candidature.status === 'approved' ? 'rgba(26,92,26,0.06)' : 'rgba(139,26,26,0.06)',
        }}>
          <div className="label-display mb-1" style={{ color: candidature.status === 'approved' ? '#6ab86a' : 'rgba(200,80,80,0.8)', fontSize: '0.65rem' }}>
            Dossier {candidature.status === 'approved' ? 'validé' : 'refusé'}
            {candidature.statusAt && ` le ${new Date(candidature.statusAt).toLocaleDateString('fr-FR')}`}
          </div>
          {candidature.statusNote && (
            <p className="body-text" style={{ color: 'rgba(240,230,200,0.5)', fontSize: '0.85rem' }}>
              {candidature.statusNote}
            </p>
          )}
          <button
            className="btn-secondary mt-3"
            onClick={() => decide('pending')}
            disabled={state === 'loading'}
            style={{ fontSize: '0.75rem', padding: '4px 12px', borderColor: 'rgba(184,134,11,0.3)', color: 'rgba(184,134,11,0.6)' }}
          >
            Remettre en attente
          </button>
        </div>
      )}
    </div>
  )
}
