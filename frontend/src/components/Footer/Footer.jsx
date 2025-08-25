import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section about">
          <h3>AI Code Helper</h3>
          <p>
            AI-powered platform to explain code, fix bugs, and support learning
            for developers of all levels.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/explain">Explain Code</a></li>
            <li><a href="/bugfixer">Bug Fixer</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section contact">
          <h4>Contact Me</h4>
          <p>Email: <a href="mailto:zaheer@example.com">zaheer@example.com</a></p>
          <p>Phone: <a href="tel:+923001234567">+92 300 1234567</a></p>
          <p>Address: Faisalabad, Pakistan</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/zaheer-afzal/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/zaheer-afzal" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.facebook.com/zaheer.afzal" target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 AI Code Helper. All rights reserved.</p>
      </div>
    </footer>
  );
}
