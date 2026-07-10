import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import logo from '../../assets/mos-logo.png'
import pizzaWhole from '../../assets/pizza-whole.webp'
import Icon from '../common/Icon.tsx'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

const ORDER_URL = 'https://order.toasttab.com/online/mos-pizza-1112-ave-h'

function Hero() {
  const { scrollY } = useScroll()
  const mediaY = useTransform(scrollY, [0, 600], [0, -60])
  const mediaScale = useTransform(scrollY, [0, 600], [1, 1.06])

  return (
    <section className="hero-section">
      <motion.div
        className="hero-inner"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="hero-copy">
          <motion.p className="eyebrow" variants={item}>Est. 1987 · Westwego, LA</motion.p>
          <motion.h1 variants={item}>Westwego's Favorite Pizza Since 1987</motion.h1>
          <motion.p variants={item}>
            Hand-tossed pizzas, muffulettas, turnovers, pasta, and local favorites made fresh daily.
          </motion.p>
          <motion.div className="hero-actions" variants={item}>
            <a className="button button-primary button-lg" href={ORDER_URL} target="_blank" rel="noopener noreferrer">Order Online</a>
            <Link className="button button-secondary button-lg" to="/menu">View Menu</Link>
          </motion.div>
          <motion.ul className="hero-quick-info" variants={item}>
            <li>
              <span className="hero-quick-icon" aria-hidden="true"><Icon name="pin" size={18} /></span>
              1112 Ave H, Westwego, LA
            </li>
            <li>
              <span className="hero-quick-icon" aria-hidden="true"><Icon name="phone" size={18} /></span>
              <a href="tel:+15043419650">504-341-9650</a>
            </li>
            <li>
              <span className="hero-quick-icon" aria-hidden="true"><Icon name="clock" size={18} /></span>
              Tue–Thu 11am–8pm | Fri–Sat 11am–9pm
            </li>
          </motion.ul>
        </div>
        <motion.div
          className="hero-media"
          style={{ y: mediaY, scale: mediaScale }}
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
          }}
        >
          <img
            src={pizzaWhole}
            alt="Fresh hand-tossed pepperoni pizza at Mo's Pizza"
            className="hero-food"
          />
          <img
            src={logo}
            alt="Mo's Pizza — Italians Do It Better"
            className="hero-logo-badge"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
