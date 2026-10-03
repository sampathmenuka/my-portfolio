import React from 'react';

interface SectionHeadingProps {
  index: string;
  label: string;
  title: React.ReactNode;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeading({ index, label, title, subtitle, center = false }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`} data-aos="fade-up">
      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-mono text-green-accent tracking-wider uppercase">
        <span className="text-slate-gray">{index}</span>
        {label}
      </span>
      <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-lightest-slate">{title}</h2>
      {subtitle && (
        <p className={`mt-4 text-slate-gray text-base sm:text-lg max-w-2xl ${center ? 'mx-auto' : ''}`}>{subtitle}</p>
      )}
    </div>
  );
}
