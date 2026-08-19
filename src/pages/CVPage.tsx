import { useEffect } from 'react'

export default function CVPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const revealElements = document.querySelectorAll('.reveal-text')
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement
          el.style.transition = 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)'
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
    <div className="page-container narrative-container" style={{ paddingTop: 'calc(var(--header-height) + 3rem)', paddingBottom: '6rem' }}>
      {/* HEADER ACTIONS */}
      <div className="reveal-text" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <span className="chapter-num">CURRICULUM VITAE OFFICIEL</span>
          <h1 className="chapter-title" style={{ fontSize: '2.5rem', marginTop: '0.4rem' }}>Randolphe K. MAHULOLO</h1>
        </div>

        <button 
          className="back-to-top-btn no-print" 
          onClick={handlePrint}
          style={{ padding: '0.8rem 1.8rem', fontSize: '0.9rem', background: 'var(--color-accent)', color: '#fff', border: 'none', borderRadius: '30px', cursor: 'pointer', fontWeight: '600' }}
        >
          📄 Télécharger / Imprimer le CV (PDF)
        </button>
      </div>

      {/* CV CARD CONTAINER FOR PRINT & VIEW */}
      <div className="highlight-card cv-print-area reveal-text" style={{ padding: '3rem', background: 'var(--color-card-light)', borderRadius: '16px' }}>
        
        {/* CV HEADER */}
        <div style={{ borderBottom: '2px solid var(--color-gold)', paddingBottom: '2rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', margin: 0 }}>KODJO Mahulolo Randolphe</h2>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', color: 'var(--color-gold)', margin: '0.4rem 0 1rem 0' }}>
            PÉDAGOGUE &bull; TECHNOLOGUE &bull; CRÉATIF NUMÉRIQUE &bull; ÉLECTRONIQUE & IA
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', fontSize: '0.9rem', color: 'var(--color-gray)', fontFamily: 'var(--font-mono)' }}>
            <span>📍 Bénin (Hounviguè / Lokossa / Comé)</span>
            <span>✉️ randolphekm27@gmail.com</span>
            <span>📞 +229 0157703972</span>
            <span>🔗 linkedin.com/in/randolphe-km-841626349</span>
          </div>
        </div>

        {/* PROFIL SYNTHETIQUE */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h3 className="chapter-title" style={{ fontSize: '1.3rem', color: 'var(--color-gold)', borderBottom: '1px solid var(--color-border-light)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
            PROFIL PROFESSIONNEL
          </h3>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.75' }}>
            Pédagogue certifié (BAPET) et technologue diplômé de l'École Normale Supérieure de l'Enseignement Technique (ENSET) de Lokossa, spécialisé en ingénierie électronique et didactique des médias numériques. Auteur d'un mémoire d'ingéniorat pédagogique évalué à <strong>18/20 (Mention EXCELLENT)</strong> sur la conception de capsules vidéo éducatives. Polyvalent, doté de compétences solides en maintenance technique (GSM & informatique), montage vidéo, motion design, prompt engineering et Vibe Coding.
          </p>
        </div>

        {/* PARCOURS ACADÉMIQUE */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h3 className="chapter-title" style={{ fontSize: '1.3rem', color: 'var(--color-gold)', borderBottom: '1px solid var(--color-border-light)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
            PARCOURS ACADÉMIQUE & DIPLÔMES
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                <span>BAPET — Brevet d'Aptitude au Professorat de l'Enseignement Technique</span>
                <span>2024 - 2025</span>
              </div>
              <p style={{ fontStyle: 'italic', color: 'var(--color-gold)', margin: '0.2rem 0' }}>ENSET Lokossa — UNSTIM d'Abomey</p>
              <p style={{ fontSize: '0.95rem' }}>Spécialité Électronique &bull; Soutenance du mémoire le 14/07/2025 : <strong>18/20 Mention EXCELLENT</strong>.</p>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                <span>Licence en Science Technique et Industrielles (STI — Électronique)</span>
                <span>2022 - 2025</span>
              </div>
              <p style={{ fontStyle: 'italic', color: 'var(--color-gold)', margin: '0.2rem 0' }}>ENSET Lokossa</p>
              <p style={{ fontSize: '0.95rem' }}>Formation complète en génie électronique, automatique, didactique et intégration de la capsule vidéo pédagogique (Projet CAPVIDUP).</p>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                <span>Baccalauréat Scientifique (Série D — Biologie & Géologie)</span>
                <span>Juillet 2022</span>
              </div>
              <p style={{ fontStyle: 'italic', color: 'var(--color-gold)', margin: '0.2rem 0' }}>CEG 1 de Comé / Office du Baccalauréat Bénin</p>
              <p style={{ fontSize: '0.95rem' }}>Mention Assez Bien &bull; Note de <strong>19/20 en biologie</strong>.</p>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                <span>Brevet d'Études du Premier Cycle (BPC)</span>
                <span>2019</span>
              </div>
              <p style={{ fontStyle: 'italic', color: 'var(--color-gold)', margin: '0.2rem 0' }}>Collège de l'Espoir de Comé</p>
              <p style={{ fontSize: '0.95rem' }}>Mention Très Bien &bull; Classé parmi les 10 premiers de l'établissement.</p>
            </div>
          </div>
        </div>

        {/* EXPÉRIENCES PROFESSIONNELLES */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h3 className="chapter-title" style={{ fontSize: '1.3rem', color: 'var(--color-gold)', borderBottom: '1px solid var(--color-border-light)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
            EXPÉRIENCES PROFESSIONNELLES & STAGES
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                <span>Enseignant en Informatique</span>
                <span>2025 - 2026</span>
              </div>
              <p style={{ fontStyle: 'italic', color: 'var(--color-gold)', margin: '0.2rem 0' }}>EMTP de Lokossa</p>
              <p style={{ fontSize: '0.95rem' }}>Animation des cours théoriques et pratiques d'informatique, préparation des supports didactiques et encadrement des élèves.</p>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                <span>Monteur Vidéo & Créateur Média Certifié</span>
                <span>Mars 2026</span>
              </div>
              <p style={{ fontStyle: 'italic', color: 'var(--color-gold)', margin: '0.2rem 0' }}>Projet WAMUP (WE4CCA Annual Meet Up)</p>
              <p style={{ fontSize: '0.95rem' }}>Captation vidéo, montage, production de contenus visuels et narration pour l'événement annuel WAMUP 2026.</p>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                <span>Stage en Maintenance GSM & Systèmes</span>
                <span>2024</span>
              </div>
              <p style={{ fontStyle: 'italic', color: 'var(--color-gold)', margin: '0.2rem 0' }}>Leader Électronique (Comé)</p>
              <p style={{ fontSize: '0.95rem' }}>Maintenance et réparation GSM, micro-soudure électronique, installation de systèmes d'exploitation.</p>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                <span>Stage en Électronique Hospitalière</span>
                <span>2022</span>
              </div>
              <p style={{ fontStyle: 'italic', color: 'var(--color-gold)', margin: '0.2rem 0' }}>CHD de Lokossa (Centre Hospitalier Départemental)</p>
              <p style={{ fontSize: '0.95rem' }}>Découverte du fonctionnement d'entreprise, maintenance et diagnostic des équipements médicaux et hospitaliers.</p>
            </div>
          </div>
        </div>

        {/* SKILLS */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 className="chapter-title" style={{ fontSize: '1.3rem', color: 'var(--color-gold)', borderBottom: '1px solid var(--color-border-light)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
            COMPÉTENCES CLÉS
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
            <div>
              <strong>⚡ Électronique :</strong>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-gray)' }}>Schématique PCB, Langage C, Microcontrôleurs, Maintenance GSM & PC.</p>
            </div>
            <div>
              <strong>🎓 Pédagogie & Média :</strong>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-gray)' }}>Capsules vidéo didactiques, Montage vidéo, Motion design, Scénarisation.</p>
            </div>
            <div>
              <strong>🤖 IA & Vibe Coding :</strong>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-gray)' }}>Prompt Engineering, IA Générative, Développement web React/TypeScript.</p>
            </div>
          </div>
        </div>

      </div>

      {/* DEV IN PROGRESS BADGE */}
      <div className="highlight-card text-center reveal-text no-print" style={{ marginTop: '4rem', borderStyle: 'dashed' }}>
        <span className="hero-badge">🚧 EN COURS DE DÉVELOPPEMENT</span>
        <h3 className="chapter-title" style={{ marginTop: '0.8rem' }}>Générateur de CV Europass & Version Anglaise (EN)</h3>
        <p style={{ fontSize: '1rem', color: 'var(--color-gray)', marginTop: '0.5rem' }}>
          La génération automatique du CV aux normes Europass ainsi que la traduction officielle en Anglais 🇬🇧 sont en cours de développement.
        </p>
      </div>
    </div>
  )
}
