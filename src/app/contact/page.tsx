import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contacter le staff de Wild Frontier RP — Questions, signalements et support.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="page-hero"
        style={{ background: 'linear-gradient(160deg, #ddc88e 0%, #f0e6c8 60%)' }}
      >
        <div className="container-narrow relative text-center">
          <div className="display-text text-xs uppercase tracking-[0.3em] mb-3" style={{ color: 'var(--color-sepia)' }}>
            — Bureau du staff —
          </div>
          <h1 className="heading-display mb-4">Contact</h1>
          <p className="body-text max-w-2xl mx-auto">
            Pour toute question concernant une candidature, un signalement ou une information générale,
            vous pouvez contacter le staff par les voies indiquées ci-dessous.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Canaux de contact */}
            <div className="lg:col-span-1 space-y-4">
              <h2 className="heading-sub mb-6">Canaux officiels</h2>

              {[
                {
                  icon: '💬',
                  name: 'Discord',
                  desc: 'Canal principal. Rejoignez notre serveur Discord pour toutes les discussions.',
                  note: 'Réponse sous 24h',
                },
                {
                  icon: '📰',
                  name: 'Formulaire de contact',
                  desc: 'Pour les demandes formelles, signalements et rapports officiels.',
                  note: 'Réponse sous 48-72h',
                },
                {
                  icon: '⚡',
                  name: 'Urgences staff',
                  desc: 'Pour les incidents graves en jeu (triche, harcèlement, bug critique).',
                  note: 'Ticket Discord prioritaire',
                },
              ].map(channel => (
                <div key={channel.name} className="parchment-card">
                  <div className="flex items-start gap-3">
                    <span style={{ fontSize: '1.5rem' }}>{channel.icon}</span>
                    <div>
                      <h3 className="font-serif font-bold text-lg mb-1" style={{ color: 'var(--color-ink)' }}>
                        {channel.name}
                      </h3>
                      <p className="body-text text-sm mb-2">{channel.desc}</p>
                      <span className="display-text text-xs uppercase tracking-wider" style={{ color: 'var(--color-sepia)' }}>
                        {channel.note}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Politique de contact */}
              <div
                className="p-4"
                style={{ border: '1px dashed var(--color-border)', backgroundColor: 'rgba(232, 213, 163, 0.3)' }}
              >
                <div className="display-text text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--color-sepia)' }}>
                  À noter
                </div>
                <p className="text-sm" style={{ color: 'var(--color-ink-light)', fontFamily: 'var(--font-crimson)' }}>
                  Le staff répond dans les délais indiqués. Merci de ne pas relancer plusieurs fois
                  la même demande — cela ralentit le traitement de tous les dossiers.
                </p>
              </div>
            </div>

            {/* Formulaire */}
            <div className="lg:col-span-2">
              <div className="document-panel">
                <div className="display-text text-xs uppercase tracking-[0.3em] mb-2" style={{ color: 'var(--color-rust)' }}>
                  — Formulaire de contact —
                </div>
                <h2 className="font-serif font-bold text-2xl mb-6" style={{ color: 'var(--color-ink)' }}>
                  Envoyer un message
                </h2>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="form-label">Votre nom / pseudo *</label>
                      <input type="text" className="form-input" placeholder="Nom ou pseudo Discord" />
                    </div>
                    <div>
                      <label className="form-label">Pseudo Discord *</label>
                      <input type="text" className="form-input" placeholder="Nom#0000" />
                    </div>
                  </div>

                  <div>
                    <label className="form-label">Type de demande *</label>
                    <select className="form-input">
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
                    <input type="text" className="form-input" placeholder="Résumé de votre demande" />
                  </div>

                  <div>
                    <label className="form-label">Message *</label>
                    <textarea className="form-textarea" placeholder="Décrivez votre demande en détail..." />
                  </div>

                  <div>
                    <label className="form-label">Pièce jointe (lien optionnel)</label>
                    <input type="text" className="form-input" placeholder="Lien vers une capture d'écran, document..." />
                  </div>

                  <div className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" id="consent" />
                    <label htmlFor="consent" className="body-text text-base" style={{ cursor: 'pointer' }}>
                      J&apos;accepte que mes informations soient utilisées pour traiter ma demande.
                    </label>
                  </div>

                  <div className="flex justify-between items-center">
                    <p className="text-sm" style={{ color: 'var(--color-sepia)', fontFamily: 'var(--font-crimson)' }}>
                      * Champs obligatoires
                    </p>
                    <button type="submit" className="btn-primary">
                      Envoyer le message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
