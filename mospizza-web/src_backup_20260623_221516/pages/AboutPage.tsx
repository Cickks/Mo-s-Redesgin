function AboutPage() {
  return (
    <main className="about-page">
      <section className="page-hero page-hero--about">
        <div className="section-header">
          <p className="section-label">About Us</p>
          <h1>Mo's Pizza is part of the Westwego family.</h1>
          <p>We bring classic Italian-American comfort food to our neighborhood with warm hospitality and community-first values.</p>
        </div>
      </section>

      <section className="page-section about-story">
        <div>
          <h2>Our story</h2>
          <p>Mo's Pizza began as a family dream to create a local place where neighbors could enjoy fresh pizza, hearty pasta, and a welcoming environment. Over the years, we've grown with Westwego while keeping the same flavors and heart.</p>
        </div>
        <div>
          <h2>Our mission</h2>
          <p>To deliver a modern dining experience that still feels rooted in community—where quick online ordering, excellent food, and friendly service come together.</p>
        </div>
      </section>

      <section className="page-section about-values">
        <div className="value-card">
          <h3>Local first</h3>
          <p>We serve the neighborhoods around Westwego and support local families with every meal.</p>
        </div>
        <div className="value-card">
          <h3>Fresh ingredients</h3>
          <p>Our sauces, dough, and toppings are chosen for taste and consistency, every time.</p>
        </div>
        <div className="value-card">
          <h3>Good vibes</h3>
          <p>Warm service and a cozy atmosphere are part of the Mo's Pizza experience.</p>
        </div>
      </section>
    </main>
  )
}

export default AboutPage
