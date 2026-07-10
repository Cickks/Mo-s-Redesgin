import logo from '../../assets/mos-logo.png'
import { TOAST_ORDER_URL } from '../../data/menu.ts'
import { locationDetails } from '../../data/locationHours.ts'

const GOOGLE_REVIEWS_URL = 'https://www.google.com/maps/search/Mo%27s+Pizza+1112+Ave+H+Westwego+LA'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <img src={logo} alt="Mo's Pizza" className="footer-logo" />
        <p className="footer-tagline">Italians Do It Better — serving Westwego since 1987.</p>
        <p className="footer-contact">
          1112 Ave H, Westwego, LA 70094 &nbsp;|&nbsp;{' '}
          <a href="tel:+15043419650">(504) 341-9650</a> &nbsp;|&nbsp;{' '}
          <a href="mailto:mosfest@gmail.com">mosfest@gmail.com</a>
        </p>
        <div className="footer-social" aria-label="Helpful links">
          <a href={locationDetails.directionsUrl} target="_blank" rel="noopener noreferrer">Directions</a>
          <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">Google Reviews</a>
          <a href={TOAST_ORDER_URL} target="_blank" rel="noopener noreferrer">Order Online</a>
        </div>
        <p className="footer-copy">&copy; 2026 Mo's Pizza. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
