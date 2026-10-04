import React from 'react';
import SectionHeading from './SectionHeading';
import { projects, highlights } from '@/lib/portfolio';

export default function Projects() {
  return (
    <>
      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-4 py-8 sm:px-6 sm:py-12">
        <SectionHeading index="03" label="Projects" title={<>Things I&apos;ve <span className="text-gradient">worked on</span></>} />

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group glass glass-hover flex flex-col md:flex-row md:items-stretch rounded-3xl overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
            >
              {project.image && (
                <div className="relative w-full h-62.5 md:w-[42%] md:h-auto md:min-h-75 overflow-hidden shrink-0 bg-linear-to-br from-green-accent/10 via-dark-accent to-cyan-accent/10">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-contain object-center p-4 transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {project.badge && (
                    <span className="absolute top-4 left-4 glass px-3 py-1 rounded-full text-xs font-semibold text-green-accent uppercase tracking-wider">
                      {project.badge}
                    </span>
                  )}
                </div>
              )}
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <span className="font-mono text-sm text-green-accent/80 mb-2">0{index + 1}</span>
                <h3 className="text-xl md:text-2xl font-bold text-lightest-slate mb-3 leading-snug tracking-tight group-hover:text-white transition-colors">{project.title}</h3>
                <p className="text-slate-gray text-sm leading-relaxed mb-6 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-full text-xs font-mono text-light-slate bg-white/5 border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-white/10">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-lightest-slate hover:text-green-accent transition-colors duration-300 group/link"
                    title="View on GitHub"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span>View Repository</span>
                    <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Technical Highlights Section */}
      <section id="technical-highlights" className="max-w-6xl mx-auto px-4 py-8 sm:px-6 sm:py-12">
        <SectionHeading
          index="04"
          label="Highlights"
          title={<>Technical <span className="text-gradient">Highlights</span></>}
          subtitle="Core competencies applied in real-world projects"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" data-aos="fade-up" data-aos-delay="100">
          {highlights.map((item) => (
            <div key={item.title} className="glass glass-hover rounded-2xl p-6">
              <div className="w-11 h-11 mb-5 p-2.5 rounded-xl bg-linear-to-br from-green-accent/20 to-cyan-accent/10 text-green-accent ring-1 ring-green-accent/20">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  {item.icon}
                </svg>
              </div>
              <h3 className="text-lg text-lightest-slate mb-2 font-semibold tracking-tight">{item.title}</h3>
              <p className="text-slate-gray text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
