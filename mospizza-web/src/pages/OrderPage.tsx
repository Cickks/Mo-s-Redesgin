import PageHero from '../components/layout/PageHero.tsx'

function OrderPage() {
  return (
    <div className="order-page">
      <PageHero
        variant="order"
        label="Order Online"
        title="Fast pickup and local delivery."
        description="Get your favorite pizza, pasta, and sides with simple checkout."
      >
        <a className="button button-primary" href="https://order.toasttab.com/online/mos-pizza-1112-ave-h" target="_blank" rel="noopener noreferrer">Start Your Order</a>
        <a className="button button-secondary" href="tel:+15043419650">Call to Order</a>
      </PageHero>

      <section className="page-section">
        <div className="section-header">
          <h2>Why order from Mo's?</h2>
        </div>
        <div className="order-benefits-grid">
          <div className="order-benefit-card">
            <h3>Ready fast</h3>
            <p>Fresh pizza made to order.</p>
          </div>
          <div className="order-benefit-card">
            <h3>Local favorite</h3>
            <p>Trusted by Westwego families.</p>
          </div>
          <div className="order-benefit-card">
            <h3>Easy checkout</h3>
            <p>Simple mobile ordering.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OrderPage
