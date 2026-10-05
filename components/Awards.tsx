import React from 'react';
import SectionHeading from './SectionHeading';
import { awards } from '@/lib/portfolio';

export default function Awards() {
  return (
    <section id="awards" className="max-w-6xl mx-auto px-4 py-8 sm:px-6 sm:py-12">
      <SectionHeading index="04" label="Awards" title={<>Awards &amp; <span className="text-gradient">Recognition</span></>} />

      <div className="grid grid-cols-1 gap-8">
        {awards.map((award) => (
          <article
            key={award.title}
            className="group glass glass-hover gradient-border flex flex-col md:flex-row md:items-stretch rounded-3xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {/* Certificate preview */}
            <a
              href={award.certificate}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${award.title} certificate`}
              className="relative shrink-0 md:w-[34%] p-8 flex items-center justify-center bg-linear-to-br from-orange-400/15 via-dark-accent to-green-accent/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-green-accent"
            >
              <img
                src={award.certificate}
                alt={`${award.title} certificate of attendance`}
                className="w-full max-w-60 rounded-lg ring-1 ring-white/10 shadow-[0_25px_60px_-20px_rgba(0,0,0,0.9)] transition-transform duration-500 group-hover:scale-[1.03] group-hover:-rotate-1"
                loading="lazy"
              />
            </a>

            <div className="p-6 md:p-8 flex-1 flex flex-col">
              <span className="self-start inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-orange-300 bg-orange-400/10 ring-1 ring-orange-400/30">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="15" r="6" />
                  <path d="M8.5 9.8 6 2h4l2 4 2-4h4l-2.5 7.8" />
                </svg>
                {award.place}
              </span>
              <h3 className="mt-4 text-xl md:text-2xl font-bold text-lightest-slate leading-snug tracking-tight">{award.title}</h3>
              <p className="mt-2 text-sm text-green-accent/90">
                {award.issuer} · {award.date}
              </p>
              <p className="mt-4 text-slate-gray text-sm leading-relaxed">{award.description}</p>

              <dl className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rounded-xl bg-white/[0.03] border border-white/5 px-4 py-3">
                  <dt className="text-[10px] font-mono uppercase tracking-wider text-slate-gray">Team</dt>
                  <dd className="mt-0.5 text-sm font-medium text-lightest-slate">{award.team}</dd>
                </div>
                <div className="rounded-xl bg-white/[0.03] border border-white/5 px-4 py-3">
                  <dt className="text-[10px] font-mono uppercase tracking-wider text-slate-gray">Event</dt>
                  <dd className="mt-0.5 text-sm font-medium text-lightest-slate">{award.location}</dd>
                </div>
              </dl>

              <div className="mt-6 pt-5 border-t border-white/10">
                <a
                  href={award.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-lightest-slate hover:text-green-accent transition-colors duration-300 group/link"
                >
                  View Certificate
                  <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
