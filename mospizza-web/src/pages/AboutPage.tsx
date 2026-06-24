import PageHero from '../components/layout/PageHero.tsx'
import Reveal from '../components/common/Reveal.tsx'

function AboutPage() {
  return (
    <div className="about-page">
      <PageHero
        variant="about"
        label="About Us"
        title="Mo's Pizza is part of the Westwego family."
      />

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
