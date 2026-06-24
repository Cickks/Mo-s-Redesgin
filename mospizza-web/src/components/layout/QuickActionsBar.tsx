import { locationDetails } from '../../data/locationHours'

function QuickActionsBar() {
  return (
    <div className="quick-actions-bar">
      <a href={`tel:${locationDetails.phone.replace(/\D/g, '')}`} className="quick-action">
        <span className="quick-action-icon">📞</span>
        <div className="quick-action-text">
          <div className="quick-action-label">Call Now</div>
          <div className="quick-action-value">{locationDetails.phone}</div>
        </div>
      </a>
      <a href={locationDetails.directionsUrl} target="_blank" rel="noreferrer" className="quick-action">
        <span className="quick-action-icon">📍</span>
        <div className="quick-action-text">
          <div className="quick-action-label">Location</div>
          <div className="quick-action-value">Westwego, LA</div>
        </div>
      </a>
      <div className="quick-action">
        <span className="quick-action-icon">🕒</span>
        <div className="quick-action-text">
          <div className="quick-action-label">Hours</div>
          <div className="quick-action-value">Tue-Sat 11AM</div>
        </div>
      </div>
    </div>
  )
}

export default QuickActionsBar
