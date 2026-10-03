import React from 'react';
import SectionHeading from './SectionHeading';

const infoItems = [
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
      </svg>
    ),
    label: 'Education',
    value: 'Software Engineering Undergraduate',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    label: 'Focus',
    value: 'Full Stack Development',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Location',
    value: 'Sri Lanka',
  },
];

export default function About() {
  return (
    <section id="about-me" className="max-w-6xl mx-auto px-4 py-8 sm:px-6 sm:py-12">
      <SectionHeading index="01" label="About" title={<>A little <span className="text-gradient">about me</span></>} />

      <div className="flex flex-col lg:flex-row gap-12 items-start lg:justify-between" data-aos="fade-up" data-aos-delay="100">

        {/* Left Column - Text and Info Cards */}
        <div className="flex-1 lg:max-w-2xl order-1 [&_strong]:text-light-slate [&_strong]:font-medium">
          <p className="text-slate-gray text-lg mb-6 leading-relaxed">
            Hi there! I&apos;m Sampath Menuka Chandimal, a <strong>Software Engineering Undergraduate</strong> at Sabaragamuwa University of Sri Lanka. I specialize in building modern full-stack web applications using <strong>Next.js</strong>, <strong>Node.js</strong>, <strong>Spring Boot</strong>, and <strong>Java</strong>, with experience developing <strong>REST APIs</strong>, secure <strong>JWT authentication</strong>, responsive user interfaces, and well-structured <strong>databases</strong>.
          </p>
          <p className="text-slate-gray text-lg mb-8 leading-relaxed">
            I&apos;m passionate about turning ideas into reliable, scalable, and user-friendly applications. I continuously explore new technologies and improve my skills while focusing on building high-quality software solutions that solve real-world problems.
          </p>

          {/* Info Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mt-8">
            {infoItems.map((item) => (
              <div
                key={item.label}
                className="glass glass-hover flex flex-col items-center sm:items-start p-5 rounded-2xl text-center sm:text-left"
              >
                <div className="mb-3 p-2.5 rounded-xl bg-linear-to-br from-green-accent/20 to-cyan-accent/10 text-green-accent ring-1 ring-green-accent/20">
                  {item.icon}
                </div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-gray mb-1">{item.label}</h3>
                <p className="text-sm font-medium text-lightest-slate leading-snug">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Profile Image */}
        <div className="shrink-0 w-full lg:w-75 flex justify-center order-2 mt-8 lg:mt-0">
          <div className="relative group w-75 max-w-full transition-transform duration-500 hover:-translate-y-2">

            {/* Glow behind photo */}
            <div className="absolute -inset-4 bg-linear-to-br from-green-accent/25 via-green-teal/10 to-cyan-accent/25 rounded-[2rem] blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>

            {/* Photo container */}
            <div className="gradient-border relative rounded-3xl p-2 bg-dark-accent/80 backdrop-blur-xl">
              <img src="/assets/myphoto.svg" alt="Sampath Menuka" className="w-full h-auto rounded-2xl block object-cover" />
            </div>

            {/* Floating developer badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass text-xs font-semibold text-green-accent shadow-lg select-none z-10 animate-float whitespace-nowrap">
              <span className="font-mono">&lt;/&gt;</span>
              <span>Full Stack Developer</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
