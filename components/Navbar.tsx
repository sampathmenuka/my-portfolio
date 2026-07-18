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
    <header id="header" className="relative w-full" role="banner">
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#1a1a2e]/95 backdrop-blur-sm transition-all duration-300" role="navigation" aria-label="Main navigation">
        <div className="max-w-6xl mx-auto px-4 md:px-8 xl:max-w-7xl">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center">
              <a href="#hero" className="logo-link text-xl font-bold text-[#4ade80] hover:text-[#86efac] transition-colors duration-300" aria-label="Sampath Menuka - Home">
                <img src="/assets/logo.png" alt="Sampath Menuka Logo" className="h-8 w-8" />
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8" role="menubar">
              <a href="#hero" className="relative text-sm font-medium text-[#8892b0] hover:text-[#4ade80] transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-[#4ade80] hover:after:w-full after:transition-all after:duration-300 focus:outline-none focus:ring-2 focus:ring-[#4ade80] focus:ring-offset-4 focus:ring-offset-[#1a1a2e]" role="menuitem">Home</a>
              <a href="#about-me" className="relative text-sm font-medium text-[#8892b0] hover:text-[#4ade80] transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-[#4ade80] hover:after:w-full after:transition-all after:duration-300 focus:outline-none focus:ring-2 focus:ring-[#4ade80] focus:ring-offset-4 focus:ring-offset-[#1a1a2e]" role="menuitem">About</a>
              <a href="#skills" className="relative text-sm font-medium text-[#8892b0] hover:text-[#4ade80] transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-[#4ade80] hover:after:w-full after:transition-all after:duration-300 focus:outline-none focus:ring-2 focus:ring-[#4ade80] focus:ring-offset-4 focus:ring-offset-[#1a1a2e]" role="menuitem">Skills</a>
              <a href="#projects" className="relative text-sm font-medium text-[#8892b0] hover:text-[#4ade80] transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-[#4ade80] hover:after:w-full after:transition-all after:duration-300 focus:outline-none focus:ring-2 focus:ring-[#4ade80] focus:ring-offset-4 focus:ring-offset-[#1a1a2e]" role="menuitem">Projects</a>
              <a href="#experience" className="relative text-sm font-medium text-[#8892b0] hover:text-[#4ade80] transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-[#4ade80] hover:after:w-full after:transition-all after:duration-300 focus:outline-none focus:ring-2 focus:ring-[#4ade80] focus:ring-offset-4 focus:ring-offset-[#1a1a2e]" role="menuitem">Experience</a>
              <a href="#contact" className="relative text-sm font-medium text-[#8892b0] hover:text-[#4ade80] transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-[#4ade80] hover:after:w-full after:transition-all after:duration-300 focus:outline-none focus:ring-2 focus:ring-[#4ade80] focus:ring-offset-4 focus:ring-offset-[#1a1a2e]" role="menuitem">Contact</a>
              <a
                href="https://pasindusmc909.github.io/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#4ade80] hover:bg-[#86efac] text-[#1a1a2e] font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-[#4ade80]/25 focus:outline-none focus:ring-2 focus:ring-[#ccd6f6] focus:ring-offset-2 focus:ring-offset-[#1a1a2e]"
                role="menuitem"
              >
                Resume
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="flex md:hidden items-center p-2 rounded-lg bg-transparent border-none cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#4ade80]"
              id="menuToggle"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              onClick={toggleMenu}
            >
              <svg className="w-6 h-6 text-[#4ade80]" id="menuIcon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        className={`fixed inset-0 bg-[#1a1a2e]/80 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        id="mobileOverlay"
        onClick={closeMenu}
      ></div>
      <div className={`fixed top-0 h-full w-[min(75vw,320px)] bg-[#16162a] border-l border-[#374151] shadow-[-10px_0_30px_rgba(0,0,0,0.5)] z-50 transition-all duration-300 ease-in-out md:hidden ${isOpen ? 'right-0' : 'right-[-100%]'}`} id="mobileSidebar">
        <div className="flex justify-between items-center px-6 py-4 border-b border-[#374151]">
          <span className="text-lg font-semibold text-white">Menu</span>
          <button className="p-2 text-[#4ade80] hover:text-[#86efac] bg-transparent border-none rounded-lg cursor-pointer transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#4ade80]" id="closeMenu" aria-label="Close menu" onClick={closeMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col px-4 py-6 gap-2" role="menu" aria-label="Mobile navigation menu">
          <a href="#hero" className="block px-3 py-2.5 text-white rounded-md hover:text-[#4ade80] hover:bg-[#1f2937] transition-all duration-200" role="menuitem" onClick={closeMenu}>Home</a>
          <a href="#about-me" className="block px-3 py-2.5 text-white rounded-md hover:text-[#4ade80] hover:bg-[#1f2937] transition-all duration-200" role="menuitem" onClick={closeMenu}>About</a>
          <a href="#skills" className="block px-3 py-2.5 text-white rounded-md hover:text-[#4ade80] hover:bg-[#1f2937] transition-all duration-200" role="menuitem" onClick={closeMenu}>Skills</a>
          <a href="#projects" className="block px-3 py-2.5 text-white rounded-md hover:text-[#4ade80] hover:bg-[#1f2937] transition-all duration-200" role="menuitem" onClick={closeMenu}>Projects</a>
          <a href="#experience" className="block px-3 py-2.5 text-white rounded-md hover:text-[#4ade80] hover:bg-[#1f2937] transition-all duration-200" role="menuitem" onClick={closeMenu}>Experience</a>
          <a href="#contact" className="block px-3 py-2.5 text-white rounded-md hover:text-[#4ade80] hover:bg-[#1f2937] transition-all duration-200" role="menuitem" onClick={closeMenu}>Contact</a>
          <div className="pt-4">
            <a
              href="https://pasindusmc909.github.io/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 bg-[#4ade80] hover:bg-[#86efac] text-[#1a1a2e] font-semibold rounded-lg text-center transition-all duration-200 shadow-lg"
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
