'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Background from '@/components/Background';
import Navbar from '@/components/Navbar';
import Sidebars from '@/components/Sidebars';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import MobileApp from '@/components/mobile/MobileApp';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
      disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    });
  }, []);

  return (
    <div className="relative min-h-screen isolate">
      <Background />

      {/* Desktop & tablet */}
      <div className="hidden md:block">
        <Navbar />
        <Sidebars />
        <main id="content" className="pt-24 px-2 lg:px-[9.375rem] space-y-6 sm:space-y-8" role="main">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>

      {/* Phones */}
      <div className="md:hidden">
        <MobileApp />
      </div>
    </div>
  );
}
