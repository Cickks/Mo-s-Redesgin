import pizzaImage from '../../assets/pizza.webp'
import moreFoodImage from '../../assets/more food.webp'
import menuImage from '../../assets/menu.webp'

function FeaturedFood() {
  return (
    <section className="featured-food">
      <div className="section-header">
        <p className="section-label">Featured Favorites</p>
        <h2>Pizza, pasta, and neighborhood comfort.</h2>
      </div>
      <div className="featured-grid">
        <article className="featured-card">
          <img src={pizzaImage} alt="Pepperoni pizza" />
          <h3>Classic Pepperoni</h3>
          <p>Thin crust, signature sauce, and our family-style pepperoni.</p>
        </article>
        <article className="featured-card">
          <img src={moreFoodImage} alt="Italian pasta plate" />
          <h3>Baked Ziti</h3>
          <p>Cheesy, comforting, and made with a house marinara glaze.</p>
        </article>
        <article className="featured-card">
          <img src={menuImage} alt="Pizza menu" />
          <h3>Local Menu Favorites</h3>
          <p>From wings to stromboli, everything is crafted for our Westwego community.</p>
        </article>
      </div>
    </section>
  )
}

export default FeaturedFood
