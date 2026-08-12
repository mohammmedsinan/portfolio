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
    company: 'LocalEyesAi',
    role: 'Full-Stack Developer',
    period: 'Jun 2026 – Present',
    url: 'https://localeyes.ai',
    summary:
      'Sole backend engineer on a NestJS / TypeScript SaaS API for local SEO — Google Business Profile, ranking, billing, and AI audits.',
    metrics: [
      'Multi-tenant NestJS API',
      'Bidirectional GBP sync',
      'Stripe billing + entitlements',
    ],
    stack: [
      'NestJS',
      'TypeScript',
      'JWT',
      'Google Business Profile',
      'Stripe',
      'Docker',
      'DigitalOcean',
    ],
    highlights: [
      'Designed a multi-tenant NestJS API (organisation, business, location) with JWT, RBAC, and IDOR checks so tenants cannot access each other’s data.',
      'Built bidirectional Google Business Profile sync (OAuth, inbound/outbound, field-mask merge) plus profile-protection webhooks for Google-suggested edits.',
      'Implemented geo-grid rank tracking (multi-pin SERP, archives, weekly history) and distance-weighted competitor scoring with change alerts.',
      'Shipped a contract-driven AI audit pipeline: preprocessors → LLM passes → JSON Schema validation → N-factor group-weighted scores → weekly tasks (LLM output treated as untrusted).',
      'Integrated Stripe (checkout, signed webhooks, idempotent events) with per-location plans and entitlements (keywords, competitors, seats).',
      'Owned production jobs and deploy: cron for GBP/rank/billing/AI, Docker, and CI to DigitalOcean.',
    ],
    featured: true,
  },
  {
    slug: 'koora-kings',
    title: 'Koora Kings',
    company: 'Optimiza.ca',
    role: 'Full-Stack Developer',
    period: 'Jun 2021 – Present',
    url: 'https://koorakings.com',
    summary:
      'Built and scaled the Node.js / Sails.js backend for Koora Kings — prediction contests, salary-cap fantasy, and live sports scoring at production scale.',
    metrics: [
      '80K+ users',
      '1K+ contests',
      '2M+ predictions',
      '~180 REST APIs',
    ],
    stack: ['Node.js', 'Sails.js', 'MySQL', 'Docker'],
    highlights: [
      'Built and scaled the Node.js / Sails.js backend supporting 80K+ users, 1K+ contests, and 2M+ predictions via ~180 REST APIs.',
      'Implemented match prediction contests with join/invite flows, confidence/risk scoring, and SQL-backed leaderboards handling millions of prediction records.',
      'Developed an FPL-style salary-cap fantasy system: budget squads, transfers, free-transfer costing, auto-pick, and chips (wildcard, free hit, triple captain, bench boost).',
      'Integrated with external provider feeds to sync leagues, fixtures, live scores, and player stats into MySQL, powering live scoring for active contests.',
      'Delivered admin CMS APIs for sports feed ops, sponsored contests, banners, and targeted notifications at production scale.',
      'Containerized the service with Docker for staging/production deployments.',
    ],
    featured: true,
  },
  {
    slug: 'riyadh-season',
    title: 'Riyadh Season',
    company: 'Optimiza.ca',
    role: 'Front-End Developer',
    period: 'Jun 2021 – Present',
    summary:
      'Contract front-end work on a 30-page web platform fully integrated with an internally developed CMS — modernization, caching, and faster deploys.',
    metrics: [
      '30-page platform',
      '24% performance improvement',
      '34s deploy pipeline',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'CMS', 'DTO layer'],
    highlights: [
      'Managed API operations for a 30-page web platform fully integrated with an internally developed CMS.',
      'Re-engineered the legacy HTML, CSS, and JavaScript frontend API integration, modernizing endpoint communication and improving overall application performance by 24%.',
      'Implemented server-side caching and lazy loading to optimize API response handling, resource utilization, and page load performance.',
      'Optimized and minified production bundles, reducing deployment pipeline execution time to 34 seconds.',
      'Designed and implemented a DTO layer to standardize frontend–backend data contracts and simplify integration of future features.',
      'Authored comprehensive technical documentation covering the project architecture, API integrations, development workflows, and implementation details.',
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
