import { useEffect } from 'react'

export default function CVPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <article className="page-content" style={{ 
      paddingTop: 'calc(var(--header-height) + 2rem)', 
      paddingBottom: '6rem',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      minHeight: '100vh'
    }}>
      
      {/* DOWNLOAD / PRINT HEADER BAR */}
      <div className="no-print text-center" style={{ 
        marginBottom: '2.5rem',
        padding: '2rem 1rem',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        borderRadius: '16px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
        maxWidth: '1100px',
        margin: '0 auto 2.5rem auto'
      }}>
        <h1 className="hero-title" style={{ 
          fontSize: '2.5rem', 
          marginBottom: '0.8rem',
          color: '#ffffff',
          fontWeight: '700',
          letterSpacing: '2px',
          textShadow: '0 2px 10px rgba(0,0,0,0.3)'
        }}>Curriculum Vitae</h1>
        <p className="hero-description" style={{ 
          fontSize: '1.1rem', 
          color: '#a8b5d9',
          marginBottom: '1.8rem',
          fontWeight: '300',
          letterSpacing: '1px'
        }}>
          Format officiel de Randolphe Kodjo Mahulolo prêt pour impression et téléchargement PDF.
        </p>
        <a
          href="/CV_Randolphe_Kodjo_Mahulolo.pdf"
          download="CV_Randolphe_Kodjo_Mahulolo.pdf"
          className="contact-back"
          style={{ 
            display: 'inline-block',
            fontWeight: '600',
            padding: '1rem 2.8rem',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            borderRadius: '50px',
            textDecoration: 'none',
            fontSize: '1.1rem',
            letterSpacing: '1px',
            boxShadow: '0 8px 25px rgba(102, 126, 234, 0.4)',
            transition: 'all 0.3s ease',
            border: '2px solid rgba(255,255,255,0.2)',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)'
            e.currentTarget.style.boxShadow = '0 12px 35px rgba(102, 126, 234, 0.6)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)'
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.4)'
          }}
        >
          ⬇ Télécharger le CV en PDF
        </a>
      </div>

      {/* STANDARD EXECUTIVE CV CONTAINER */}
      <div className="cv-document-sheet" style={{
        maxWidth: '1100px',
        margin: '0 auto',
        background: '#ffffff',
        borderRadius: '20px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
        overflow: 'hidden',
        transition: 'all 0.3s ease'
      }}>
        
        {/* CV TOP HEADER BANNER */}
        <header className="cv-sheet-header" style={{
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
          padding: '2.5rem 3rem',
          color: 'white',
          borderBottom: '4px solid #667eea'
        }}>
          <div className="cv-header-titles" style={{ marginBottom: '1.2rem' }}>
            <h1 className="cv-name" style={{
              fontSize: '2.8rem',
              fontWeight: '700',
              margin: '0',
              letterSpacing: '2px',
              background: 'linear-gradient(135deg, #fff 0%, #a8b5d9 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>KODJO Mahulolo Randolphe</h1>
            <p className="cv-headline" style={{
              fontSize: '1.15rem',
              color: '#a8b5d9',
              margin: '0.5rem 0 0 0',
              fontWeight: '300',
              letterSpacing: '1px'
            }}>Pédagogue • Technologue • Électronique & Création Numérique</p>
          </div>
          <div className="cv-header-contact" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '0.6rem 1.5rem',
            fontSize: '0.95rem',
            color: '#c8d0e6',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '1.2rem'
          }}>
            <div><span style={{ fontWeight: '600', color: '#a8b5d9' }}>📧 Email :</span> randolphekm27@gmail.com</div>
            <div><span style={{ fontWeight: '600', color: '#a8b5d9' }}>📱 Téléphone :</span> +229 0157703972</div>
            <div><span style={{ fontWeight: '600', color: '#a8b5d9' }}>📍 Adresse :</span> Bénin (Hounviguè / Lokossa / Comé)</div>
            <div><span style={{ fontWeight: '600', color: '#a8b5d9' }}>🔗 LinkedIn :</span> linkedin.com/in/randolphe-km-841626349</div>
          </div>
        </header>

        {/* CV TWO-COLUMN BODY */}
        <div className="cv-sheet-body" style={{
          display: 'grid',
          gridTemplateColumns: '280px 1fr',
          gap: '0',
          background: '#fafbfc'
        }}>
          
          {/* LEFT SIDEBAR COLUMN */}
          <aside className="cv-sidebar" style={{
            background: '#f0f2f7',
            padding: '2rem 1.8rem',
            borderRight: '1px solid #e0e4ed'
          }}>
            
            {/* PROFIL */}
            <section className="cv-section" style={{ marginBottom: '2rem' }}>
              <h2 className="cv-section-title" style={{
                fontSize: '1.1rem',
                fontWeight: '700',
                color: '#1a1a2e',
                borderBottom: '3px solid #667eea',
                paddingBottom: '0.5rem',
                marginBottom: '1rem',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}>Profil</h2>
              <p className="cv-text" style={{
                fontSize: '0.95rem',
                lineHeight: '1.7',
                color: '#2d3748',
                margin: 0
              }}>
                Pédagogue certifié (BAPET) et technologue diplômé de l'ENSET Lokossa. Auteur d'un mémoire d'ingéniorat pédagogique soutenu avec <strong style={{ color: '#667eea' }}>18/20 (Mention EXCELLENT)</strong> sur les capsules vidéo didactiques en électronique. Polyvalent en maintenance technique (GSM & PC), montage vidéo, motion design, prompt engineering et Vibe Coding.
              </p>
            </section>

            {/* COMPÉTENCES */}
            <section className="cv-section" style={{ marginBottom: '2rem' }}>
              <h2 className="cv-section-title" style={{
                fontSize: '1.1rem',
                fontWeight: '700',
                color: '#1a1a2e',
                borderBottom: '3px solid #667eea',
                paddingBottom: '0.5rem',
                marginBottom: '1rem',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}>Compétences</h2>
              
              <div className="cv-skill-group" style={{ marginBottom: '1.2rem' }}>
                <h3 style={{
                  fontSize: '0.9rem',
                  fontWeight: '700',
                  color: '#2d3748',
                  margin: '0 0 0.3rem 0'
                }}>⚡ Électronique & Embarqué</h3>
                <p style={{
                  fontSize: '0.9rem',
                  lineHeight: '1.6',
                  color: '#4a5568',
                  margin: 0
                }}>Schématique PCB, Langage C, Microcontrôleurs, Maintenance GSM & Informatique, Équipements hospitaliers.</p>
              </div>

              <div className="cv-skill-group" style={{ marginBottom: '1.2rem' }}>
                <h3 style={{
                  fontSize: '0.9rem',
                  fontWeight: '700',
                  color: '#2d3748',
                  margin: '0 0 0.3rem 0'
                }}>🎓 Pédagogie & Audiovisuel</h3>
                <p style={{
                  fontSize: '0.9rem',
                  lineHeight: '1.6',
                  color: '#4a5568',
                  margin: 0
                }}>Ingénierie didactique (CAPVIDUP), Capsules vidéo éducatives, Montage vidéo mobile & PC, Motion design.</p>
              </div>

              <div className="cv-skill-group">
                <h3 style={{
                  fontSize: '0.9rem',
                  fontWeight: '700',
                  color: '#2d3748',
                  margin: '0 0 0.3rem 0'
                }}>💻 Technologies Numériques</h3>
                <p style={{
                  fontSize: '0.9rem',
                  lineHeight: '1.6',
                  color: '#4a5568',
                  margin: 0
                }}>Prompt Engineering, Intelligence Artificielle générative, Vibe Coding, Développement Web (React/JS).</p>
              </div>
            </section>

            {/* LANGUES */}
            <section className="cv-section" style={{ marginBottom: '2rem' }}>
              <h2 className="cv-section-title" style={{
                fontSize: '1.1rem',
                fontWeight: '700',
                color: '#1a1a2e',
                borderBottom: '3px solid #667eea',
                paddingBottom: '0.5rem',
                marginBottom: '1rem',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}>Langues</h2>
              <ul className="cv-list" style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                <li style={{
                  padding: '0.4rem 0',
                  borderBottom: '1px solid #e0e4ed',
                  fontSize: '0.95rem',
                  color: '#2d3748'
                }}><strong style={{ color: '#1a1a2e' }}>Français :</strong> Langue d'instruction / Courant</li>
                <li style={{
                  padding: '0.4rem 0',
                  fontSize: '0.95rem',
                  color: '#2d3748'
                }}><strong style={{ color: '#1a1a2e' }}>Anglais :</strong> Technique & Académique</li>
              </ul>
            </section>

            {/* ENGAGEMENTS */}
            <section className="cv-section">
              <h2 className="cv-section-title" style={{
                fontSize: '1.1rem',
                fontWeight: '700',
                color: '#1a1a2e',
                borderBottom: '3px solid #667eea',
                paddingBottom: '0.5rem',
                marginBottom: '1rem',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}>Engagements</h2>
              <ul className="cv-list" style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                <li style={{
                  padding: '0.4rem 0',
                  borderBottom: '1px solid #e0e4ed',
                  fontSize: '0.95rem',
                  color: '#2d3748'
                }}>🏛️ Responsable de l'Institution Culturelle et Artistique — ENSET Lokossa</li>
                <li style={{
                  padding: '0.4rem 0',
                  fontSize: '0.95rem',
                  color: '#2d3748'
                }}>📜 Certifié en Rédaction de Projets OSC — Projet INTER-AGIAL (2023)</li>
              </ul>
            </section>

          </aside>

          {/* RIGHT MAIN COLUMN */}
          <main className="cv-main-content" style={{
            padding: '2rem 2.5rem',
            background: '#ffffff'
          }}>
            
            {/* FORMATIONS */}
            <section className="cv-section" style={{ marginBottom: '2rem' }}>
              <h2 className="cv-section-title" style={{
                fontSize: '1.2rem',
                fontWeight: '700',
                color: '#1a1a2e',
                borderBottom: '3px solid #667eea',
                paddingBottom: '0.5rem',
                marginBottom: '1.5rem',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}>🎓 Formations & Diplômes</h2>

              <div className="cv-item" style={{
                marginBottom: '1.5rem',
                paddingLeft: '1rem',
                borderLeft: '3px solid #667eea'
              }}>
                <div className="cv-item-header" style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  flexWrap: 'wrap',
                  marginBottom: '0.2rem'
                }}>
                  <span className="cv-item-role" style={{
                    fontSize: '1.05rem',
                    fontWeight: '700',
                    color: '#1a1a2e'
                  }}>BAPET — Brevet d'Aptitude au Professorat de l'Enseignement Technique</span>
                  <span className="cv-item-date" style={{
                    fontSize: '0.85rem',
                    color: '#667eea',
                    fontWeight: '600'
                  }}>2024 – 2025</span>
                </div>
                <div className="cv-item-sub" style={{
                  fontSize: '0.95rem',
                  color: '#4a5568',
                  marginBottom: '0.3rem'
                }}>ENSET Lokossa — UNSTIM d'Abomey</div>
                <p className="cv-item-desc" style={{
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  color: '#2d3748',
                  margin: 0
                }}>
                  Spécialité Électronique. Soutenance du mémoire le 14/07/2025 : <strong style={{ color: '#667eea' }}>18/20 (Mention EXCELLENT)</strong> sur l'intégration pédagogique des capsules vidéo.
                </p>
              </div>

              <div className="cv-item" style={{
                marginBottom: '1.5rem',
                paddingLeft: '1rem',
                borderLeft: '3px solid #667eea'
              }}>
                <div className="cv-item-header" style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  flexWrap: 'wrap',
                  marginBottom: '0.2rem'
                }}>
                  <span className="cv-item-role" style={{
                    fontSize: '1.05rem',
                    fontWeight: '700',
                    color: '#1a1a2e'
                  }}>Licence en Sciences Techniques & Industrielles (Électronique)</span>
                  <span className="cv-item-date" style={{
                    fontSize: '0.85rem',
                    color: '#667eea',
                    fontWeight: '600'
                  }}>2022 – 2025</span>
                </div>
                <div className="cv-item-sub" style={{
                  fontSize: '0.95rem',
                  color: '#4a5568',
                  marginBottom: '0.3rem'
                }}>ENSET de Lokossa</div>
                <p className="cv-item-desc" style={{
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  color: '#2d3748',
                  margin: 0
                }}>
                  Génie électronique, automatique, didactique et ingénierie de la capsule vidéo (Projet CAPVIDUP/PFCR1).
                </p>
              </div>

              <div className="cv-item" style={{
                marginBottom: '1.5rem',
                paddingLeft: '1rem',
                borderLeft: '3px solid #667eea'
              }}>
                <div className="cv-item-header" style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  flexWrap: 'wrap',
                  marginBottom: '0.2rem'
                }}>
                  <span className="cv-item-role" style={{
                    fontSize: '1.05rem',
                    fontWeight: '700',
                    color: '#1a1a2e'
                  }}>Baccalauréat Scientifique (Série D — Biologie & Géologie)</span>
                  <span className="cv-item-date" style={{
                    fontSize: '0.85rem',
                    color: '#667eea',
                    fontWeight: '600'
                  }}>Juillet 2022</span>
                </div>
                <div className="cv-item-sub" style={{
                  fontSize: '0.95rem',
                  color: '#4a5568',
                  marginBottom: '0.3rem'
                }}>CEG 1 de Comé / Office du Baccalauréat Bénin</div>
                <p className="cv-item-desc" style={{
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  color: '#2d3748',
                  margin: 0
                }}>
                  Mention Assez Bien avec notamment la note de <strong style={{ color: '#667eea' }}>19/20 en biologie</strong>.
                </p>
              </div>

              <div className="cv-item" style={{
                paddingLeft: '1rem',
                borderLeft: '3px solid #667eea'
              }}>
                <div className="cv-item-header" style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  flexWrap: 'wrap',
                  marginBottom: '0.2rem'
                }}>
                  <span className="cv-item-role" style={{
                    fontSize: '1.05rem',
                    fontWeight: '700',
                    color: '#1a1a2e'
                  }}>Brevet d'Études du Premier Cycle (BEPC)</span>
                  <span className="cv-item-date" style={{
                    fontSize: '0.85rem',
                    color: '#667eea',
                    fontWeight: '600'
                  }}>2019</span>
                </div>
                <div className="cv-item-sub" style={{
                  fontSize: '0.95rem',
                  color: '#4a5568',
                  marginBottom: '0.3rem'
                }}>Collège de l'Espoir de Comé</div>
                <p className="cv-item-desc" style={{
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  color: '#2d3748',
                  margin: 0
                }}>
                  Mention Très Bien. Classé parmi les 10 premiers de l'établissement.
                </p>
              </div>
            </section>

            {/* EXPÉRIENCES PROFESSIONNELLES */}
            <section className="cv-section" style={{ marginBottom: '2rem' }}>
              <h2 className="cv-section-title" style={{
                fontSize: '1.2rem',
                fontWeight: '700',
                color: '#1a1a2e',
                borderBottom: '3px solid #667eea',
                paddingBottom: '0.5rem',
                marginBottom: '1.5rem',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}>💼 Expériences Professionnelles & Stages</h2>

              <div className="cv-item" style={{
                marginBottom: '1.5rem',
                paddingLeft: '1rem',
                borderLeft: '3px solid #667eea'
              }}>
                <div className="cv-item-header" style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  flexWrap: 'wrap',
                  marginBottom: '0.2rem'
                }}>
                  <span className="cv-item-role" style={{
                    fontSize: '1.05rem',
                    fontWeight: '700',
                    color: '#1a1a2e'
                  }}>Enseignant en Informatique</span>
                  <span className="cv-item-date" style={{
                    fontSize: '0.85rem',
                    color: '#667eea',
                    fontWeight: '600'
                  }}>2025 – 2026</span>
                </div>
                <div className="cv-item-sub" style={{
                  fontSize: '0.95rem',
                  color: '#4a5568',
                  marginBottom: '0.3rem'
                }}>EMTP de Lokossa</div>
                <p className="cv-item-desc" style={{
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  color: '#2d3748',
                  margin: 0
                }}>
                  Enseignement théorique et pratique de l'informatique, conception des contenus pédagogiques et encadrement des élèves.
                </p>
              </div>

              <div className="cv-item" style={{
                marginBottom: '1.5rem',
                paddingLeft: '1rem',
                borderLeft: '3px solid #667eea'
              }}>
                <div className="cv-item-header" style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  flexWrap: 'wrap',
                  marginBottom: '0.2rem'
                }}>
                  <span className="cv-item-role" style={{
                    fontSize: '1.05rem',
                    fontWeight: '700',
                    color: '#1a1a2e'
                  }}>Monteur Vidéo & Créateur Média Certifié</span>
                  <span className="cv-item-date" style={{
                    fontSize: '0.85rem',
                    color: '#667eea',
                    fontWeight: '600'
                  }}>Mars 2026</span>
                </div>
                <div className="cv-item-sub" style={{
                  fontSize: '0.95rem',
                  color: '#4a5568',
                  marginBottom: '0.3rem'
                }}>Projet WAMUP (WE4CCA Annual Meet Up)</div>
                <p className="cv-item-desc" style={{
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  color: '#2d3748',
                  margin: 0
                }}>
                  Captation vidéo mobile, montage et production de contenus visuels pour le rassemblement annuel WAMUP 2026.
                </p>
              </div>

              <div className="cv-item" style={{
                marginBottom: '1.5rem',
                paddingLeft: '1rem',
                borderLeft: '3px solid #667eea'
              }}>
                <div className="cv-item-header" style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  flexWrap: 'wrap',
                  marginBottom: '0.2rem'
                }}>
                  <span className="cv-item-role" style={{
                    fontSize: '1.05rem',
                    fontWeight: '700',
                    color: '#1a1a2e'
                  }}>Stage en Maintenance GSM & Systèmes</span>
                  <span className="cv-item-date" style={{
                    fontSize: '0.85rem',
                    color: '#667eea',
                    fontWeight: '600'
                  }}>2024</span>
                </div>
                <div className="cv-item-sub" style={{
                  fontSize: '0.95rem',
                  color: '#4a5568',
                  marginBottom: '0.3rem'
                }}>Leader Électronique — Comé</div>
                <p className="cv-item-desc" style={{
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  color: '#2d3748',
                  margin: 0
                }}>
                  Maintenance GSM, micro-soudure électronique, diagnostic et installation de systèmes d'exploitation.
                </p>
              </div>

              <div className="cv-item" style={{
                paddingLeft: '1rem',
                borderLeft: '3px solid #667eea'
              }}>
                <div className="cv-item-header" style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  flexWrap: 'wrap',
                  marginBottom: '0.2rem'
                }}>
                  <span className="cv-item-role" style={{
                    fontSize: '1.05rem',
                    fontWeight: '700',
                    color: '#1a1a2e'
                  }}>Stage en Électronique Hospitalière</span>
                  <span className="cv-item-date" style={{
                    fontSize: '0.85rem',
                    color: '#667eea',
                    fontWeight: '600'
                  }}>2022</span>
                </div>
                <div className="cv-item-sub" style={{
                  fontSize: '0.95rem',
                  color: '#4a5568',
                  marginBottom: '0.3rem'
                }}>CHD de Lokossa (Centre Hospitalier Départemental)</div>
                <p className="cv-item-desc" style={{
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  color: '#2d3748',
                  margin: 0
                }}>
                  Maintenance préventive et corrective des équipements médicaux et organisation des services techniques.
                </p>
              </div>
            </section>

            {/* PROJETS MAJEURS */}
            <section className="cv-section">
              <h2 className="cv-section-title" style={{
                fontSize: '1.2rem',
                fontWeight: '700',
                color: '#1a1a2e',
                borderBottom: '3px solid #667eea',
                paddingBottom: '0.5rem',
                marginBottom: '1.5rem',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}>🚀 Projets Majeurs</h2>
              
              <div className="cv-item" style={{
                marginBottom: '1.2rem',
                paddingLeft: '1rem',
                borderLeft: '3px solid #667eea'
              }}>
                <span className="cv-item-role" style={{
                  fontSize: '1.05rem',
                  fontWeight: '700',
                  color: '#1a1a2e',
                  display: 'block',
                  marginBottom: '0.2rem'
                }}>🎬 Capsule Vidéo Pédagogique en Électronique (ENSET Lokossa)</span>
                <p className="cv-item-desc" style={{
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  color: '#2d3748',
                  margin: 0
                }}>Conception d'un support vidéo d'enseignement didactique en électronique numérique (Projet CAPVIDUP).</p>
              </div>
              
              <div className="cv-item" style={{
                paddingLeft: '1rem',
                borderLeft: '3px solid #667eea'
              }}>
                <span className="cv-item-role" style={{
                  fontSize: '1.05rem',
                  fontWeight: '700',
                  color: '#1a1a2e',
                  display: 'block',
                  marginBottom: '0.2rem'
                }}>⚡ Conception de Circuit Électronique dans Proteus</span>
                <p className="cv-item-desc" style={{
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  color: '#2d3748',
                  margin: 0
                }}>Processus d'étude schématique, de simulation et de conception de circuit électronique dans le logiciel Proteus.</p>
              </div>
            </section>

          </main>

        </div>

      </div>

    </article>
  )
}
