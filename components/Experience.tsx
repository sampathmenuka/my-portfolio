import React from 'react';
import SectionHeading from './SectionHeading';
import { experiences } from '@/lib/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-4 py-8 sm:px-6 sm:py-12">
      <SectionHeading
        index="05"
        label="Experience"
        title={<>Leadership &amp; <span className="text-gradient">Activities</span></>}
        subtitle="IEEE Activities"
      />

      {/* Timeline */}
      <ol className="relative ml-3 md:ml-4 border-l border-white/10">
        {experiences.map((exp) => (
          <li key={exp.title} className="relative pl-8 md:pl-12 pb-10 last:pb-0" data-aos="fade-up">
            <span className="absolute -left-[7px] top-7 h-3.5 w-3.5 rounded-full bg-green-accent ring-4 ring-green-accent/15 shadow-[0_0_20px_rgba(74,222,128,0.6)]"></span>
            <div className="glass glass-hover p-6 rounded-2xl flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-1 order-2 md:order-1">
                <h3 className="text-lg font-semibold text-lightest-slate mb-1 tracking-tight">{exp.title}</h3>
                <p className="text-green-accent/90 mb-4 text-sm">{exp.organization}</p>
                <ul className="text-slate-gray text-sm flex flex-col gap-2">
                  {exp.description.map((duty) => (
                    <li key={duty} className="flex gap-2.5">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-green-accent/70"></span>
                      {duty}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="shrink-0 w-full md:w-50 order-1 md:order-2 overflow-hidden rounded-xl ring-1 ring-white/10">
                <img src={exp.image} alt={`${exp.title} event`} className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
