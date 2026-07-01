import { locationDetails } from '../../data/locationHours.ts'
import Icon from '../common/Icon.tsx'

function LocationHours() {
  return (
    <section className="location-section page-section">
      <div className="section-header">
        <h2>Visit Us in Westwego</h2>
        <p>Come grab a slice — or call ahead and we'll have it ready.</p>
      </div>
      <div className="location-content">
        {locationDetails.mapEmbedUrl && (
          <div className="location-map">
            <iframe
              title="Map to Mo's Pizza"
              src={locationDetails.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        )}
        <div className="location-cards">
          <div className="location-info">
            <h3>Mo's Pizza</h3>
            <p className="address">{locationDetails.address}</p>
            <a href={`tel:${locationDetails.phone.replace(/\D/g, '')}`} className="button button-primary">
              <Icon name="phone" size={18} /> Call {locationDetails.phone}
            </a>
          </div>
          <div className="location-hours">
            <h3>Hours</h3>
            <ul>
              {locationDetails.hours.map((hour, idx) => (
                <li key={idx}><strong>{hour.label}:</strong> {hour.value}</li>
              ))}
            </ul>
            <a href={locationDetails.directionsUrl} target="_blank" rel="noopener noreferrer" className="button button-secondary">
              <Icon name="pin" size={18} /> Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationHours
