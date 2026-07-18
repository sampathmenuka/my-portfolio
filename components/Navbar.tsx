'use client';

import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header id="header" role="banner">
      <nav className="nav-container" role="navigation" aria-label="Main navigation">
        <div className="nav-content">
          <div className="nav-flex">
            <div className="logo-container">
              <a href="#hero" className="logo-link" aria-label="Sampath Menuka - Home">
                <img src="/assets/logo.png" alt="Sampath Menuka Logo" className="logo-img" />
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="desktop-menu" role="menubar">
              <a href="#hero" className="nav-link" role="menuitem">Home</a>
              <a href="#about-me" className="nav-link" role="menuitem">About</a>
              <a href="#skills" className="nav-link" role="menuitem">Skills</a>
              <a href="#projects" className="nav-link" role="menuitem">Projects</a>
              <a href="#experience" className="nav-link" role="menuitem">Experience</a>
              <a href="#contact" className="nav-link" role="menuitem">Contact</a>
              <a
                href="https://sampathmenuka.github.io/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-btn"
                role="menuitem"
              >
                Resume
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-btn"
              id="menuToggle"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              onClick={toggleMenu}
            >
              <svg className="menu-icon" id="menuIcon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`mobile-sidebar-overlay ${isOpen ? 'active' : ''}`}
        id="mobileOverlay"
        onClick={closeMenu}
      ></div>
      <div className={`mobile-sidebar ${isOpen ? 'active' : ''}`} id="mobileSidebar">
        <div className="sidebar-header">
          <span className="sidebar-title">Menu</span>
          <button className="close-btn" id="closeMenu" aria-label="Close menu" onClick={closeMenu}>
            <svg className="close-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="mobile-nav" role="menu" aria-label="Mobile navigation menu">
          <a href="#hero" className="mobile-nav-link" role="menuitem" onClick={closeMenu}>Home</a>
          <a href="#about-me" className="mobile-nav-link" role="menuitem" onClick={closeMenu}>About</a>
          <a href="#skills" className="mobile-nav-link" role="menuitem" onClick={closeMenu}>Skills</a>
          <a href="#projects" className="mobile-nav-link" role="menuitem" onClick={closeMenu}>Projects</a>
          <a href="#experience" className="mobile-nav-link" role="menuitem" onClick={closeMenu}>Experience</a>
          <a href="#contact" className="mobile-nav-link" role="menuitem" onClick={closeMenu}>Contact</a>
          <div className="mobile-resume-container">
            <a
              href="https://sampathmenuka.github.io/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-resume-btn"
              role="menuitem"
              onClick={closeMenu}
            >
              Resume
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
