import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-6 sm:px-12 lg:px-16 max-w-[1400px] mx-auto py-8 lg:py-0">
      <div className="w-full text-center lg:text-left max-w-4xl">
        <p className="text-[#4ade80] font-mono mb-5" data-aos="fade-up" data-aos-delay="100">
          Hi, I am
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#ccd6f6] mb-2 whitespace-normal sm:whitespace-nowrap" data-aos="fade-up" data-aos-delay="200">
          Sampath Menuka Chandimal
        </h1>
        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start mt-4">
          <div className="flex-1">
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-[#8892b0] mb-8" data-aos="fade-up" data-aos-delay="300">
              I build frontend, backend, and full-stack web applications.
            </h2>
            <p className="text-[#8892b0] max-w-xl mx-auto lg:mx-0 text-base mb-12" data-aos="fade-up" data-aos-delay="400">
              Software Engineering Undergraduate skilled in <strong>React.js</strong>, <strong>Node.js</strong>,{' '}
              <strong>Spring Boot</strong>, <strong>Java</strong>, <strong>MySQL</strong>, and <strong>MongoDB</strong>. I
              build REST APIs, implement JWT auth, design databases, and craft responsive UIs from concept to deployment.
            </p>
            <a href="#contact" className="inline-block px-8 py-4 border border-[#4ade80] text-[#4ade80] rounded hover:bg-[#4ade80]/10 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#4ade80] focus:ring-offset-2 focus:ring-offset-[#1a1a2e]" data-aos="fade-up" data-aos-delay="500">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
