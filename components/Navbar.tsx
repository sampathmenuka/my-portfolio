'use client';

import React, { useState, useEffect } from 'react';
import { RESUME_URL } from '@/lib/portfolio';

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about-me', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#hero');

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
            <div className="flex items-center gap-1 p-1 rounded-full bg-white/3 border border-white/5">
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
              className="inline-flex btn-primary px-4 py-2 rounded-xl text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-lightest-slate"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
