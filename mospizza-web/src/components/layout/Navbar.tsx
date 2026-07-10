import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/mos-logo.png'

const ORDER_URL = 'https://order.toasttab.com/online/mos-pizza-1112-ave-h'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-inner">
        <NavLink to="/" className="nav-brand" onClick={closeMenu}>
          <img src={logo} alt="Mo's Pizza — Italians Do It Better" className="nav-logo" />
        </NavLink>

        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
        </button>

        <nav
          id="primary-navigation"
          className={`nav-links ${menuOpen ? 'is-open' : ''}`}
        >
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/menu" onClick={closeMenu}>Menu</NavLink>
          <NavLink to="/order" onClick={closeMenu}>Order</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary button-nav"
            onClick={closeMenu}
          >
            Order Now
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
