'use client';

import React, { useState } from 'react';
import { experiences } from '@/lib/portfolio';
import { Icon, SectionHeader } from './ui';

export default function MobileExperience() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="m-journey" aria-labelledby="m-journey-title">
      <SectionHeader
        id="m-journey-title"
        eyebrow="IEEE Activities"
        title={<>Leadership &amp; <span className="text-gradient">Activities</span></>}
      />

      <ol className="space-y-3">
        {experiences.map((exp, i) => {
          const [event, ...branch] = exp.organization.split(' – ');
          const isOpen = open === i;
          return (
            <li
              key={exp.title}
              className={`relative glass rounded-2xl overflow-hidden transition-shadow duration-300 ${isOpen ? 'ring-1 ring-green-accent/30 shadow-[0_20px_50px_-25px_rgba(74,222,128,0.4)]' : ''}`}
              data-aos="fade-up"
            >
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`m-exp-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center gap-3 p-3 text-left rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-green-accent"
                >
                  <img src={exp.image} alt="" className="w-14 h-14 shrink-0 rounded-xl object-cover ring-1 ring-white/10 bg-dark-accent" loading="lazy" />
                  <span className="flex-1 min-w-0">
                    <span className="block text-[15px] font-semibold tracking-tight text-lightest-slate">{exp.title}</span>
                    <span className="mt-0.5 block text-xs text-green-accent/90 truncate">{event}</span>
                  </span>
                  <span className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-300 ${isOpen ? 'bg-green-accent/15 text-green-accent' : 'bg-white/5 text-slate-gray'}`}>
                    <Icon name="chevronDown" className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </span>
                </button>
              </h3>

              <div
                id={`m-exp-${i}`}
                className={`grid transition-[grid-template-rows] duration-500 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
              >
                <div className="overflow-hidden" inert={!isOpen}>
                  <div className="px-4 pb-4">
                    {branch.length > 0 && <p className="text-xs text-slate-gray">{branch.join(' – ')}</p>}
                    <img src={exp.image} alt={`${exp.title} event`} className="mt-3 w-full h-auto rounded-xl ring-1 ring-white/10" loading="lazy" />
                    <ul className="mt-4 flex flex-col gap-2 text-sm text-slate-gray">
                      {exp.description.map((duty) => (
                        <li key={duty} className="flex gap-2.5">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-green-accent/70"></span>
                          {duty}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
