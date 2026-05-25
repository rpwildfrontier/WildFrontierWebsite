'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

type Entry = {
  cfxreId:       string
  cfxreUsername: string
  discordName:   string
  approvedAt:    string
  approvedBy?:   string
}

export default function WhitelistPage() {
  const [entries,  setEntries]  = useState<Entry[]>([])
  const [loading,  setLoading]  = useState(true)
  const [removing, setRemoving] = useState<string | null>(null)

  async function load() {
    setLoading(true)
    try {
      const res = await fetch('/api/staff/whitelist')
      if (res.ok) setEntries(await res.json())
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [])

  async function handleRemove(cfxreId: string, username: string) {
    if (!confirm(`Retirer ${username} de la whitelist ?`)) return
    setRemoving(cfxreId)
    try {
      await fetch(`/api/staff/whitelist/${cfxreId}`, { method: 'DELETE' })
      setEntries(prev => prev.filter(e => e.cfxreId !== cfxreId))
    } finally {
      setRemoving(null)
    }
  }

  return (
    <div style={{ backgroundColor: 'var(--paper)', minHeight: '100vh' }}>
      <div className="container-wide py-10">

        {/* Header */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <div>
            <Link href="/espace-staff" className="label-display"
              style={{ color: 'var(--gold)', fontSize: '0.65rem' }}>
              ← Espace Staff
            </Link>
            <h1 className="display-heading mt-1"
              style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: 'var(--ink)' }}>
              Whitelist du serveur
            </h1>
          </div>
          <div className="p-3 text-center"
            style={{ border: '1px solid rgba(42,54,68,0.20)', backgroundColor: 'var(--paper-card)', minWidth: 80 }}>
            <div className="section-heading" style={{ color: 'var(--gold)', fontSize: '1.5rem' }}>
              {loading ? '…' : entries.length}
            </div>
            <div className="label-display" style={{ color: 'var(--ink-40)', fontSize: '0.6rem' }}>
              Joueurs
            </div>
          </div>
        </div>

        {/* Info endpoint */}
        <div className="p-4 mb-6"
          style={{ border: '1px dashed rgba(42,54,68,0.20)', backgroundColor: 'var(--paper-warm)' }}>
          <div className="label-display mb-1" style={{ color: 'var(--gold)', fontSize: '0.6rem' }}>
            Endpoint RedM
          </div>
          <code className="body-text" style={{ color: 'var(--ink-60)', fontSize: '0.82rem', fontFamily: 'monospace' }}>
            GET /api/whitelist
          </code>
          <span className="label-display ml-4" style={{ color: 'var(--ink-40)', fontSize: '0.62rem' }}>
            Header : X-Whitelist-Secret (si WHITELIST_API_SECRET configuré)
          </span>
        </div>

        {/* Liste */}
        {loading ? (
          <div className="text-center py-16">
            <p className="body-text" style={{ color: 'var(--ink-40)' }}>Chargement…</p>
          </div>
        ) : entries.length === 0 ? (
          <div className="text-center py-16">
            <p className="body-text" style={{ color: 'var(--ink-40)' }}>
              Aucun joueur whitelisté. Les candidatures validées sont ajoutées automatiquement.
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            {entries.map(e => (
              <div key={e.cfxreId}
                className="flex items-center gap-4 p-4"
                style={{ border: '1px solid rgba(42,54,68,0.20)', backgroundColor: 'var(--paper-card)' }}>

                <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#3ba55d', flexShrink: 0 }} />

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="section-heading" style={{ color: 'var(--ink)', fontSize: '0.95rem' }}>
                      {e.cfxreUsername}
                    </span>
                    <span className="label-display" style={{ color: 'var(--gold)', fontSize: '0.6rem' }}>
                      fivem:{e.cfxreId}
                    </span>
                  </div>
                  <div className="flex gap-4 mt-0.5 flex-wrap">
                    <span className="body-text" style={{ color: 'var(--ink-60)', fontSize: '0.75rem' }}>
                      Discord : {e.discordName}
                    </span>
                    <span className="body-text" style={{ color: 'var(--ink-40)', fontSize: '0.75rem' }}>
                      Validé le {new Date(e.approvedAt).toLocaleDateString('fr-FR')}
                      {e.approvedBy ? ` par ${e.approvedBy}` : ''}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleRemove(e.cfxreId, e.cfxreUsername)}
                  disabled={removing === e.cfxreId}
                  style={{
                    padding: '5px 14px', border: '1px solid rgba(139,26,26,0.5)',
                    backgroundColor: 'transparent', color: '#8b1a1a',
                    fontFamily: 'var(--font-display)', fontSize: '0.72rem',
                    letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer',
                    flexShrink: 0,
                  }}>
                  {removing === e.cfxreId ? '…' : 'Retirer'}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
