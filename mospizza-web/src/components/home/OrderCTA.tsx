import { TOAST_ORDER_URL } from '../../data/menu.ts'
import { locationDetails } from '../../data/locationHours.ts'
import Icon from '../common/Icon.tsx'

function OrderCTA() {
  return (
    <section className="order-cta-section page-section">
      <span className="cta-float cta-float--one" aria-hidden="true" />
      <span className="cta-float cta-float--two" aria-hidden="true" />
      <div className="cta-content">
        <h2>Ready to order?</h2>
        <p>Get fresh pizza and Italian favorites for pickup or local delivery.</p>
        <div className="cta-buttons">
          <a className="button button-lg cta-order-button" href={TOAST_ORDER_URL} target="_blank" rel="noopener noreferrer">Order Now</a>
          <a className="button button-lg cta-call-button" href={`tel:${locationDetails.phone.replace(/\D/g, '')}`}>
            <Icon name="phone" size={18} /> Call {locationDetails.phone}
          </a>
        </div>
      </div>
    </section>
  )
}

export default OrderCTA
