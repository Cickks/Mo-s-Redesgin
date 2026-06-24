import ReviewCard from '../common/ReviewCard.tsx'
import { reviews } from '../../data/reviews.ts'

function Reviews() {
  return (
    <section className="reviews-section">
      <div className="section-header">
        <p className="section-label">Local Praise</p>
        <h2>What Westwego customers are saying</h2>
      </div>
      <div className="review-grid">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  )
}

export default Reviews
