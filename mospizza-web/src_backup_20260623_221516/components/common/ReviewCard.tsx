import type { Review } from '../../types/review'

interface ReviewCardProps {
  review: Review
}

function ReviewCard({ review }: ReviewCardProps) {
  return (
    <article className="review-card">
      <p>"{review.quote}"</p>
      <span>— {review.author}, {review.location}</span>
    </article>
  )
}

export default ReviewCard
