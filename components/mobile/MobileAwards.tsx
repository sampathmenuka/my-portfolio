import React from 'react';
import { awards } from '@/lib/portfolio';
import { Icon, SectionHeader } from './ui';

export default function MobileAwards() {
  return (
    <div className="mb-10">
      <SectionHeader as="h2" eyebrow="Awards" title={<>Awards &amp; <span className="text-gradient">Recognition</span></>} />

      <ul className="space-y-4">
        {awards.map((award) => (
          <li key={award.title} className="glass gradient-border relative rounded-3xl overflow-hidden" data-aos="fade-up">
            {/* Certificate preview */}
            <a
              href={award.certificate}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${award.title} certificate`}
              className="relative block h-44 overflow-hidden bg-linear-to-br from-orange-400/20 via-dark-accent to-green-accent/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-green-accent"
            >
              <img
                src={award.certificate}
                alt={`${award.title} certificate of attendance`}
                className="absolute left-1/2 top-5 w-40 -translate-x-1/2 rotate-[-4deg] rounded-md ring-1 ring-white/10 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.9)]"
                loading="lazy"
              />
              <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-dark-navy/70 backdrop-blur text-[11px] font-semibold uppercase tracking-wider text-orange-300 ring-1 ring-orange-400/30">
                <Icon name="medal" className="w-3.5 h-3.5" />
                {award.place}
              </span>
            </a>

            <div className="relative p-5">
              <h3 className="text-lg font-bold leading-snug tracking-tight text-lightest-slate">{award.title}</h3>
              <p className="mt-1 text-xs font-medium text-green-accent/90">
                {award.issuer} · {award.date}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-gray">{award.description}</p>

              <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-slate-gray">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10">
                  <Icon name="award" className="w-3.5 h-3.5 text-green-accent" />
                  {award.team}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10">
                  <Icon name="mapPin" className="w-3.5 h-3.5 text-green-accent" />
                  {award.location}
                </span>
              </div>

              <a
                href={award.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 h-11 rounded-xl flex items-center justify-center gap-2 text-sm font-medium bg-white/5 border border-white/10 text-lightest-slate active:bg-white/10 active:scale-[0.98] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-green-accent"
              >
                View Certificate
                <Icon name="arrowUpRight" className="w-4 h-4 text-green-accent" />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
