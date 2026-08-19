import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  return (
    <>
      <header className="header">
        <Link to="/" className="logo">
          <span className="logo-name">Randolphe</span>
          <span className="logo-desc">Pédagogue &middot; Technologue &middot; Créatif</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="nav desktop-nav">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>À propos</Link>
          <a href="/#parcours">Parcours</a>
          <Link to="/diplomes" className={location.pathname === '/diplomes' ? 'active' : ''}>Diplômes</Link>
          <Link to="/projets" className={location.pathname === '/projets' ? 'active' : ''}>Projets</Link>
          <Link to="/cv" className={location.pathname === '/cv' ? 'active' : ''}>CV</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
          <span className="status-indicator">
            <span className="dot"></span> Disponible pour des projets
          </span>
        </nav>

        {/* Mobile Menu Trigger */}
        <button 
          className="mobile-menu-trigger"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? 'Fermer' : 'Menu'}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-nav-overlay" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="mobile-nav-content" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-nav-header">
              <span className="logo-name">Randolphe</span>
              <button className="mobile-menu-close" onClick={() => setIsMobileMenuOpen(false)}>✕</button>
            </div>
            <nav className="mobile-nav-list">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>À propos</Link>
              <a href="/#parcours" onClick={() => setIsMobileMenuOpen(false)}>Parcours</a>
              <Link to="/diplomes" onClick={() => setIsMobileMenuOpen(false)}>Diplômes</Link>
              <Link to="/projets" onClick={() => setIsMobileMenuOpen(false)}>Projets</Link>
              <Link to="/cv" onClick={() => setIsMobileMenuOpen(false)}>CV</Link>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            </nav>
            <div className="mobile-nav-footer">
              <span className="status-indicator" style={{ border: 'none', padding: 0, margin: 0 }}>
                <span className="dot"></span> Disponible pour des projets
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
