function OrderCTA() {
  return (
    <section className="order-cta">
      <div>
        <p className="section-label">Get pizza fast</p>
        <h2>Order online or call ahead for pickup.</h2>
        <p>Easy checkout, trusted local delivery partners, and a menu built for quick ordering.</p>
      </div>
      <div className="order-actions">
        <a className="button button-primary" href="/order">Order Now</a>
        <a className="button button-secondary" href="tel:+15076304506">Call Us</a>
      </div>
    </section>
  )
}

export default OrderCTA
