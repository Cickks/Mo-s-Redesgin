import MenuItemCard from '../components/menu/MenuItemCard.tsx'
import { menuCategories } from '../data/menu.ts'

function MenuPage() {
  return (
    <main className="menu-page">
      <section className="page-hero page-hero--menu">
        <div className="section-header">
          <p className="section-label">Menu</p>
          <h1>Our classic pizza and Italian comfort food</h1>
          <p>Explore our full menu of pizzas, pasta, sides, and local favorites designed to order quickly.</p>
        </div>
      </section>

      {menuCategories.map((category) => (
        <section key={category.id} className="menu-category">
          <div className="section-header">
            <h2>{category.title}</h2>
            <p>{category.description}</p>
          </div>
          <div className="menu-items-grid">
            {category.items.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      ))}
    </main>
  )
}

export default MenuPage
