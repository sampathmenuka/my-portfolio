'use client';

import React from 'react';
import { MobileHeader, MobileTabBar, useActiveSection } from './MobileNav';
import MobileHero from './MobileHero';
import MobileSkills from './MobileSkills';
import MobileProjects from './MobileProjects';
import MobileExperience from './MobileExperience';
import MobileContact from './MobileContact';
import { SocialLinks } from './ui';

// App-style layout for phones; the desktop layout takes over from the md breakpoint.
export default function MobileApp() {
  const active = useActiveSection();

  return (
    <div className="relative overflow-x-clip">
      <MobileHeader active={active} />

      <main
        className="mx-auto max-w-2xl px-4 sm:px-6 space-y-14"
        style={{ paddingTop: 'calc(env(safe-area-inset-top) + 4.5rem)' }}
      >
        <MobileHero />
        <MobileSkills />
        <MobileProjects />
        <MobileExperience />
        <MobileContact />
      </main>

      <footer
        className="mx-auto max-w-2xl px-4 sm:px-6 pt-12 text-center"
        style={{ paddingBottom: 'calc(env(safe-area-inset-bottom) + 7rem)' }}
      >
        <SocialLinks compact className="justify-center" />
        <p className="mt-3 text-xs text-slate-gray">
          Designed &amp; built by <span className="text-light-slate">Sampath Menuka</span>
        </p>
        <p className="mt-1 text-[11px] text-slate-gray">© 2026 Sampath Menuka Chandimal. All rights reserved.</p>
      </footer>

      <MobileTabBar active={active} />
    </div>
  );
}
