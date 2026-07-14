import { useEffect } from 'react'
import { TOAST_ORDER_URL } from '../data/menu.ts'

function OrderRedirect() {
  useEffect(() => {
    window.location.replace(TOAST_ORDER_URL)
  }, [])

  return (
    <section className="order-redirect" aria-live="polite">
      <p>Opening Mo's Pizza online ordering...</p>
      <a className="button button-primary" href={TOAST_ORDER_URL}>Continue to Toast</a>
    </section>
  )
}

export default OrderRedirect
