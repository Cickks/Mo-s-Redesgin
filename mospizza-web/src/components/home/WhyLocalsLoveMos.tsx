import { motion } from 'framer-motion'
import Icon from '../common/Icon.tsx'
import type { IconName } from '../common/Icon.tsx'

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
}

function WhyLocalsLoveMos() {
  const reasons: { id: string; icon: IconName; title: string; description: string }[] = [
    {
      id: 'family-owned',
      icon: 'users',
      title: 'Family-Owned',
      description: 'Passed down through generations with care and pride.',
    },
    {
      id: 'fresh-ingredients',
      icon: 'leaf',
      title: 'Fresh Ingredients',
      description: 'We source quality ingredients for authentic Italian flavors.',
    },
    {
      id: 'large-portions',
      icon: 'pizza',
      title: 'Large Portions',
      description: 'Generous servings that keep customers coming back.',
    },
    {
      id: 'neighborhood-favorite',
      icon: 'star',
      title: 'Neighborhood Favorite',
      description: 'A trusted spot for family dinners and celebrations.',
    },
  ]

  return (
    <section className="why-locals-section page-section">
      <div className="section-header">
        <h2>Why Locals Love Mo's</h2>
      </div>
      <motion.div
        className="why-locals-grid"
        variants={gridVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {reasons.map((reason) => (
          <motion.div
            key={reason.id}
            className={`why-card why-card--${reason.id}`}
            variants={cardVariants}
          >
            <span className="why-icon" aria-hidden="true"><Icon name={reason.icon} size={30} /></span>
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default WhyLocalsLoveMos
