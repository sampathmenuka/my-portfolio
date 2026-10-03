'use client';

import React, { useState, useEffect } from 'react';

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about-me', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

const RESUME_URL = 'https://pasindusmc909.github.io/resume.pdf';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#hero');

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // Highlight the section currently in the middle of the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header id="header" className="relative w-full" role="banner">
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div
            className={`flex justify-between items-center rounded-2xl px-4 md:px-5 h-14 transition-all duration-300 ${scrolled ? 'glass shadow-[0_8px_30px_rgba(0,0,0,0.35)]' : 'border border-transparent'}`}
          >
            <a href="#hero" className="logo-link flex items-center gap-2.5" aria-label="Sampath Menuka - Home">
              <img src="/assets/logo.png" alt="Sampath Menuka Logo" className="h-8 w-8" />
              <span className="hidden sm:inline font-semibold text-lightest-slate tracking-tight">
                Sampath<span className="text-green-accent">.</span>
              </span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1 p-1 rounded-full bg-white/3 border border-white/5">
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-accent ${active === href ? 'bg-green-accent/15 text-green-accent' : 'text-slate-gray hover:text-lightest-slate'}`}
                  aria-current={active === href ? 'page' : undefined}
                >
                  {label}
                </a>
              ))}
            </div>

            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex btn-primary px-4 py-2 rounded-xl text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-lightest-slate"
            >
              Resume
            </a>

            {/* Mobile Menu Button */}
            <button
              className="flex md:hidden items-center p-2 rounded-lg glass cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-green-accent"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg className="w-5 h-5 text-green-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7h16M4 12h16M4 17h10" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={closeMenu}
      ></div>
      <div
        className={`fixed top-0 h-full w-[min(80vw,320px)] bg-dark-accent/95 backdrop-blur-xl border-l border-white/10 z-50 transition-all duration-300 ease-in-out md:hidden ${isOpen ? 'right-0' : '-right-full'}`}
      >
        <div className="flex justify-between items-center px-6 py-5 border-b border-white/10">
          <span className="text-sm font-mono uppercase tracking-widest text-slate-gray">Menu</span>
          <button
            className="p-2 text-green-accent rounded-lg cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-green-accent"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col px-4 py-6 gap-1" aria-label="Mobile navigation menu">
          {navLinks.map(({ href, label }, i) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${active === href ? 'bg-green-accent/10 text-green-accent' : 'text-lightest-slate hover:bg-white/5'}`}
            >
              <span className="font-mono text-xs text-slate-gray">0{i + 1}</span>
              {label}
            </a>
          ))}
          <div className="pt-6">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="block w-full py-3 btn-primary font-semibold rounded-xl text-center"
            >
              Resume
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
