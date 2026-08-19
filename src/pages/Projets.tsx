import { useEffect } from 'react'

export default function Projets() {
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

  const projetsData = [
    {
      title: 'Capsule Vidéo Pédagogique en Électronique',
      category: 'Pédagogie & Montage Vidéo',
      date: 'Édition 2024-2025',
      desc: 'Projet majeur de mémoire d\'ingéniorat pédagogique à l\'ENSET Lokossa. Conception complète d\'un module vidéo didactique combinant animation, narration et démonstrations pratiques en électronique.',
      image: './photo-wamup-shooting.jpg',
      tags: ['Montage Vidéo', 'Didactique', 'Motion Design', 'CAPVIDUP'],
      status: 'Soutenu avec 18/20'
    },
    {
      title: 'Circuit Électronique PCB « Jeu de Réflexe »',
      category: 'Génie Électronique & Microcontrôleurs',
      date: 'Octobre 2024',
      desc: 'Étude schématique et conception de circuit imprimé (PCB) intégrant des afficheurs 7 segments, des rangées de LEDs de test et une logique de contrôle de vitesse de réaction.',
      image: './photo-circuit.jpg',
      tags: ['PCB Layout', 'Électronique Numérique', 'Soudure', 'ENSET'],
      status: 'Réalisé & Fonctionnel'
    },
    {
      title: 'Couverture Audiovisuelle — WAMUP 2026',
      category: 'Création Numérique & Reportage',
      date: 'Mars 2026',
      desc: 'Captation vidéo mobile, montage et production de contenus promotionnels dans le cadre du rassemblement annuel WAM UP 2026.',
      image: './photo-wamup-cert.jpg',
      tags: ['Montage Mobile', 'WAMUP', 'Reportage', 'Content Creation'],
      status: 'Certifié WAMUP'
    },
    {
      title: 'Travaux Pratiques Télécom & Systèmes',
      category: 'Maintenance & Télécommunications',
      date: '2024 - 2025',
      desc: 'Installation et orientation d\'antennes paraboliques, ateliers de câblage et maintenance de sous-systèmes informatiques et GSM.',
      image: './photo-wamup-phone.jpg',
      tags: ['Télécom', 'GSM', 'Maintenance Matérielle', 'EMTP Lokossa'],
      status: 'Expérience Enseignement & Stage'
    }
  ]

  return (
    <div className="page-container narrative-container" style={{ paddingTop: 'calc(var(--header-height) + 3rem)', paddingBottom: '6rem' }}>
      <div className="chapter-header reveal-text">
        <span className="chapter-num">RÉALISATIONS & CRÉATIONS</span>
        <h1 className="chapter-title" style={{ fontSize: '2.5rem' }}>Portfolio de Projets</h1>
      </div>

      <p className="hero-description reveal-text" style={{ marginBottom: '3rem' }}>
        Une sélection de projets à l'intersection de l'ingénierie électronique, de la pédagogie vidéo et du développement numérique.
      </p>

      {/* PROJETS GRID */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '2.5rem' }}>
        {projetsData.map((proj, idx) => (
          <div key={idx} className="skill-card reveal-text" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
              <img src={proj.image} alt={proj.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(0,0,0,0.75)', color: 'var(--color-gold)', padding: '4px 12px', borderRadius: '20px', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
                {proj.status}
              </div>
            </div>
            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span className="chapter-num" style={{ fontSize: '0.7rem', padding: '0.2rem 0.6rem' }}>{proj.category}</span>
                <h3 className="chapter-title" style={{ fontSize: '1.4rem', margin: '0.8rem 0 0.5rem 0' }}>{proj.title}</h3>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--color-gray)', marginBottom: '1.5rem' }}>
                  {proj.desc}
                </p>
              </div>
              <div className="skill-tags">
                {proj.tags.map((t, i) => (
                  <span key={i} className="skill-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* DEV IN PROGRESS SHOWREEL BADGE */}
      <div className="highlight-card text-center reveal-text" style={{ marginTop: '5rem', borderStyle: 'dashed' }}>
        <span className="hero-badge">🚧 EN COURS DE DÉVELOPPEMENT</span>
        <h3 className="chapter-title" style={{ marginTop: '0.8rem' }}>Lecteur Showreel Vidéo HD Interactif</h3>
        <p style={{ fontSize: '1rem', color: 'var(--color-gray)', marginTop: '0.5rem' }}>
          La bande démo intégrée (Video Showreel 2026) regroupant les extraits animés de motion design et les capsules pédagogiques est actuellement en cours d'encodage et d'intégration.
        </p>
      </div>
    </div>
  )
}
