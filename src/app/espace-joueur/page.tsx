import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Espace Joueur',
  description: 'Espace réservé aux joueurs validés de Wild Frontier RP — Statut, dossier et ressources.',
}

export default function EspaceJoueurPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="page-hero"
        style={{ background: 'linear-gradient(160deg, #2d1500 0%, #4a2500 60%)', borderColor: 'var(--color-gold)' }}
      >
        <div className="container-narrow relative text-center">
          <div className="display-text text-xs uppercase tracking-[0.3em] mb-3" style={{ color: 'var(--color-gold)' }}>
            — Accès restreint —
          </div>
          <h1
            className="font-serif font-black uppercase leading-none mb-4"
            style={{
              fontSize: 'clamp(2rem, 6vw, 4rem)',
              color: 'var(--color-parchment)',
            }}
          >
            Espace Joueur
          </h1>
          <p style={{ color: 'rgba(240, 230, 200, 0.7)', fontFamily: 'var(--font-crimson)', fontSize: '1.1rem' }}>
            Réservé aux joueurs validés. Connectez-vous avec Discord pour accéder à votre espace.
          </p>
        </div>
      </section>

      {/* Connexion requise */}
      <section className="py-20">
        <div className="container-narrow max-w-xl mx-auto text-center">
          <div className="document-panel">
            <div style={{ fontSize: '3rem' }}>🔐</div>
            <h2 className="font-serif font-bold text-2xl mt-4 mb-2" style={{ color: 'var(--color-ink)' }}>
              Authentification requise
            </h2>
            <p className="body-text mb-6">
              Cet espace est réservé aux joueurs dont la candidature a été validée par le staff.
              Connectez-vous avec votre compte Discord pour accéder à votre espace personnel.
            </p>

            <button className="btn-primary mb-4">
              💬 Se connecter avec Discord
            </button>

            <p className="text-sm" style={{ color: 'var(--color-sepia)', fontFamily: 'var(--font-crimson)' }}>
              Vous n&apos;êtes pas encore joueur validé ?{' '}
              <Link href="/candidatures" style={{ color: 'var(--color-rust)' }}>
                Déposez une candidature
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Aperçu des fonctionnalités (visible mais locked) */}
      <section
        className="py-16"
        style={{ backgroundColor: 'var(--color-parchment-dark)', borderTop: '2px solid var(--color-border)' }}
      >
        <div className="container-wide">
          <h2 className="heading-section text-center mb-10">Contenu de l&apos;espace joueur</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-60 pointer-events-none">
            {[
              { icon: '📋', title: 'Mon dossier', desc: 'Consultez votre candidature et son historique d\'état.' },
              { icon: '👤', title: 'Mon personnage', desc: 'Informations sur votre personnage validé : identité, statut, rôles.' },
              { icon: '🔔', title: 'Notifications', desc: 'Messages du staff, mises à jour et annonces importantes.' },
              { icon: '📜', title: 'Documents liés', desc: 'Vos documents officiels in-game accessibles ici.' },
              { icon: '🎓', title: 'Formations', desc: 'Ressources et guides pour les métiers whitelist.' },
              { icon: '⚙', title: 'Paramètres', desc: 'Gérer vos liaisons de comptes et préférences.' },
            ].map(feature => (
              <div key={feature.title} className="parchment-card text-center">
                <div style={{ fontSize: '2rem' }}>{feature.icon}</div>
                <h3 className="font-serif font-bold text-lg mt-3 mb-2">{feature.title}</h3>
                <p className="body-text text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
