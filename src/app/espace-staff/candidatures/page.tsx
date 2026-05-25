import { redirect } from 'next/navigation'
import Link from 'next/link'
import { Suspense } from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { listCandidatures, type CandidatureStatus } from '@/lib/kv'
import CandidatureSearch from '@/components/CandidatureSearch'

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
  searchParams: { status?: string; q?: string }
}) {
  const session = await getServerSession(authOptions)
  if (!(session?.user as { isStaff?: boolean })?.isStaff) redirect('/espace-staff')

  const filter = searchParams.status as CandidatureStatus | undefined
  const query  = (searchParams.q ?? '').toLowerCase().trim()

  // Single KV call — compute all counts in memory
  const all  = await listCandidatures()
  const counts = {
    all:      all.length,
    pending:  all.filter(c => c.status === 'pending').length,
    approved: all.filter(c => c.status === 'approved').length,
    rejected: all.filter(c => c.status === 'rejected').length,
  }

  let candidatures = filter ? all.filter(c => c.status === filter) : all
  if (query) {
    candidatures = candidatures.filter(c =>
      `${c.prenom} ${c.nom} ${c.discordName} ${c.cfxreUsername} ${c.metier}`.toLowerCase().includes(query)
    )
  }

  // Most recent first
  candidatures = candidatures.slice().sort((a, b) => b.createdAt.localeCompare(a.createdAt))

  return (
    <div style={{ backgroundColor: 'var(--paper)', minHeight: '100vh' }}>
      <div className="container-wide py-10">

        {/* Header */}
        <div className="mb-8">
          <Link href="/espace-staff" className="label-display"
            style={{ color: 'var(--gold)', fontSize: '0.65rem' }}>
            ← Espace Staff
          </Link>
          <div className="flex items-start justify-between flex-wrap gap-4 mt-1">
            <h1 className="display-heading" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: 'var(--ink)' }}>
              Candidatures
            </h1>
            <Suspense>
              <CandidatureSearch value={query} />
            </Suspense>
          </div>
        </div>

        {/* Filtres statut */}
        <div className="flex gap-2 flex-wrap mb-6">
          {([
            ['', 'Toutes', counts.all],
            ['pending',  'En attente', counts.pending],
            ['approved', 'Validées',   counts.approved],
            ['rejected', 'Refusées',   counts.rejected],
          ] as const).map(([val, label, count]) => {
            const active = (filter ?? '') === val
            return (
              <Link
                key={val}
                href={val ? `?status=${val}${query ? `&q=${encodeURIComponent(query)}` : ''}` : `/espace-staff/candidatures${query ? `?q=${encodeURIComponent(query)}` : ''}`}
                style={{
                  padding: '6px 14px',
                  border: `1.5px solid ${active ? 'rgba(42,54,68,0.20)' : 'rgba(42,54,68,0.20)'}`,
                  backgroundColor: active ? 'var(--paper-card)' : 'transparent',
                  color: active ? 'var(--ink)' : 'var(--ink-60)',
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.08em',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                }}
              >
                {label} ({count})
              </Link>
            )
          })}
        </div>

        {/* Liste */}
        {candidatures.length === 0 ? (
          <div className="text-center py-20">
            <p className="body-text" style={{ color: 'var(--ink-40)' }}>
              {query
                ? `Aucun résultat pour « ${query} »`
                : `Aucune candidature${filter ? ` ${STATUS_LABELS[filter].toLowerCase()}` : ''}.`}
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            {candidatures.map(c => (
              <Link key={c.id} href={`/espace-staff/candidatures/${c.id}`}
                style={{ display: 'block', textDecoration: 'none' }}>
                <div className="flex items-center gap-4 p-4"
                  style={{ border: '1px solid rgba(42,54,68,0.20)', backgroundColor: 'var(--paper-card)', transition: 'border-color 0.15s' }}>

                  <div style={{ width: 10, height: 10, borderRadius: '50%', flexShrink: 0, backgroundColor: STATUS_COLORS[c.status] }} />

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="section-heading" style={{ color: 'var(--ink)', fontSize: '1rem' }}>
                        {c.prenom} {c.nom}
                      </span>
                      <span style={{
                        fontSize: '0.62rem', padding: '2px 8px',
                        fontFamily: 'var(--font-display)', letterSpacing: '0.08em', textTransform: 'uppercase',
                        border: `1px solid ${STATUS_COLORS[c.status]}55`,
                        backgroundColor: STATUS_BG[c.status],
                        color: STATUS_COLORS[c.status],
                      }}>
                        {STATUS_LABELS[c.status]}
                      </span>
                    </div>
                    <div className="flex gap-4 mt-1 flex-wrap">
                      <span className="body-text" style={{ color: 'var(--ink-60)', fontSize: '0.75rem' }}>
                        {c.discordName}
                      </span>
                      <span className="body-text" style={{ color: 'var(--ink-60)', fontSize: '0.75rem' }}>
                        {c.cfxreUsername}
                        {c.cfxreId && <span style={{ color: 'var(--gold)', marginLeft: 4 }}>fivem:{c.cfxreId}</span>}
                      </span>
                      <span className="body-text" style={{ color: 'var(--ink-40)', fontSize: '0.75rem' }}>
                        {c.metier}
                      </span>
                    </div>
                  </div>

                  <div className="text-right flex-shrink-0">
                    <div className="label-display" style={{ color: 'var(--ink-40)', fontSize: '0.6rem' }}>
                      {new Date(c.createdAt).toLocaleDateString('fr-FR')}
                    </div>
                    <div className="label-display mt-0.5" style={{ color: 'var(--gold)', fontSize: '0.6rem' }}>
                      Voir →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-4">
          <p className="label-display" style={{ color: 'var(--ink-20)', fontSize: '0.6rem' }}>
            {candidatures.length} dossier{candidatures.length > 1 ? 's' : ''} affiché{candidatures.length > 1 ? 's' : ''}
          </p>
        </div>
      </div>
    </div>
  )
}
