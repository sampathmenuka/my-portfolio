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
    <section id="skills" className="section-container">
      <div className="skills-wrapper" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="skills-subtitle">Technologies and tools I work with</p>

        {/* Skills Tab Navigation */}
        <div className="skills-tabs">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`skill-tab ${activeTab === category.id ? 'active' : ''}`}
              onClick={() => setActiveTab(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Content */}
        <div className="skills-content">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`skills-panel ${activeTab === category.id ? 'active' : ''}`}
              style={{ display: activeTab === category.id ? 'block' : 'none' }}
            >
              <div className="skills-grid">
                {skillsData[category.id].map((skill, index) => (
                  <div className="skill-card" key={index}>
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className={`skill-logo ${skill.isInvertLogo ? 'invert' : ''}`}
                    />
                    <span className="skill-name">{skill.name}</span>
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
