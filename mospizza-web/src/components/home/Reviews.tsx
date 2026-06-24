import { motion } from 'framer-motion'
import ReviewCard from '../common/ReviewCard.tsx'
import { reviews } from '../../data/reviews.ts'

const GOOGLE_REVIEWS_URL = 'https://www.google.com/maps/search/Mo%27s+Pizza+1112+Ave+H+Westwego+LA'

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
}

function Reviews() {
  return (
    <section className="reviews-section page-section">
      <div className="section-header">
        <h2>Local Praise</h2>
        <p>What Westwego customers are saying</p>
        <div className="reviews-rating-summary">
          <span className="reviews-rating-number">4.5</span>
          <span className="reviews-rating-stars" aria-hidden="true">★★★★★</span>
          <span className="reviews-rating-source">2,018 Google reviews</span>
        </div>
      </div>
      <motion.div
        className="reviews-grid"
        variants={gridVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </motion.div>
      <div className="reviews-cta">
        <a className="button button-secondary" href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
          Read &amp; Leave a Review on Google
        </a>
      </div>
    </section>
  )
}

export default Reviews
