import React from 'react';
import DeveloperCodeCard from './DeveloperCodeCard';

const stats = [
  { value: '3+', label: 'Full-stack projects' },
  { value: '25+', label: 'Technologies' },
  { value: '4', label: 'IEEE roles' },
];

export default function Hero() {
  return (
    <section id="hero" className="min-h-[calc(100vh-6rem)] flex items-center justify-center px-6 sm:px-12 lg:px-16 max-w-[1400px] mx-auto py-12 lg:py-0 overflow-x-clip">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center text-center lg:text-left max-w-6xl mx-auto">

        {/* Left Column - Text Content */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="flex justify-center lg:justify-start mb-6" data-aos="fade-up">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-xs sm:text-sm text-light-slate">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-accent opacity-75 animate-ping motion-reduce:animate-none"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-accent"></span>
              </span>
              Open to internship opportunities
            </span>
          </div>
          <p className="text-green-accent font-mono mb-3 text-sm sm:text-base" data-aos="fade-up" data-aos-delay="100">
            Hi, I am
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-lightest-slate mb-5 leading-[1.05]" data-aos="fade-up" data-aos-delay="150">
            Sampath Menuka <span className="text-gradient">Chandimal</span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-gray mb-6 leading-snug tracking-tight" data-aos="fade-up" data-aos-delay="250">
            I build modern web applications, from intuitive frontends to robust backends.
          </h2>
          <p className="text-slate-gray max-w-xl mx-auto lg:mx-0 text-base mb-10 leading-relaxed [&_strong]:text-light-slate [&_strong]:font-medium" data-aos="fade-up" data-aos-delay="350">
            Software Engineering Undergraduate skilled in <strong>Next.js</strong>, <strong>Node.js</strong>,{' '}
            <strong>Spring Boot</strong>, <strong>Java</strong>, <strong>MySQL</strong>, and <strong>MongoDB</strong>. I
            build modern full-stack web applications, from intuitive and responsive frontends to robust backends, REST
            APIs, secure JWT authentication, and well-structured databases from concept to deployment.
          </p>
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4" data-aos="fade-up" data-aos-delay="450">
            <a href="#contact" className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-lightest-slate focus-visible:ring-offset-2 focus-visible:ring-offset-dark-navy">
              Get In Touch
            </a>
            <a href="#projects" className="glass inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-lightest-slate hover:border-green-accent/40 hover:text-green-accent transition-colors duration-300 font-medium group">
              View Projects
              <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0" data-aos="fade-up" data-aos-delay="550">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-2xl sm:text-3xl font-bold text-lightest-slate tracking-tight">{stat.value}</dd>
                <dd className="text-xs text-slate-gray mt-1">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right Column - DeveloperCodeCard */}
        <div className="lg:col-span-5 w-full flex justify-center py-6">
          <DeveloperCodeCard />
        </div>
      </div>
    </section>
  );
}
