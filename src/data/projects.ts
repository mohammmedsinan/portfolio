export interface ProjectSection {
  title: string;
  paragraphs?: string[];
  items?: string[];
}

export interface ProjectChallenge {
  title: string;
  problem: string;
  solution: string;
}

export interface Project {
  slug: string;
  title: string;
  company: string;
  role: string;
  period: string;
  summary: string;
  url?: string;
  problem?: string;
  overview?: string[];
  metrics: string[];
  stack: string[];
  highlights: string[];
  sections?: ProjectSection[];
  challenges?: ProjectChallenge[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: 'localeyes-ai',
    title: 'LocalEyes AI',
    company: 'LocalEyes AI',
    role: 'Full-Stack Developer / Lead Backend Engineer',
    period: 'Jun 2026 – Present',
    url: 'https://localeyes.ai',
    summary:
      'Architected and developed a multi-tenant NestJS SaaS backend for Google Business Profile management, local rank tracking, billing, and AI-powered audits.',
    metrics: [
      'Multi-tenant NestJS API',
      'Bidirectional Google profile sync',
      'Reliable BullMQ workers',
    ],
    stack: [
      'NestJS',
      'TypeScript',
      'MySQL',
      'BullMQ',
      'Valkey',
      'Stripe',
      'Google APIs',
      'Docker',
      'DigitalOcean',
    ],
    highlights: [
      'Architected and developed a multi-tenant NestJS SaaS backend with JWT authentication, RBAC, and IDOR protection, enforcing strict tenant-level data isolation.',
      'Engineered bidirectional Google Business Profile synchronization using OAuth 2.0, field-mask merging, inbound/outbound synchronization, and webhooks for Google-suggested profile changes.',
      'Built reliable BullMQ background workers for profile synchronization, OAuth processing, billing operations, AI workflows, and other asynchronous jobs.',
      'Developed a geo-grid local rank tracking system with multi-point SERP scans, historical rankings, weekly tracking, competitor scoring, and ranking-change alerts.',
      'Implemented an AI-powered GBP audit pipeline using preprocessing, LLM processing, JSON Schema validation, scoring, weighted analysis, and scheduled re-audits.',
      'Integrated Stripe subscription billing with Checkout, signed webhooks, idempotent event handling, coupons, subscription management, and per-location plans.',
      'Owned production background jobs, Docker deployment workflows, CI/CD pipelines, and application deployments to DigitalOcean.',
      'Improved backend performance and reliability through caching, asynchronous processing, and architecture optimization.',
    ],
    featured: true,
  },
  {
    slug: 'koora-kings',
    title: 'Koora Kings',
    company: 'Optimiza',
    role: 'Full-Stack Developer',
    period: 'Jun 2021 – Present',
    url: 'https://koorakings.com',
    summary:
      'Built and scaled the Node.js / Sails.js backend for Koora Kings — prediction contests, salary-cap fantasy, and live sports scoring at production scale.',
    metrics: [
      '2M+ predictions',
      '~180 REST APIs',
      'Millions of prediction records',
    ],
    stack: ['Node.js', 'Sails.js', 'MySQL', 'Firebase', 'Docker', 'REST APIs'],
    highlights: [
      'Built and maintained the Sails.js backend powering KooraKings sports contests and 2M+ user predictions across approximately 180 REST endpoints.',
      'Designed prediction-processing workflows supporting join/invite functionality, confidence and risk scoring, and SQL-backed leaderboards handling millions of prediction records.',
      'Developed an FPL-style salary-cap fantasy system: budget squads, transfers, free-transfer costing, auto-pick, and chips (wildcard, free hit, triple captain, bench boost).',
      'Integrated external football data providers to synchronize leagues, fixtures, live scores, teams, and player statistics into MySQL.',
      'Developed CMS and administrative APIs supporting sports operations, sponsored contests, banners, user targeting, and push notifications.',
      'Implemented backend functionality for contest management, prediction validation, ranking calculations, and user participation workflows.',
      'Containerized the backend using Docker for consistent staging and production deployments.',
    ],
    featured: true,
  },
  {
    slug: 'riyadh-season',
    title: 'Riyadh Season',
    company: 'Optimiza',
    role: 'Front-End Developer',
    period: 'Jun 2021 – Present',
    summary:
      'Developed and maintained a 30+ page production web platform integrated with a CMS, modernizing its architecture, performance, and deployment workflow.',
    metrics: [
      '30+ page platform',
      '24% performance improvement',
      '34s deploy pipeline',
    ],
    stack: ['React', 'JavaScript', 'HTML', 'CSS', 'REST APIs', 'CMS', 'Webpack'],
    highlights: [
      'Developed and maintained a 30+ page production web platform fully integrated with a content management system.',
      'Re-engineered legacy frontend code and API integrations, improving overall application performance by approximately 24%.',
      'Implemented server-side caching and lazy loading strategies to optimize API response handling, resource utilization, and frontend performance.',
      'Optimized and minified production bundles, reducing deployment pipeline execution time to approximately 34 seconds.',
      'Designed and implemented a DTO layer to standardize frontend-backend data contracts and simplify future feature integrations.',
      'Improved frontend maintainability by modernizing routing, state handling, API communication, and reusable application components.',
      'Authored comprehensive technical documentation covering system architecture, API integrations, deployment workflows, and implementation details.',
    ],
    featured: true,
  },
  {
    slug: 'dashboard',
    title: 'Dashboard Project',
    company: 'Personal',
    role: 'Full-Stack Developer',
    period: 'Project',
    summary:
      'Reusable React dashboard architecture with dynamic routing, Redux Toolkit, Ant Design, and Chart.js — a scalable base for production-grade apps.',
    metrics: [
      'Dynamic routing + Redux',
      'Reusable architecture',
      'Custom Webpack / Babel',
    ],
    stack: [
      'React',
      'Less',
      'Redux',
      'Ant Design',
      'Chart.js',
      'React Router',
      'Axios',
      'Webpack',
      'Babel',
    ],
    highlights: [
      'Designed and implemented a dynamic routing and Redux state management system in React, eliminating the need for manually defining routes or models.',
      'Built a scalable project architecture that serves as a reusable base for large, production-grade React applications.',
      'Integrated Redux Toolkit, React Router v6, and Redux Thunk to streamline state flow and route handling, improving maintainability and developer experience.',
      'Implemented modular, reusable components with Ant Design and Chart.js for creating interactive dashboards and data visualizations.',
      'Configured a custom Webpack and Babel setup for optimized builds, efficient code splitting, and smooth development workflow.',
    ],
    featured: false,
  },
  {
    slug: 'marham',
    title: 'Marham',
    company: 'Marham',
    role: '—',
    period: '—',
    url: 'https://marham.care',
    summary: 'Live product at marham.care.',
    metrics: [],
    stack: [],
    highlights: [],
    featured: false,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
