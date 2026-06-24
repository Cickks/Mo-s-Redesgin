import { motion, useScroll, useTransform } from 'framer-motion'
import logo from '../../assets/mos-logo.png'

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
          <motion.p className="eyebrow" variants={item}>Westwego's Favorite Since 1987</motion.p>
          <motion.h1 variants={item}>Westwego's Favorite Pizza Since 1987</motion.h1>
          <motion.p variants={item}>
            Hand-tossed pizzas, muffulettas, turnovers, pasta, and local favorites made fresh daily.
          </motion.p>
          <motion.div className="hero-actions" variants={item}>
            <a className="button button-primary button-lg" href={ORDER_URL} target="_blank" rel="noopener noreferrer">Order Online</a>
            <a className="button button-secondary button-lg" href="#menu">View Menu</a>
          </motion.div>
          <motion.ul className="hero-quick-info" variants={item}>
            <li>
              <span className="hero-quick-icon" aria-hidden="true">📍</span>
              1112 Ave H, Westwego, LA
            </li>
            <li>
              <span className="hero-quick-icon" aria-hidden="true">📞</span>
              <a href="tel:+15043419650">504-341-9650</a>
            </li>
            <li>
              <span className="hero-quick-icon" aria-hidden="true">🕒</span>
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
          <motion.img
            src={logo}
            alt="Mo's Pizza — Italians Do It Better"
            className="hero-logo"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
