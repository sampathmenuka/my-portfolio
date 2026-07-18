import React from 'react';
import DeveloperCodeCard from './DeveloperCodeCard';

export default function Hero() {
  return (
    <section id="hero" className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-6 sm:px-12 lg:px-16 max-w-[1400px] mx-auto py-12 lg:py-0 overflow-x-clip">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center text-center lg:text-left max-w-6xl mx-auto">
        
        {/* Left Column - Text Content */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <p className="text-[#4ade80] font-mono mb-5 text-sm sm:text-base" data-aos="fade-up" data-aos-delay="100">
            Hi, I am
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#ccd6f6] mb-4" data-aos="fade-up" data-aos-delay="200">
            Sampath Menuka Chandimal
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#8892b0] mb-8 leading-snug" data-aos="fade-up" data-aos-delay="300">
            I build modern web applications, from intuitive frontends to robust backends.
          </h2>
          <p className="text-[#8892b0] max-w-xl mx-auto lg:mx-0 text-base mb-10 leading-relaxed" data-aos="fade-up" data-aos-delay="400">
            Software Engineering Undergraduate skilled in <strong>Next.js</strong>, <strong>Node.js</strong>,{' '}
            <strong>Spring Boot</strong>, <strong>Java</strong>, <strong>MySQL</strong>, and <strong>MongoDB</strong>. I
            build modern full-stack web applications, from intuitive and responsive frontends to robust backends, REST
            APIs, secure JWT authentication, and well-structured databases from concept to deployment.
          </p>
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4" data-aos="fade-up" data-aos-delay="500">
            <a href="#contact" className="inline-block px-8 py-4 border border-[#4ade80] text-[#4ade80] rounded hover:bg-[#4ade80]/10 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#4ade80] focus:ring-offset-2 focus:ring-offset-[#1a1a2e]">
              Get In Touch
            </a>
            <a href="#projects" className="inline-flex items-center gap-1.5 px-8 py-4 text-[#ccd6f6] hover:text-[#4ade80] transition-colors duration-300 font-medium group">
              View Projects
              <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>

        {/* Right Column - DeveloperCodeCard */}
        <div className="lg:col-span-5 w-full flex justify-center py-6">
          <DeveloperCodeCard />
        </div>

      </div>
    </section>
  );
}
