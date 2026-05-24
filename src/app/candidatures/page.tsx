import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Candidatures',
  description: 'Déposez votre candidature pour rejoindre Wild Frontier RP. Discord, Steam et CFX.re requis.',
}

export default function CandidaturesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="page-hero"
        style={{ background: 'linear-gradient(160deg, #ddc88e 0%, #f0e6c8 60%)' }}
      >
        <div className="container-narrow relative text-center">
          <div className="display-text text-xs uppercase tracking-[0.3em] mb-3" style={{ color: 'var(--color-sepia)' }}>
            — Accès au territoire —
          </div>
          <h1 className="heading-display mb-4">Candidatures</h1>
          <p className="body-text max-w-2xl mx-auto">
            L&apos;accès à Wild Frontier RP est soumis à whitelist. Chaque dossier est examiné
            individuellement. La qualité prime sur la quantité.
          </p>
        </div>
      </section>

      {/* Étapes */}
      <section className="py-16" style={{ borderBottom: '2px solid var(--color-border)' }}>
        <div className="container-narrow">
          <h2 className="heading-section text-center mb-12">Parcours de candidature</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { n: '1', title: 'Lire', desc: 'Lisez le règlement et découvrez l\'univers du serveur.' },
              { n: '2', title: 'Connecter', desc: 'Reliez vos comptes Discord, Steam et CFX.re.' },
              { n: '3', title: 'Rédiger', desc: 'Remplissez le formulaire de candidature avec soin.' },
              { n: '4', title: 'Attendre', desc: 'Le staff examine votre dossier et vous contacte.' },
            ].map(step => (
              <div key={step.n} className="text-center">
                <div
                  className="official-seal w-16 h-16 mx-auto font-serif font-black text-2xl mb-4"
                  style={{ color: 'var(--color-rust)', borderColor: 'var(--color-rust)' }}
                >
                  {step.n}
                </div>
                <h3 className="font-serif font-bold text-xl mb-2" style={{ color: 'var(--color-ink)' }}>{step.title}</h3>
                <p className="body-text text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire et comptes requis */}
      <section className="py-16 md:py-20">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Colonne gauche : conditions */}
            <div className="lg:col-span-1 space-y-6">
              <div className="document-panel">
                <h3 className="font-serif font-bold text-xl mb-4" style={{ color: 'var(--color-rust)' }}>
                  Comptes requis
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: '💬',
                      name: 'Discord',
                      desc: 'Canal principal de communication avec le staff et la communauté.',
                      required: true,
                    },
                    {
                      icon: '🎮',
                      name: 'Steam',
                      desc: 'Votre identité sur la plateforme. RedDeadRedemption II requis.',
                      required: true,
                    },
                    {
                      icon: '🖥',
                      name: 'CFX.re',
                      desc: 'Compte RedM/FiveM pour accéder au serveur de jeu.',
                      required: true,
                    },
                  ].map(compte => (
                    <div
                      key={compte.name}
                      className="flex items-start gap-3 p-3"
                      style={{ border: '1px solid var(--color-border)', backgroundColor: 'rgba(240, 230, 200, 0.4)' }}
                    >
                      <span style={{ fontSize: '1.5rem' }}>{compte.icon}</span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-serif font-bold" style={{ color: 'var(--color-ink)' }}>{compte.name}</span>
                          <span className="badge-closed text-xs">Obligatoire</span>
                        </div>
                        <p className="text-sm mt-1" style={{ color: 'var(--color-sepia)', fontFamily: 'var(--font-crimson)' }}>
                          {compte.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className="mt-4 p-3 text-sm"
                  style={{ backgroundColor: 'rgba(139, 58, 30, 0.08)', border: '1px solid rgba(139, 58, 30, 0.3)' }}
                >
                  <strong style={{ color: 'var(--color-rust)' }}>⚠ Important :</strong>
                  <span style={{ color: 'var(--color-ink-light)', fontFamily: 'var(--font-crimson)' }}>
                    {' '}Sans les trois comptes liés, le formulaire ne peut pas être soumis.
                  </span>
                </div>
              </div>

              {/* Liens utiles */}
              <div className="parchment-card">
                <h3 className="font-serif font-bold text-lg mb-3" style={{ color: 'var(--color-ink)' }}>
                  Avant de candidater
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/univers" className="body-text text-base hover:underline" style={{ color: 'var(--color-rust)' }}>
                      → Lire l&apos;univers du serveur
                    </Link>
                  </li>
                  <li>
                    <Link href="/reglement" className="body-text text-base hover:underline" style={{ color: 'var(--color-rust)' }}>
                      → Lire le règlement complet
                    </Link>
                  </li>
                  <li>
                    <Link href="/metiers" className="body-text text-base hover:underline" style={{ color: 'var(--color-rust)' }}>
                      → Découvrir les métiers whitelist
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="body-text text-base hover:underline" style={{ color: 'var(--color-rust)' }}>
                      → Consulter la FAQ
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Colonne droite : formulaire */}
            <div className="lg:col-span-2">
              <div className="document-panel">
                <div className="display-text text-xs uppercase tracking-[0.3em] mb-2" style={{ color: 'var(--color-rust)' }}>
                  — Dossier de candidature —
                </div>
                <h2 className="font-serif font-bold text-2xl mb-6" style={{ color: 'var(--color-ink)' }}>
                  Formulaire d&apos;admission
                </h2>

                {/* Alerte authentification */}
                <div
                  className="mb-8 p-4 text-center"
                  style={{ border: '2px dashed var(--color-border)', backgroundColor: 'rgba(232, 213, 163, 0.3)' }}
                >
                  <div style={{ fontSize: '2rem' }}>🔐</div>
                  <h3 className="font-serif font-bold text-lg mt-2 mb-1" style={{ color: 'var(--color-ink)' }}>
                    Connexion requise
                  </h3>
                  <p className="body-text text-base mb-4">
                    Vous devez connecter vos comptes Discord, Steam et CFX.re avant de pouvoir remplir ce formulaire.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button className="btn-primary" style={{ fontSize: '0.85rem' }}>
                      Se connecter avec Discord
                    </button>
                  </div>
                </div>

                {/* Formulaire (désactivé sans connexion) */}
                <div className="opacity-50 pointer-events-none">
                  <div className="space-y-6">
                    <div>
                      <label className="form-label">Prénom de votre personnage *</label>
                      <input type="text" className="form-input" placeholder="Prénom du personnage" disabled />
                    </div>
                    <div>
                      <label className="form-label">Nom de famille *</label>
                      <input type="text" className="form-input" placeholder="Nom de famille" disabled />
                    </div>
                    <div>
                      <label className="form-label">Âge du personnage *</label>
                      <input type="number" className="form-input" placeholder="Ex: 32" disabled />
                    </div>
                    <div>
                      <label className="form-label">Ville de naissance (lore) *</label>
                      <input type="text" className="form-input" placeholder="Ex: St Denis, Blackwater..." disabled />
                    </div>
                    <div>
                      <label className="form-label">Métier déclaré à l&apos;arrivée *</label>
                      <input type="text" className="form-input" placeholder="Ex: Chasseur, Fermier, Médecin..." disabled />
                    </div>
                    <div>
                      <label className="form-label">Histoire du personnage * (min. 300 mots)</label>
                      <textarea className="form-textarea" placeholder="Racontez l'histoire de votre personnage : d'où vient-il, qu'a-t-il vécu, pourquoi arrive-t-il dans le comté..." disabled />
                    </div>
                    <div>
                      <label className="form-label">Votre expérience en RP *</label>
                      <textarea className="form-textarea" placeholder="Décrivez votre expérience en roleplay (serveurs, durée, rôles joués)..." disabled style={{ minHeight: '100px' }} />
                    </div>
                    <div>
                      <label className="form-label">Pourquoi Wild Frontier RP ? *</label>
                      <textarea className="form-textarea" placeholder="Qu'est-ce qui vous attire dans ce serveur ? Qu'attendez-vous de cette expérience ?" disabled style={{ minHeight: '100px' }} />
                    </div>
                    <div>
                      <label className="form-label">Avez-vous lu et compris le règlement ? *</label>
                      <div className="flex items-start gap-3 mt-2">
                        <input type="checkbox" disabled className="mt-1" />
                        <span className="body-text text-base">J&apos;ai lu intégralement le règlement de Wild Frontier RP et j&apos;accepte de m&apos;y conformer.</span>
                      </div>
                    </div>

                    <button className="btn-primary w-full" disabled>
                      Soumettre ma candidature
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
