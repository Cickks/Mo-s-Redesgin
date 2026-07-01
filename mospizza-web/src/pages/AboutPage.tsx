import PageHero from '../components/layout/PageHero.tsx'
import Reveal from '../components/common/Reveal.tsx'
import storefront from '../assets/storefront-2.webp'

function AboutPage() {
  return (
    <div className="about-page">
      <PageHero
        variant="about"
        label="About Us"
        title="Mo's Pizza is part of the Westwego family."
      />

      <section className="page-section about-heritage">
        <Reveal>
          <div className="about-heritage-inner">
            <figure className="about-heritage-media">
              <img
                src={storefront}
                alt="Mo's Pizza storefront on Avenue H in Westwego, Louisiana"
                loading="lazy"
              />
            </figure>
            <div className="about-heritage-text">
              <span className="section-label">Our Roots</span>
              <h2>A Westwego institution since 1987</h2>
              <p>
                Family-owned from day one, Mo's has served the Westwego community fresh
                hand-tossed pizza, authentic muffulettas, and Italian comfort food that
                keeps neighbors coming back year after year.
              </p>
              <ul className="about-stats" aria-label="Mo's Pizza at a glance">
                <li>
                  <span className="about-stat-value">1987</span>
                  <span className="about-stat-label">Established</span>
                </li>
                <li>
                  <span className="about-stat-value">Family</span>
                  <span className="about-stat-label">Owned</span>
                </li>
                <li>
                  <span className="about-stat-value">Westwego</span>
                  <span className="about-stat-label">Louisiana</span>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="page-section about-story">
        <Reveal>
          <div className="about-card">
            <h2>Our story</h2>
            <p>Mo's Pizza has been serving Westwego with fresh pizza, muffulettas, and Italian comfort food for years.</p>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="about-card">
            <h2>Our mission</h2>
            <p>To deliver quality food and friendly service that brings our community together.</p>
          </div>
        </Reveal>
      </section>
    </div>
  )
}

export default AboutPage
