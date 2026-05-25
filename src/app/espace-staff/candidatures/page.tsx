import { redirect } from 'next/navigation'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { listCandidatures, type CandidatureStatus } from '@/lib/kv'

const STATUS_LABELS: Record<CandidatureStatus, string> = {
  pending:  'En attente',
  approved: 'Validée',
  rejected: 'Refusée',
}
const STATUS_COLORS: Record<CandidatureStatus, string> = {
  pending:  '#7a5e00',
  approved: '#1a5c1a',
  rejected: '#8b1a1a',
}
const STATUS_BG: Record<CandidatureStatus, string> = {
  pending:  'rgba(122,94,0,0.12)',
  approved: 'rgba(26,92,26,0.12)',
  rejected: 'rgba(139,26,26,0.12)',
}

export default async function StaffCandidaturesPage({
  searchParams,
}: {
  searchParams: { status?: string }
}) {
  const session = await getServerSession(authOptions)
  if (!(session?.user as { isStaff?: boolean })?.isStaff) redirect('/espace-staff')

  const filter     = (searchParams.status as CandidatureStatus | undefined)
  const candidatures = await listCandidatures(filter)

  const counts = {
    all:      (await listCandidatures()).length,
    pending:  (await listCandidatures('pending')).length,
    approved: (await listCandidatures('approved')).length,
    rejected: (await listCandidatures('rejected')).length,
  }

  return (
    <div style={{ backgroundColor: '#140800', minHeight: '100vh' }}>
      <div className="container-wide py-10">

        {/* Header */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <div>
            <Link href="/espace-staff" className="label-display"
              style={{ color: 'rgba(184,134,11,0.5)', fontSize: '0.65rem' }}>
              ← Espace Staff
            </Link>
            <h1 className="display-heading mt-1" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: 'var(--parchment)' }}>
              Candidatures
            </h1>
          </div>
          <div className="flex gap-2 flex-wrap">
            {([
              ['', 'Toutes', counts.all],
              ['pending',  'En attente', counts.pending],
              ['approved', 'Validées',   counts.approved],
              ['rejected', 'Refusées',   counts.rejected],
            ] as const).map(([val, label, count]) => (
              <Link key={val} href={val ? `?status=${val}` : '/espace-staff/candidatures'}
                style={{
                  padding:    '6px 14px',
                  border:     `1.5px solid ${(filter ?? '') === val ? 'rgba(184,134,11,0.6)' : 'rgba(184,134,11,0.2)'}`,
                  backgroundColor: (filter ?? '') === val ? 'rgba(184,134,11,0.1)' : 'transparent',
                  color:      (filter ?? '') === val ? 'var(--parchment)' : 'rgba(240,230,200,0.4)',
                  fontFamily: 'var(--font-display)',
                  fontSize:   '0.72rem',
                  letterSpacing: '0.08em',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                }}>
                {label} ({count})
              </Link>
            ))}
          </div>
        </div>

        {/* List */}
        {candidatures.length === 0 ? (
          <div className="text-center py-20">
            <p className="body-text" style={{ color: 'rgba(240,230,200,0.3)' }}>
              Aucune candidature {filter ? STATUS_LABELS[filter].toLowerCase() : ''}.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {candidatures.map(c => (
              <Link key={c.id} href={`/espace-staff/candidatures/${c.id}`}
                style={{ display: 'block', textDecoration: 'none' }}>
                <div className="flex items-center gap-4 p-4"
                  style={{ border: '1px solid rgba(184,134,11,0.2)', backgroundColor: 'rgba(240,230,200,0.02)',
                    transition: 'border-color 0.15s', cursor: 'pointer' }}>

                  {/* Status dot */}
                  <div style={{ width: 10, height: 10, borderRadius: '50%', flexShrink: 0,
                    backgroundColor: STATUS_COLORS[c.status] }} />

                  {/* Identité */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="section-heading" style={{ color: 'var(--parchment)', fontSize: '1rem' }}>
                        {c.prenom} {c.nom}
                      </span>
                      <span style={{
                        fontSize: '0.65rem', padding: '2px 10px',
                        fontFamily: 'var(--font-display)', letterSpacing: '0.08em', textTransform: 'uppercase',
                        border: `1px solid ${STATUS_COLORS[c.status]}55`,
                        backgroundColor: STATUS_BG[c.status],
                        color: STATUS_COLORS[c.status],
                      }}>
                        {STATUS_LABELS[c.status]}
                      </span>
                    </div>
                    <div className="flex gap-4 mt-1 flex-wrap">
                      <span className="body-text" style={{ color: 'rgba(240,230,200,0.4)', fontSize: '0.78rem' }}>
                        Discord : {c.discordName}
                      </span>
                      <span className="body-text" style={{ color: 'rgba(240,230,200,0.4)', fontSize: '0.78rem' }}>
                        CFX.re : {c.cfxreUsername}
                      </span>
                      <span className="body-text" style={{ color: 'rgba(240,230,200,0.4)', fontSize: '0.78rem' }}>
                        {c.metier}
                      </span>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="text-right flex-shrink-0">
                    <div className="label-display" style={{ color: 'rgba(240,230,200,0.25)', fontSize: '0.62rem' }}>
                      {new Date(c.createdAt).toLocaleDateString('fr-FR')}
                    </div>
                    <div className="label-display mt-0.5" style={{ color: 'rgba(184,134,11,0.5)', fontSize: '0.62rem' }}>
                      Voir →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
