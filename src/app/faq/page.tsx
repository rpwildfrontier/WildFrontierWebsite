import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Questions fréquentes sur Wild Frontier RP — Candidature, gameplay, règles et accès au serveur.',
}

const faqs = [
  {
    category: 'Général',
    questions: [
      {
        q: 'Qu\'est-ce que Wild Frontier RP ?',
        a: 'Wild Frontier RP est un serveur RedM (Red Dead Redemption II) à roleplay dur et organique, se déroulant dans l\'Amérique de la fin du XIXe siècle. L\'accent est mis sur l\'immersion, les conséquences et l\'interaction humaine — sans automatismes qui remplacent les joueurs.',
      },
      {
        q: 'Qu\'est-ce que le "RP dur" ?',
        a: 'Le RP dur signifie que chaque action a des conséquences réalistes et durables. La mort est conséquente, les blessures requièrent un médecin réel, la justice est rendue par des joueurs, l\'argent est physique. Rien d\'important ne peut arriver sans intervention humaine.',
      },
      {
        q: 'Le serveur est-il en français ?',
        a: 'Oui, Wild Frontier RP est un serveur francophone. Le roleplay se fait en français. Certaines expressions anglaises d\'époque sont tolérées et même encouragées pour l\'immersion.',
      },
      {
        q: 'Quel jeu faut-il avoir ?',
        a: 'Il faut posséder Red Dead Redemption II sur Steam, et installer RedM (l\'équivalent de FiveM pour RDR2, disponible sur CFX.re). Les deux sont nécessaires pour accéder au serveur.',
      },
    ],
  },
  {
    category: 'Candidature',
    questions: [
      {
        q: 'Comment candidater ?',
        a: 'Rendez-vous sur la page Candidatures, connectez vos comptes Discord, Steam et CFX.re, puis remplissez le formulaire. Le dossier ne peut pas être soumis si l\'un des trois comptes manque.',
      },
      {
        q: 'Pourquoi trois comptes sont-ils obligatoires ?',
        a: 'Discord est le canal principal de communication avec la communauté. Steam prouve la possession du jeu. CFX.re est votre identité sur RedM. Ces trois liaisons permettent de réduire les doublons, d\'éviter les bans croisés et de fiabiliser les candidatures.',
      },
      {
        q: 'Combien de temps prend la validation d\'un dossier ?',
        a: 'Entre 48 heures et une semaine selon la charge du staff et la qualité du dossier. Les dossiers complets et bien rédigés sont traités en priorité. Évitez de relancer le staff avant 5 jours.',
      },
      {
        q: 'Mon dossier peut-il être refusé ?',
        a: 'Oui. Un dossier peut être refusé si l\'histoire du personnage est insuffisante, si les comptes sont incomplets, si le candidat a des antécédents négatifs connus, ou si le staff juge que le profil n\'est pas adapté à la philosophie du serveur.',
      },
      {
        q: 'Puis-je re-candidater après un refus ?',
        a: 'Oui, après un délai de 14 jours et si vous avez amélioré votre dossier en tenant compte des raisons du refus. La deuxième candidature est examinée avec encore plus d\'attention.',
      },
    ],
  },
  {
    category: 'Gameplay',
    questions: [
      {
        q: 'Que se passe-t-il si mon personnage meurt ?',
        a: 'La mort entraîne un état de coma. Vous pouvez observer et entendre ce qui se passe autour de vous. Un médecin joueur doit vous prendre en charge dans la fenêtre de temps (5-60 min). Si personne ne vient, votre personnage peut décéder définitivement selon les circonstances.',
      },
      {
        q: 'Comment gagne-t-on de l\'argent ?',
        a: 'Uniquement par des actes physiques en jeu : vendre des marchandises à un commerçant joueur, exercer un métier, rendre des services. Il n\'y a pas de revenu passif, pas de farming automatisé.',
      },
      {
        q: 'Peut-on avoir une propriété ?',
        a: 'Oui, mais toute propriété immobilière nécessite un acte notarié signé par un notaire joueur et enregistré à la mairie. La possession sans titre est une usurpation poursuivable en justice.',
      },
      {
        q: 'Comment fonctionnent les métiers whitelist ?',
        a: 'Les métiers whitelistés (shérif, médecin, notaire, juge, banquier...) nécessitent une candidature dédiée, un entretien RP avec les institutions, une période d\'apprentissage et une validation staff. Ils donnent accès à des outils exclusifs mais impliquent des obligations réelles.',
      },
      {
        q: 'Y a-t-il une carte avec les quêtes ?',
        a: 'Non. Il n\'y a aucun marqueur de quête sur la carte, aucune notification HUD pour les événements RP. Les informations s\'obtiennent par le bouche-à-oreille, le télégraphe, le journal papier ou en parlant aux autres joueurs.',
      },
    ],
  },
  {
    category: 'Technique',
    questions: [
      {
        q: 'Comment installer RedM ?',
        a: 'Téléchargez RedM depuis le site officiel de CFX.re. Installez-le dans un dossier distinct de votre jeu. Au lancement, il détectera automatiquement votre installation de Red Dead Redemption II. Assurez-vous d\'avoir créé un compte CFX.re.',
      },
      {
        q: 'RedM est-il gratuit ?',
        a: 'RedM lui-même est gratuit. En revanche, Red Dead Redemption II (disponible sur Steam) est payant. C\'est le seul achat nécessaire pour jouer.',
      },
      {
        q: 'Je rencontre un problème technique sur le serveur, que faire ?',
        a: 'Rendez-vous sur notre Discord et ouvrez un ticket de support. Donnez un maximum d\'informations : description du problème, circonstances, captures d\'écran si possible. Ne créez pas un nouveau personnage sans avoir contacté le staff.',
      },
    ],
  },
]

export default function FaqPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="page-hero"
        style={{ background: 'linear-gradient(160deg, #ddc88e 0%, #f0e6c8 60%)' }}
      >
        <div className="container-narrow relative text-center">
          <div className="display-text text-xs uppercase tracking-[0.3em] mb-3" style={{ color: 'var(--color-sepia)' }}>
            — Questions fréquentes —
          </div>
          <h1 className="heading-display mb-4">F.A.Q.</h1>
          <p className="body-text max-w-2xl mx-auto">
            Retrouvez ici les réponses aux questions les plus fréquemment posées
            sur Wild Frontier RP, la candidature et le fonctionnement du serveur.
          </p>
        </div>
      </section>

      {/* FAQ sections */}
      <section className="py-16 md:py-20">
        <div className="container-narrow space-y-16">
          {faqs.map(section => (
            <div key={section.category}>
              <h2 className="heading-section mb-8">{section.category}</h2>
              <div className="divider-ornament mb-8"><span className="divider-ornament-icon">✦</span></div>

              <div className="space-y-4">
                {section.questions.map((faq, i) => (
                  <details key={i} className="parchment-card group" style={{ listStyle: 'none' }}>
                    <summary
                      className="flex justify-between items-start cursor-pointer list-none"
                      style={{ listStyle: 'none' }}
                    >
                      <h3 className="font-serif font-bold text-lg pr-4" style={{ color: 'var(--color-ink)' }}>
                        {faq.q}
                      </h3>
                      <span
                        className="display-text text-lg flex-shrink-0"
                        style={{ color: 'var(--color-gold)' }}
                      >
                        +
                      </span>
                    </summary>
                    <div className="mt-4 body-text" style={{ borderTop: '1px solid var(--color-border)', paddingTop: '16px' }}>
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section
        className="py-16 text-center"
        style={{ backgroundColor: 'var(--color-parchment-dark)', borderTop: '2px solid var(--color-border)' }}
      >
        <div className="container-narrow">
          <h2 className="heading-section mb-4">Vous n&apos;avez pas trouvé votre réponse ?</h2>
          <p className="body-text mb-8">
            Contactez directement le staff via Discord ou le formulaire de contact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Contacter le staff</Link>
            <Link href="/candidatures" className="btn-secondary">Candidater</Link>
          </div>
        </div>
      </section>
    </>
  )
}
