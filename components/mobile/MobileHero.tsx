'use client';

import React, { useState } from 'react';
import { RESUME_URL, stats, infoItems } from '@/lib/portfolio';
import { Icon, SectionHeader, SocialLinks } from './ui';

export default function MobileHero() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="m-home" aria-label="Introduction" className="space-y-4">
      {/* Profile card */}
      <div className="glass gradient-border relative rounded-3xl overflow-hidden" data-aos="fade-up">
        <div className="relative h-28 bg-linear-to-br from-green-accent/30 via-green-teal/10 to-cyan-accent/25">
          <div className="absolute inset-0 bg-grid" aria-hidden="true" />
          <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-dark-navy/60 backdrop-blur text-[11px] text-light-slate">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-accent opacity-75 animate-ping motion-reduce:animate-none"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-accent"></span>
            </span>
            Open to internships
          </span>
        </div>

        <div className="relative px-5 pb-6 -mt-12">
          <div className="relative w-24 h-24">
            <div className="absolute -inset-1 rounded-full bg-linear-to-br from-green-accent via-green-teal to-cyan-accent" aria-hidden="true" />
            <img
              src="/assets/myphoto.svg"
              alt="Sampath Menuka"
              className="relative w-24 h-24 rounded-full object-cover object-top bg-dark-accent ring-4 ring-dark-accent"
            />
          </div>

          <p className="mt-4 text-green-accent font-mono text-xs">Hi, I am</p>
          <h1 className="mt-1 text-[2rem] sm:text-4xl leading-[1.1] font-bold tracking-tight text-lightest-slate">
            Sampath Menuka <span className="text-gradient">Chandimal</span>
          </h1>
          <p className="mt-2 text-sm font-medium text-light-slate">Full Stack Developer · SE Undergraduate</p>

          <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-slate-gray">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10">
              <Icon name="mapPin" className="w-3.5 h-3.5 text-green-accent" />
              Sri Lanka
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10">
              <Icon name="cap" className="w-3.5 h-3.5 text-green-accent" />
              Sabaragamuwa University
            </span>
          </div>

          <p className="mt-4 text-[15px] leading-relaxed text-slate-gray">
            I build modern web applications, from intuitive frontends to robust backends.
          </p>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <a
              href="#m-contact"
              className="btn-primary h-12 rounded-xl inline-flex items-center justify-center gap-2 text-sm font-semibold active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-lightest-slate"
            >
              Let&apos;s talk
              <Icon name="arrowRight" className="w-4 h-4" />
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="glass h-12 rounded-xl inline-flex items-center justify-center gap-2 text-sm font-medium text-lightest-slate active:scale-[0.98] transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-green-accent"
            >
              <Icon name="download" className="w-4 h-4 text-green-accent" />
              Resume
            </a>
          </div>

          <SocialLinks className="mt-5 justify-between" />
        </div>
      </div>

      {/* Stats */}
      <dl className="grid grid-cols-3 gap-3" data-aos="fade-up">
        {stats.map((stat) => (
          <div key={stat.label} className="glass rounded-2xl px-2 py-4 text-center">
            <dt className="sr-only">{stat.label}</dt>
            <dd className="text-2xl font-bold tracking-tight text-gradient">{stat.value}</dd>
            <dd className="mt-1 text-[11px] leading-tight text-slate-gray" aria-hidden="true">{stat.label}</dd>
          </div>
        ))}
      </dl>

      {/* About */}
      <div className="glass rounded-3xl p-5" data-aos="fade-up">
        <SectionHeader eyebrow="About" title={<>A little <span className="text-gradient">about me</span></>} />

        <div className="text-[15px] leading-relaxed text-slate-gray [&_strong]:text-light-slate [&_strong]:font-medium">
          <p>
            Hi there! I&apos;m Sampath Menuka Chandimal, a <strong>Software Engineering Undergraduate</strong> at Sabaragamuwa University of Sri Lanka. I specialize in building modern full-stack web applications using <strong>Next.js</strong>, <strong>Node.js</strong>, <strong>Spring Boot</strong>, and <strong>Java</strong>, with experience developing <strong>REST APIs</strong>, secure <strong>JWT authentication</strong>, responsive user interfaces, and well-structured <strong>databases</strong>.
          </p>
          <div
            id="m-about-more"
            className={`grid transition-[grid-template-rows] duration-500 ease-out ${expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
          >
            <div className="overflow-hidden">
              <p className="pt-4">
                I&apos;m passionate about turning ideas into reliable, scalable, and user-friendly applications. I continuously explore new technologies and improve my skills while focusing on building high-quality software solutions that solve real-world problems.
              </p>
            </div>
          </div>
        </div>

        <button
          type="button"
          aria-expanded={expanded}
          aria-controls="m-about-more"
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-green-accent rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-green-accent"
        >
          {expanded ? 'Show less' : 'Read more'}
          <Icon name="chevronDown" className={`w-4 h-4 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
        </button>

        <ul className="mt-5 grid gap-2 sm:grid-cols-3">
          {infoItems.map((item) => (
            <li key={item.label} className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/5">
              <span className="shrink-0 p-2 rounded-xl bg-linear-to-br from-green-accent/20 to-cyan-accent/10 text-green-accent ring-1 ring-green-accent/20">
                {item.icon}
              </span>
              <span className="min-w-0">
                <span className="block text-[10px] font-mono uppercase tracking-wider text-slate-gray">{item.label}</span>
                <span className="block text-sm font-medium text-lightest-slate leading-snug">{item.value}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
