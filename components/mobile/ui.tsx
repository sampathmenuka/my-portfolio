import React from 'react';
import { socials } from '@/lib/portfolio';

// Small building blocks shared by the mobile layout.

const iconPaths = {
  home: <><path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.5V20a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9.5" /></>,
  layers: <><path d="m12 2 10 5-10 5L2 7z" /><path d="m2 17 10 5 10-5" /><path d="m2 12 10 5 10-5" /></>,
  briefcase: <><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /></>,
  award: <><circle cx="12" cy="8" r="6" /><path d="M15.48 12.89 17 22l-5-3-5 3 1.52-9.11" /></>,
  chat: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
  download: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="m7 10 5 5 5-5" /><path d="M12 15V3" /></>,
  chevronDown: <path d="m6 9 6 6 6-6" />,
  arrowRight: <><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>,
  arrowUpRight: <><path d="M7 17 17 7" /><path d="M7 7h10v10" /></>,
  mail: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></>,
  phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />,
  send: <><path d="m22 2-7 20-4-9-9-4z" /><path d="M22 2 11 13" /></>,
  mapPin: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></>,
  cap: <><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" /></>,
  swipe: <><path d="M18 8l4 4-4 4" /><path d="M2 12h20" /></>,
  medal: <><circle cx="12" cy="15" r="6" /><path d="M8.5 9.8 6 2h4l2 4 2-4h4l-2.5 7.8" /></>,
};

export type IconName = keyof typeof iconPaths;

export function Icon({ name, className = 'w-5 h-5' }: { name: IconName; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {iconPaths[name]}
    </svg>
  );
}

export function SocialLinks({ className = '', compact = false }: { className?: string; compact?: boolean }) {
  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {socials.map((social) => (
        <li key={social.label}>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit Sampath's ${social.label} profile`}
            className={`flex items-center justify-center rounded-xl text-slate-gray active:scale-90 active:text-green-accent transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-accent ${compact ? 'w-10 h-10' : 'w-11 h-11 bg-white/[0.04] border border-white/10'}`}
          >
            <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              {social.icon}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}

interface SectionHeaderProps {
  id?: string;
  eyebrow: string;
  title: React.ReactNode;
  action?: React.ReactNode;
  as?: 'h2' | 'h3';
}

export function SectionHeader({ id, eyebrow, title, action, as: Heading = 'h2' }: SectionHeaderProps) {
  return (
    <div className="flex items-end justify-between gap-4 mb-5">
      <div className="min-w-0">
        <p className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-green-accent mb-1.5">
          <span className="h-px w-5 bg-green-accent/60" aria-hidden="true"></span>
          {eyebrow}
        </p>
        <Heading id={id} className={`font-bold tracking-tight text-lightest-slate ${Heading === 'h2' ? 'text-2xl sm:text-3xl' : 'text-xl'}`}>
          {title}
        </Heading>
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
