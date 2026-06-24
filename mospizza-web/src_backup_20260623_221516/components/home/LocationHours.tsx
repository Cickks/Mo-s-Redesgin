import { locationDetails } from '../../data/locationHours.ts'

function LocationHours() {
  return (
    <section className="location-hours">
      <div className="section-header">
        <p className="section-label">Find Us</p>
        <h2>Westwego location and hours</h2>
      </div>
      <div className="location-grid">
        <div>
          <h3>{locationDetails.name}</h3>
          <p>{locationDetails.address}</p>
          <p><strong>Phone:</strong> {locationDetails.phone}</p>
          <div className="location-hours-list">
            {locationDetails.hours.map((hour) => (
              <p key={hour.label}>
                <strong>{hour.label}:</strong> {hour.value}
              </p>
            ))}
          </div>
        </div>
        <div>
          <a className="button button-secondary" href={locationDetails.directionsUrl} target="_blank" rel="noreferrer">
            Get Directions
          </a>
        </div>
      </div>
    </section>
  )
}

export default LocationHours
