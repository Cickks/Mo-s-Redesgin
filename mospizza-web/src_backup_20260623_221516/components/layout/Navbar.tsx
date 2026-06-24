import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="site-navbar">
      <div className="nav-brand">Mo's Pizza</div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/order">Order</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  )
}

export default Navbar
