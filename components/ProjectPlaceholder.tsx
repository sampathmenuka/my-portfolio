import React from 'react';

// Stand-in artwork for projects that don't have a screenshot yet
export default function ProjectPlaceholder({ title }: { title: string }) {
  const [name] = title.split(/\s[–-]\s/);
  return (
    <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
      <div className="absolute inset-0 bg-grid opacity-70" />
      <div className="absolute w-40 h-40 rounded-full bg-green-accent/20 blur-3xl" />
      <span className="relative px-6 text-center text-3xl sm:text-4xl font-bold tracking-tight text-gradient">{name}</span>
    </div>
  );
}
