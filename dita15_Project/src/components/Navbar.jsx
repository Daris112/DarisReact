import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-left">La Maison</div>

      {/* Hamburger icon */}
      <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <Link className="reserve-btn" to="/reserve">Reserve Table</Link>
    </nav>
  );
}

export default Navbar;
