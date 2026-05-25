import { notFound, redirect } from 'next/navigation'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { getCandidature, listCandidatures, isWhitelisted } from '@/lib/kv'
import CandidatureReview from '@/components/CandidatureReview'

export default async function CandidatureDetailPage({ params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)
  if (!(session?.user as { isStaff?: boolean })?.isStaff) redirect('/espace-staff')

  const [c, all] = await Promise.all([
    getCandidature(params.id),
    listCandidatures(),
  ])
  if (!c) notFound()

  const whitelisted = c.cfxreId ? await isWhitelisted(c.cfxreId) : false

  // Prev / next navigation (sorted most recent first)
  const sorted  = all.slice().sort((a, b) => b.createdAt.localeCompare(a.createdAt))
  const idx     = sorted.findIndex(x => x.id === c.id)
  const prevId  = idx > 0                  ? sorted[idx - 1].id : null
  const nextId  = idx < sorted.length - 1  ? sorted[idx + 1].id : null

  const fields = [
    { label: 'Prénom & Nom',   value: `${c.prenom} ${c.nom}` },
    { label: 'Âge',            value: `${c.age} ans` },
    { label: 'Ville natale',   value: c.ville },
    { label: 'Métier',         value: c.metier },
    { label: 'Discord',        value: c.discordName },
    { label: 'Steam',          value: c.steamName ? `${c.steamName} (${c.steamId})` : c.steamId },
    { label: 'CFX.re',         value: c.cfxreUsername },
    { label: 'FiveM ID',       value: c.cfxreId ? `fivem:${c.cfxreId}` : '—' },
    { label: 'Soumis le',      value: new Date(c.createdAt).toLocaleString('fr-FR') },
  ]

  const statusColors = { pending: '#7a5e00', approved: '#1a5c1a', rejected: '#8b1a1a' }
  const statusLabels = { pending: 'En attente', approved: 'Validée', rejected: 'Refusée' }

  return (
    <div style={{ backgroundColor: 'var(--paper)', minHeight: '100vh' }}>
      <div className="container-narrow py-10">

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between flex-wrap gap-3 mb-2">
            <Link href="/espace-staff/candidatures" className="label-display"
              style={{ color: 'var(--gold)', fontSize: '0.65rem' }}>
              ← Candidatures
            </Link>
            {/* Prev / next */}
            <div className="flex gap-2">
              {prevId && (
                <Link href={`/espace-staff/candidatures/${prevId}`} className="label-display"
                  style={{ color: 'var(--gold)', fontSize: '0.62rem', textDecoration: 'none', padding: '4px 10px', border: '1px solid rgba(42,54,68,0.20)' }}>
                  ← Précédent
                </Link>
              )}
              {nextId && (
                <Link href={`/espace-staff/candidatures/${nextId}`} className="label-display"
                  style={{ color: 'var(--gold)', fontSize: '0.62rem', textDecoration: 'none', padding: '4px 10px', border: '1px solid rgba(42,54,68,0.20)' }}>
                  Suivant →
                </Link>
              )}
            </div>
          </div>

          <div className="flex items-start gap-4 flex-wrap">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="display-heading" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: 'var(--ink)' }}>
                  {c.prenom} {c.nom}
                </h1>
                <span style={{
                  fontSize: '0.65rem', padding: '3px 10px',
                  fontFamily: 'var(--font-display)', letterSpacing: '0.08em', textTransform: 'uppercase',
                  border: `1px solid ${statusColors[c.status]}55`,
                  color: statusColors[c.status],
                }}>
                  {statusLabels[c.status]}
                </span>
                {whitelisted && (
                  <span style={{
                    fontSize: '0.62rem', padding: '3px 10px',
                    fontFamily: 'var(--font-display)', letterSpacing: '0.08em', textTransform: 'uppercase',
                    border: '1px solid rgba(59,165,93,0.4)', color: '#3ba55d',
                  }}>
                    Whitelisté
                  </span>
                )}
              </div>
              <p className="body-text mt-1" style={{ color: 'var(--ink-40)', fontSize: '0.8rem' }}>
                ID : {c.id}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-5">

          {/* Identité & comptes */}
          <div className="p-5" style={{ border: '1px solid rgba(42,54,68,0.20)', backgroundColor: 'var(--paper-card)' }}>
            <div className="label-display mb-4" style={{ color: 'var(--gold)', fontSize: '0.65rem' }}>
              Identité & Comptes
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {fields.map(f => (
                <div key={f.label} className="p-3"
                  style={{ border: '1px solid rgba(42,54,68,0.20)', backgroundColor: 'var(--paper-warm)' }}>
                  <div className="label-display mb-1" style={{ color: 'var(--ink-40)', fontSize: '0.58rem' }}>{f.label}</div>
                  <div className="section-heading" style={{ color: 'var(--ink)', fontSize: '0.88rem' }}>{f.value}</div>
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
              style={{ border: '1px solid rgba(42,54,68,0.20)', backgroundColor: 'var(--paper-card)' }}>
              <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                <div className="label-display" style={{ color: 'var(--gold)', fontSize: '0.65rem' }}>{f.label}</div>
                <div className="label-display" style={{ color: 'var(--ink-40)', fontSize: '0.6rem' }}>
                  {f.value.split(/\s+/).filter(Boolean).length} mots
                </div>
              </div>
              <p className="body-text" style={{ color: 'var(--ink)', fontSize: '0.9rem', whiteSpace: 'pre-wrap', lineHeight: 1.75 }}>
                {f.value}
              </p>
            </div>
          ))}

          {/* Décision */}
          <div className="p-5" style={{ border: '1px solid rgba(42,54,68,0.20)', backgroundColor: 'var(--paper-warm)' }}>
            <div className="label-display mb-4" style={{ color: 'var(--gold)', fontSize: '0.65rem' }}>
              Décision du staff
            </div>
            <CandidatureReview candidature={c} whitelisted={whitelisted} />
          </div>

        </div>
      </div>
    </div>
  )
}
