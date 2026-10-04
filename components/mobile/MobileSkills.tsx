'use client';

import React, { useState } from 'react';
import { skillsData, categories } from '@/lib/portfolio';
import { SectionHeader } from './ui';

const allSkills = Object.values(skillsData).flat();

export default function MobileSkills() {
  const [activeTab, setActiveTab] = useState(categories[0].id);

  return (
    <section id="m-skills" aria-labelledby="m-skills-title">
      <SectionHeader
        id="m-skills-title"
        eyebrow="Skills"
        title={<>Skills &amp; <span className="text-gradient">Expertise</span></>}
        action={<span className="text-xs font-mono text-slate-gray">{allSkills.length} tools</span>}
      />

      {/* Auto-scrolling logo strip */}
      <div className="fade-x -mx-4 sm:-mx-6 overflow-hidden mb-5" aria-hidden="true">
        <div className="flex w-max animate-marquee">
          {[...allSkills, ...allSkills].map((skill, i) => (
            <div key={i} className="mr-2.5 shrink-0 flex items-center gap-2 h-10 px-3 rounded-full glass">
              <img src={skill.logo} alt="" className={`w-5 h-5 ${skill.isInvertLogo ? 'invert' : ''}`} />
              <span className="text-xs text-light-slate whitespace-nowrap">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Category chips */}
      <div
        role="tablist"
        aria-label="Skill categories"
        className="no-scrollbar -mx-4 sm:-mx-6 px-4 sm:px-6 flex gap-2 overflow-x-auto snap-x scroll-px-4 py-1"
      >
        {categories.map((category) => {
          const isActive = activeTab === category.id;
          return (
            <button
              key={category.id}
              id={`m-tab-${category.id}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls="m-skills-panel"
              onClick={() => setActiveTab(category.id)}
              className={`snap-start shrink-0 inline-flex items-center gap-2 h-10 px-4 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-accent ${isActive ? 'btn-primary' : 'glass text-slate-gray active:text-lightest-slate'}`}
            >
              {category.label}
              <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${isActive ? 'bg-black/15' : 'bg-white/5'}`}>
                {skillsData[category.id].length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Skills grid */}
      <div
        key={activeTab}
        id="m-skills-panel"
        role="tabpanel"
        aria-labelledby={`m-tab-${activeTab}`}
        className="mt-4 grid grid-cols-3 sm:grid-cols-4 gap-3 animate-[fadeIn_0.4s_ease]"
      >
        {skillsData[activeTab].map((skill) => (
          <div key={skill.name} className="glass rounded-2xl aspect-square flex flex-col items-center justify-center gap-2 p-2 text-center">
            <img
              src={skill.logo}
              alt=""
              className={`w-9 h-9 drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)] ${skill.isInvertLogo ? 'invert' : ''}`}
              loading="lazy"
            />
            <span className="text-xs font-medium text-lightest-slate leading-tight">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
