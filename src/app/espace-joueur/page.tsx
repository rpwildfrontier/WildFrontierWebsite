import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { cookies } from 'next/headers'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { readSignedCookie } from '@/lib/signed-cookie'
import SignInButton from '@/components/SignInButton'
import SignOutButton from '@/components/SignOutButton'
import type { SteamData, CfxreData } from '@/app/candidatures/page'

export const metadata: Metadata = {
  title: 'Espace Joueur',
  description: 'Espace réservé aux joueurs de Wild Frontier RP.',
}

type SessionUser = {
  name?: string | null
  image?: string | null
  id?: string
  isStaff?: boolean
  isJoueurValide?: boolean
}

const loreLinks = [
  { href: '/univers',      label: 'Bible narrative',   desc: 'Histoire et géographie du comté' },
  { href: '/reglement',   label: 'Règlement',           desc: 'Code de conduite en jeu' },
  { href: '/metiers',     label: 'Métiers whitelist',   desc: 'Rôles à accès restreint' },
  { href: '/institutions',label: 'Institutions',        desc: 'Structure politique du territoire' },
  { href: '/archives',    label: 'Archives du comté',   desc: 'Registres et documents officiels' },
]

export default async function EspaceJoueurPage() {
  const session     = await getServerSession(authOptions)
  const user        = session?.user as SessionUser | undefined
  const cookieStore = cookies()

  const steamData = readSignedCookie<SteamData>(cookieStore.get('wf_steam')?.value ?? '')
  const cfxreData = readSignedCookie<CfxreData>(cookieStore.get('wf_cfxre')?.value ?? '')

  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section
        className="py-14 md:py-20"
        style={{ backgroundColor: 'var(--paper-warm)', borderBottom: '2px solid var(--rule-bold)' }}
      >
        <div className="container-narrow">
          <div className="flex items-center gap-6 flex-wrap">
            {user?.image && (
              <Image src={user.image} alt={user.name ?? ''} width={72} height={72} className="rounded-full flex-shrink-0"
                style={{ border: '2px solid var(--gold)', opacity: 0.9 }} unoptimized />
            )}
            <div>
              <div className="label-display mb-1" style={{ color: 'var(--gold)', opacity: 0.65, letterSpacing: '0.3em' }}>
                {user ? (user.isJoueurValide ? '✦ Joueur validé' : 'Candidature en cours') : 'Accès restreint'}
              </div>
              <h1 className="display-heading" style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: 'var(--parchment)' }}>
                {user?.name ?? 'Espace Joueur'}
              </h1>
              {user && (
                <p className="body-text mt-1" style={{ color: 'var(--fg-60)', fontSize: '0.85rem' }}>
                  Discord ID : {user.id}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {!session ? (
        /* ── Non connecté ──────────────────────────── */
        <>
          <section className="py-20">
            <div className="container-narrow" style={{ maxWidth: '32rem' }}>
              <div className="document-panel text-center">
                <div className="official-seal mx-auto mb-5"
                  style={{ width: '64px', height: '64px', color: 'var(--ink-40)', borderColor: 'var(--border)', fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '1.1rem' }}>
                  §
                </div>
                <h2 className="section-heading mb-3" style={{ fontSize: '1.4rem' }}>Authentification requise</h2>
                <p className="body-text mb-6">
                  Connectez-vous avec votre compte Discord pour accéder à votre espace joueur.
                </p>
                <SignInButton />
                <p className="body-text mt-4" style={{ fontSize: '0.9rem' }}>
                  Pas encore joueur ?{' '}
                  <Link href="/candidatures" style={{ color: 'var(--rust)' }}>Déposez une candidature</Link>
                </p>
              </div>
            </div>
          </section>

          {/* Aperçu verrouillé */}
          <section className="py-16" style={{ backgroundColor: 'var(--parchment-dark)', borderTop: '2px solid var(--border)' }}>
            <div className="container-narrow">
              <div className="text-center mb-10">
                <div className="label-display mb-2" style={{ color: 'var(--ink-20)' }}>Aperçu</div>
                <h2 className="section-heading" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>Contenu de l&apos;espace joueur</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-35 pointer-events-none select-none">
                {['Mes comptes', 'Mon statut', 'Mon personnage', 'Ressources'].map(t => (
                  <div key={t} className="parchment-card text-center">
                    <div className="monogram monogram-lg mx-auto mb-3">{t[0]}</div>
                    <p className="section-heading" style={{ fontSize: '0.95rem' }}>{t}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>

      ) : (
        /* ── Connecté ──────────────────────────────── */
        <section className="py-12">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

              {/* ── Colonne gauche ─────────────────── */}
              <div className="space-y-5">

                {/* Profil Discord */}
                <div className="document-panel">
                  <div className="label-display mb-4" style={{ color: 'var(--ink-20)' }}>Profil Discord</div>
                  <div className="flex items-center gap-4 mb-5">
                    {user?.image ? (
                      <Image src={user.image} alt={user.name ?? ''} width={52} height={52}
                        className="rounded-full flex-shrink-0" style={{ border: '1.5px solid var(--border)' }} unoptimized />
                    ) : (
                      <div className="monogram monogram-lg flex-shrink-0">{(user?.name ?? 'J').charAt(0)}</div>
                    )}
                    <div>
                      <h2 className="section-heading" style={{ fontSize: '1.05rem' }}>{user?.name}</h2>
                      <div className="flex gap-2 mt-1 flex-wrap">
                        {user?.isJoueurValide && <span className="badge badge-validated">Joueur validé</span>}
                        {user?.isStaff && <span className="badge badge-closed">Staff</span>}
                        {!user?.isJoueurValide && !user?.isStaff && <span className="badge badge-pending">En attente</span>}
                      </div>
                    </div>
                  </div>
                  <div className="pt-4" style={{ borderTop: '1px solid var(--border-light)' }}>
                    <SignOutButton label="Se déconnecter" />
                  </div>
                </div>

                {/* Comptes liés */}
                <div className="parchment-card">
                  <div className="label-display mb-4" style={{ color: 'var(--ink-20)' }}>Comptes liés</div>
                  <div className="space-y-3">

                    {/* Discord — toujours lié */}
                    <AccountLine
                      label="Discord"
                      name={user?.name ?? ''}
                      avatar={user?.image ?? ''}
                      linked
                    />

                    {/* Steam */}
                    {steamData ? (
                      <AccountLine label="Steam" name={steamData.name} avatar={steamData.avatar} linked />
                    ) : (
                      <AccountLine label="Steam" name="Non lié" avatar="" linked={false}
                        action={<Link href="/candidatures" style={{ color: 'var(--rust)', fontSize: '0.78rem' }}>Lier →</Link>} />
                    )}

                    {/* CFX.re */}
                    {cfxreData ? (
                      <AccountLine label="CFX.re" name={cfxreData.username} avatar={cfxreData.avatar} linked />
                    ) : (
                      <AccountLine label="CFX.re" name="Non lié" avatar="" linked={false}
                        action={<Link href="/candidatures" style={{ color: 'var(--rust)', fontSize: '0.78rem' }}>Lier →</Link>} />
                    )}
                  </div>
                </div>

                {/* Ressources */}
                <div className="parchment-card">
                  <div className="label-display mb-4" style={{ color: 'var(--ink-20)' }}>Ressources</div>
                  <ul className="space-y-1">
                    {loreLinks.map(r => (
                      <li key={r.href}>
                        <Link href={r.href} className="flex items-start gap-2 py-2 body-text"
                          style={{ borderBottom: '1px solid var(--border-light)', fontSize: '0.85rem', color: 'var(--ink)', textDecoration: 'none' }}>
                          <span style={{ color: 'var(--rust)', flexShrink: 0 }}>→</span>
                          <span>
                            <span style={{ color: 'var(--rust)', fontWeight: 600 }}>{r.label}</span>
                            <span style={{ color: 'var(--ink-40)', display: 'block', fontSize: '0.78rem' }}>{r.desc}</span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* ── Colonne principale ──────────────── */}
              <div className="lg:col-span-2 space-y-6">

                {user?.isJoueurValide ? (
                  /* Joueur validé */
                  <>
                    {/* Fiche personnage */}
                    <div className="document-panel">
                      <div className="label-display mb-2" style={{ color: 'var(--rust)' }}>Mon personnage</div>
                      <h3 className="section-heading mb-5" style={{ fontSize: '1.2rem' }}>Fiche de personnage</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                        {[
                          { label: 'Prénom & Nom',    value: '—' },
                          { label: 'Âge',              value: '—' },
                          { label: 'Métier',           value: '—' },
                          { label: 'Ville natale',     value: '—' },
                          { label: 'Statut',           value: 'Actif' },
                          { label: 'Sessions jouées',  value: '—' },
                        ].map(f => (
                          <div key={f.label} className="p-3"
                            style={{ border: '1px solid var(--border-light)', backgroundColor: 'var(--parchment-50)' }}>
                            <div className="label-display mb-1" style={{ color: 'var(--ink-20)', fontSize: '0.65rem' }}>{f.label}</div>
                            <div className="section-heading" style={{ fontSize: '0.9rem' }}>{f.value}</div>
                          </div>
                        ))}
                      </div>
                      <div className="p-4" style={{ border: '1px dashed var(--border)', backgroundColor: 'rgba(232,213,163,0.15)' }}>
                        <div className="label-display mb-1" style={{ color: 'var(--ink-20)' }}>Note</div>
                        <p className="body-text" style={{ fontSize: '0.88rem' }}>
                          Votre fiche est complétée par le staff après votre première session en jeu.
                          Contactez un admin sur Discord pour toute mise à jour.
                        </p>
                      </div>
                    </div>

                    {/* Accès serveur */}
                    <div className="document-panel">
                      <div className="label-display mb-2" style={{ color: 'var(--rust)' }}>Accès au serveur</div>
                      <h3 className="section-heading mb-5" style={{ fontSize: '1.2rem' }}>Informations de connexion</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                          { label: 'Jeu requis',      value: 'Red Dead Redemption II',  note: 'Steam / Rockstar' },
                          { label: 'Client',          value: 'RedM',                    note: 'redm.net' },
                          { label: 'Adresse serveur', value: 'Via le launcher RedM',    note: 'Rechercher Wild Frontier RP' },
                          { label: 'Règle d\'or',     value: 'RP en toute situation',   note: 'Pas de powergaming ni metagaming' },
                        ].map(i => (
                          <div key={i.label} className="p-4"
                            style={{ border: '1px solid var(--border-light)', backgroundColor: 'var(--parchment-50)' }}>
                            <div className="label-display mb-1" style={{ color: 'var(--ink-20)', fontSize: '0.65rem' }}>{i.label}</div>
                            <div className="section-heading mb-0.5" style={{ fontSize: '0.9rem' }}>{i.value}</div>
                            <div className="body-text" style={{ fontSize: '0.78rem', color: 'var(--ink-40)' }}>{i.note}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Règles clés */}
                    <div className="document-panel">
                      <div className="label-display mb-2" style={{ color: 'var(--rust)' }}>Rappels essentiels</div>
                      <h3 className="section-heading mb-5" style={{ fontSize: '1.2rem' }}>Code de conduite en jeu</h3>
                      <div className="space-y-3">
                        {[
                          { n: 'I',   rule: 'Immersion totale',         detail: 'Restez dans votre personnage en permanence. Pas de rupture du 4e mur.' },
                          { n: 'II',  rule: 'Respect mutuel',            detail: 'Tolérance zéro pour le harcèlement, la discrimination ou le toxic.' },
                          { n: 'III', rule: 'Valeur de la vie',          detail: 'Votre personnage craint la mort. Agissez en conséquence en situation de danger.' },
                          { n: 'IV',  rule: 'Pas de metagaming',         detail: 'N\'utilisez pas d\'informations hors-jeu pour avantager votre personnage.' },
                          { n: 'V',   rule: 'Décision du staff finale',  detail: 'En cas de litige, le staff tranche. Contestez via ticket Discord, pas en jeu.' },
                        ].map(r => (
                          <div key={r.n} className="flex items-start gap-4 py-3"
                            style={{ borderBottom: '1px solid var(--border-light)' }}>
                            <div className="ornamental-number flex-shrink-0" style={{ fontSize: '0.75rem' }}>{r.n}</div>
                            <div>
                              <div className="section-heading mb-0.5" style={{ fontSize: '0.92rem' }}>{r.rule}</div>
                              <div className="body-text" style={{ fontSize: '0.84rem', color: 'var(--ink-40)' }}>{r.detail}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4">
                        <Link href="/reglement" className="btn-secondary" style={{ fontSize: '0.85rem' }}>
                          Lire le règlement complet →
                        </Link>
                      </div>
                    </div>
                  </>

                ) : (
                  /* Candidature en attente */
                  <>
                    <div className="document-panel">
                      <div className="label-display mb-2" style={{ color: 'var(--ink-20)' }}>Suivi de candidature</div>
                      <h3 className="section-heading mb-6" style={{ fontSize: '1.2rem' }}>Votre dossier est en cours d&apos;examen</h3>

                      <div className="space-y-5">
                        {[
                          { n: '1', label: 'Dossier soumis',       done: true,  note: 'Transmis au staff via Discord' },
                          { n: '2', label: 'Examen du dossier',    done: false, note: 'Analyse par l\'équipe' },
                          { n: '3', label: 'Entretien RP',         done: false, note: 'Si le dossier est retenu' },
                          { n: '4', label: 'Validation & accès',   done: false, note: 'Rôle Discord attribué — accès serveur ouvert' },
                        ].map(step => (
                          <div key={step.n} className="flex items-start gap-4">
                            <div className="official-seal flex-shrink-0"
                              style={{ width: '36px', height: '36px', fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '0.85rem',
                                color: step.done ? '#1a5c1a' : 'var(--ink-40)',
                                borderColor: step.done ? '#1a5c1a' : 'var(--border-light)',
                                backgroundColor: step.done ? 'rgba(26,92,26,0.08)' : 'transparent' }}>
                              {step.done ? '✓' : step.n}
                            </div>
                            <div className="pt-1 flex-1">
                              <div className="section-heading" style={{ fontSize: '0.95rem', color: step.done ? '#1a5c1a' : 'var(--ink)' }}>
                                {step.label}
                              </div>
                              <div className="body-text" style={{ fontSize: '0.82rem', color: 'var(--ink-40)' }}>{step.note}</div>
                            </div>
                            {step.done && <span className="badge badge-validated flex-shrink-0">Fait</span>}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="parchment-card">
                        <div className="label-display mb-2" style={{ color: 'var(--ink-20)' }}>Délai de réponse</div>
                        <p className="body-text" style={{ fontSize: '0.88rem' }}>
                          Le staff répond sous <strong>48h à 7 jours</strong>.
                          Vous serez contacté sur Discord. Ne soumettez pas de second dossier.
                        </p>
                      </div>
                      <div className="parchment-card">
                        <div className="label-display mb-2" style={{ color: 'var(--ink-20)' }}>En attendant</div>
                        <ul className="space-y-1">
                          {[
                            { href: '/univers',    label: 'Relire la bible narrative' },
                            { href: '/reglement',  label: 'Mémoriser le règlement' },
                            { href: '/metiers',    label: 'Explorer les métiers' },
                          ].map(l => (
                            <li key={l.href}>
                              <Link href={l.href} className="body-text" style={{ color: 'var(--rust)', fontSize: '0.85rem' }}>
                                → {l.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Si aucun compte n'est lié — invite à compléter la candidature */}
                    {(!steamData || !cfxreData) && (
                      <div className="p-5" style={{ border: '1px solid rgba(139,58,30,0.3)', backgroundColor: 'rgba(139,58,30,0.04)' }}>
                        <div className="label-display mb-2" style={{ color: 'var(--rust)' }}>Dossier incomplet</div>
                        <p className="body-text mb-4" style={{ fontSize: '0.9rem' }}>
                          Votre candidature nécessite la liaison de tous vos comptes (Discord, Steam, CFX.re).
                        </p>
                        <Link href="/candidatures" className="btn-primary" style={{ fontSize: '0.85rem' }}>
                          Compléter ma candidature →
                        </Link>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

function AccountLine({ label, name, avatar, linked, action }: {
  label: string; name: string; avatar: string; linked: boolean; action?: React.ReactNode
}) {
  return (
    <div className="flex items-center gap-3 py-2" style={{ borderBottom: '1px solid var(--border-light)' }}>
      <div style={{ width: 32, height: 32, borderRadius: '50%', overflow: 'hidden', flexShrink: 0,
        border: `1.5px solid ${linked ? 'rgba(26,92,26,0.4)' : 'var(--border)'}`,
        backgroundColor: linked ? 'rgba(26,92,26,0.06)' : 'rgba(232,213,163,0.2)',
        position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {avatar ? (
          <Image src={avatar} alt={name} fill sizes="32px" style={{ objectFit: 'cover' }} unoptimized />
        ) : (
          <span style={{ fontSize: '0.7rem', color: linked ? 'rgba(26,92,26,0.6)' : 'var(--ink-40)', fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
            {linked ? name.slice(0, 1).toUpperCase() : '?'}
          </span>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="label-display" style={{ fontSize: '0.62rem', color: 'var(--ink-20)' }}>{label}</div>
        <div className="body-text truncate" style={{ fontSize: '0.84rem', color: linked ? 'var(--ink)' : 'var(--ink-40)' }}>{name}</div>
      </div>
      {linked ? (
        <span className="badge" style={{ fontSize: '0.62rem', backgroundColor: 'rgba(26,92,26,0.1)', color: '#1a5c1a', border: '1px solid rgba(26,92,26,0.25)', flexShrink: 0 }}>
          Lié
        </span>
      ) : action}
    </div>
  )
}
