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
    slug: 'koora-kings',
    title: 'Koora Kings',
    company: 'Optimiza Digital INC',
    role: 'Senior Full Stack Developer',
    period: 'Dec 2023 – Present',
    summary:
      'Arabic-first fantasy football platform with prediction contests, salary-cap fantasy, and esports, serving 60K+ users across major global and regional leagues.',
    metrics: [
      '60,000+ registered users',
      '2,000,000+ predictions submitted',
      '3,000+ contests created',
      '100,000+ matches processed',
      '290+ REST API routes',
    ],
    stack: [
      'Node.js',
      'Sails.js',
      'MySQL',
      'Redis',
      'Firebase',
      'Docker',
      'PM2',
      'React',
      'Ant Design',
    ],
    highlights: [
      'Built salary-cap fantasy engine with transfer logic, chip activation, and automated scoring crons.',
      'Architected scoreboard caching (single-flight + stale-while-revalidate) eliminating MySQL connection-pool exhaustion during match-day peaks.',
      'Integrated GoalServe sports feeds for live scores across UEFA, World Cup, and Saudi Pro League competitions.',
      'Shipped FCM v1 notifications and sponsor monetization with bilingual admin campaigns.',
      'Delivered admin modules: sponsor management, push notifications, chat moderation, and CMS.',
    ],
    featured: true,
  },
  {
    slug: 'localeyes-ai',
    title: 'LocalEyes AI',
    company: 'Optimiza.dev',
    role: 'Senior Full Stack Developer',
    period: 'Apr 2025 – Present',
    url: 'https://dashboard.localeyes.ai',
    summary:
      'All-in-one B2B local SEO SaaS for multi-location businesses: AI-powered audits, Google Business Profile management, keyword rank tracking, competitor intelligence, review management, and subscription billing in a bilingual (EN/AR) workspace.',
    problem:
      'Local businesses and agencies struggle to understand local search performance, manage Google Business Profiles at scale, respond to reviews efficiently, monitor competitors, and convert offline customers into online reputation, all while operating within SaaS plan limits. Raw audit data often produces dozens of possible fixes with no clear priority, and GBP account practices create suspension risk that is hard to quantify without structured profiling.',
    overview: [
      'LocalEyes AI centralizes local SEO workflows, GBP management, competitor intelligence, and review acquisition into one AI-assisted dashboard scoped by organization, business, and location. Live at dashboard.localeyes.ai on DigitalOcean App Platform.',
      'I contributed across both the greenfield NestJS AI backend module and the production React dashboard, as primary frontend owner (~327 commits, ~105K LOC) and core backend implementer of the localeyes-ai audit pipeline (~74 files, 17 REST endpoints).',
    ],
    metrics: [
      '~327 commits · primary frontend contributor',
      '~105,000 lines added to dashboard',
      '800+ TypeScript/TSX source files',
      '89 routed pages · 14+ product modules',
      '74-file NestJS AI backend module',
      '17 REST API endpoints · 9 TypeORM entities',
      '1,000+ translation keys per locale (EN + AR RTL)',
      '1,200+ lines of backend documentation',
    ],
    stack: [
      'NestJS 11',
      'TypeScript',
      'React 19',
      'Vite 6',
      'TanStack Router',
      'TanStack Query',
      'TypeORM',
      'MySQL / PostgreSQL',
      'DeepSeek LLM',
      'Tailwind CSS 4',
      'Radix UI',
      'Stripe',
      'Google Business Profile API',
      'Google Maps API',
      'PostHog · Mixpanel · Clarity',
      'i18next (EN/AR RTL)',
      'PWA / Workbox',
      'DigitalOcean App Platform',
      'GCS · Firebase',
    ],
    highlights: [
      'Architected self-contained NestJS LocalEyesAiModule decoupled from legacy task systems, owning questionnaire → audit pipeline → actions → task pool → deliverables.',
      'Designed multi-stage AI audit pipeline with DeepSeek Analysis/Report passes, deterministic fallbacks, SHA-256 input hashing, and versioned JSON contract validation across 10+ specs.',
      'Built hidden task pool + weekly release algorithm (4 tasks per priority bucket) preventing client overwhelm while maintaining urgency for suspension-risk items.',
      'Bootstrapped React 19 dashboard from zero to v0.8.0 release candidate in ~14 months: auth, ranking, reviews, competitors, billing, audit reports, funnels, PWA.',
      'Shipped grid-based keyword rank tracking on Google Maps, competitor deep-dive analytics, AI review replies, QR review funnels, and Stripe subscription billing.',
      'Delivered full bilingual EN/AR RTL product with locale-aware routing, Tajawal font integration, and translation cache-busting on deploy.',
      'Enforced JWT + RBAC multi-tenant isolation with org/business/location scoping via trusted headers, never from request body ownership fields.',
    ],
    sections: [
      {
        title: 'AI Backend: Audit Pipeline',
        paragraphs: [
          'The localeyes-ai module operationalizes a documented AI contract system (v1.9 analysis/storage, v1.2–v1.3 questionnaire outputs) into a reliable, auditable, location-scoped pipeline at /api/v1/localeyes-ai.',
        ],
        items: [
          'Onboarding questionnaire with audit-readiness validation, quarterly refresh scheduler, and three derived JSON contracts (client disclosures, suspension-risk profile, supplemental content).',
          '11-stage audit cycle: input assembly → SHA-256 hash → Analysis Pass → contract validation → storage transform → action generation → task pool seeding → Report Pass → persistence and events.',
          'Action generation from score gaps, negative triggers, suspension risk flags, and rank gaps, with deduplication, priority scoring, role assignment, and volume caps (15 first audit / 10 subsequent).',
          'GBP description deliverables via AI with schema v1.1 output and mandatory requires_human_review flag.',
          'Dual-mode LLM execution: live DeepSeek with temperature 0, or deterministic local builders when API is unavailable, reliable in dev, CI, and degraded production.',
          '5 controllers (questionnaire, audit cycle, actions, tasks, deliverables), 3 schedulers (daily questionnaire refresh, weekly task release, monthly audit tick).',
        ],
      },
      {
        title: 'Dashboard: Product Modules',
        paragraphs: [
          'Production SaaS dashboard combining SEO tooling, review management, content publishing, and billing into a single authenticated workspace.',
        ],
        items: [
          'Authentication: Google OAuth, JWT silent refresh, protected routes, team invitations, and three-level tenancy (Organization → Business → Location) via Axios interceptors.',
          'Keyword ranking: Google Maps grid overlay for rank positions, track/untrack with plan limits, Quick Scan, pointer setup v2, CSV export, and pending-state UI during backend processing.',
          'Competitor intelligence: summary dashboards, deep-dive tabs (categories, reviews, photos, posts) with day-over-day comparison, map-based tracking, and competitor change alerts.',
          'Reviews: full inbox with filtering, AI-generated reply workflow, sentiment analysis, and Google Business API response management.',
          'Review funnels: QR code generation, configurable funnel pages (emoji/like-dislike ratings, WhatsApp/phone channels), scan analytics, and plan-based slot limits.',
          'Google Business Profile: profile editor, media library, posts scheduling, menu management with drag-and-drop, products/services CRUD, FAQ workflows, and audit report generation.',
          'Public audit reports: shareable via report codes, hero score, competitor comparison, rank grid map, and PDF export via @react-pdf/renderer.',
          'Billing: Stripe plans & pricing, usage dashboard vs limits, compliance resolution for over-limit accounts, and one-time payment add-ons.',
          'PWA: service worker, offline caching, install prompt; in-app notification center with backend-driven feed.',
        ],
      },
      {
        title: 'Architecture & Engineering',
        items: [
          'Backend: greenfield module with 9 TypeORM entities, composite indexes on locationId + status/priority, pipeline run metadata (stage, model, tokens, hashes, errors), and extension points for bulk schedulers and notification wiring.',
          'Frontend: feature-based folder structure, TanStack Query hooks per API operation, centralized HttpClient with typed handlers, Zustand auth state, and unified analytics facade (PostHog, Mixpanel, Clarity) with PII sanitization.',
          'Multi-tenant security: JwtAuthGuard + RbacGuard on all backend routes; frontend Axios interceptors attach x-organization-id, x-business-id, x-location-id on every scoped call.',
          'Reliability: dynamic import failure recovery after deploys, version-integrated locale JSON cache-busting, and proactive plan-limit UX to reduce support tickets.',
        ],
      },
      {
        title: 'Business Impact',
        items: [
          'Converts complex local SEO audit logic into actionable, prioritized weekly work for business owners and agencies.',
          'Surfaces GBP suspension risk early via structured profiling and risk-prioritized actions.',
          'Enables AI-assisted content deliverables with enforced human review, balancing automation and quality control.',
          'Supports audit-over-audit score tracking (totalScore, totalScoreDelta) for demonstrating improvement over time.',
          'Full bilingual product enabling MENA market entry with RTL-aware layouts across dialogs, forms, and navigation.',
        ],
      },
    ],
    challenges: [
      {
        title: 'Non-deterministic LLM output',
        problem:
          'AI models can fail, truncate, or return invalid JSON, breaking audit persistence in a transactional pipeline.',
        solution:
          'Dual-mode Analysis and Report passes with DeepSeek (temperature 0) or deterministic fallback builders. Failed cycles marked with stored errorMessage; parse failures degrade gracefully.',
      },
      {
        title: 'Action overload vs client capacity',
        problem:
          'A full factor analysis can produce many actions; clients cannot execute all at once.',
        solution:
          'Business-rule engine with thresholds, dedup by factor ID, volume caps (15/10), and hidden task pool with weekly release capping visible work at 4 tasks per priority bucket.',
      },
      {
        title: 'Multi-tenant data isolation',
        problem:
          'Organization → business → location hierarchy with strict RBAC; cross-tenant data leaks are unacceptable.',
        solution:
          'Every controller uses JWT + RBAC guards; all queries scoped by locationId from trusted headers. Request DTOs never trusted for ownership.',
      },
      {
        title: 'Grid-based rank visualization',
        problem:
          'Rendering dozens of rank pins with color coding, offsets, and pending states on Google Maps while keeping performance acceptable.',
        solution:
          'Dedicated map components with normalized grid utilities, GridRadiusSlider, keyword rank pending UI, and pointer setup API v2 for precise geolocation anchoring.',
      },
      {
        title: 'Bilingual RTL at scale',
        problem:
          'Arabic RTL breaks dialog layouts, form alignment, and navigation designed LTR-first.',
        solution:
          'Dedicated RTL layout fixes, Tajawal font, locale-aware /$lang/ routing, ~1,000+ keys per locale, and cache-busting tied to app version on deploy.',
      },
    ],
    featured: true,
  },
  {
    slug: 'events-platform',
    title: 'Large-Scale Events Platform',
    company: 'Confidential',
    role: 'Senior Full Stack Developer',
    period: 'Contract',
    summary:
      'High-traffic events platform designed for national-scale traffic surges during peak event windows: visitor discovery, registration, and real-time engagement.',
    metrics: [
      '100,000+ daily visits at peak',
      'Horizontal scaling architecture',
      'CDN-backed static delivery',
    ],
    stack: ['Node.js', 'REST APIs', 'MySQL', 'Caching', 'CDN', 'Cloud deployment'],
    highlights: [
      'Architected and delivered full-stack platform from API design through frontend and deployment.',
      'Ensured performance and availability under concurrent load via caching and load-tested infrastructure.',
      'Defined API contracts, database schemas, and scaling strategies for traffic surge events.',
    ],
    featured: true,
  },
  {
    slug: 'enterprise-dashboard',
    title: 'Enterprise Dashboard & Website',
    company: 'Private Company',
    role: 'Senior Full Stack Developer',
    period: 'Contract',
    summary:
      'Unified public website and internal operational dashboard replacing fragmented tooling for a private company.',
    metrics: [
      'Full-stack team delivery',
      'End-to-end product launch',
      'Centralized operational workflows',
    ],
    stack: ['React', 'Node.js', 'REST APIs', 'MySQL', 'CI/CD'],
    highlights: [
      'Owned technical planning, code reviews, and stakeholder-aligned delivery across the project.',
      'Built frontend, backend, database, and deployment workflows across the full stack.',
      'Established development conventions and release workflow for incremental shipping.',
    ],
    featured: false,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
