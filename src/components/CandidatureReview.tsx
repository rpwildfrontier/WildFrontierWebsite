'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { Candidature, CandidatureStatus } from '@/lib/kv'

export default function CandidatureReview({
  candidature,
  whitelisted = false,
}: {
  candidature: Candidature
  whitelisted?: boolean
}) {
  const router = useRouter()
  const [note,      setNote]      = useState(candidature.statusNote ?? '')
  const [state,     setState]     = useState<'idle' | 'loading' | 'error'>('idle')
  const [error,     setError]     = useState('')
  const [wlStatus,  setWlStatus]  = useState(whitelisted)

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
      if (candidature.cfxreId) setWlStatus(status === 'approved')
      router.refresh()
    } catch (err) {
      setState('error')
      setError(err instanceof Error ? err.message : 'Erreur inconnue')
      setState('error')
    } finally {
      if (state !== 'error') setState('idle')
    }
  }

  const isPending = candidature.status === 'pending'

  return (
    <div className="space-y-4">

      {/* Whitelist status */}
      {candidature.cfxreId && (
        <div className="flex items-center gap-2 p-3"
          style={{ border: `1px solid ${wlStatus ? 'rgba(59,165,93,0.3)' : 'rgba(184,134,11,0.15)'}`, backgroundColor: wlStatus ? 'rgba(59,165,93,0.05)' : 'transparent' }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: wlStatus ? '#3ba55d' : 'rgba(184,134,11,0.4)', flexShrink: 0 }} />
          <span className="label-display" style={{ color: wlStatus ? '#3ba55d' : 'rgba(184,134,11,0.5)', fontSize: '0.62rem' }}>
            {wlStatus ? `Whitelisté — fivem:${candidature.cfxreId}` : `Non whitelisté — fivem:${candidature.cfxreId}`}
          </span>
        </div>
      )}

      {isPending ? (
        <>
          <div>
            <label className="form-label" style={{ color: 'rgba(240,230,200,0.6)' }}>
              Note interne (optionnelle)
            </label>
            <textarea
              className="form-input"
              placeholder="Motif de la décision, observation…"
              value={note}
              onChange={e => setNote(e.target.value)}
              style={{
                minHeight: '80px', resize: 'vertical',
                backgroundColor: 'rgba(240,230,200,0.05)',
                borderColor:     'rgba(184,134,11,0.3)',
                color:           'var(--parchment)',
              }}
            />
          </div>

          {state === 'error' && (
            <p className="label-display" style={{ color: 'var(--rust)' }}>{error}</p>
          )}

          <div className="flex gap-3 flex-wrap">
            <button
              onClick={() => decide('approved')}
              disabled={state === 'loading'}
              style={{
                padding: '8px 20px', border: '1.5px solid rgba(26,92,26,0.5)',
                backgroundColor: 'rgba(26,92,26,0.12)', color: '#6ab86a',
                fontFamily: 'var(--font-display)', fontSize: '0.78rem',
                letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer',
              }}
            >
              {state === 'loading' ? '…' : '✓ Valider & whitelister'}
            </button>
            <button
              onClick={() => decide('rejected')}
              disabled={state === 'loading'}
              style={{
                padding: '8px 20px', border: '1.5px solid rgba(139,26,26,0.4)',
                backgroundColor: 'transparent', color: 'rgba(200,80,80,0.75)',
                fontFamily: 'var(--font-display)', fontSize: '0.78rem',
                letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer',
              }}
            >
              {state === 'loading' ? '…' : '✗ Refuser'}
            </button>
          </div>
        </>
      ) : (
        <div className="p-4" style={{
          border: `1px solid ${candidature.status === 'approved' ? 'rgba(26,92,26,0.3)' : 'rgba(139,26,26,0.3)'}`,
          backgroundColor: candidature.status === 'approved' ? 'rgba(26,92,26,0.06)' : 'rgba(139,26,26,0.06)',
        }}>
          <div className="label-display mb-1" style={{
            color: candidature.status === 'approved' ? '#6ab86a' : 'rgba(200,80,80,0.8)',
            fontSize: '0.65rem',
          }}>
            Dossier {candidature.status === 'approved' ? 'validé' : 'refusé'}
            {candidature.statusAt && ` le ${new Date(candidature.statusAt).toLocaleDateString('fr-FR')}`}
          </div>
          {candidature.statusNote && (
            <p className="body-text mt-1" style={{ color: 'rgba(240,230,200,0.5)', fontSize: '0.85rem' }}>
              {candidature.statusNote}
            </p>
          )}

          {state === 'error' && (
            <p className="label-display mt-2" style={{ color: 'var(--rust)' }}>{error}</p>
          )}

          <div className="flex gap-3 flex-wrap mt-3">
            <button
              onClick={() => decide('pending')}
              disabled={state === 'loading'}
              style={{
                padding: '5px 14px', border: '1px solid rgba(184,134,11,0.3)',
                backgroundColor: 'transparent', color: 'rgba(184,134,11,0.6)',
                fontFamily: 'var(--font-display)', fontSize: '0.72rem',
                letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer',
              }}
            >
              {state === 'loading' ? '…' : 'Remettre en attente'}
            </button>
            {candidature.status === 'rejected' && (
              <button
                onClick={() => decide('approved')}
                disabled={state === 'loading'}
                style={{
                  padding: '5px 14px', border: '1px solid rgba(26,92,26,0.4)',
                  backgroundColor: 'transparent', color: 'rgba(106,184,106,0.7)',
                  fontFamily: 'var(--font-display)', fontSize: '0.72rem',
                  letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer',
                }}
              >
                {state === 'loading' ? '…' : '✓ Valider quand même'}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
