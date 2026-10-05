'use client';

import React, { useRef, useState } from 'react';
import { projects, socials } from '@/lib/portfolio';
import ProjectPlaceholder from '../ProjectPlaceholder';
import { Icon, SectionHeader } from './ui';

const githubIcon = socials.find((s) => s.label === 'GitHub')?.icon;

export default function MobileProjects() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  const cards = () => Array.from(trackRef.current?.children ?? []) as HTMLElement[];

  // The active card is the one whose left edge is closest to the track's snap position
  const handleScroll = () => {
    const track = trackRef.current;
    const items = cards();
    if (!track || items.length === 0) return;
    if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 4) {
      setCurrent(items.length - 1);
      return;
    }
    const start = items[0].offsetLeft;
    let closest = 0;
    items.forEach((item, i) => {
      const distance = Math.abs(item.offsetLeft - start - track.scrollLeft);
      if (distance < Math.abs(items[closest].offsetLeft - start - track.scrollLeft)) closest = i;
    });
    setCurrent(closest);
  };

  const scrollToCard = (index: number) => {
    const track = trackRef.current;
    const items = cards();
    if (!track || !items[index]) return;
    track.scrollTo({ left: items[index].offsetLeft - items[0].offsetLeft, behavior: 'smooth' });
  };

  return (
    <section id="m-work" aria-labelledby="m-work-title">
      <SectionHeader
        id="m-work-title"
        eyebrow="Projects"
        title={<>Things I&apos;ve <span className="text-gradient">built</span></>}
        action={
          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-gray" aria-live="polite">
            <Icon name="swipe" className="w-3.5 h-3.5 text-green-accent" />
            {current + 1}/{projects.length}
          </span>
        }
      />

      {/* Swipeable project cards */}
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="relative no-scrollbar -mx-4 sm:-mx-6 px-4 sm:px-6 flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-px-4 sm:scroll-px-6 pb-2"
      >
        {projects.map((project, index) => {
          const [name, subtitle] = project.title.split(/\s[–-]\s/);
          return (
            <article
              key={project.title}
              className="snap-start shrink-0 w-[85%] sm:w-[70%] glass rounded-3xl overflow-hidden flex flex-col"
              aria-label={`Project ${index + 1} of ${projects.length}`}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-linear-to-br from-green-accent/10 via-dark-accent to-cyan-accent/10">
                {project.image ? (
                  <img src={project.image} alt={`${project.title} screenshot`} className="w-full h-full object-contain p-3" loading="lazy" />
                ) : (
                  <ProjectPlaceholder title={project.title} />
                )}
                {project.badge && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-dark-navy/70 backdrop-blur border border-green-accent/20 text-[10px] font-semibold uppercase tracking-wider text-green-accent">
                    {project.badge}
                  </span>
                )}
                <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-dark-navy/60 backdrop-blur font-mono text-[11px] text-light-slate">
                  0{index + 1}
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-bold leading-snug tracking-tight text-lightest-slate">{name}</h3>
                {subtitle && <p className="mt-0.5 text-xs font-medium text-green-accent/90">{subtitle}</p>}
                <p className="mt-3 text-sm leading-relaxed text-slate-gray">{project.description}</p>
                <div className="mt-4 mb-5 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded-md text-[11px] font-mono text-light-slate bg-white/5 border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto h-11 rounded-xl inline-flex items-center justify-center gap-2 text-sm font-medium bg-white/5 border border-white/10 text-lightest-slate active:bg-white/10 active:scale-[0.98] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-green-accent"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">{githubIcon}</svg>
                  View Repository
                  <Icon name="arrowUpRight" className="w-4 h-4 text-green-accent" />
                </a>
              </div>
            </article>
          );
        })}
      </div>

      {/* Pagination dots */}
      <div className="mt-3 flex justify-center gap-1">
        {projects.map((project, index) => (
          <button
            key={project.title}
            type="button"
            onClick={() => scrollToCard(index)}
            aria-label={`Go to project ${index + 1}`}
            aria-current={current === index ? 'true' : undefined}
            className="p-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-green-accent"
          >
            <span className={`block h-1.5 rounded-full transition-all duration-300 ${current === index ? 'w-6 bg-green-accent' : 'w-1.5 bg-white/20'}`}></span>
          </button>
        ))}
      </div>
    </section>
  );
}
