import PageHero from '../components/layout/PageHero.tsx'
import { motion } from 'framer-motion'
import Icon from '../components/common/Icon.tsx'
import type { IconName } from '../components/common/Icon.tsx'

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
}

const benefits: { icon: IconName; title: string; description: string }[] = [
  { icon: 'flame', title: 'Ready fast', description: 'Fresh pizza made to order.' },
  { icon: 'heart', title: 'Local favorite', description: 'Trusted by Westwego families.' },
  { icon: 'smartphone', title: 'Easy checkout', description: 'Simple mobile ordering.' },
]

function OrderPage() {
  return (
    <div className="order-page">
      <PageHero
        variant="order"
        label="Order Online"
        title="Fast pickup and local delivery."
        description="Get your favorite pizza, pasta, and sides with simple checkout."
      >
        <a className="button button-primary" href="https://order.toasttab.com/online/mos-pizza-1112-ave-h" target="_blank" rel="noopener noreferrer">Start Your Order</a>
        <a className="button button-secondary" href="tel:+15043419650">Call to Order</a>
      </PageHero>

      <section className="page-section">
        <div className="section-header">
          <h2>Why order from Mo's?</h2>
        </div>
        <motion.div
          className="order-benefits-grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {benefits.map((benefit) => (
            <motion.div key={benefit.title} className="order-benefit-card" variants={cardVariants}>
              <span className="order-benefit-icon" aria-hidden="true"><Icon name={benefit.icon} size={28} /></span>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  )
}

export default OrderPage
