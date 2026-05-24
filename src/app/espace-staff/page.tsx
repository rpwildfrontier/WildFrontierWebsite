import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { fetchGuildStats } from '@/lib/discord'
import SignInButton from '@/components/SignInButton'
import SignOutButton from '@/components/SignOutButton'
import StaffAnnounceForm from '@/components/StaffAnnounceForm'

export const metadata: Metadata = {
  title: 'Espace Staff',
  description: 'Administration de Wild Frontier RP.',
}

type SessionUser = {
  name?: string | null
  image?: string | null
  id?: string
  isStaff?: boolean
  isJoueurValide?: boolean
}

export default async function EspaceStaffPage() {
  const session  = await getServerSession(authOptions)
  const user     = session?.user as SessionUser | undefined
  const isStaff  = user?.isStaff ?? false
  const stats    = isStaff ? await fetchGuildStats() : null

  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="py-14 md:py-20"
        style={{ background: 'linear-gradient(160deg, #0d0500 0%, #1a0a00 100%)', borderBottom: '3px solid var(--gold)' }}>
        <div className="container-narrow">
          <div className="flex items-center gap-6 flex-wrap">
            {user?.image && isStaff && (
              <Image src={user.image} alt={user.name ?? ''} width={64} height={64}
                className="rounded-full flex-shrink-0"
                style={{ border: '2px solid var(--gold)', opacity: 0.85 }} unoptimized />
            )}
            <div>
              <div className="label-display mb-1" style={{ color: 'var(--gold)', opacity: 0.55, letterSpacing: '0.4em' }}>
                ✦ Administration ✦
              </div>
              <h1 className="display-heading" style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: 'var(--parchment)' }}>
                {isStaff && user?.name ? `Bienvenue, ${user.name}` : 'Espace Staff'}
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12" style={{ backgroundColor: '#140800', minHeight: '60vh' }}>
        <div className="container-wide">

          {!session ? (
            /* ── Connexion ─────────────────────────── */
            <div className="mx-auto" style={{ maxWidth: '28rem' }}>
              <div className="p-8 text-center"
                style={{ border: '2px solid rgba(184,134,11,0.4)', backgroundColor: 'rgba(240,230,200,0.03)' }}>
                <div className="official-seal mx-auto mb-6"
                  style={{ width: '72px', height: '72px', color: 'var(--gold)', borderColor: 'var(--gold)', fontFamily: 'var(--font-serif)', fontWeight: 800, fontSize: '1.5rem' }}>
                  S.F.
                </div>
                <h2 className="section-heading mb-2" style={{ color: 'var(--parchment)', fontSize: '1.4rem' }}>
                  Authentification Staff
                </h2>
                <p className="body-text mb-8" style={{ color: 'rgba(240,230,200,0.45)' }}>
                  Connexion requise avec un compte Discord lié à un rôle staff actif.
                </p>
                <SignInButton label="Connexion Discord Staff" className="btn-gold"
                  style={{ width: '100%', justifyContent: 'center' }} />
                <p className="label-display mt-4" style={{ color: 'rgba(240,230,200,0.2)' }}>
                  Accès non autorisé — exclusion définitive
                </p>
              </div>
            </div>

          ) : !isStaff ? (
            /* ── Accès refusé ──────────────────────── */
            <div className="mx-auto text-center" style={{ maxWidth: '28rem' }}>
              <div className="p-8"
                style={{ border: '2px solid rgba(139,58,30,0.5)', backgroundColor: 'rgba(139,58,30,0.06)' }}>
                <div className="stamp stamp-refused inline-block mb-6">Accès refusé</div>
                <h2 className="section-heading mb-2" style={{ color: 'var(--parchment)', fontSize: '1.2rem' }}>
                  Compte non autorisé
                </h2>
                <p className="body-text mb-6" style={{ color: 'rgba(240,230,200,0.55)' }}>
                  Le compte <strong style={{ color: 'var(--gold)' }}>{user?.name}</strong> ne dispose pas du rôle staff.
                </p>
                <SignOutButton label="Se déconnecter" className="btn-secondary" />
              </div>
            </div>

          ) : (
            /* ── Dashboard ─────────────────────────── */
            <div className="space-y-8">

              {/* Barre identité */}
              <div className="flex items-center justify-between flex-wrap gap-4 p-4"
                style={{ border: '1px solid rgba(184,134,11,0.3)', backgroundColor: 'rgba(184,134,11,0.05)' }}>
                <div className="flex items-center gap-3">
                  <div className="official-seal"
                    style={{ width: '40px', height: '40px', color: 'var(--gold)', borderColor: 'var(--gold)', fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '0.85rem' }}>
                    S.F.
                  </div>
                  <div>
                    <div className="label-display" style={{ color: 'rgba(184,134,11,0.7)', fontSize: '0.65rem' }}>Staff connecté</div>
                    <p className="section-heading" style={{ color: 'var(--parchment)', fontSize: '1rem' }}>{user?.name}</p>
                  </div>
                </div>
                <SignOutButton label="Déconnexion" className="btn-secondary" />
              </div>

              {/* Stats Discord */}
              {stats && (
                <div>
                  <div className="label-display mb-4" style={{ color: 'rgba(240,230,200,0.3)', letterSpacing: '0.25em' }}>
                    Statistiques du serveur
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: 'Membres Discord', value: stats.memberCount.toLocaleString('fr'), color: 'var(--gold)' },
                      { label: 'En ligne',         value: stats.onlineCount.toLocaleString('fr'),  color: '#3ba55d' },
                      { label: 'Serveur',          value: stats.name,                              color: 'var(--parchment)' },
                      { label: 'Statut',           value: 'Opérationnel',                          color: '#3ba55d' },
                    ].map(s => (
                      <div key={s.label} className="p-4 text-center"
                        style={{ border: '1px solid rgba(184,134,11,0.2)', backgroundColor: 'rgba(240,230,200,0.03)' }}>
                        <div className="section-heading mb-1" style={{ fontSize: '1.25rem', color: s.color }}>{s.value}</div>
                        <div className="label-display" style={{ color: 'rgba(240,230,200,0.3)', fontSize: '0.65rem' }}>{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Grille principale */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Annonces — col span 2 */}
                <div className="lg:col-span-2 p-6"
                  style={{ border: '1px solid rgba(184,134,11,0.25)', backgroundColor: 'rgba(240,230,200,0.02)' }}>
                  <div className="label-display mb-2" style={{ color: 'var(--gold)', fontSize: '0.65rem' }}>
                    Communication
                  </div>
                  <h2 className="section-heading mb-5" style={{ color: 'var(--parchment)', fontSize: '1.15rem' }}>
                    Publier une annonce
                  </h2>
                  <StaffAnnounceForm />
                </div>

                {/* Actions rapides */}
                <div className="space-y-4">
                  <div className="p-5"
                    style={{ border: '1px solid rgba(184,134,11,0.2)', backgroundColor: 'rgba(240,230,200,0.02)' }}>
                    <div className="label-display mb-4" style={{ color: 'rgba(240,230,200,0.3)', fontSize: '0.65rem' }}>
                      Actions rapides
                    </div>
                    <div className="space-y-2">
                      {[
                        { label: 'Voir les candidatures', href: '/candidatures', note: 'Formulaire public' },
                        { label: 'Gazette du Comté',      href: '/journal',      note: 'Gérer les articles' },
                        { label: 'Archives officielles',  href: '/archives',     note: 'Registres et documents' },
                        { label: 'Institutions',          href: '/institutions', note: 'Structure politique' },
                        { label: 'Espace Joueur',         href: '/espace-joueur',note: 'Vue joueur' },
                      ].map(a => (
                        <Link key={a.href} href={a.href}
                          className="flex items-center justify-between p-3"
                          style={{ border: '1px solid rgba(184,134,11,0.15)', backgroundColor: 'rgba(184,134,11,0.03)',
                            textDecoration: 'none', transition: 'border-color 0.15s' }}>
                          <div>
                            <div className="label-display" style={{ color: 'var(--gold)', fontSize: '0.72rem' }}>{a.label}</div>
                            <div className="body-text" style={{ color: 'rgba(240,230,200,0.3)', fontSize: '0.75rem' }}>{a.note}</div>
                          </div>
                          <span style={{ color: 'rgba(184,134,11,0.5)', fontFamily: 'var(--font-serif)' }}>→</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Outils d'administration */}
              <div>
                <div className="label-display mb-4" style={{ color: 'rgba(240,230,200,0.3)', letterSpacing: '0.25em' }}>
                  Outils d&apos;administration
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    {
                      initial: 'C', title: 'Candidatures',
                      desc: 'Les dossiers soumis via le site arrivent sur le canal Discord #candidatures.',
                      status: 'Discord',
                      href: null,
                    },
                    {
                      initial: 'J', title: 'Joueurs actifs',
                      desc: 'Attribution et retrait des rôles joueurs depuis le serveur Discord.',
                      status: 'Discord',
                      href: null,
                    },
                    {
                      initial: 'S', title: 'Signalements',
                      desc: 'Les signalements en jeu remontent sur #signalements. Traitez via ticket.',
                      status: 'Discord',
                      href: null,
                    },
                    {
                      initial: 'G', title: 'Gazette du Comté',
                      desc: 'Publiez et gérez les articles du journal en jeu.',
                      status: 'Site',
                      href: '/journal',
                    },
                    {
                      initial: 'R', title: 'Registres & Archives',
                      desc: 'Actes officiels, registres fonciers et documents du comté.',
                      status: 'Site',
                      href: '/archives',
                    },
                    {
                      initial: 'A', title: 'Annonces',
                      desc: 'Utilisez le formulaire ci-dessus pour publier une annonce sur Discord.',
                      status: 'Disponible',
                      href: null,
                    },
                  ].map(o => (
                    <div key={o.title} className="p-5"
                      style={{ border: '1px solid rgba(184,134,11,0.2)', backgroundColor: 'rgba(240,230,200,0.02)' }}>
                      <div className="flex items-start gap-3">
                        <div className="official-seal flex-shrink-0"
                          style={{ width: '38px', height: '38px', color: 'var(--gold)', borderColor: 'rgba(184,134,11,0.4)', fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '0.85rem' }}>
                          {o.initial}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <h3 className="section-heading" style={{ color: 'var(--parchment)', fontSize: '0.95rem' }}>
                              {o.title}
                            </h3>
                            <span style={{
                              fontSize: '0.6rem', padding: '2px 8px', letterSpacing: '0.08em',
                              fontFamily: 'var(--font-display)', textTransform: 'uppercase',
                              border: '1px solid rgba(184,134,11,0.3)',
                              color: o.status === 'Disponible' ? '#3ba55d' : 'rgba(184,134,11,0.6)',
                            }}>
                              {o.status}
                            </span>
                          </div>
                          <p className="body-text" style={{ color: 'rgba(240,230,200,0.35)', fontSize: '0.82rem' }}>
                            {o.desc}
                          </p>
                          {o.href && (
                            <Link href={o.href} className="label-display mt-2 inline-block"
                              style={{ color: 'var(--gold)', fontSize: '0.62rem' }}>
                              Accéder →
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Configuration */}
              <div className="p-5"
                style={{ border: '1px dashed rgba(184,134,11,0.2)', backgroundColor: 'rgba(240,230,200,0.015)' }}>
                <div className="label-display mb-4" style={{ color: 'rgba(240,230,200,0.25)', letterSpacing: '0.2em' }}>
                  Configuration système
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { label: 'Webhook candidatures', ok: !!process.env.DISCORD_WEBHOOK_CANDIDATURES },
                    { label: 'Webhook annonces',     ok: !!(process.env.DISCORD_WEBHOOK_ANNONCES ?? process.env.DISCORD_WEBHOOK_CANDIDATURES) },
                    { label: 'Bot Discord',          ok: !!process.env.DISCORD_BOT_TOKEN },
                    { label: 'Steam API',            ok: !!process.env.STEAM_API_KEY },
                  ].map(c => (
                    <div key={c.label} className="flex items-center gap-2">
                      <span style={{ width: 8, height: 8, borderRadius: '50%', flexShrink: 0,
                        backgroundColor: c.ok ? '#3ba55d' : 'rgba(139,58,30,0.7)', display: 'inline-block' }} />
                      <span className="body-text" style={{ color: 'rgba(240,230,200,0.3)', fontSize: '0.78rem' }}>{c.label}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}
        </div>
      </section>

      <section style={{ backgroundColor: '#0d0500', borderTop: '1px solid rgba(184,134,11,0.1)' }} className="py-5">
        <div className="container-narrow text-center">
          <p className="label-display" style={{ color: 'rgba(240,230,200,0.12)', letterSpacing: '0.3em' }}>
            Accès journalisé — Wild Frontier RP Administration
          </p>
        </div>
      </section>
    </>
  )
}
