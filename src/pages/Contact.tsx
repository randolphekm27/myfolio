import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  useEffect(() => {
    document.body.classList.add('dark-mode')

    // Reveal animation
    const revealElements = document.querySelectorAll('.reveal-text')
    revealElements.forEach((el, index) => {
      setTimeout(() => {
        const htmlEl = el as HTMLElement
        htmlEl.style.transition = 'opacity 1.5s ease, transform 1.5s ease'
        htmlEl.style.opacity = '1'
        htmlEl.style.transform = 'translateY(0)'
      }, 200 * index + 300)
    })

    return () => {
      document.body.classList.remove('dark-mode')
    }
  }, [])

  return (
    <section className="contact-page">
      <h1 className="massive-text reveal-text">Une idée à construire ?</h1>
      <p className="contact-subtitle reveal-text">
        Projet pédagogique, contenu éducatif, création numérique, vidéo, technologie ou collaboration : je suis toujours intéressé par les projets qui permettent d'apprendre, de créer ou de transmettre autrement.
      </p>

      <div className="contact-links reveal-text">
        <a href="mailto:randolphekm27@gmail.com" className="contact-link">
          <span className="contact-label">EMAIL</span>
          <span className="contact-value">randolphekm27@gmail.com</span>
        </a>
        <a href="tel:+2290157703972" className="contact-link">
          <span className="contact-label">TÉLÉPHONE</span>
          <span className="contact-value">+229 0157703972</span>
        </a>
        <a href="https://www.linkedin.com/in/randolphe-km-841626349/" target="_blank" rel="noopener noreferrer" className="contact-link">
          <span className="contact-label">LINKEDIN</span>
          <span className="contact-value">Randolphe KM</span>
        </a>
      </div>

      <div className="contact-back reveal-text">
        <Link to="/">← Retour au parcours</Link>
      </div>
    </section>
  )
}
