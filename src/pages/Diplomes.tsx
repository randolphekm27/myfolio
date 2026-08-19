import { useEffect, useState } from 'react'

export default function Diplomes() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null)

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

  const diplomesData = [
    {
      id: 'pv-bapet',
      title: 'Procès-Verbal de Soutenance — BAPET / CAPET',
      institution: 'ENSET de Lokossa — UNSTIM d\'Abomey',
      year: '14 Juillet 2025',
      grade: '18.00 / 20 — Mention EXCELLENT',
      desc: 'Mémoire et projet technique & pédagogique portant sur : « Étude, conception et intégration pédagogique d\'une capsule vidéo en électronique ». Jury présidé par Dr GNONLONFOUN Jean-Marc.',
      image: './doc-pv-soutenance.jpg',
      badge: '🏆 Distinction Principale'
    },
    {
      id: 'memoire-enset',
      title: 'Page de Garde — Mémoire de Fin d\'Études ENSET',
      institution: 'École Normale Supérieure de l\'Enseignement Technique (Lokossa)',
      year: 'Promotion 2024-2025',
      grade: '3ème Année — Spécialité Électronique',
      desc: 'Projet réalisé dans le cadre du programme CAPVIDUP/PFCR1/ENSET Lokossa. Thème axé sur l\'ingénierie de la capsule vidéo pédagogique.',
      image: './doc-memoire.jpg',
      badge: '🎓 Diplôme d\'Ingénierie Pédagogique'
    },
    {
      id: 'bac',
      title: 'Attestation de Succès au Baccalauréat',
      institution: 'Office du Baccalauréat — République du Bénin',
      year: 'Session de Juillet 2022',
      grade: 'Série D (Biologie - Géologie) — Mention Assez Bien',
      desc: 'Obtenu au Centre Col. Cath. de Comé avec notamment une note de 19/20 en biologie.',
      image: './diploma-bac.jpg',
      badge: '📜 Baccalauréat Scientifique'
    },
    {
      id: 'cert-wamup',
      title: 'Certificat d\'Engagement — Projet WAMUP 2026',
      institution: 'WE4CCA / WAM UP Annual Meet Up',
      year: 'Mars 2026',
      grade: 'Monteur Vidéo Certifié',
      desc: 'Certificat d\'engagement récompensant la contribution en tant que monteur vidéo et créateur de contenu visuel.',
      image: './photo-wamup-cert.jpg',
      badge: '🎬 Certification Vidéo'
    }
  ]

  return (
    <div className="page-container narrative-container" style={{ paddingTop: 'calc(var(--header-height) + 3rem)', paddingBottom: '6rem' }}>
      <div className="chapter-header reveal-text">
        <span className="chapter-num">TITRES & DISTINCTIONS</span>
        <h1 className="chapter-title" style={{ fontSize: '2.5rem' }}>Diplômes & Certifications Officiels</h1>
      </div>

      <p className="hero-description reveal-text" style={{ marginBottom: '3rem' }}>
        Retrouvez ci-dessous l'ensemble des titres académiques et certifications attestant du parcours de Randolphe Kodjo Mahulolo.
      </p>

      {/* DIPLOMAS GRID */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        {diplomesData.map((doc) => (
          <div 
            key={doc.id} 
            className="highlight-card reveal-text"
            style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '2.5rem', alignItems: 'center' }}
          >
            <div 
              style={{ borderRadius: '10px', overflow: 'hidden', cursor: 'pointer', border: '1px solid var(--color-border-light)', position: 'relative' }}
              onClick={() => setSelectedImage({ src: doc.image, title: doc.title })}
            >
              <img 
                src={doc.image} 
                alt={doc.title} 
                style={{ width: '100%', height: '380px', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }} 
              />
              <div style={{ position: 'absolute', bottom: '10px', right: '10px', background: 'rgba(0,0,0,0.7)', color: '#fff', padding: '4px 10px', borderRadius: '4px', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
                🔍 Agrandir
              </div>
            </div>

            <div>
              <span className="hero-badge" style={{ marginBottom: '0.8rem' }}>{doc.badge}</span>
              <h2 className="chapter-title" style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{doc.title}</h2>
              <p style={{ fontSize: '0.95rem', fontFamily: 'var(--font-mono)', color: 'var(--color-gold)', marginBottom: '0.8rem' }}>
                {doc.institution} &bull; {doc.year}
              </p>
              <p className="story-highlight" style={{ fontSize: '1.2rem', padding: '0.5rem 0', margin: 0 }}>
                {doc.grade}
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginTop: '1rem' }}>
                {doc.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* DEV IN PROGRESS BADGE */}
      <div className="highlight-card text-center reveal-text" style={{ marginTop: '5rem', borderStyle: 'dashed' }}>
        <span className="hero-badge">🚧 EN COURS DE DÉVELOPPEMENT</span>
        <h3 className="chapter-title" style={{ marginTop: '0.8rem' }}>Attestation INTER-AGIAL & Relevés de Notes Sécurisés</h3>
        <p style={{ fontSize: '1rem', color: 'var(--color-gray)', marginTop: '0.5rem' }}>
          La numérisation et la vérification cryptographique des relevés de notes complets et de l'attestation INTER-AGIAL 2023 sont en cours d'intégration.
        </p>
      </div>

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div 
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}
          onClick={() => setSelectedImage(null)}
        >
          <div style={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh' }}>
            <img src={selectedImage.src} alt={selectedImage.title} style={{ maxWidth: '100%', maxHeight: '85vh', objectFit: 'contain', borderRadius: '8px' }} />
            <p style={{ color: '#fff', textAlign: 'center', marginTop: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.2rem' }}>
              {selectedImage.title} — (Cliquer n'importe où pour fermer)
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
