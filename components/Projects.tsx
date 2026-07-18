import React from 'react';

interface Project {
  title: string;
  badge?: string;
  description: string;
  tags: string[];
  image?: string;
  repoUrl: string;
  delay: number;
}

const projects: Project[] = [
  {
    title: 'ParkSwift – Online Parking Reservation System',
    badge: 'Group Leader',
    description: 'Led development of a full-stack parking system managing 100+ slots with real-time availability. Implemented JWT authentication, Stripe payment integration, and achieved 97% test coverage with role-based access control.',
    tags: ['Node.js', 'React', 'MongoDB', 'Stripe API', 'JWT', 'Tailwind CSS'],
    image: '/assets/project_1.png',
    repoUrl: 'https://github.com/pasindusmc909/ParkSwift',
    delay: 100
  },
  {
    title: 'PerfectCV - AI-Powered CV Optimization System',
    badge: 'Group Project',
    description: 'AI-powered CV optimization platform used by 200+ users. Integrated Google Gemini AI for intelligent resume analysis, achieving 85% ATS score improvement for users. Reduced PDF generation time by 60% using async processing.',
    tags: ['Python', 'Flask', 'React', 'Google Gemini AI', 'MongoDB'],
    image: '/assets/project_2.png',
    repoUrl: 'https://github.com/Dhivanujan/MiniProject-PerfectCV',
    delay: 200
  },
  {
    title: 'Hotel Management System',
    description: 'Designed and built REST API handling 10,000+ requests/day with 99.2% uptime. Implemented comprehensive business logic, database optimization, and documented API endpoints for seamless team integration.',
    tags: ['Java 17', 'Spring Boot', 'Hibernate', 'MySQL', 'Maven'],
    image: '/assets/project_1.png',
    repoUrl: 'https://github.com/app1-fullStack',
    delay: 300
  }
];

export default function Projects() {
  return (
    <>
      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-4 py-8 sm:px-6 sm:py-12">
        <h2 className="text-2xl font-bold text-[#4ade80] mb-8 flex items-center whitespace-normal md:whitespace-nowrap after:content-[''] after:block after:h-[1px] after:w-[300px] md:after:w-full md:after:max-w-[15rem] after:bg-[#374151] after:ml-6" data-aos="fade-up">
          Things I&apos;ve worked on
        </h2>
        <div className="grid grid-cols-1 gap-8 mt-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col md:flex-row md:items-stretch bg-gradient-to-br from-[#1e1e2e]/90 to-[#1a1a2e]/95 rounded-2xl overflow-hidden border border-[#64ffda]/10 hover:border-[#64ffda]/30 hover:shadow-2xl hover:shadow-[#1a1a2e] hover:-translate-y-2 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={project.delay}
            >
              {project.image && (
                <div className="relative w-full h-[250px] md:w-[40%] md:h-auto md:min-h-[300px] overflow-hidden flex-shrink-0 bg-[#1a1a2e]/50">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-contain object-center transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  {project.badge && (
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/80 to-transparent flex items-end p-4">
                      <span className="bg-[#4ade80] text-[#1a1a2e] px-3 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wider">{project.badge}</span>
                    </div>
                  )}
                </div>
              )}
              <div className="p-6 md:p-8 flex-1 flex flex-col md:w-[60%]">
                <h3 className="text-xl md:text-2xl font-bold text-[#ccd6f6] mb-3 leading-snug">{project.title}</h3>
                <p className="text-[#8892b0] text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-[#64ffda]/10 text-[#4ade80] px-2.5 py-1 rounded text-xs font-mono border border-[#64ffda]/20 hover:bg-[#64ffda]/20 hover:border-[#4ade80] transition-all duration-200">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-[#64ffda]/10">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#4ade80] text-sm font-medium px-4 py-2 border border-[#64ffda]/30 rounded-md bg-[#64ffda]/5 hover:bg-[#64ffda]/15 hover:border-[#4ade80] hover:translate-x-1 transition-all duration-300 text-decoration-none"
                    title="View on GitHub"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span>View Repository</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Highlights Section */}
      <section id="technical-highlights" className="max-w-6xl mx-auto px-4 py-8 sm:px-6 sm:py-12">
        <h2 className="text-2xl font-bold text-[#4ade80] mb-8 flex items-center whitespace-normal md:whitespace-nowrap after:content-[''] after:block after:h-[1px] after:w-[300px] md:after:w-full md:after:max-w-[15rem] after:bg-[#374151] after:ml-6" data-aos="fade-up">
          Technical Highlights
        </h2>
        <p className="text-center text-[#8892b0] text-lg mb-10 -mt-4" data-aos="fade-up" data-aos-delay="50">
          Core competencies applied in real-world projects
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8" data-aos="fade-up" data-aos-delay="100">
          <div className="bg-gradient-to-br from-[#4ade80]/5 to-[#64ffda]/3 border border-[#4ade80]/10 rounded-lg p-8 text-center transition-all duration-300 hover:border-[#4ade80] hover:bg-gradient-to-br hover:from-[#4ade80]/10 hover:to-[#64ffda]/8 hover:-translate-y-1">
            <div className="w-12 h-12 mx-auto mb-4 text-[#4ade80] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z" />
              </svg>
            </div>
            <h3 className="text-xl text-[#ccd6f6] mb-3 font-semibold">REST APIs</h3>
            <p className="text-[#8892b0] text-sm leading-relaxed">
              Designed and built production-grade RESTful APIs handling 10,000+ requests/day using Spring Boot and
              Node.js with full CRUD, pagination, and error handling.
            </p>
          </div>
          <div className="bg-gradient-to-br from-[#4ade80]/5 to-[#64ffda]/3 border border-[#4ade80]/10 rounded-lg p-8 text-center transition-all duration-300 hover:border-[#4ade80] hover:bg-gradient-to-br hover:from-[#4ade80]/10 hover:to-[#64ffda]/8 hover:-translate-y-1">
            <div className="w-12 h-12 mx-auto mb-4 text-[#4ade80] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4l5 2.18V11c0 3.5-2.33 6.79-5 7.93C9.33 17.79 7 14.5 7 11V7.18L12 5z" />
              </svg>
            </div>
            <h3 className="text-xl text-[#ccd6f6] mb-3 font-semibold">JWT Authentication</h3>
            <p className="text-[#8892b0] text-sm leading-relaxed">
              Implemented secure JWT-based authentication and role-based access control (RBAC) across multiple
              full-stack projects including ParkSwift and PerfectCV.
            </p>
          </div>
          <div className="bg-gradient-to-br from-[#4ade80]/5 to-[#64ffda]/3 border border-[#4ade80]/10 rounded-lg p-8 text-center transition-all duration-300 hover:border-[#4ade80] hover:bg-gradient-to-br hover:from-[#4ade80]/10 hover:to-[#64ffda]/8 hover:-translate-y-1">
            <div className="w-12 h-12 mx-auto mb-4 text-[#4ade80] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4zm6 14c0 .5-2.13 2-6 2s-6-1.5-6-2v-2.23c1.61.78 3.72 1.23 6 1.23s4.39-.45 6-1.23V17zm0-4.55c-1.3.83-3.45 1.55-6 1.55s-4.7-.72-6-1.55v-2.27c1.61.78 3.72 1.23 6 1.23s4.39-.45 6-1.23v2.27zm-6-2.45C8.13 10 6 8.5 6 8s2.13-2 6-2 6 1.5 6 2-2.13 2-6 2z" />
              </svg>
            </div>
            <h3 className="text-xl text-[#ccd6f6] mb-3 font-semibold">Databases</h3>
            <p className="text-[#8892b0] text-sm leading-relaxed">
              Experienced with SQL (MySQL + Hibernate/JPA) and NoSQL (MongoDB + Mongoose). Skilled in schema design,
              indexing, query optimization, and ORM mapping.
            </p>
          </div>
          <div className="bg-gradient-to-br from-[#4ade80]/5 to-[#64ffda]/3 border border-[#4ade80]/10 rounded-lg p-8 text-center transition-all duration-300 hover:border-[#4ade80] hover:bg-gradient-to-br hover:from-[#4ade80]/10 hover:to-[#64ffda]/8 hover:-translate-y-1">
            <div className="w-12 h-12 mx-auto mb-4 text-[#4ade80] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
              </svg>
            </div>
            <h3 className="text-xl text-[#ccd6f6] mb-3 font-semibold">React Applications</h3>
            <p className="text-[#8892b0] text-sm leading-relaxed">
              Built responsive, component-driven React.js frontends with hooks, state management, and third-party API
              integrations for real-world applications used by 200+ users.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
