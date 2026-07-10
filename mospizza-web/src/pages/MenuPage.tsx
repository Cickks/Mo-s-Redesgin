import { motion } from 'framer-motion'
import PageHero from '../components/layout/PageHero.tsx'
import Icon from '../components/common/Icon.tsx'
import { menuCategories, TOAST_ORDER_URL } from '../data/menu.ts'
import { locationDetails } from '../data/locationHours.ts'

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
}

function MenuPage() {
  return (
    <div className="menu-page">
      <PageHero
        variant="menu"
        label="Menu"
        title="Pizza, muffulettas, pasta, and Westwego favorites."
        description="Browse the official Mo's Pizza menu, then order online through Toast or call the shop."
      >
        <a className="button button-primary" href={TOAST_ORDER_URL} target="_blank" rel="noopener noreferrer">
          Order Online
        </a>
        <a className="button button-secondary" href={`tel:${locationDetails.phone.replace(/\D/g, '')}`}>
          <Icon name="phone" size={18} /> Call {locationDetails.phone}
        </a>
      </PageHero>

      <nav className="menu-nav" aria-label="Menu categories">
        {menuCategories.map((category) => (
          <a key={category.id} className="menu-nav-link" href={`#${category.id}`}>
            {category.title}
          </a>
        ))}
      </nav>

      <p className="menu-toast-note">
        Menu items are transcribed from Mo's official menu. Current pricing and availability are confirmed at Toast checkout.
      </p>

      {menuCategories.map((category) => (
        <section key={category.id} id={category.id} className="menu-category">
          <div className="section-header menu-category-header">
            <span className="section-label">{category.items.length} items</span>
            <h2>{category.title}</h2>
            {category.description && <p>{category.description}</p>}
          </div>

          <motion.div
            className="menu-items-grid"
            variants={gridVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.12 }}
          >
            {category.items.map((item) => (
              <motion.article key={item.id} className="menu-item-card" variants={itemVariants}>
                <div className="menu-item-card-head">
                  <h3>{item.name}</h3>
                  {item.tags?.[0] && <span className="menu-item-badge">{item.tags[0]}</span>}
                </div>
                {item.description && <p>{item.description}</p>}
                {item.options && (
                  <ul className="menu-item-options" aria-label={`${item.name} options`}>
                    {item.options.map((option) => (
                      <li key={option}>{option}</li>
                    ))}
                  </ul>
                )}
                <a className="menu-item-order" href={TOAST_ORDER_URL} target="_blank" rel="noopener noreferrer">
                  Add on Toast
                </a>
              </motion.article>
            ))}
          </motion.div>

          {category.note && <p className="menu-category-note">{category.note}</p>}
        </section>
      ))}

      <section className="menu-order-cta">
        <span className="section-label">Ready when you are</span>
        <h2>Build your order online or call the shop.</h2>
        <p>Mo's confirms live pricing, prep times, pickup, and local delivery through Toast.</p>
        <div className="hero-actions">
          <a className="button button-primary button-lg" href={TOAST_ORDER_URL} target="_blank" rel="noopener noreferrer">
            Order Online
          </a>
          <a className="button button-secondary button-lg" href={`tel:${locationDetails.phone.replace(/\D/g, '')}`}>
            <Icon name="phone" size={18} /> Call {locationDetails.phone}
          </a>
        </div>
      </section>
    </div>
  )
}

export default MenuPage
