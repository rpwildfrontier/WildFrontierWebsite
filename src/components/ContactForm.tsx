'use client'

import { useState } from 'react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('loading')
    setErrorMsg('')

    const fd = new FormData(e.currentTarget)
    const payload = {
      name:    fd.get('name')    as string,
      discord: fd.get('discord') as string,
      type:    fd.get('type')    as string,
      subject: fd.get('subject') as string,
      message: fd.get('message') as string,
      link:    fd.get('link')    as string,
    }

    try {
      const res = await fetch('/api/contact', {
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
        <div className="official-seal mx-auto mb-4" style={{ width: '56px', height: '56px', color: '#1a5c1a', borderColor: '#1a5c1a', fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '1.1rem' }}>
          ✓
        </div>
        <h3 className="section-heading mb-2" style={{ color: '#1a5c1a' }}>Message envoyé</h3>
        <p className="body-text">Le staff a reçu votre message et vous répondra dans les délais indiqués.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="form-label">Votre nom / pseudo *</label>
          <input name="name" type="text" className="form-input" placeholder="Nom ou pseudo Discord" required />
        </div>
        <div>
          <label className="form-label">Pseudo Discord *</label>
          <input name="discord" type="text" className="form-input" placeholder="Nom#0000" required />
        </div>
      </div>

      <div>
        <label className="form-label">Type de demande *</label>
        <select name="type" className="form-input" required>
          <option value="">— Sélectionner —</option>
          <option value="candidature">Question sur une candidature</option>
          <option value="technique">Problème technique</option>
          <option value="signalement">Signalement</option>
          <option value="whitelist">Demande de rôle whitelist</option>
          <option value="autre">Autre</option>
        </select>
      </div>

      <div>
        <label className="form-label">Objet *</label>
        <input name="subject" type="text" className="form-input" placeholder="Résumé de votre demande" required />
      </div>

      <div>
        <label className="form-label">Message *</label>
        <textarea name="message" className="form-input" placeholder="Décrivez votre demande en détail..." required style={{ resize: 'vertical', minHeight: '140px', lineHeight: '1.65' }} />
      </div>

      <div>
        <label className="form-label">Pièce jointe (lien optionnel)</label>
        <input name="link" type="text" className="form-input" placeholder="Lien vers une capture d'écran, document..." />
      </div>

      <div className="flex items-start gap-3">
        <input type="checkbox" className="mt-1" id="consent" required />
        <label htmlFor="consent" className="body-text" style={{ cursor: 'pointer', fontSize: '0.95rem' }}>
          J&apos;accepte que mes informations soient utilisées pour traiter ma demande.
        </label>
      </div>

      {state === 'error' && (
        <p className="label-display" style={{ color: 'var(--rust)' }}>
          Erreur : {errorMsg}
        </p>
      )}

      <div className="flex justify-between items-center">
        <p className="label-display" style={{ color: 'var(--ink-20)' }}>* Champs obligatoires</p>
        <button type="submit" className="btn-primary" disabled={state === 'loading'}>
          {state === 'loading' ? 'Envoi en cours...' : 'Envoyer le message'}
        </button>
      </div>
    </form>
  )
}
