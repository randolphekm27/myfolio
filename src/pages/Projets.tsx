import { useEffect } from 'react'

export default function Projets() {
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

  const projetsData = [
    {
      title: 'Capsule Vidéo Pédagogique en Électronique',
      category: 'Pédagogie & Montage Vidéo',
      desc: 'Projet de mémoire d\'ingéniorat pédagogique à l\'ENSET Lokossa. Conception complète d\'un module vidéo didactique combinant animation, narration et démonstrations pratiques en électronique.',
      image: './photo-wamup-shooting.jpg',
      result: 'Soutenu avec 18/20 — Mention Excellent'
    },
    {
      title: 'Circuit Électronique PCB — Jeu de Réflexe',
      category: 'Génie Électronique & Microcontrôleurs',
      desc: 'Étude schématique et conception de circuit imprimé (PCB) intégrant des afficheurs 7 segments, des rangées de LEDs de test et une logique de contrôle de vitesse de réaction.',
      image: './photo-circuit.jpg',
      result: 'Octobre 2024 — Réalisé & Fonctionnel'
    },
    {
      title: 'Production Vidéo & Couverture Média WAMUP 2026',
      category: 'Création Numérique & Montage',
      desc: 'Captation vidéo mobile, montage et production de contenus visuels dans le cadre du rassemblement annuel WAM UP 2026.',
      image: './photo-wamup-cert.jpg',
      result: 'Mars 2026 — Engagement Certifié'
    },
    {
      title: 'Ateliers Pratiques & Systèmes Télécom',
      category: 'Maintenance & Télécommunications',
      desc: 'Installation et orientation d\'antennes paraboliques, ateliers de câblage et maintenance de sous-systèmes informatiques et GSM.',
      image: './photo-wamup-phone.jpg',
      result: 'Expérience EMTP Lokossa & Stages'
    }
  ]

  return (
    <article className="page-content">
      <section className="story-block section-observe reveal-text" style={{ paddingTop: '10rem', paddingBottom: '3rem' }}>
        <h1 className="hero-title text-center" style={{ marginBottom: '1.5rem' }}>Projets & Réalisations</h1>
        <p className="hero-description text-center" style={{ maxWidth: '800px', margin: '0 auto 3rem auto' }}>
          Une sélection de créations à l'intersection de l'ingénierie électronique, du montage vidéo et du développement numérique.
        </p>
      </section>

      <div className="narrative-article">
        {projetsData.map((proj, idx) => (
          <section key={idx} className="story-block section-observe reveal-text" style={{ paddingTop: '3rem', paddingBottom: '5rem' }}>
            <p className="story-highlight text-center" style={{ marginBottom: '0.5rem' }}>{proj.title}</p>
            <p className="text-center" style={{ fontSize: '1.1rem', color: 'var(--color-gray)', marginBottom: '2rem' }}>
              {proj.category}
            </p>

            <div className="story-image-wrapper reveal-text" style={{ maxWidth: '800px', margin: '0 auto 2rem auto' }}>
              <img src={proj.image} alt={proj.title} className="story-image" style={{ maxHeight: '60vh' }} />
            </div>

            <p className="text-center" style={{ maxWidth: '750px', margin: '0 auto 1.5rem auto' }}>{proj.desc}</p>
            <p className="story-highlight text-center" style={{ fontSize: '1.3rem' }}>{proj.result}</p>
          </section>
        ))}
      </div>
    </article>
  )
}
