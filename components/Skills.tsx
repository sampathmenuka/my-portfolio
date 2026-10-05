'use client';

import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { skillsData, categories } from '@/lib/portfolio';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('frontend');

  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 py-8 sm:px-6 sm:py-12">
      <SectionHeading
        index="02"
        label="Skills"
        title={<>Skills &amp; <span className="text-gradient">Expertise</span></>}
        subtitle="Technologies and tools I work with"
        center
      />

      <div data-aos="fade-up" data-aos-delay="100">
        {/* Skills Tab Navigation */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap justify-center gap-1 p-1.5 rounded-2xl glass" role="tablist" aria-label="Skill categories">
            {categories.map((category) => (
              <button
                key={category.id}
                role="tab"
                aria-selected={activeTab === category.id}
                className={`px-4 sm:px-5 py-2 text-sm font-medium rounded-xl cursor-pointer transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-accent ${activeTab === category.id ? 'btn-primary' : 'text-slate-gray hover:text-lightest-slate hover:bg-white/5'}`}
                onClick={() => setActiveTab(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Content */}
        <div>
          <div key={activeTab} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 animate-[fadeIn_0.5s_ease]" role="tabpanel">
            {skillsData[activeTab].map((skill) => (
              <div
                key={skill.name}
                className="group glass glass-hover relative p-6 rounded-2xl text-center flex flex-col items-center justify-center overflow-hidden"
              >
                <div className="absolute inset-0 bg-radial from-green-accent/10 to-transparent to-70% opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src={skill.logo}
                  alt=""
                  className={`relative h-12 w-12 mb-3 transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)] ${skill.isInvertLogo ? 'invert' : ''}`}
                />
                <span className="relative font-medium text-lightest-slate text-sm group-hover:text-green-accent transition-colors duration-300">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
