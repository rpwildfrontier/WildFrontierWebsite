'use client'

import { useState } from 'react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function CandidatureForm() {
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('loading')
    setErrorMsg('')

    const fd = new FormData(e.currentTarget)
    const payload = {
      prenom:      fd.get('prenom')      as string,
      nom:         fd.get('nom')         as string,
      age:         fd.get('age')         as string,
      ville:       fd.get('ville')       as string,
      metier:      fd.get('metier')      as string,
      histoire:    fd.get('histoire')    as string,
      experience:  fd.get('experience')  as string,
      motivation:  fd.get('motivation')  as string,
      discordName: fd.get('discordName') as string,
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
      setState('success')
    } catch (err) {
      setState('error')
      setErrorMsg(err instanceof Error ? err.message : 'Erreur inconnue')
    }
  }

  if (state === 'success') {
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
          <label className="form-label">Votre pseudo Discord</label>
          <input name="discordName" type="text" className="form-input" placeholder="Nom#0000" />
        </div>
      </div>

      <div>
        <label className="form-label">Ville de naissance (lore) *</label>
        <input name="ville" type="text" className="form-input" placeholder="Ex : St Denis, Blackwater..." required />
      </div>

      <div>
        <label className="form-label">Métier déclaré à l&apos;arrivée *</label>
        <input name="metier" type="text" className="form-input" placeholder="Ex : Chasseur, Fermier, Médecin..." required />
      </div>

      <div>
        <label className="form-label">Histoire du personnage * (min. 300 mots)</label>
        <textarea
          name="histoire"
          className="form-input"
          placeholder="Racontez l'histoire de votre personnage : d'où vient-il, qu'a-t-il vécu, pourquoi arrive-t-il dans le comté..."
          required
          style={{ resize: 'vertical', minHeight: '180px', lineHeight: '1.65' }}
        />
      </div>

      <div>
        <label className="form-label">Votre expérience en RP *</label>
        <textarea
          name="experience"
          className="form-input"
          placeholder="Décrivez votre expérience en roleplay (serveurs, durée, rôles joués)..."
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

      {state === 'error' && (
        <p className="label-display" style={{ color: 'var(--rust)' }}>
          Erreur : {errorMsg}
        </p>
      )}

      <button
        type="submit"
        className="btn-primary"
        disabled={state === 'loading'}
        style={{ width: '100%', justifyContent: 'center' }}
      >
        {state === 'loading' ? 'Envoi en cours...' : 'Soumettre ma candidature'}
      </button>
    </form>
  )
}
