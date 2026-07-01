import familyTable from '../../assets/family-table.webp'

function AboutSection() {
  return (
    <section className="about-section page-section">
      <div className="about-section-inner">
        <figure className="about-section-media">
          <img
            src={familyTable}
            alt="Friends and family sharing pizzas around the table at Mo's Pizza"
            loading="lazy"
          />
        </figure>
        <div className="about-section-text">
          <span className="section-label">Our Story</span>
          <h2>Family-owned and local since 1987</h2>
          <p>Mo's Pizza has been part of Westwego since 1987. We've been serving the community with fresh pizza, authentic muffulettas, and Italian comfort food that families return to year after year.</p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
