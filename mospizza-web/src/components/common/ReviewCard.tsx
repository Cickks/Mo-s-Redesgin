import { motion } from 'framer-motion'
import type { Review } from '../../types/review.ts'

interface ReviewCardProps {
  review: Review
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
}

function Stars({ rating = 5 }: { rating?: number }) {
  return (
    <div className="review-stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < rating ? 'star is-filled' : 'star'} aria-hidden="true">★</span>
      ))}
    </div>
  )
}

function ReviewCard({ review }: ReviewCardProps) {
  return (
    <motion.div
      className="review-card"
      variants={cardVariants}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
    >
      <div className="review-top">
        <Stars rating={review.rating} />
        <span className="review-google" aria-hidden="true">G</span>
      </div>
      <p className="review-quote">&ldquo;{review.quote}&rdquo;</p>
      <div className="review-author-row">
        {review.avatar ? (
          <img className="review-avatar" src={review.avatar} alt={review.author} loading="lazy" />
        ) : (
          <span className="review-avatar review-avatar--initials" aria-hidden="true">
            {review.author.charAt(0)}
          </span>
        )}
        <div className="review-author-meta">
          <p className="review-author">{review.author}, {review.location}</p>
          {review.date && <p className="review-date">{review.date}</p>}
        </div>
      </div>
    </motion.div>
  )
}

export default ReviewCard
