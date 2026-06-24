function OrderPage() {
  return (
    <main className="order-page">
      <section className="page-hero page-hero--order">
        <div className="section-header">
          <p className="section-label">Order Online</p>
          <h1>Fast pickup and local delivery.</h1>
          <p>Get your favorite pizza, pasta, and sides with simple checkout and convenient pickup from our Westwego kitchen.</p>
        </div>
        <div className="hero-actions">
          <a className="button button-primary" href="/order">Start Your Order</a>
          <a className="button button-secondary" href="tel:+15076304506">Call to Order</a>
        </div>
      </section>

      <section className="page-section">
        <div className="section-header">
          <h2>Why order from Mo's?</h2>
          <p>Local quality, quick service, and pizza made with family-style attention to every detail.</p>
        </div>
        <div className="order-benefits-grid">
          <div className="order-benefit-card">
            <h3>Ready fast</h3>
            <p>Pickup is always prepared on time, and our team keeps orders moving.</p>
          </div>
          <div className="order-benefit-card">
            <h3>Neighborhood favorite</h3>
            <p>Trusted by Westwego families for fresh ingredients and friendly service.</p>
          </div>
          <div className="order-benefit-card">
            <h3>Easy online flow</h3>
            <p>Clear item choices, order notes, and a simple checkout built for mobile.</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default OrderPage
