import { notFound, redirect } from 'next/navigation'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { getCandidature } from '@/lib/kv'
import CandidatureReview from '@/components/CandidatureReview'

export default async function CandidatureDetailPage({ params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)
  if (!(session?.user as { isStaff?: boolean })?.isStaff) redirect('/espace-staff')

  const c = await getCandidature(params.id)
  if (!c) notFound()

  const fields = [
    { label: 'Prénom & Nom',  value: `${c.prenom} ${c.nom}` },
    { label: 'Âge',           value: `${c.age} ans` },
    { label: 'Ville natale',  value: c.ville },
    { label: 'Métier',        value: c.metier },
    { label: 'Discord',       value: c.discordName },
    { label: 'Steam',         value: `${c.steamName} (${c.steamId})` },
    { label: 'CFX.re',        value: c.cfxreUsername },
    { label: 'Soumis le',     value: new Date(c.createdAt).toLocaleString('fr-FR') },
  ]

  return (
    <div style={{ backgroundColor: '#140800', minHeight: '100vh' }}>
      <div className="container-narrow py-10">

        {/* Header */}
        <div className="mb-8">
          <Link href="/espace-staff/candidatures" className="label-display"
            style={{ color: 'rgba(184,134,11,0.5)', fontSize: '0.65rem' }}>
            ← Retour aux candidatures
          </Link>
          <h1 className="display-heading mt-1" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: 'var(--parchment)' }}>
            {c.prenom} {c.nom}
          </h1>
          <p className="body-text mt-1" style={{ color: 'rgba(240,230,200,0.35)', fontSize: '0.85rem' }}>
            ID : {c.id}
          </p>
        </div>

        <div className="space-y-6">

          {/* Infos */}
          <div className="p-5" style={{ border: '1px solid rgba(184,134,11,0.2)', backgroundColor: 'rgba(240,230,200,0.02)' }}>
            <div className="label-display mb-4" style={{ color: 'rgba(184,134,11,0.6)', fontSize: '0.65rem' }}>
              Identité & Comptes
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {fields.map(f => (
                <div key={f.label} className="p-3"
                  style={{ border: '1px solid rgba(184,134,11,0.12)', backgroundColor: 'rgba(184,134,11,0.03)' }}>
                  <div className="label-display mb-1" style={{ color: 'rgba(240,230,200,0.25)', fontSize: '0.6rem' }}>{f.label}</div>
                  <div className="section-heading" style={{ color: 'var(--parchment)', fontSize: '0.9rem' }}>{f.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Textes */}
          {[
            { label: 'Histoire du personnage', value: c.histoire },
            { label: 'Expérience RP',          value: c.experience },
            { label: 'Motivation',             value: c.motivation },
          ].map(f => (
            <div key={f.label} className="p-5"
              style={{ border: '1px solid rgba(184,134,11,0.2)', backgroundColor: 'rgba(240,230,200,0.02)' }}>
              <div className="label-display mb-3" style={{ color: 'rgba(184,134,11,0.6)', fontSize: '0.65rem' }}>
                {f.label}
              </div>
              <p className="body-text" style={{ color: 'rgba(240,230,200,0.7)', fontSize: '0.92rem', whiteSpace: 'pre-wrap', lineHeight: 1.7 }}>
                {f.value}
              </p>
            </div>
          ))}

          {/* Décision */}
          <div className="p-5" style={{ border: '1px solid rgba(184,134,11,0.3)', backgroundColor: 'rgba(184,134,11,0.04)' }}>
            <div className="label-display mb-4" style={{ color: 'var(--gold)', fontSize: '0.65rem' }}>
              Décision du staff
            </div>
            <CandidatureReview candidature={c} />
          </div>
        </div>
      </div>
    </div>
  )
}
