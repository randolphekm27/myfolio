import { useEffect } from 'react'

export default function CVPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <article className="page-content" style={{ paddingTop: '10rem', paddingBottom: '6rem' }}>

      {/* DOWNLOAD / PRINT HEADER BAR */}
      <div className="no-print text-center" style={{ marginBottom: '2.5rem' }}>
        <h1 className="hero-title" style={{ fontSize: '2.2rem', marginBottom: '0.8rem' }}>Curriculum Vitae</h1>
        <p className="hero-description" style={{ fontSize: '1.1rem', color: 'var(--color-gray)', marginBottom: '1.5rem' }}>
          Format officiel de Randolphe Kodjo Mahulolo prê̂t pour impression et téléchargement PDF.
        </p>
        <a
          href="/CV_Randolphe_Kodjo_Mahulolo.pdf"
          download="CV_Randolphe_Kodjo_Mahulolo.pdf"
          className="cv-download-btn"
        >
          Télécharger le CV en PDF
        </a>
      </div>

      {/* STANDARD EXECUTIVE CV CONTAINER */}
      <div className="cv-document-sheet">

        {/* CV TOP HEADER BANNER */}
        <header className="cv-sheet-header">
          <div className="cv-header-titles">
            <h1 className="cv-name">KODJO Mahulolo Randolphe</h1>
            <p className="cv-headline">Pédagogue &bull; Technologue &bull; Électronique & Création Numérique</p>
          </div>
          <div className="cv-header-contact">
            <div><span>Email :</span> randolphekm27@gmail.com</div>
            <div><span>Téléphone :</span> +229 0157703972</div>
            <div><span>Adresse :</span> Bénin (Hounviguè / Lokossa / Comé)</div>
            <div><span>LinkedIn :</span> linkedin.com/in/randolphe-km-841626349</div>
          </div>
        </header>

        {/* CV TWO-COLUMN BODY */}
        <div className="cv-sheet-body">

          {/* LEFT SIDEBAR COLUMN */}
          <aside className="cv-sidebar">

            {/* PROFIL */}
            <section className="cv-section">
              <h2 className="cv-section-title">Profil</h2>
              <p className="cv-text">
                Pédagogue certifié (BAPET) et technologue diplômé de l'ENSET Lokossa. Auteur d'un mémoire d'ingéniorat pédagogique soutenu avec <strong>18/20 (Mention EXCELLENT)</strong> sur les capsules vidéo didactiques en électronique. Polyvalent en maintenance technique (GSM & PC), montage vidéo, motion design, prompt engineering et Vibe Coding.
              </p>
            </section>

            {/* COMPÉTENCES */}
            <section className="cv-section">
              <h2 className="cv-section-title">Compétences</h2>

              <div className="cv-skill-group">
                <h3>Électronique & Embarqué</h3>
                <p>Schématique PCB, Langage C, Microcontrôleurs, Maintenance GSM & Informatique, Équipements hospitaliers.</p>
              </div>

              <div className="cv-skill-group">
                <h3>Pédagogie & Audiovisuel</h3>
                <p>Ingénierie didactique (CAPVIDUP), Capsules vidéo éducatives, Montage vidéo mobile & PC, Motion design.</p>
              </div>

              <div className="cv-skill-group">
                <h3>Technologies Numériques</h3>
                <p>Prompt Engineering, Intelligence Artificielle générative, Vibe Coding, Développement Web (React/JS).</p>
              </div>
            </section>

            {/* LANGUES */}
            <section className="cv-section">
              <h2 className="cv-section-title">Langues</h2>
              <ul className="cv-list">
                <li><strong>Français :</strong> Langue d'instruction / Courant</li>
                <li><strong>Anglais :</strong> Technique & Académique</li>
              </ul>
            </section>

            {/* ENGAGEMENTS */}
            <section className="cv-section">
              <h2 className="cv-section-title">Engagements</h2>
              <ul className="cv-list">
                <li>Responsable de l'Institution Culturelle et Artistique — ENSET Lokossa</li>
                <li>Certifié en Rédaction de Projets OSC — Projet INTER-AGIAL (2023)</li>
              </ul>
            </section>

          </aside>

          {/* RIGHT MAIN COLUMN */}
          <main className="cv-main-content">

            {/* FORMATIONS */}
            <section className="cv-section">
              <h2 className="cv-section-title">Formations & Diplômes</h2>

              <div className="cv-item">
                <div className="cv-item-header">
                  <span className="cv-item-role">BAPET — Brevet d'Aptitude au Professorat de l'Enseignement Technique</span>
                  <span className="cv-item-date">2024 – 2025</span>
                </div>
                <div className="cv-item-sub">ENSET Lokossa — UNSTIM d'Abomey</div>
                <p className="cv-item-desc">
                  Spécialité Électronique. Soutenance du mémoire le 14/07/2025 : <strong>18/20 (Mention EXCELLENT)</strong> sur l'intégration pédagogique des capsules vidéo.
                </p>
              </div>

              <div className="cv-item">
                <div className="cv-item-header">
                  <span className="cv-item-role">Licence en Sciences Techniques & Industrielles (Électronique)</span>
                  <span className="cv-item-date">2022 – 2025</span>
                </div>
                <div className="cv-item-sub">ENSET de Lokossa</div>
                <p className="cv-item-desc">
                  Génie électronique, automatique, didactique et ingénierie de la capsule vidéo (Projet CAPVIDUP/PFCR1).
                </p>
              </div>

              <div className="cv-item">
                <div className="cv-item-header">
                  <span className="cv-item-role">Baccalauréat Scientifique (Série D — Biologie & Géologie)</span>
                  <span className="cv-item-date">Juillet 2022</span>
                </div>
                <div className="cv-item-sub">CEG 1 de Comé / Office du Baccalauréat Bénin</div>
                <p className="cv-item-desc">
                  Mention Assez Bien avec notamment la note de <strong>19/20 en biologie</strong>.
                </p>
              </div>

              <div className="cv-item">
                <div className="cv-item-header">
                  <span className="cv-item-role">Brevet d'Études du Premier Cycle (BEPC)</span>
                  <span className="cv-item-date">2019</span>
                </div>
                <div className="cv-item-sub">Collège de l'Espoir de Comé</div>
                <p className="cv-item-desc">
                  Mention Très Bien. Classé parmi les 10 premiers de l'établissement.
                </p>
              </div>
            </section>

            {/* EXPÉRIENCES PROFESSIONNELLES */}
            <section className="cv-section">
              <h2 className="cv-section-title">Expériences Professionnelles & Stages</h2>

              <div className="cv-item">
                <div className="cv-item-header">
                  <span className="cv-item-role">Enseignant en Informatique</span>
                  <span className="cv-item-date">2025 – 2026</span>
                </div>
                <div className="cv-item-sub">EMTP de Lokossa</div>
                <p className="cv-item-desc">
                  Enseignement théorique et pratique de l'informatique, conception des contenus pédagogiques et encadrement des élèves.
                </p>
              </div>

              <div className="cv-item">
                <div className="cv-item-header">
                  <span className="cv-item-role">Monteur Vidéo & Créateur Média Certifié</span>
                  <span className="cv-item-date">Mars 2026</span>
                </div>
                <div className="cv-item-sub">Projet WAMUP (WE4CCA Annual Meet Up)</div>
                <p className="cv-item-desc">
                  Captation vidéo mobile, montage et production de contenus visuels pour le rassemblement annuel WAMUP 2026.
                </p>
              </div>

              <div className="cv-item">
                <div className="cv-item-header">
                  <span className="cv-item-role">Stage en Maintenance GSM & Systèmes</span>
                  <span className="cv-item-date">2024</span>
                </div>
                <div className="cv-item-sub">Leader Électronique — Comé</div>
                <p className="cv-item-desc">
                  Maintenance GSM, micro-soudure électronique, diagnostic et installation de systèmes d'exploitation.
                </p>
              </div>

              <div className="cv-item">
                <div className="cv-item-header">
                  <span className="cv-item-role">Stage en Électronique Hospitalière</span>
                  <span className="cv-item-date">2022</span>
                </div>
                <div className="cv-item-sub">CHD de Lokossa (Centre Hospitalier Départemental)</div>
                <p className="cv-item-desc">
                  Maintenance préventive et corrective des équipements médicaux et organisation des services techniques.
                </p>
              </div>
            </section>

            {/* PROJETS MAJEURS */}
            <section className="cv-section">
              <h2 className="cv-section-title">Projets Majeurs</h2>
              <div className="cv-item">
                <span className="cv-item-role">Capsule Vidéo Pédagogique en Électronique (ENSET Lokossa)</span>
                <p className="cv-item-desc">Conception d'un support vidéo d'enseignementDidactique en électronique numérique (Projet CAPVIDUP).</p>
              </div>
              <div className="cv-item">
                <span className="cv-item-role">Conception de Circuit Électronique dans Proteus</span>
                <p className="cv-item-desc">Processus d'étude schématique, de simulation et de conception de circuit électronique dans le logiciel Proteus.</p>
              </div>
            </section>

          </main>

        </div>

      </div>

    </article>
  )
}
