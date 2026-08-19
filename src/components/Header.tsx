import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()

  return (
    <header className="header">
      <Link to="/" className="logo">
        <span className="logo-name">Randolphe</span>
        <span className="logo-desc">Pédagogue &middot; Technologue &middot; Créatif</span>
      </Link>
      <nav className="nav">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>À propos</Link>
        <a href="/#parcours">Parcours</a>
        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
        <span className="status-indicator">
          <span className="dot"></span> Disponible pour des projets
        </span>
      </nav>
    </header>
  )
}
