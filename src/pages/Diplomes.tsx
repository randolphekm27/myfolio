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

  const diplomesData = [
    {
      id: 'pv-bapet',
      title: 'Procès-Verbal de Soutenance — BAPET / CAPET',
      institution: 'ENSET de Lokossa — UNSTIM d\'Abomey',
      year: '14 Juillet 2025',
      grade: '18.00 / 20 — Mention EXCELLENT',
      desc: 'Projet technique et pédagogique portant sur : « Étude, conception et intégration pédagogique d\'une capsule vidéo en électronique ». Jury présidé par le Dr GNONLONFOUN Jean-Marc.',
      image: './doc-pv-soutenance.jpg'
    },
    {
      id: 'memoire-enset',
      title: 'Page de Garde — Mémoire de Fin d\'Études ENSET',
      institution: 'École Normale Supérieure de l\'Enseignement Technique (Lokossa)',
      year: 'Promotion 2024-2025',
      grade: '3ème Année — Spécialité Électronique',
      desc: 'Travail réalisé dans le cadre du projet CAPVIDUP/PFCR1/ENSET Lokossa (édition 2024).',
      image: './doc-memoire.jpg'
    },
    {
      id: 'bac',
      title: 'Attestation de Succès au Baccalauréat',
      institution: 'Office du Baccalauréat — République du Bénin',
      year: 'Session de Juillet 2022',
      grade: 'Série D (Biologie - Géologie) — Mention Assez Bien',
      desc: 'Obtenu au Centre Col. Cath. de Comé avec notamment la note de 19/20 en biologie.',
      image: './diploma-bac.jpg'
    },
    {
      id: 'cert-wamup',
      title: 'Certificat d\'Engagement — Projet WAMUP 2026',
      institution: 'WE4CCA / WAM UP Annual Meet Up',
      year: 'Mars 2026',
      grade: 'Monteur Vidéo Certifié',
      desc: 'Certificat d\'engagement récompensant la contribution en tant que monteur vidéo et créateur de contenu visuel.',
      image: './photo-wamup-cert.jpg'
    }
  ]

  return (
    <article className="page-content">
      <section className="story-block section-observe reveal-text" style={{ paddingTop: '10rem', paddingBottom: '3rem' }}>
        <h1 className="hero-title text-center" style={{ marginBottom: '1.5rem' }}>Diplômes & Certifications</h1>
        <p className="hero-description text-center" style={{ maxWidth: '800px', margin: '0 auto 3rem auto' }}>
          Titres académiques et attestations officielles soutenant le parcours de Randolphe Kodjo Mahulolo.
        </p>
      </section>

      <div className="narrative-article">
        {diplomesData.map((doc) => (
          <section key={doc.id} className="story-block section-observe reveal-text" style={{ paddingTop: '3rem', paddingBottom: '5rem' }}>
            <p className="story-highlight text-center" style={{ marginBottom: '0.5rem' }}>{doc.title}</p>
            <p className="text-center" style={{ fontSize: '1.1rem', color: 'var(--color-gray)', marginBottom: '2rem' }}>
              {doc.institution} &middot; {doc.year}
            </p>

            <div 
              className="story-image-wrapper reveal-text" 
              style={{ cursor: 'pointer', maxWidth: '650px', margin: '0 auto 2rem auto' }}
              onClick={() => setSelectedImage({ src: doc.image, title: doc.title })}
            >
              <img src={doc.image} alt={doc.title} className="story-image" style={{ maxHeight: '65vh' }} />
            </div>

            <p className="story-highlight text-center mt-2 mb-2">{doc.grade}</p>
            <p className="text-center" style={{ maxWidth: '750px' }}>{doc.desc}</p>
          </section>
        ))}
      </div>

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div 
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}
          onClick={() => setSelectedImage(null)}
        >
          <div style={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh' }}>
            <img src={selectedImage.src} alt={selectedImage.title} style={{ maxWidth: '100%', maxHeight: '85vh', objectFit: 'contain', borderRadius: '4px' }} />
            <p style={{ color: '#fff', textAlign: 'center', marginTop: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.1rem' }}>
              {selectedImage.title} — Cliquer pour fermer
            </p>
          </div>
        </div>
      )}
    </article>
  )
}
