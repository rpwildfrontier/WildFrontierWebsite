'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import type { SteamData, CfxreData } from '@/app/candidatures/page'

type Props = {
  discordName:   string
  discordAvatar: string
  steamData:     SteamData | null
  cfxreData:     CfxreData | null
  cfxCode:       string
}

type FormState = 'idle' | 'loading' | 'success' | 'error'
type CfxState  = 'idle' | 'loading' | 'error'

export default function CandidatureForm({ discordName, discordAvatar, steamData, cfxreData, cfxCode }: Props) {
  const router = useRouter()

  const [formState, setFormState] = useState<FormState>('idle')
  const [formError, setFormError] = useState('')

  const [cfxUsername, setCfxUsername] = useState('')
  const [cfxState, setCfxState]       = useState<CfxState>('idle')
  const [cfxError, setCfxError]       = useState('')

  const allLinked = !!steamData && !!cfxreData

  async function verifyCfx() {
    if (!cfxUsername.trim()) return
    setCfxState('loading')
    setCfxError('')
    try {
      const res  = await fetch('/api/auth/cfxre/verify', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ username: cfxUsername.trim() }),
      })
      const data = await res.json()
      if (!res.ok) {
        setCfxState('error')
        setCfxError(data.error ?? 'Erreur de vérification')
        return
      }
      setCfxState('idle')
      router.refresh()
    } catch {
      setCfxState('error')
      setCfxError('Erreur réseau, réessayez.')
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!allLinked) return
    setFormState('loading')
    setFormError('')

    const fd = new FormData(e.currentTarget)
    const payload = {
      prenom:        fd.get('prenom')     as string,
      nom:           fd.get('nom')        as string,
      age:           fd.get('age')        as string,
      ville:         fd.get('ville')      as string,
      metier:        fd.get('metier')     as string,
      histoire:      fd.get('histoire')   as string,
      experience:    fd.get('experience') as string,
      motivation:    fd.get('motivation') as string,
      discordName,
      steamId:       steamData?.id        ?? '',
      steamName:     steamData?.name      ?? '',
      cfxreUsername: cfxreData?.username  ?? '',
    }

    try {
      const res = await fetch('/api/candidatures', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(payload),
      })
      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error ?? 'Erreur serveur')
      }
      setFormState('success')
    } catch (err) {
      setFormState('error')
      setFormError(err instanceof Error ? err.message : 'Erreur inconnue')
    }
  }

  if (formState === 'success') {
    return (
      <div
        className="p-8 text-center"
        style={{ border: '2px solid rgba(26,92,26,0.3)', backgroundColor: 'rgba(26,92,26,0.06)' }}
      >
        <div
          className="official-seal mx-auto mb-4"
          style={{ width: '56px', height: '56px', color: '#1a5c1a', borderColor: '#1a5c1a', fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '1.1rem' }}
        >
          ✓
        </div>
        <h3 className="section-heading mb-2" style={{ color: '#1a5c1a' }}>Candidature soumise</h3>
        <p className="body-text mb-2">
          Votre dossier a été transmis au staff. Vous recevrez une réponse sur Discord dans les 48h à 7 jours.
        </p>
        <p className="label-display" style={{ color: 'var(--ink-20)' }}>
          Ne soumettez pas de second dossier — cela ralentit le traitement.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">

      {/* ── 3 Account Cards ─────────────────────────── */}
      <div>
        <div className="label-display mb-4" style={{ color: 'var(--rust)', letterSpacing: '0.2em' }}>
          Étape 1 — Lier vos comptes
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

          {/* Discord — always linked */}
          <ConnectedCard
            service="Discord"
            avatar={discordAvatar}
            name={discordName}
          />

          {/* Steam */}
          {steamData ? (
            <ConnectedCard
              service="Steam"
              avatar={steamData.avatar}
              name={steamData.name}
            />
          ) : (
            <LinkCard
              service="Steam"
              hint="Profil public requis"
              action={
                <a
                  href="/api/auth/steam"
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem' }}
                >
                  Connecter Steam
                </a>
              }
            />
          )}

          {/* CFX.re */}
          {cfxreData ? (
            <ConnectedCard
              service="CFX.re"
              avatar={cfxreData.avatar}
              name={cfxreData.name || cfxreData.username}
            />
          ) : (
            <LinkCard
              service="CFX.re"
              hint="Ajoutez le code à votre bio"
              action={
                <div className="space-y-2 w-full">
                  <div
                    className="text-center py-1.5"
                    style={{
                      fontFamily: 'monospace',
                      fontSize: '1rem',
                      fontWeight: 700,
                      letterSpacing: '0.18em',
                      backgroundColor: 'rgba(232,213,163,0.6)',
                      border: '1px solid var(--border)',
                      color: 'var(--ink)',
                      userSelect: 'all',
                    }}
                  >
                    {cfxCode}
                  </div>
                  <p className="body-text" style={{ fontSize: '0.75rem', color: 'var(--ink-40)', lineHeight: 1.4 }}>
                    Collez ce code dans votre bio sur{' '}
                    <a href="https://forum.cfx.re" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--rust)' }}>
                      forum.cfx.re
                    </a>
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Pseudo cfx.re"
                      value={cfxUsername}
                      onChange={e => setCfxUsername(e.target.value)}
                      disabled={cfxState === 'loading'}
                      style={{ flex: 1, fontSize: '0.85rem', padding: '6px 10px' }}
                    />
                    <button
                      type="button"
                      className="btn-secondary"
                      onClick={verifyCfx}
                      disabled={cfxState === 'loading' || !cfxUsername.trim()}
                      style={{ whiteSpace: 'nowrap', flexShrink: 0, fontSize: '0.82rem', padding: '6px 12px' }}
                    >
                      {cfxState === 'loading' ? '…' : 'Vérifier'}
                    </button>
                  </div>
                  {cfxState === 'error' && (
                    <p className="label-display" style={{ color: 'var(--rust)', fontSize: '0.72rem' }}>
                      {cfxError}
                    </p>
                  )}
                </div>
              }
            />
          )}
        </div>

        {!allLinked && (
          <p className="label-display mt-3 text-center" style={{ color: 'var(--ink-40)', fontSize: '0.78rem' }}>
            Connectez vos trois comptes pour débloquer le formulaire.
          </p>
        )}
      </div>

      {/* ── Personnage ──────────────────────────────── */}
      <fieldset disabled={!allLinked} style={{ opacity: allLinked ? 1 : 0.45, transition: 'opacity 0.2s', border: 'none', padding: 0, margin: 0 }}>
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="form-label">Prénom du personnage *</label>
              <input name="prenom" type="text" className="form-input" placeholder="Prénom" required />
            </div>
            <div>
              <label className="form-label">Nom de famille *</label>
              <input name="nom" type="text" className="form-input" placeholder="Nom" required />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="form-label">Âge du personnage *</label>
              <input name="age" type="number" className="form-input" placeholder="Ex : 32" min="18" max="80" required />
            </div>
            <div>
              <label className="form-label">Ville de naissance (lore) *</label>
              <input name="ville" type="text" className="form-input" placeholder="Ex : St Denis, Blackwater…" required />
            </div>
          </div>

          <div>
            <label className="form-label">Métier déclaré à l&apos;arrivée *</label>
            <input name="metier" type="text" className="form-input" placeholder="Ex : Chasseur, Fermier, Médecin…" required />
          </div>

          <div>
            <label className="form-label">Histoire du personnage * (min. 300 mots)</label>
            <textarea
              name="histoire"
              className="form-input"
              placeholder="Racontez l'histoire de votre personnage : d'où vient-il, qu'a-t-il vécu, pourquoi arrive-t-il dans le comté…"
              required
              style={{ resize: 'vertical', minHeight: '180px', lineHeight: '1.65' }}
            />
          </div>

          <div>
            <label className="form-label">Votre expérience en RP *</label>
            <textarea
              name="experience"
              className="form-input"
              placeholder="Décrivez votre expérience en roleplay (serveurs, durée, rôles joués)…"
              required
              style={{ resize: 'vertical', minHeight: '100px', lineHeight: '1.65' }}
            />
          </div>

          <div>
            <label className="form-label">Pourquoi Wild Frontier RP ? *</label>
            <textarea
              name="motivation"
              className="form-input"
              placeholder="Qu'est-ce qui vous attire dans ce serveur ? Qu'attendez-vous de cette expérience ?"
              required
              style={{ resize: 'vertical', minHeight: '100px', lineHeight: '1.65' }}
            />
          </div>

          <div>
            <label className="form-label" style={{ display: 'flex', alignItems: 'start', gap: '12px', cursor: 'pointer' }}>
              <input type="checkbox" required style={{ marginTop: '4px', flexShrink: 0 }} />
              <span className="body-text" style={{ fontSize: '0.95rem', textTransform: 'none', letterSpacing: 0 }}>
                J&apos;ai lu intégralement le règlement de Wild Frontier RP et j&apos;accepte de m&apos;y conformer.
              </span>
            </label>
          </div>
        </div>
      </fieldset>

      {formState === 'error' && (
        <p className="label-display" style={{ color: 'var(--rust)' }}>
          Erreur : {formError}
        </p>
      )}

      <button
        type="submit"
        className="btn-primary"
        disabled={formState === 'loading' || !allLinked}
        style={{ width: '100%', justifyContent: 'center', opacity: !allLinked ? 0.4 : 1 }}
      >
        {formState === 'loading' ? 'Envoi en cours…' : 'Soumettre ma candidature'}
      </button>
    </form>
  )
}

/* ── Sub-components ──────────────────────────────────── */

function ConnectedCard({ service, avatar, name }: { service: string; avatar: string; name: string }) {
  return (
    <div
      className="p-4 text-center"
      style={{
        border: '1.5px solid rgba(26,92,26,0.4)',
        backgroundColor: 'rgba(26,92,26,0.04)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      <div style={{ position: 'relative', width: 56, height: 56, borderRadius: '50%', overflow: 'hidden', border: '2px solid rgba(26,92,26,0.5)', flexShrink: 0 }}>
        {avatar ? (
          <Image src={avatar} alt={name} fill sizes="56px" style={{ objectFit: 'cover' }} unoptimized />
        ) : (
          <div style={{ width: '100%', height: '100%', backgroundColor: 'rgba(26,92,26,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '1.2rem', color: 'rgba(26,92,26,0.6)' }}>
              {name.slice(0, 1).toUpperCase()}
            </span>
          </div>
        )}
      </div>
      <div>
        <p className="label-display" style={{ color: 'var(--ink-20)', fontSize: '0.68rem', marginBottom: '2px' }}>{service}</p>
        <p className="body-text" style={{ fontSize: '0.88rem', color: 'var(--ink)', fontWeight: 600 }}>{name}</p>
      </div>
      <span
        className="badge"
        style={{ backgroundColor: 'rgba(26,92,26,0.12)', color: '#1a5c1a', border: '1px solid rgba(26,92,26,0.3)', fontSize: '0.7rem' }}
      >
        Connecté
      </span>
    </div>
  )
}

function LinkCard({ service, hint, action }: { service: string; hint: string; action: React.ReactNode }) {
  return (
    <div
      className="p-4"
      style={{
        border: '1.5px dashed var(--border)',
        backgroundColor: 'rgba(232,213,163,0.08)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      <div style={{ width: 56, height: 56, borderRadius: '50%', border: '2px dashed var(--border)', backgroundColor: 'rgba(232,213,163,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--ink-40)', lineHeight: 1 }}>?</span>
      </div>
      <div className="text-center">
        <p className="label-display" style={{ color: 'var(--ink-20)', fontSize: '0.68rem', marginBottom: '2px' }}>{service}</p>
        <p className="body-text" style={{ fontSize: '0.78rem', color: 'var(--ink-40)' }}>{hint}</p>
      </div>
      <div style={{ width: '100%' }}>{action}</div>
    </div>
  )
}
