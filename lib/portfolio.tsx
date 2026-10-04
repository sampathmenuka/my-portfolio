import React from 'react';

// Shared portfolio content, rendered by both the desktop and mobile layouts.

export const RESUME_URL = 'https://pasindusmc909.github.io/resume.pdf';
export const EMAIL = 'sampathwgw@gmail.com';
export const PHONE = { href: 'tel:+94778015196', label: '+94 77 801 5196' };

const DEVICON = 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons';

export interface Social {
  label: string;
  href: string;
  icon: React.ReactNode; // <path> for a 24x24 filled icon
}

export const socials: Social[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/sampathmenuka',
    icon: <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sampathmenuka/',
    icon: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />,
  },
  {
    label: 'X',
    href: 'https://x.com/pasindusmc909',
    icon: <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/sampath.menuk9/',
    icon: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />,
  },
  {
    label: 'Medium',
    href: 'https://medium.com/@sampathwgw',
    icon: <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />,
  },
];

export const stats = [
  { value: '3+', label: 'Full-stack projects' },
  { value: '25+', label: 'Technologies' },
  { value: '4', label: 'IEEE roles' },
];

export const infoItems = [
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
      </svg>
    ),
    label: 'Education',
    value: 'Software Engineering Undergraduate',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    label: 'Focus',
    value: 'Full Stack Development',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Location',
    value: 'Sri Lanka',
  },
];

export interface Skill {
  name: string;
  logo: string;
  isInvertLogo?: boolean;
}

export const skillsData: Record<string, Skill[]> = {
  frontend: [
    { name: 'React.js', logo: `${DEVICON}/react/react-original.svg` },
    { name: 'JavaScript', logo: `${DEVICON}/javascript/javascript-original.svg` },
    { name: 'TypeScript', logo: `${DEVICON}/typescript/typescript-original.svg` },
    { name: 'HTML', logo: `${DEVICON}/html5/html5-original.svg` },
    { name: 'CSS', logo: `${DEVICON}/css3/css3-original.svg` }
  ],
  backend: [
    { name: 'Java', logo: `${DEVICON}/java/java-original.svg` },
    { name: 'Spring Boot', logo: `${DEVICON}/spring/spring-original.svg` },
    { name: 'Node.js', logo: `${DEVICON}/nodejs/nodejs-original.svg` },
    { name: 'Express.js', logo: `${DEVICON}/express/express-original.svg`, isInvertLogo: true },
    { name: 'Python', logo: `${DEVICON}/python/python-original.svg` },
    { name: 'C', logo: `${DEVICON}/c/c-original.svg` },
    { name: 'Hibernate', logo: `${DEVICON}/hibernate/hibernate-original.svg` },
    { name: 'Sequelize', logo: `${DEVICON}/sequelize/sequelize-original.svg` }
  ],
  database: [
    { name: 'MySQL', logo: `${DEVICON}/mysql/mysql-original.svg` },
    { name: 'MongoDB', logo: `${DEVICON}/mongodb/mongodb-original.svg` },
    { name: 'SQL', logo: `${DEVICON}/azuresqldatabase/azuresqldatabase-original.svg` }
  ],
  ops: [
    { name: 'Git', logo: `${DEVICON}/git/git-original.svg` },
    { name: 'CI/CD', logo: `${DEVICON}/githubactions/githubactions-original.svg` },
    { name: 'Docker', logo: `${DEVICON}/docker/docker-original.svg` }
  ],
  tools: [
    { name: 'VS Code', logo: `${DEVICON}/vscode/vscode-original.svg` },
    { name: 'IntelliJ IDEA', logo: `${DEVICON}/intellij/intellij-original.svg` },
    { name: 'Postman', logo: `${DEVICON}/postman/postman-original.svg` }
  ],
  concepts: [
    { name: 'REST API', logo: `${DEVICON}/openapi/openapi-original.svg` },
    { name: 'MVC', logo: `${DEVICON}/spring/spring-original.svg` },
    { name: 'JWT Auth', logo: `${DEVICON}/json/json-original.svg` },
    { name: 'OOP', logo: `${DEVICON}/java/java-original.svg` },
    { name: 'Agile/Scrum', logo: `${DEVICON}/jira/jira-original.svg` }
  ]
};

export const categories = [
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'database', label: 'Database' },
  { id: 'ops', label: 'DevOps' },
  { id: 'tools', label: 'Tools' },
  { id: 'concepts', label: 'Concepts' }
];

export interface Project {
  title: string;
  badge?: string;
  description: string;
  tags: string[];
  image?: string;
  repoUrl: string;
}

export const projects: Project[] = [
  {
    title: 'ParkSwift – Online Parking Reservation System',
    badge: 'Group Leader',
    description: 'Led development of a full-stack parking system managing 100+ slots with real-time availability. Implemented JWT authentication, Stripe payment integration, and achieved 97% test coverage with role-based access control.',
    tags: ['Node.js', 'React', 'MongoDB', 'Stripe API', 'JWT', 'Tailwind CSS'],
    image: '/assets/project_1.png',
    repoUrl: 'https://github.com/pasindusmc909/ParkSwift'
  },
  {
    title: 'PerfectCV - AI-Powered CV Optimization System',
    badge: 'Group Project',
    description: 'AI-powered CV optimization platform used by 200+ users. Integrated Google Gemini AI for intelligent resume analysis, achieving 85% ATS score improvement for users. Reduced PDF generation time by 60% using async processing.',
    tags: ['Python', 'Flask', 'React', 'Google Gemini AI', 'MongoDB'],
    image: '/assets/project_2.png',
    repoUrl: 'https://github.com/Dhivanujan/MiniProject-PerfectCV'
  },
  {
    title: 'Hotel Management System',
    description: 'Designed and built REST API handling 10,000+ requests/day with 99.2% uptime. Implemented comprehensive business logic, database optimization, and documented API endpoints for seamless team integration.',
    tags: ['Java 17', 'Spring Boot', 'Hibernate', 'MySQL', 'Maven'],
    image: '/assets/project_1.png',
    repoUrl: 'https://github.com/app1-fullStack'
  }
];

export const highlights = [
  {
    title: 'REST APIs',
    description: 'Designed and built production-grade RESTful APIs handling 10,000+ requests/day using Spring Boot and Node.js with full CRUD, pagination, and error handling.',
    icon: <path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z" />
  },
  {
    title: 'JWT Authentication',
    description: 'Implemented secure JWT-based authentication and role-based access control (RBAC) across multiple full-stack projects including ParkSwift and PerfectCV.',
    icon: <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4l5 2.18V11c0 3.5-2.33 6.79-5 7.93C9.33 17.79 7 14.5 7 11V7.18L12 5z" />
  },
  {
    title: 'Databases',
    description: 'Experienced with SQL (MySQL + Hibernate/JPA) and NoSQL (MongoDB + Mongoose). Skilled in schema design, indexing, query optimization, and ORM mapping.',
    icon: <path d="M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4zm6 14c0 .5-2.13 2-6 2s-6-1.5-6-2v-2.23c1.61.78 3.72 1.23 6 1.23s4.39-.45 6-1.23V17zm0-4.55c-1.3.83-3.45 1.55-6 1.55s-4.7-.72-6-1.55v-2.27c1.61.78 3.72 1.23 6 1.23s4.39-.45 6-1.23v2.27zm-6-2.45C8.13 10 6 8.5 6 8s2.13-2 6-2 6 1.5 6 2-2.13 2-6 2z" />
  },
  {
    title: 'React Applications',
    description: 'Built responsive, component-driven React.js frontends with hooks, state management, and third-party API integrations for real-world applications used by 200+ users.',
    icon: <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
  }
];

export interface ExperienceItem {
  title: string;
  organization: string;
  description: string[];
  image: string;
}

export const experiences: ExperienceItem[] = [
  {
    title: 'Project Chair',
    organization: 'NEXORA 1.0 – IEEE WIE Student Branch, Sabaragamuwa University of Sri Lanka',
    description: [
      'Led and coordinated the NEXORA 1.0 project as Project Chair.',
      'Managed project planning, execution, and team coordination for successful event delivery.'
    ],
    image: '/assets/NEXORA.png'
  },
  {
    title: 'Public Speaker',
    organization: 'Career Compass – IEEE Student Branch, Sabaragamuwa University of Sri Lanka',
    description: [
      'Delivered presentations and shared insights on career development and professional growth.',
      'Engaged with students to provide guidance and mentorship on career pathways.'
    ],
    image: '/assets/public_speaker.png'
  },
  {
    title: 'Instructor',
    organization: 'HOPE – IEEE WIE Student Branch, Sabaragamuwa University of Sri Lanka',
    description: [
      'Conducted instructional sessions and workshops for students in the HOPE program.',
      'Provided technical guidance and support to help participants develop their skills.'
    ],
    image: '/assets/hope.jpg'
  },
  {
    title: 'Logistics Team Member',
    organization: 'IEEE Day – IEEE Student Branch, Sabaragamuwa University of Sri Lanka',
    description: [
      'Coordinated logistics and operational aspects for IEEE Day celebrations.',
      'Ensured smooth execution of event activities and supported team operations.'
    ],
    image: '/assets/logistic.jpg'
  }
];
