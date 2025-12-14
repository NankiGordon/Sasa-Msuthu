import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/images/logo.webp";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="Ride-Nation" className="brand-logo" />
        <p className="brand-text">SASA MSUTHU MINING</p>
      </div>
      {/* Hamburger for small screens */}
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <ul className={menuOpen ? "show" : ""}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            Our Operation
          </Link>
        </li>
        <li>
          <Link to="/vacancies" onClick={() => setMenuOpen(false)}>
            Vacancies
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="contact"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
