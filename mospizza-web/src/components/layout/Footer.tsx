import logo from '../../assets/mos-logo.png'

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
        <div className="footer-social" aria-label="Social media">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">Facebook</a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
          <a href="https://order.toasttab.com/online/mos-pizza-1112-ave-h" target="_blank" rel="noopener noreferrer">Order Online</a>
        </div>
        <p className="footer-copy">&copy; 2026 Mo's Pizza. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
