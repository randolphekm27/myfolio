import { useEffect, useRef, useCallback } from 'react'

export default function Home() {
  const mainRef = useRef<HTMLElement>(null)

  const checkTheme = useCallback(() => {
    const sections = document.querySelectorAll('.section-observe')
    const viewportCenter = window.innerHeight / 2

    let currentSection: Element | null = null
    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect()
      if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
        currentSection = sec
      }
    })

    if (currentSection) {
      if ((currentSection as HTMLElement).classList.contains('dark-bg')) {
        document.body.classList.add('dark-mode')
      } else {
        document.body.classList.remove('dark-mode')
      }
    }
  }, [])

  useEffect(() => {
    // Reveal animation
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
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })
    revealElements.forEach(el => revealObserver.observe(el))

    // Hero image entry
    const heroImage = document.getElementById('hero-image')
    const timer = setTimeout(() => {
      if (heroImage) {
        heroImage.style.transition = 'opacity 1.5s ease-out, transform 1.5s ease-out'
        heroImage.style.opacity = '1'
        heroImage.style.transform = 'translateX(0)'
      }
    }, 600)

    // Dark mode toggle on scroll
    window.addEventListener('scroll', checkTheme)
    window.addEventListener('resize', checkTheme)
    checkTheme()

    return () => {
      clearTimeout(timer)
      revealObserver.disconnect()
      window.removeEventListener('scroll', checkTheme)
      window.removeEventListener('resize', checkTheme)
      document.body.classList.remove('dark-mode')
    }
  }, [checkTheme])

  // Mouse parallax on hero image
  const handleMouseMove = (e: React.MouseEvent) => {
    const heroImage = document.getElementById('hero-image')
    if (!heroImage) return
    const x = e.clientX / window.innerWidth
    const y = e.clientY / window.innerHeight
    const moveX = (x - 0.5) * -15
    const moveY = (y - 0.5) * -15
    heroImage.style.transform = `translate(${moveX}px, ${moveY}px)`
  }

  const handleMouseLeave = () => {
    const heroImage = document.getElementById('hero-image')
    if (!heroImage) return
    heroImage.style.transform = 'translate(0px, 0px)'
    heroImage.style.transition = 'transform 0.5s ease-out'
  }

  return (
    <article ref={mainRef}>
      {/* HERO */}
      <section
        className="hero dark-bg section-observe"
        id="about"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="hero-content">
          <h1 className="hero-title reveal-text">Salut, je suis Randolphe.</h1>
          <p className="hero-description reveal-text">
            Je suis un pédagogue passionné par la technologie, la création numérique et la transmission des connaissances.
          </p>
          <p className="hero-subtitle reveal-text">
            Mon parcours a commencé dans un petit village du sud-est du Bénin, s'est poursuivi dans l'électronique et l'enseignement, avant de m'emmener vers le montage vidéo, le motion design, l'intelligence artificielle et les technologies numériques.
          </p>
          <p className="hero-quote reveal-text">
            J'aime comprendre comment les choses fonctionnent — puis trouver de nouvelles façons de les expliquer, de les créer et de les transmettre.
          </p>
        </div>
        <div className="hero-image-wrapper">
          <img src="./portrait.png" alt="Randolphe Kodjo Mahulolo" className="hero-image" id="hero-image" />
        </div>
      </section>

      {/* LE RECIT */}
      <div id="parcours">

        <section className="story-block section-observe reveal-text">
          <p>Je suis né le jeudi 27 mai 2004, dans un petit village du sud-est du Bénin, à Hounviguè, dans l'Ouémé.</p>
          <p className="story-highlight mt-2 mb-2">C'est là que commence toute mon histoire.</p>
          <p>J'ai grandi dans une famille modeste, à la fois agricultrice et commerçante. En 2009, j'ai commencé mon parcours primaire à l'École primaire publique d'Affamè-Centre, où j'ai étudié jusqu'en 2016, année où j'ai obtenu mon premier diplôme : le CEP.</p>
        </section>

        <section className="story-block section-observe reveal-text">
          <p>J'ai ensuite poursuivi le collège dans mon village avant de quitter mes parents pour rejoindre ma grande sœur à Comé. J'avais alors seulement douze ans.</p>
          <p>J'ai intégré la classe de cinquième au Collège de l'Espoir de Comé, l'un des établissements privés réputés de la ville. C'est à partir de cette période que mon environnement a complètement changé. Loin du calme de mon village, j'ai découvert la ville, son rythme, son ambiance et tout ce qui venait avec.</p>
          <p className="story-highlight mt-2 mb-2">La ville m'a ouvert l'esprit.</p>
          <p>En 2019, j'ai obtenu mon BPC avec une mention Très Bien. J'étais parmi les dix premiers de mon établissement et parmi les soixante premiers au niveau communal.</p>
        </section>

        <section className="story-block section-observe reveal-text">
          <p>En 2021, j'ai poursuivi ma classe de première D au CEG 1 de Comé, avant d'obtenir en 2022 mon BAC D, avec notamment 19/20 en biologie.</p>
          <p>À cette époque, j'avais une forte passion pour la biotechnologie. Je pense que cette passion avait été nourrie par toutes ces journées passées à regarder des documentaires scientifiques. Au village déjà, j'en étais fasciné.</p>
        </section>

        <section className="story-block dark-bg section-observe reveal-text" style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
          <p>Après le BAC, j'ai été sélectionné comme boursier pour poursuivre mes études en biotechnologie médicale, mais également à l'ENSET de Lokossa pour l'électronique.</p>
          <p className="story-highlight mt-2 mb-2 text-center">Il fallait choisir.</p>
          <p>Et ce fut probablement l'un des choix les plus difficiles de mon parcours : devoir mettre de côté l'une de mes grandes passions pour en poursuivre une autre.</p>
          <p className="story-highlight mt-2 mb-2 text-center">J'ai finalement choisi l'électronique.</p>
        </section>

        <section className="story-block section-observe reveal-text">
          <p>Pendant trois années à l'ENSET de Lokossa, j'ai découvert bien plus qu'un domaine technique. J'ai progressivement découvert le monde de la pédagogie, de l'enseignement et de la transmission.</p>

          <div className="story-image-wrapper reveal-text">
            <img src="./photo-circuit.jpg" alt="Conception électronique" className="story-image" />
          </div>

          <p>En juillet 2025, après trois années de travail, je soutiens publiquement mon mémoire devant un jury composé du Dr Gnonlonfoun Jean-Marc et de Mme Ahouandjinou Inès.</p>
          <p>C'était le 14 juillet 2025, à l'ENSET de Lokossa.</p>
          <p className="mt-2 mb-2">
            Mon travail portait sur :<br />
            <strong className="story-highlight">« Étude, conception et intégration pédagogique d'une capsule vidéo en électronique. »</strong>
          </p>
          <p>J'ai obtenu 18/20, avec une mention excellente.</p>
          <p className="story-highlight mt-2 mb-2">Ce mémoire a profondément marqué mon parcours.</p>
        </section>

        <section className="story-block section-observe reveal-text">
          <p>Parce qu'au départ, ce sujet pouvait sembler assez éloigné de ce que je fais aujourd'hui. Mais c'est justamente en travaillant sur cette capsule vidéo pédagogique que j'ai commencé à développer sérieusement mes compétences en montage vidéo, en narration visuelle et en création de contenus.</p>
          <p className="story-highlight mt-2 mb-2">Mon mémoire a donc été, d'une certaine manière, le pont entre la pédagogie et la création numérique.</p>
          <p>Ce travail avait été réalisé dans le cadre du projet CAPVIDUP/PFCR1 — ENSET Lokossa, édition 2024.</p>
          <p>Puis est venu le BAPET — Brevet d'Aptitude au Professorat de l'Enseignement Technique.</p>

          <div className="story-image-wrapper reveal-text">
            <img src="./photo-wamup-phone.jpg" alt="Création numérique" className="story-image" />
          </div>
        </section>

        <section className="story-block dark-bg section-observe reveal-text" style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
          <p>Après mes études, j'ai eu l'occasion de mettre en pratique ce que j'avais appris. Durant l'année académique suivante, j'ai commencé à exercer comme enseignant en informatique à l'EMTP de Lokossa.</p>
          <p>Cette expérience représentait pour moi bien plus qu'une première expérience professionnelle.</p>
          <p>C'était la mise en pratique de tout ce que j'avais appris pendant mes années de formation.</p>
          <p className="story-highlight mt-2 mb-2 text-center">Apprendre, comprendre, puis transmettre.</p>
        </section>

        <section className="story-block section-observe reveal-text">
          <p>En parallèle de mon parcours académique, j'ai également eu l'occasion de découvrir le monde professionnel à travers différents stages.</p>
          <p>En 2022, j'ai effectué mon premier stage en entreprise au CHD de Lokossa, au service électronique. J'y ai découvert le fonctionnement d'une entreprise, notamment son organisation et son administration, mais aussi la maintenance et la réparation d'équipements hospitaliers.</p>
          <p>En 2024, j'ai réalisé un deuxième stage chez Leader Électronique à Comé, où j'ai notamment travaillé sur la maintenance GSM, l'installation de systèmes d'exploitation ainsi que différentes opérations de soudure et de dessoudure.</p>
        </section>

        <section className="story-block section-observe reveal-text">
          <p>Durant mon parcours académique, j'ai également été désigné responsable de l'institution culturelle et artistique de l'ENSET. Cette responsabilité m'a permis de développer davantage mon sens du leadership, de l'organisation et de la gestion de projet.</p>
          <p>Le 30 août 2023, à Comé, j'ai également obtenu une attestation de formation en techniques de rédaction de projets et recherche de financement, organisée à l'intention des OSC dans le cadre du projet INTER-AGIAL.</p>
          <p className="story-highlight mt-2 mb-2">Puis, progressivement, mes compétences ont commencé à dépasser le cadre de l'électronique.</p>
        </section>

        <section className="story-block section-observe reveal-text">
          <p>J'ai développé des compétences en maintenance informatique, maintenance GSM, programmation en langage C, conception de circuits électroniques, prompt engineering, intelligence artificielle, vibe coding, stratégie marketing, création de contenu, montage vidéo et motion design.</p>
          <p>En mars 2026, j'ai notamment obtenu un certificat d'engagement en tant que monteur vidéo dans le cadre du projet WAMUP.</p>

          <div className="story-image-wrapper story-image-dual reveal-text">
            <img src="./photo-wamup-cert.jpg" alt="Certificat WAMUP" className="story-image" />
            <img src="./photo-wamup-group.jpg" alt="Equipe WAMUP" className="story-image" />
          </div>
        </section>

        <section className="story-block dark-bg section-observe reveal-text" style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
          <p className="story-highlight mb-2">Aujourd'hui, mon parcours se trouve à la croisée de plusieurs univers.</p>
          <ul className="clean-list" style={{ fontSize: '1.5rem', textAlign: 'center', marginBottom: '2rem' }}>
            <li>La pédagogie.</li>
            <li>La technologie.</li>
            <li>L'électronique.</li>
            <li>La création numérique.</li>
          </ul>
          <p>Et finalement, je ne considère pas ces domaines comme des chemins différents.</p>
          <p className="mt-2">Ils se sont construits les uns à partir des autres.</p>
          <div className="story-highlight mt-4 text-center">
            <p>L'électronique m'a appris à comprendre les systèmes.</p>
            <p>La pédagogie m'a appris à transmettre.</p>
            <p>La vidéo m'a appris à raconter.</p>
            <p>La technologie m'apprend aujourd'hui à construire autrement.</p>
          </div>
        </section>

        <section className="story-block section-observe reveal-text" style={{ marginBottom: '4rem' }}>
          <p className="story-highlight mb-2 text-center">Et maintenant, je veux continuer à apprendre.</p>
          <p>Mon prochain objectif est de poursuivre un master dans un domaine technologique ou numérique, notamment en développement logiciel, robotique, intelligence artificielle ou cybersécurité.</p>
          <p className="story-highlight mt-4 text-center" style={{ fontSize: '1.5rem' }}>Mon parcours est encore en train de s'écrire.</p>
        </section>

      </div>
    </article>
  )
}
