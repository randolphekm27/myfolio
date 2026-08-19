import { useEffect } from 'react'

export default function CVPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const revealElements = document.querySelectorAll('.reveal-text')
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement
          el.style.transition = 'opacity 1.5s ease, transform 1.5s ease'
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          revealObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1 })
    revealElements.forEach(el => revealObserver.observe(el))
    return () => revealObserver.disconnect()
  }, [])

  const handlePrint = () => {
    window.print()
  }

  return (
    <article className="page-content">
      <section className="story-block section-observe reveal-text" style={{ paddingTop: '10rem', paddingBottom: '3rem' }}>
        <h1 className="hero-title text-center" style={{ marginBottom: '1.5rem' }}>Curriculum Vitae</h1>
        <p className="hero-description text-center" style={{ maxWidth: '800px', margin: '0 auto 2rem auto' }}>
          Randolphe Kodjo Mahulolo — Pédagogue, Technologue & Créatif Numérique.
        </p>

        <div className="text-center no-print" style={{ marginBottom: '3rem' }}>
          <button 
            className="contact-back" 
            onClick={handlePrint}
            style={{ cursor: 'pointer', background: 'none', border: 'none' }}
          >
            <a style={{ display: 'inline-block' }}>Imprimer / Télécharger le CV (PDF)</a>
          </button>
        </div>
      </section>

      {/* CV CONTENT */}
      <div className="narrative-article cv-print-area">
        
        {/* ENTÊTE & PROFIL */}
        <section className="story-block section-observe reveal-text" style={{ paddingTop: '1rem', paddingBottom: '3rem' }}>
          <p className="story-highlight text-center">KODJO Mahulolo Randolphe</p>
          <p className="text-center" style={{ fontSize: '1.1rem', color: 'var(--color-gray)', marginBottom: '2rem' }}>
            Pédagogue &middot; Technologue &middot; Électronique, Montage Vidéo & IA<br />
            Bénin &middot; randolphekm27@gmail.com &middot; +229 0157703972
          </p>
          <p style={{ maxWidth: '750px' }}>
            Pédagogue certifié (BAPET) et technologue diplômé de l'École Normale Supérieure de l'Enseignement Technique (ENSET) de Lokossa, spécialisé en ingénierie électronique et didactique des médias numériques. Auteur d'un mémoire d'ingéniorat pédagogique soutenu avec 18/20 (Mention EXCELLENT). Compétences en maintenance technique (GSM & informatique), montage vidéo, motion design et technologies numériques.
          </p>
        </section>

        {/* PARCOURS ACADÉMIQUE */}
        <section className="story-block section-observe reveal-text" style={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
          <p className="story-highlight text-center mb-2">Parcours Académique & Diplômes</p>
          
          <div style={{ width: '100%', maxWidth: '750px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <p className="story-highlight" style={{ fontSize: '1.4rem', marginBottom: '0.3rem' }}>
                BAPET — Brevet d'Aptitude au Professorat de l'Enseignement Technique
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--color-gray)' }}>ENSET Lokossa — UNSTIM d'Abomey (2024 - 2025)</p>
              <p style={{ fontSize: '1.1rem' }}>Spécialité Électronique. Soutenance du mémoire le 14/07/2025 : 18/20 (Mention EXCELLENT).</p>
            </div>

            <div>
              <p className="story-highlight" style={{ fontSize: '1.4rem', marginBottom: '0.3rem' }}>
                Licence en Sciences Techniques & Industrielles (Électronique)
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--color-gray)' }}>ENSET Lokossa (2022 - 2025)</p>
              <p style={{ fontSize: '1.1rem' }}>Génie électronique, automatique, didactique et ingénierie de la capsule vidéo pédagogique (CAPVIDUP).</p>
            </div>

            <div>
              <p className="story-highlight" style={{ fontSize: '1.4rem', marginBottom: '0.3rem' }}>
                Baccalauréat Scientifique (Série D — Biologie - Géologie)
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--color-gray)' }}>CEG 1 de Comé / Office du Baccalauréat (Juillet 2022)</p>
              <p style={{ fontSize: '1.1rem' }}>Mention Assez Bien avec notamment 19/20 en biologie.</p>
            </div>

            <div>
              <p className="story-highlight" style={{ fontSize: '1.4rem', marginBottom: '0.3rem' }}>
                Brevet d'Études du Premier Cycle (BPC)
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--color-gray)' }}>Collège de l'Espoir de Comé (2019)</p>
              <p style={{ fontSize: '1.1rem' }}>Mention Très Bien (Parmi les 10 premiers de l'établissement).</p>
            </div>
          </div>
        </section>

        {/* EXPÉRIENCES PROFESSIONNELLES */}
        <section className="story-block section-observe reveal-text" style={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
          <p className="story-highlight text-center mb-2">Expériences Professionnelles & Stages</p>

          <div style={{ width: '100%', maxWidth: '750px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <p className="story-highlight" style={{ fontSize: '1.4rem', marginBottom: '0.3rem' }}>
                Enseignant en Informatique
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--color-gray)' }}>EMTP de Lokossa (2025 - 2026)</p>
              <p style={{ fontSize: '1.1rem' }}>Enseignement théorique et pratique de l'informatique, préparation des supports didactiques.</p>
            </div>

            <div>
              <p className="story-highlight" style={{ fontSize: '1.4rem', marginBottom: '0.3rem' }}>
                Monteur Vidéo Certifié
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--color-gray)' }}>Projet WAMUP (Mars 2026)</p>
              <p style={{ fontSize: '1.1rem' }}>Captation vidéo mobile, montage et création de contenus médias pour le rassemblement WAMUP 2026.</p>
            </div>

            <div>
              <p className="story-highlight" style={{ fontSize: '1.4rem', marginBottom: '0.3rem' }}>
                Stage en Maintenance GSM & Systèmes
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--color-gray)' }}>Leader Électronique — Comé (2024)</p>
              <p style={{ fontSize: '1.1rem' }}>Maintenance GSM, micro-soudure électronique, installation de systèmes d'exploitation.</p>
            </div>

            <div>
              <p className="story-highlight" style={{ fontSize: '1.4rem', marginBottom: '0.3rem' }}>
                Stage en Électronique Hospitalière
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--color-gray)' }}>CHD de Lokossa (2022)</p>
              <p style={{ fontSize: '1.1rem' }}>Organisation d'entreprise, maintenance et diagnostic des équipements hospitaliers.</p>
            </div>
          </div>
        </section>

        {/* COMPÉTENCES & ENGAGEMENTS */}
        <section className="story-block section-observe reveal-text" style={{ paddingTop: '2rem', paddingBottom: '6rem' }}>
          <p className="story-highlight text-center mb-2">Compétences & Engagements</p>
          <ul className="clean-list" style={{ fontSize: '1.3rem', textAlign: 'center', lineHeight: '2' }}>
            <li>Électronique : Conception PCB, Langage C, Microcontrôleurs, Maintenance GSM & PC.</li>
            <li>Pédagogie & Vidéo : Didactique, Capsules vidéo, Montage vidéo, Motion Design.</li>
            <li>Technologies : Intelligence Artificielle, Prompt Engineering, Vibe Coding.</li>
            <li>Engagements : Responsable de l'institution culturelle et artistique (ENSET Lokossa), Formation projets OSC (INTER-AGIAL 2023).</li>
          </ul>
        </section>

      </div>
    </article>
  )
}
