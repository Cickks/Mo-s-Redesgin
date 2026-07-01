import { Link } from 'react-router-dom'
import { locationDetails } from '../../data/locationHours'
import Icon from '../common/Icon.tsx'

function QuickActionsBar() {
  return (
    <div className="quick-actions-bar">
      <a href={`tel:${locationDetails.phone.replace(/\D/g, '')}`} className="quick-action">
        <span className="quick-action-icon"><Icon name="phone" size={20} /></span>
        <div className="quick-action-text">
          <div className="quick-action-label">Call Now</div>
          <div className="quick-action-value">{locationDetails.phone}</div>
        </div>
      </a>
      <a href={locationDetails.directionsUrl} target="_blank" rel="noreferrer" className="quick-action">
        <span className="quick-action-icon"><Icon name="pin" size={20} /></span>
        <div className="quick-action-text">
          <div className="quick-action-label">Location</div>
          <div className="quick-action-value">Westwego, LA</div>
        </div>
      </a>
      <Link to="/contact" className="quick-action" aria-label="See full hours on the contact page">
        <span className="quick-action-icon"><Icon name="clock" size={20} /></span>
        <div className="quick-action-text">
          <div className="quick-action-label">Hours</div>
          <div className="quick-action-value">Tue-Sat 11AM</div>
        </div>
      </Link>
    </div>
  )
}

export default QuickActionsBar
