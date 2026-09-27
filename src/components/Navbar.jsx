import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <a href="#home" className="navbar-brand" onClick={closeMenu}>
          <div className="aera-logo">
            <span className="logo-text">aera</span>
          </div>
          <div className="brand-info">
            <span className="company-name">AERA GCS</span>
            <span className="tagline-sub">Empowered by innovation for better solutions…</span>
          </div>
        </a>

        <button
          className={`mobile-menu-btn ${menuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#products" onClick={closeMenu}>Products</a>
          <a href="#competence" onClick={closeMenu}>Competence</a>
          <a href="#facility" onClick={closeMenu}>Facility</a>
          <a href="#milestones" onClick={closeMenu}>Milestones</a>
          <a href="#customers" onClick={closeMenu}>Customers</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
      </div>
    </header>
  );
}
