import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <span className="copyright">
          &copy; {new Date().getFullYear()} Website. All rights reserved.
        </span>
        <ul className="footer-links">
          <li><a href="#">Terms & Conditions</a></li>
          <li><a href="#">Disclaimer</a></li>
          <li><a href="#">Site Map</a></li>
          <li><a href="#">PAIA</a></li>
          <li><a href="#">Cookie Policy</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
