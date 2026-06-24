import heroImage from '../../assets/hero.png'

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <span className="eyebrow">Westwego's Family Pizza</span>
        <h1>Fresh, bold pizza built for our neighborhood.</h1>
        <p>Classic Italian-American favorites, a warm local atmosphere, and easy online ordering.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="/order">Order Online</a>
          <a className="button button-secondary" href="/menu">View Menu</a>
        </div>
      </div>
      <div className="hero-media">
        <img src={heroImage} alt="Large pizza with fresh toppings" />
      </div>
    </section>
  )
}

export default Hero
