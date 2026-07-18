import React from 'react';

const infoItems = [
  {
    icon: (
      <svg className="w-5 h-5 text-green-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
      </svg>
    ),
    label: 'Education',
    value: 'Software Engineering Undergraduate',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-green-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg className="w-5 h-5 text-green-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      <h2 className="text-2xl font-bold text-green-accent mb-8 flex items-center whitespace-normal md:whitespace-nowrap after:content-[''] after:block after:h-[1px] after:w-[300px] md:after:w-full md:after:max-w-[15rem] after:bg-[#374151] after:ml-6" data-aos="fade-up">
        About Me
      </h2>
      <div className="flex flex-col lg:flex-row gap-12 items-start lg:justify-between" data-aos="fade-up" data-aos-delay="100">
        
        {/* Left Column - Text and Info Cards */}
        <div className="flex-1 lg:max-w-2xl order-1">
          <p className="text-slate-gray text-lg mb-6 leading-relaxed">
            Hi there! I&apos;m Sampath Menuka Chandimal, a <strong>Software Engineering Undergraduate</strong> at Sabaragamuwa University of Sri Lanka. I specialize in building modern full-stack web applications using <strong>Next.js</strong>, <strong>Node.js</strong>, <strong>Spring Boot</strong>, and <strong>Java</strong>, with experience developing <strong>REST APIs</strong>, secure <strong>JWT authentication</strong>, responsive user interfaces, and well-structured <strong>databases</strong>.
          </p>
          <p className="text-slate-gray text-lg mb-8 leading-relaxed">
            I&apos;m passionate about turning ideas into reliable, scalable, and user-friendly applications. I continuously explore new technologies and improve my skills while focusing on building high-quality software solutions that solve real-world problems.
          </p>

          {/* Info Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mt-8">
            {infoItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center sm:items-start p-4 rounded-xl border border-[#374151]/50 bg-dark-accent/40 hover:border-green-accent/30 hover:shadow-[0_4px_20px_rgba(74,222,128,0.05)] transition-all duration-300 text-center sm:text-left"
              >
                <div className="mb-2.5 p-2 bg-green-accent/5 rounded-lg border border-green-accent/15">
                  {item.icon}
                </div>
                <h3 className="text-sm font-semibold text-green-accent mb-1">{item.label}</h3>
                <p className="text-xs text-slate-gray leading-normal">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Profile Image (centered & stacked at the bottom on mobile/tablet) */}
        <div className="shrink-0 w-full lg:w-75 flex justify-center order-2 mt-8 lg:mt-0">
          <div className="relative group rounded-2xl p-2 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.01] w-[300px] max-w-full">
            
            {/* Glow Behind Photo */}
            <div className="absolute inset-0 bg-green-accent/5 rounded-2xl blur-xl -z-10 group-hover:bg-green-accent/10 transition-all duration-700"></div>
            
            {/* Image Outer Border Glow */}
            <div className="absolute -inset-0.5 bg-linear-to-r from-green-accent/10 via-green-accent/20 to-green-accent/10 rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-500"></div>

            {/* Photo Container */}
            <div className="relative border-2 border-green-accent rounded-2xl p-2 overflow-hidden bg-dark-accent/95">
              <img src="/assets/myphoto.svg" alt="Sampath Menuka" className="w-full h-auto rounded-xl block object-cover" />
            </div>

            {/* Floating Developer Badge */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-green-accent/30 bg-[#111827]/90 text-xs font-semibold text-green-accent shadow-lg backdrop-blur-sm select-none z-10 animate-float">
              <span>&lt;/&gt;</span>
              <span>Full Stack Developer</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
