'use client';

import React, { useEffect, useState } from 'react';
import { RESUME_URL } from '@/lib/portfolio';
import { Icon, IconName } from './ui';

export const mobileSections: { id: string; label: string; icon: IconName }[] = [
  { id: 'm-home', label: 'Home', icon: 'home' },
  { id: 'm-skills', label: 'Skills', icon: 'layers' },
  { id: 'm-work', label: 'Work', icon: 'briefcase' },
  { id: 'm-journey', label: 'Journey', icon: 'award' },
  { id: 'm-contact', label: 'Contact', icon: 'chat' },
];

// Tracks which mobile section sits in the middle of the viewport
export function useActiveSection() {
  const [active, setActive] = useState(mobileSections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    mobileSections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return active;
}

export function MobileHeader({ active }: { active: string }) {
  const [scrolled, setScrolled] = useState(false);
  const current = mobileSections.find((s) => s.id === active);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${scrolled ? 'bg-dark-navy/75 backdrop-blur-xl border-white/10' : 'border-transparent'}`}
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
    >
      <div className="mx-auto max-w-2xl h-14 px-4 sm:px-6 flex items-center justify-between">
        <a href="#m-home" className="logo-link flex items-center gap-2.5 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-green-accent" aria-label="Sampath Menuka - Home">
          <img src="/assets/logo.png" alt="" className="h-8 w-8" />
          <span className="leading-tight">
            <span className="block text-sm font-semibold text-lightest-slate tracking-tight">
              Sampath<span className="text-green-accent">.</span>
            </span>
            <span key={active} className="block text-[11px] font-mono text-slate-gray animate-[fadeIn_0.3s_ease]">
              ~/{current?.label.toLowerCase()}
            </span>
          </span>
        </a>

        <a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 h-9 px-3.5 rounded-full glass text-xs font-semibold text-lightest-slate active:scale-95 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-green-accent"
        >
          <Icon name="download" className="w-4 h-4 text-green-accent" />
          Resume
        </a>
      </div>
    </header>
  );
}

export function MobileTabBar({ active }: { active: string }) {
  return (
    <nav
      aria-label="Section navigation"
      className="fixed inset-x-0 z-50 px-3 pointer-events-none"
      style={{ bottom: 'calc(env(safe-area-inset-bottom) + 0.75rem)' }}
    >
      <ul className="pointer-events-auto mx-auto max-w-md grid grid-cols-5 gap-1 p-1.5 rounded-2xl bg-dark-accent/80 backdrop-blur-xl border border-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.9)]">
        {mobileSections.map((section) => {
          const isActive = active === section.id;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-current={isActive ? 'location' : undefined}
                className={`relative flex flex-col items-center justify-center gap-1 py-2 rounded-xl text-[10px] font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-accent ${isActive ? 'bg-green-accent/15 text-green-accent' : 'text-slate-gray active:bg-white/5'}`}
              >
                <Icon name={section.icon} className={`w-5 h-5 transition-transform duration-300 ${isActive ? '-translate-y-0.5' : ''}`} />
                {section.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
