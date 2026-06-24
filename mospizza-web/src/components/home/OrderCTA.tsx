import { motion, useReducedMotion } from 'framer-motion'

function OrderCTA() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="order-cta-section page-section">
      <motion.span
        className="cta-float cta-float--one"
        aria-hidden="true"
        animate={reduceMotion ? undefined : { y: [0, -22, 0], x: [0, 14, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.span
        className="cta-float cta-float--two"
        aria-hidden="true"
        animate={reduceMotion ? undefined : { y: [0, 20, 0], x: [0, -16, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="cta-content">
        <h2>Ready to order?</h2>
        <p>Get fresh pizza and Italian favorites delivered fast.</p>
        <div className="cta-buttons">
          <a className="button button-lg cta-order-button cta-pulse" href="https://order.toasttab.com/online/mos-pizza-1112-ave-h" target="_blank" rel="noopener noreferrer">Order Now</a>
          <a className="button button-lg cta-call-button" href="tel:+15043419650">Call (504) 341-9650</a>
        </div>
      </div>
    </section>
  )
}

export default OrderCTA
