function ContactPage() {
  return (
    <main className="contact-page">
      <section className="page-hero page-hero--contact">
        <div className="section-header">
          <p className="section-label">Contact</p>
          <h1>Questions, catering, or a quick pickup?</h1>
          <p>Reach out by phone, message us from the site, or stop by the restaurant in Westwego.</p>
        </div>
      </section>

      <section className="page-section contact-grid">
        <div className="contact-card">
          <h2>Visit Us</h2>
          <p>123 Main Street, Westwego, LA</p>
          <p><strong>Hours:</strong> Daily 10AM–10PM</p>
        </div>
        <div className="contact-card">
          <h2>Call Us</h2>
          <a href="tel:+15076304506" className="button button-primary">(504) 630-4506</a>
        </div>
        <div className="contact-card">
          <h2>Email</h2>
          <p>info@mospizza.com</p>
        </div>
      </section>
    </main>
  )
}

export default ContactPage
