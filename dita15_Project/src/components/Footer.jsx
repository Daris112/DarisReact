import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-section">
          <h3>La Maison</h3>
          <p>Where luxury meets flavor. Experience fine dining at its finest.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/reviews">Reviews</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>📍 123 Luxury Street, New York</p>
          <p>📞 +1 555 234 5678</p>
          <p>📧 elitrestaurant@mail.com</p>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="footer-socials">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 La Maison. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
