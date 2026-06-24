import { motion } from 'framer-motion'

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
}

function WhyLocalsLoveMos() {
  const reasons = [
    {
      id: 'family-owned',
      icon: '👨‍👩‍👧‍👦',
      title: 'Family-Owned',
      description: 'Passed down through generations with care and pride.',
    },
    {
      id: 'fresh-ingredients',
      icon: '🍅',
      title: 'Fresh Ingredients',
      description: 'We source quality ingredients for authentic Italian flavors.',
    },
    {
      id: 'large-portions',
      icon: '🍕',
      title: 'Large Portions',
      description: 'Generous servings that keep customers coming back.',
    },
    {
      id: 'neighborhood-favorite',
      icon: '⭐',
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
          <motion.div key={reason.id} className="why-card" variants={cardVariants}>
            <span className="why-icon" aria-hidden="true">{reason.icon}</span>
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default WhyLocalsLoveMos
