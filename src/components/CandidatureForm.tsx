'use client'

import { useState, useRef } from 'react'
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

  const [formState, setFormState]   = useState<FormState>('idle')
  const [formError, setFormError]   = useState('')

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
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: cfxUsername.trim() }),
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
      prenom:       fd.get('prenom')       as string,
      nom:          fd.get('nom')          as string,
      age:          fd.get('age')          as string,
      ville:        fd.get('ville')        as string,
      metier:       fd.get('metier')       as string,
      histoire:     fd.get('histoire')     as string,
      experience:   fd.get('experience')   as string,
      motivation:   fd.get('motivation')   as string,
      discordName,
      steamId:      steamData?.id       ?? '',
      steamName:    steamData?.name     ?? '',
      cfxreUsername: cfxreData?.username ?? '',
    }

    try {
      const res = await fetch('/api/candidatures', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
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
    <form onSubmit={handleSubmit} className="space-y-6">

      {/* ── Liaison des comptes ─────────────────────── */}
      <div
        className="p-5 space-y-4"
        style={{ border: '1px solid var(--border)', backgroundColor: 'rgba(232,213,163,0.15)' }}
      >
        <div className="label-display" style={{ color: 'var(--rust)', letterSpacing: '0.2em' }}>
          Liaison des comptes — obligatoire
        </div>

        {/* Discord */}
        <AccountRow
          label="Discord"
          linked
          avatar={discordAvatar}
          name={discordName}
          badge="Connecté"
          badgeColor="#1a5c1a"
        />

        {/* Steam */}
        {steamData ? (
          <AccountRow
            label="Steam"
            linked
            avatar={steamData.avatar}
            name={steamData.name}
            badge={steamData.ownsRdr2 ? 'RDR2 détecté' : 'Profil vérifié'}
            badgeColor={steamData.ownsRdr2 ? '#1a5c1a' : 'var(--rust)'}
            note={!steamData.ownsRdr2 ? 'Red Dead Redemption II non détecté dans votre bibliothèque' : undefined}
          />
        ) : (
          <div className="flex items-center gap-4 py-2">
            <div
              style={{ width: 40, height: 40, borderRadius: '50%', border: '2px dashed var(--border)', backgroundColor: 'rgba(232,213,163,0.3)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <span className="label-display" style={{ color: 'var(--ink-40)', fontSize: '0.65rem' }}>?</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="label-display" style={{ color: 'var(--ink)', fontSize: '0.75rem' }}>Steam</span>
                <span className="badge" style={{ backgroundColor: 'rgba(139,58,30,0.12)', color: 'var(--rust)', border: '1px solid rgba(139,58,30,0.3)' }}>
                  Non lié
                </span>
              </div>
              <p className="body-text mb-2" style={{ fontSize: '0.82rem', color: 'var(--ink-40)' }}>
                Profil public requis — Red Dead Redemption II requis
              </p>
              <a href="/api/auth/steam" className="btn-primary" style={{ fontSize: '0.82rem', padding: '6px 16px' }}>
                Lier Steam
              </a>
            </div>
          </div>
        )}

        {/* CFX.re */}
        {cfxreData ? (
          <AccountRow
            label="CFX.re"
            linked
            avatar={cfxreData.avatar}
            name={cfxreData.name || cfxreData.username}
            badge="Vérifié"
            badgeColor="#1a5c1a"
          />
        ) : (
          <div className="py-2 space-y-3">
            <div className="flex items-center gap-2">
              <div
                style={{ width: 40, height: 40, borderRadius: '50%', border: '2px dashed var(--border)', backgroundColor: 'rgba(232,213,163,0.3)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <span className="label-display" style={{ color: 'var(--ink-40)', fontSize: '0.65rem' }}>?</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="label-display" style={{ color: 'var(--ink)', fontSize: '0.75rem' }}>CFX.re</span>
                  <span className="badge" style={{ backgroundColor: 'rgba(139,58,30,0.12)', color: 'var(--rust)', border: '1px solid rgba(139,58,30,0.3)' }}>
                    Non vérifié
                  </span>
                </div>
              </div>
            </div>

            <div
              className="p-3"
              style={{ backgroundColor: 'rgba(184,134,11,0.08)', border: '1px solid rgba(184,134,11,0.25)' }}
            >
              <p className="label-display mb-1" style={{ color: 'var(--ink-20)', fontSize: '0.7rem' }}>
                Code de vérification
              </p>
              <p className="body-text mb-2" style={{ fontSize: '0.85rem' }}>
                Ajoutez ce code à votre bio sur{' '}
                <a href="https://forum.cfx.re" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--rust)' }}>
                  forum.cfx.re
                </a>{' '}
                (Préférences → Profil → À propos de moi), puis cliquez sur Vérifier.
              </p>
              <div
                className="text-center py-2 px-4"
                style={{ fontFamily: 'monospace', fontSize: '1.2rem', fontWeight: 700, letterSpacing: '0.2em', backgroundColor: 'rgba(232,213,163,0.5)', border: '1px solid var(--border)', color: 'var(--ink)', userSelect: 'all' }}
              >
                {cfxCode}
              </div>
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                className="form-input"
                placeholder="Votre pseudo forum.cfx.re"
                value={cfxUsername}
                onChange={e => setCfxUsername(e.target.value)}
                disabled={cfxState === 'loading'}
                style={{ flex: 1 }}
              />
              <button
                type="button"
                className="btn-secondary"
                onClick={verifyCfx}
                disabled={cfxState === 'loading' || !cfxUsername.trim()}
                style={{ whiteSpace: 'nowrap', flexShrink: 0 }}
              >
                {cfxState === 'loading' ? 'Vérification…' : 'Vérifier'}
              </button>
            </div>

            {cfxState === 'error' && (
              <p className="label-display" style={{ color: 'var(--rust)', fontSize: '0.8rem' }}>
                {cfxError}
              </p>
            )}
          </div>
        )}
      </div>

      {/* ── Personnage ──────────────────────────────── */}
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

      {!allLinked && (
        <p className="label-display text-center" style={{ color: 'var(--rust)', fontSize: '0.82rem' }}>
          Liez vos comptes Steam et CFX.re pour soumettre votre candidature.
        </p>
      )}

      {formState === 'error' && (
        <p className="label-display" style={{ color: 'var(--rust)' }}>
          Erreur : {formError}
        </p>
      )}

      <button
        type="submit"
        className="btn-primary"
        disabled={formState === 'loading' || !allLinked}
        style={{ width: '100%', justifyContent: 'center', opacity: !allLinked ? 0.5 : 1 }}
      >
        {formState === 'loading' ? 'Envoi en cours…' : 'Soumettre ma candidature'}
      </button>
    </form>
  )
}

function AccountRow({
  label, linked, avatar, name, badge, badgeColor, note,
}: {
  label: string
  linked: boolean
  avatar: string
  name: string
  badge: string
  badgeColor: string
  note?: string
}) {
  return (
    <div className="flex items-center gap-4 py-2">
      <div style={{ width: 40, height: 40, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: `2px solid ${badgeColor}`, position: 'relative' }}>
        {avatar ? (
          <Image src={avatar} alt={name} fill sizes="40px" style={{ objectFit: 'cover' }} unoptimized />
        ) : (
          <div style={{ width: '100%', height: '100%', backgroundColor: 'rgba(232,213,163,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span className="label-display" style={{ color: 'var(--ink-40)', fontSize: '0.7rem' }}>
              {name.slice(0, 1).toUpperCase()}
            </span>
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <span className="label-display" style={{ color: 'var(--ink)', fontSize: '0.75rem' }}>{label}</span>
          <span
            className="badge"
            style={{ backgroundColor: `${badgeColor}18`, color: badgeColor, border: `1px solid ${badgeColor}40` }}
          >
            {badge}
          </span>
        </div>
        <p className="body-text truncate" style={{ fontSize: '0.9rem', color: 'var(--ink-20)' }}>{name}</p>
        {note && (
          <p className="label-display mt-0.5" style={{ color: 'var(--rust)', fontSize: '0.72rem' }}>{note}</p>
        )}
      </div>
    </div>
  )
}
