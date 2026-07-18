'use client';

import React, { useState } from 'react';

interface Skill {
  name: string;
  logo: string;
  isInvertLogo?: boolean;
}

const skillsData: Record<string, Skill[]> = {
  frontend: [
    { name: 'React.js', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/react/react-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/typescript/typescript-original.svg' },
    { name: 'HTML', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/html5/html5-original.svg' },
    { name: 'CSS', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/css3/css3-original.svg' }
  ],
  backend: [
    { name: 'Java', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/java/java-original.svg' },
    { name: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/spring/spring-original.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/nodejs/nodejs-original.svg' },
    { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/express/express-original.svg', isInvertLogo: true },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/python/python-original.svg' },
    { name: 'C', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/c/c-original.svg' },
    { name: 'Hibernate', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/hibernate/hibernate-original.svg' },
    { name: 'Sequelize', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/sequelize/sequelize-original.svg' }
  ],
  database: [
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/mysql/mysql-original.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/mongodb/mongodb-original.svg' },
    { name: 'SQL', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/azuresqldatabase/azuresqldatabase-original.svg' }
  ],
  ops: [
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/git/git-original.svg' },
    { name: 'CI/CD', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/githubactions/githubactions-original.svg' },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/docker/docker-original.svg' }
  ],
  tools: [
    { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/vscode/vscode-original.svg' },
    { name: 'IntelliJ IDEA', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/intellij/intellij-original.svg' },
    { name: 'Postman', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/postman/postman-original.svg' }
  ],
  concepts: [
    { name: 'REST API', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/openapi/openapi-original.svg' },
    { name: 'MVC', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/spring/spring-original.svg' },
    { name: 'JWT Auth', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/json/json-original.svg' },
    { name: 'OOP', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/java/java-original.svg' },
    { name: 'Agile/Scrum', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/jira/jira-original.svg' }
  ]
};

const categories = [
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'database', label: 'Database' },
  { id: 'ops', label: 'DevOps' },
  { id: 'tools', label: 'Tools' },
  { id: 'concepts', label: 'Concepts' }
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('frontend');

  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 py-8 sm:px-6 sm:py-12">
      <div className="mt-12" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="text-2xl font-bold text-green-accent mb-8 flex items-center justify-center">Skills & Expertise</h2>
        <p className="text-center text-slate-gray text-lg mb-10 -mt-4">Technologies and tools I work with</p>

        {/* Skills Tab Navigation */}
        <div className="flex justify-center gap-2 flex-wrap mb-10 border-b-2 border-white/10 pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`relative px-6 py-3 text-base font-semibold text-slate-gray bg-transparent border-none cursor-pointer rounded-md transition-colors duration-300 hover:text-green-accent hover:bg-green-accent/5 focus:outline-none focus:ring-2 focus:ring-green-accent focus:ring-offset-2 ${activeTab === category.id ? 'text-green-accent after:w-full' : 'after:w-0'} after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2 after:h-[3px] after:bg-green-accent after:transition-all after:duration-300`}
              onClick={() => setActiveTab(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Content */}
        <div className="min-h-[300px]">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`animate-[fadeIn_0.5s_ease] ${activeTab === category.id ? 'block' : 'hidden'}`}
              style={{ display: activeTab === category.id ? 'block' : 'none' }}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {skillsData[category.id].map((skill, index) => (
                  <div className="group relative p-6 sm:p-4 rounded-xl text-center flex flex-col items-center justify-center bg-gradient-to-br from-dark-navy/80 to-[#1e1e32]/60 border border-green-accent/10 hover:border-green-accent hover:shadow-[0_10px_30px_rgba(74,222,128,0.2)] hover:-translate-y-1 transition-all duration-300 overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-green-accent/5 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300" key={index}>
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className={`h-12 w-12 mb-3 transition-transform duration-300 group-hover:scale-115 group-hover:[transform:rotateY(360deg)] filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] ${skill.isInvertLogo ? 'invert' : ''}`}
                    />
                    <span className="font-semibold text-lightest-slate text-sm group-hover:text-green-accent transition-colors duration-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
