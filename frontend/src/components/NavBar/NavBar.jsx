import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

  // Scroll to footer when clicking "Contact"
  const handleContactClick = (e) => {
    e.preventDefault();
    const footer = document.querySelector("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // close nav after clicking
  };

  return (
    <nav className={`nav ${isOpen ? "openNav" : ""}`}>
      {/* Menu Open Button */}
      <i className="uil uil-bars navOpenBtn" onClick={toggleNav}></i>

      {/* Logo */}
      <Link to="/" className="logo">AI Code Helper</Link>

      {/* Navigation Links */}
      <ul className="nav-links">
        <i className="uil uil-times navCloseBtn" onClick={toggleNav}></i>
        <li><Link to="/explain" onClick={toggleNav}>Code Explain</Link></li>
        <li><Link to="/bugfixer" onClick={toggleNav}>Fix Bug</Link></li>
        <li><a href="#contact" onClick={handleContactClick}>Contact</a></li>
      </ul>
    </nav>
  );
}
