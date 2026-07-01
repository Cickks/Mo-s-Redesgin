import { motion } from 'framer-motion'
import PageHero from '../components/layout/PageHero.tsx'
import { locationDetails } from '../data/locationHours.ts'
import Icon from '../components/common/Icon.tsx'

const PHONE_TEL = '+15043419650'

function ContactPage() {
  return (
    <div className="contact-page">
      <PageHero
        variant="contact"
        label="Contact"
        title="Get in touch with Mo's Pizza"
        description="Questions, catering, or a big order? We're happy to help."
      />

      <section className="page-section contact-layout contact-layout--info-only">
        <motion.div
          className="contact-info-column"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {locationDetails.mapEmbedUrl && (
            <div className="contact-map">
              <iframe
                title="Map to Mo's Pizza"
                src={locationDetails.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          )}

          <div className="contact-detail-cards">
            <div className="contact-glass-card">
              <h3>Visit Us</h3>
              <p>{locationDetails.address}</p>
              <a
                className="button button-secondary"
                href={locationDetails.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="pin" size={18} /> Get Directions
              </a>
            </div>
            <div className="contact-glass-card">
              <h3>Call Us</h3>
              <p>{locationDetails.phone}</p>
              <p><a href={`mailto:${locationDetails.email}`}>{locationDetails.email}</a></p>
              <a className="button button-primary" href={`tel:${PHONE_TEL}`}><Icon name="phone" size={18} /> Call Now</a>
            </div>
            <div className="contact-glass-card">
              <h3>Hours</h3>
              <ul className="contact-hours-list">
                {locationDetails.hours.map((hour, idx) => (
                  <li key={idx}><strong>{hour.label}</strong><span>{hour.value}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default ContactPage
