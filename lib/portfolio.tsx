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
  { value: '8+', label: 'Projects' },
  { value: '25+', label: 'Technologies' },
  { value: '4+', label: 'IEEE volunteer roles' },
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
    { name: 'Next.js', logo: `${DEVICON}/nextjs/nextjs-original.svg`, isInvertLogo: true },
    { name: 'React.js', logo: `${DEVICON}/react/react-original.svg` },
    { name: 'Angular', logo: `${DEVICON}/angular/angular-original.svg` },
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
    { name: 'C#', logo: `${DEVICON}/csharp/csharp-original.svg` },
    { name: '.NET', logo: `${DEVICON}/dotnetcore/dotnetcore-original.svg` },
    { name: 'Hibernate', logo: `${DEVICON}/hibernate/hibernate-original.svg` },
    { name: 'Sequelize', logo: `${DEVICON}/sequelize/sequelize-original.svg` }
  ],
  database: [
    { name: 'MySQL', logo: `${DEVICON}/mysql/mysql-original.svg` },
    { name: 'PostgreSQL', logo: `${DEVICON}/postgresql/postgresql-original.svg` },
    { name: 'SQLite', logo: `${DEVICON}/sqlite/sqlite-original.svg` },
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
    { name: 'WebStorm', logo: `${DEVICON}/webstorm/webstorm-original.svg` },
    { name: 'Visual Studio', logo: `${DEVICON}/visualstudio/visualstudio-original.svg` },
    { name: 'Postman', logo: `${DEVICON}/postman/postman-original.svg` },
    { name: 'AutoCAD', logo: '/assets/autocad.svg' }
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
    image: '/assets/project_1.webp',
    repoUrl: 'https://github.com/pasindusmc909/ParkSwift'
  },
  {
    title: 'PerfectCV - AI-Powered CV Optimization System',
    badge: 'Group Project',
    description: 'AI-powered CV optimization platform used by 200+ users. Integrated Google Gemini AI for intelligent resume analysis, achieving 85% ATS score improvement for users. Reduced PDF generation time by 60% using async processing.',
    tags: ['Python', 'Flask', 'React', 'Google Gemini AI', 'MongoDB'],
    image: '/assets/project_2.webp',
    repoUrl: 'https://github.com/Dhivanujan/MiniProject-PerfectCV'
  },
  {
    title: 'Digital Store – Marketplace for Digital Products',
    description: 'A marketplace where creators sell ebooks, courses and downloadable files. Features Stripe checkout, a personal download library, verified-buyer reviews, a creator studio where sellers keep 90% of each sale, and admin moderation.',
    tags: ['Java 21', 'Spring Boot', 'PostgreSQL', 'JWT', 'Stripe API', 'Next.js', 'Tailwind CSS'],
    image: '/assets/project_digital_store.webp',
    repoUrl: 'https://github.com/sampathmenuka/Aivora'
  },
  {
    title: 'WILS – Crypto News & Market Tracker',
    description: 'A crypto dashboard with live prices for the top 100 coins via the CoinGecko API, sparklines, search, interactive price charts and a saved watchlist. Shared API caching and lazy-loaded pages halved the initial JavaScript download.',
    tags: ['React 18', 'React Router', 'Vite', 'Chart.js', 'CoinGecko API'],
    image: '/assets/project_wils.webp',
    repoUrl: 'https://github.com/sampathmenuka/WILS-Crypto-News'
  },
  {
    title: 'SimplePOS – Point of Sale System',
    description: 'A full-stack point of sale system for small shops: a fast register with scanner-style search and discounts, server-verified stock and pricing on every sale, and a back office for inventory, customers, sales history and reports.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'TanStack Query', 'shadcn/ui', 'Tailwind CSS', 'Recharts'],
    image: '/assets/project_simplepos.webp',
    repoUrl: 'https://github.com/sampathmenuka/simple-pos'
  },
  {
    title: 'Art Factory – Creative Studio Website',
    description: 'A responsive single-page site for an art studio, with an animated split-layout hero, scroll-reveal effects, an app-style mobile tab bar, an FAQ accordion and a validated contact form. Keyboard-accessible with reduced-motion support.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Lucide Icons'],
    image: '/assets/project_art_factory.webp',
    repoUrl: 'https://github.com/sampathmenuka/Art_Factory'
  },
  {
    title: 'X-NFT – Curated NFT Marketplace',
    description: 'A responsive, multi-page NFT marketplace with a dark neon design, a live auction countdown, a searchable and filterable gallery, and form validation with a password strength meter. Built mobile-first with swipeable card rows.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5'],
    image: '/assets/project_xnft.webp',
    repoUrl: 'https://github.com/sampathmenuka/X-NFT'
  },
  {
    title: 'COFFEE – Artisan Coffee Shop Website',
    badge: 'Demo',
    description: 'A responsive coffee shop site built without frameworks, with a searchable menu, a slide-in cart that survives reloads, light and dark themes, a live "Open now" status and a contact form that validates as you type.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Intersection Observer', 'localStorage'],
    image: '/assets/project_coffee.webp',
    repoUrl: 'https://github.com/sampathmenuka/coffee_shop'
  }
];

export interface Award {
  title: string;
  place: string;
  issuer: string;
  date: string;
  team: string;
  location: string;
  description: string;
  certificate: string;
}

export const awards: Award[] = [
  {
    title: 'International Hackathon on Emergency Medicine',
    place: '3rd Place',
    issuer: 'German Society for Emergency Medicine (DGINA)',
    date: 'Jun 2026',
    team: 'Team EMerge 2',
    location: 'ICEM 2026 · Congress Center Hamburg, Germany',
    description: 'Our team EMerge 2 secured 3rd place at the International Hackathon on Emergency Medicine, held during the 25th International Conference on Emergency Medicine (ICEM 2026) in Hamburg. An incredible experience of teamwork, innovation and solving real-world healthcare challenges, and I am grateful to my amazing teammates and everyone who made it possible.',
    certificate: '/assets/award_icem_2026.webp'
  }
];

export interface ExperienceItem {
  title: string;
  organization: string;
  description: string[];
  image: string;
  width: number;
  height: number;
}

export const experiences: ExperienceItem[] = [
  {
    title: 'Project Chair',
    organization: 'NEXORA 1.0 – IEEE WIE Student Branch, Sabaragamuwa University of Sri Lanka',
    description: [
      'Led and coordinated the NEXORA 1.0 project as Project Chair.',
      'Managed project planning, execution, and team coordination for successful event delivery.'
    ],
    image: '/assets/NEXORA.webp',
    width: 1000,
    height: 1000
  },
  {
    title: 'Public Speaker',
    organization: 'Career Compass – IEEE Student Branch, Sabaragamuwa University of Sri Lanka',
    description: [
      'Delivered presentations and shared insights on career development and professional growth.',
      'Engaged with students to provide guidance and mentorship on career pathways.'
    ],
    image: '/assets/public_speaker.webp',
    width: 699,
    height: 618
  },
  {
    title: 'Instructor',
    organization: 'HOPE – IEEE WIE Student Branch, Sabaragamuwa University of Sri Lanka',
    description: [
      'Conducted instructional sessions and workshops for students in the HOPE program.',
      'Provided technical guidance and support to help participants develop their skills.'
    ],
    image: '/assets/hope.webp',
    width: 1000,
    height: 750
  },
  {
    title: 'Logistics Team Member',
    organization: 'IEEE Day – IEEE Student Branch, Sabaragamuwa University of Sri Lanka',
    description: [
      'Coordinated logistics and operational aspects for IEEE Day celebrations.',
      'Ensured smooth execution of event activities and supported team operations.'
    ],
    image: '/assets/logistic.webp',
    width: 800,
    height: 610
  }
];
