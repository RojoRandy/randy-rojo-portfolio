export interface RoleText {
  id: string
  title: string
  company: string
  client?: string
  location: string
  period: string
  bullets: string[]
}

export interface EarlierRoleText {
  title: string
  company: string
  location: string
  period: string
  description: string
}

export interface ProjectText {
  id: string
  name: string
  tagline: string
  role: string
  context: string
  period: string
  bullets: string[]
}

export interface Content {
  nav: {
    about: string
    experience: string
    projects: string
    skills: string
    education: string
    contact: string
  }
  hero: {
    available: string
    role: string
    headline: string
    summary: string
    ctaProjects: string
    ctaCv: string
    ctaContact: string
    location: string
  }
  about: {
    eyebrow: string
    title: string
    paragraphs: string[]
    stats: { value: string; label: string }[]
  }
  experience: {
    eyebrow: string
    title: string
    present: string
    client: string
    roles: RoleText[]
    earlierTitle: string
    earlier: EarlierRoleText[]
  }
  projects: {
    eyebrow: string
    title: string
    intro: string
    items: ProjectText[]
  }
  skills: {
    eyebrow: string
    title: string
    groups: Record<string, string>
    softTitle: string
    soft: string[]
  }
  education: {
    eyebrow: string
    title: string
    degree: string
    school: string
    period: string
    coursesTitle: string
    courses: { name: string; hours: string }[]
    languagesTitle: string
    languages: { name: string; level: string }[]
  }
  contact: {
    eyebrow: string
    title: string
    text: string
    email: string
    phone: string
    linkedin: string
    github: string
    cv: string
  }
  footer: { rights: string; top: string }
  notFound: { title: string; text: string; back: string }
  ui: {
    toggleTheme: string
    toggleLanguage: string
    openMenu: string
    closeMenu: string
    skip: string
  }
}

export const en: Content = {
  nav: {
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Skills',
    education: 'Education',
    contact: 'Contact',
  },
  hero: {
    available: 'Senior Software Engineer',
    role: 'Full-Stack · Cloud · Architecture',
    headline: 'I turn monoliths into scalable systems.',
    summary:
      '9+ years designing and shipping microservices and serverless platforms on AWS, GCP and Azure. TypeScript, NestJS, Vue and PostgreSQL, built on SOLID principles and automated CI/CD.',
    ctaProjects: 'View projects',
    ctaCv: 'Download CV',
    ctaContact: 'Get in touch',
    location: 'Mexico · Remote',
  },
  about: {
    eyebrow: 'About',
    title: 'Engineering that scales with the business',
    paragraphs: [
      'I am a Senior Full-Stack Software Engineer with 9+ years of experience designing and orchestrating the architectural transformation of monolithic systems into microservices and serverless (AWS) environments.',
      'I work across the stack in JavaScript/TypeScript, Node.js/NestJS and Vue.js, with solid expertise in relational database design (PostgreSQL / SQL Server), DevOps, Docker and CI/CD automation. I focus on applying SOLID principles and delivering scalable, maintainable solutions.',
      'I also build my own products end to end: a ride-hailing backend, a multi-tenant SaaS for travel agencies, and management tools for a family business and a non-profit kitchen.',
    ],
    stats: [
      { value: '9+', label: 'Years of experience' },
      { value: '3', label: 'Clouds: AWS, GCP, Azure' },
      { value: '4', label: 'Independent products' },
      { value: 'EN · ES', label: 'B2 English, native Spanish' },
    ],
  },
  experience: {
    eyebrow: 'Experience',
    title: 'Where I have worked',
    present: 'Present',
    client: 'Client',
    roles: [
      {
        id: 'alluxi',
        title: 'Senior Software Engineer',
        company: 'Alluxi S.A. de C.V.',
        client: 'E-days (UK)',
        location: 'Remote, Mexico',
        period: 'Dec 2025 – Present',
        bullets: [
          'Developed new modules for an absence management and core HR platform.',
          'Built the employee assignment distribution module for tenant operations.',
          'Implemented a document upload portal for tenant file management.',
          'Maintained a workflow builder system for process automation.',
          'Added unit tests for backend endpoints.',
        ],
      },
      {
        id: 'raddatz',
        title: 'Senior Software Engineer (Freelance)',
        company: 'RADDATZ Productos Maderables',
        location: 'Remote, Mexico',
        period: 'Feb 2025 – Sep 2025',
        bullets: [
          "Led end-to-end development of the company's first software suite, from design to production.",
          'Designed a microservices architecture with NestJS and NATS (Inventory, Payroll, Purchasing).',
          'Built 2 mobile apps (React Native + Expo Router) for production and raw material tracking.',
          'Implemented CI/CD pipelines with Docker, Railway, GitHub Actions and AWS S3 / CloudFront.',
          'Designed a scalable multi-schema PostgreSQL architecture.',
        ],
      },
      {
        id: 'xid',
        title: 'Senior Software Engineer',
        company: 'XID - Digital Services, S.A. de C.V.',
        client: 'Grupo Lomas',
        location: 'Remote, Mexico',
        period: 'Jun 2023 – Jan 2025',
        bullets: [
          'Migrated a PHP monolith to microservices (NestJS) and microfrontends (Vue 3).',
          'Redesigned the database architecture and improved backend performance.',
          'Integrated PayPal and a payment system into the booking flow.',
          'Deployed services with Docker on GCP Cloud Run.',
          'Led requirements analysis and knowledge transfer to the client team.',
        ],
      },
      {
        id: 'ion',
        title: 'Mid Software Engineer',
        company: 'ION Financiera S.A.P.I. de C.V. SOFOM, E.R.',
        location: 'Remote, Mexico',
        period: 'Oct 2021 – Jun 2023',
        bullets: [
          'Developed serverless APIs (AWS Lambda + API Gateway) for credit processes, with CloudWatch logging.',
          'Wrote unit tests for Lambda functions with Jest.',
          'Implemented credit simulation features and business rules for mortgage credit approval workflows.',
          'Led the migration to a new Core system, ensuring data integrity.',
          'Maintained and improved the Vue 3 frontend for client and payment management.',
        ],
      },
    ],
    earlierTitle: 'Earlier experience',
    earlier: [
      {
        title: 'Junior Software Engineer',
        company: 'Guadiana Tecnología',
        location: 'Durango',
        period: 'Nov 2019 – Sep 2021',
        description:
          'React UI for a permission system, OCR fiscal validation, and a legacy access control refactor for First Majestic mining sites (C#, ASP.NET, React, SQL Server).',
      },
      {
        title: 'Junior Software Engineer',
        company: 'SC Computación',
        location: 'Durango',
        period: 'Jan 2017 – Nov 2019',
        description:
          '.NET enterprise systems and SQL Server optimization for CFDI, accounting and inventory.',
      },
    ],
  },
  projects: {
    eyebrow: 'Projects',
    title: 'Independent projects',
    intro:
      'Products I design and build end to end, from data model and APIs to deployment.',
    items: [
      {
        id: 'ride',
        name: 'Ride',
        tagline: 'Real-time ride-hailing platform backend',
        role: 'Backend Lead',
        context: 'Freelance, small team',
        period: 'Apr 2026 – Present',
        bullets: [
          'Led the backend: trip lifecycle, driver matching and live GPS tracking through a Socket.io gateway scaled with Redis GEO.',
          'Designed a driver wallet ledger with ACID trip settlement on PostgreSQL; integrated Stripe, Clerk auth and push notifications.',
        ],
      },
      {
        id: 'arada',
        name: 'Arada',
        tagline: 'Multi-tenant SaaS for travel agencies',
        role: 'Creator & Full-Stack Developer',
        context: 'Own product',
        period: 'Aug 2026 – Present',
        bullets: [
          'Enforced fail-closed tenant isolation with a Prisma Client extension and composite foreign keys.',
          'Designed tiered subscription plans with feature flags; deployed 4 services via infrastructure as code.',
        ],
      },
      {
        id: 'lignum',
        name: 'Lignum Vitae',
        tagline: 'Quoting, inventory and sales platform',
        role: 'Creator & Full-Stack Developer',
        context: 'Family-owned business',
        period: 'Sep 2026 – Present',
        bullets: [
          'Architected a pnpm monorepo (NestJS API, React admin, Astro landing) sharing a typed OpenAPI client.',
          'Designed a pure cost and pricing engine shared by the API and admin; deployed via infrastructure as code.',
        ],
      },
      {
        id: 'solanus',
        name: 'Comedor Solanus',
        tagline: 'Community kitchen management system',
        role: 'Creator & Full-Stack Developer',
        context: 'Non-profit, Amigos de los Capuchinos ABP',
        period: 'Sep 2026 – Present',
        bullets: [
          'Built the daily operations platform (NestJS API + React/Vite web app): beneficiaries, attendance, inventory and donors.',
          'Built role-based permissions, dashboards and monthly PDF reports; covered critical flows with Jest and Playwright.',
        ],
      },
    ],
  },
  skills: {
    eyebrow: 'Skills',
    title: 'Tools I work with',
    groups: {
      backend: 'Backend',
      frontend: 'Frontend',
      databases: 'Databases',
      cloud: 'Cloud',
      tools: 'Libraries & testing',
      ai: 'AI-assisted development',
    },
    softTitle: 'Soft skills',
    soft: [
      'Leadership',
      'Communication',
      'Mentoring',
      'Proactive',
      'Problem-solving',
      'Collaborative',
    ],
  },
  education: {
    eyebrow: 'Education',
    title: 'Education & learning',
    degree: "Bachelor's in Computer Systems Engineering",
    school: 'Instituto Tecnológico de Durango',
    period: 'Aug 2014 – Jun 2019',
    coursesTitle: 'Courses',
    courses: [
      { name: 'React Native Expo: Native Applications for iOS and Android', hours: '25.5 hrs' },
      { name: 'NestJS + Microservices: Scalable and Modular Applications', hours: '21 hrs' },
      { name: 'Docker: Practical Guide for Developers', hours: '14 hrs' },
      { name: 'Vue.js: Zero to Expert', hours: '37.5 hrs' },
      { name: 'TypeScript: Comprehensive Guide', hours: '8.5 hrs' },
      { name: 'SOLID Principles & Clean Code', hours: '6.5 hrs' },
      { name: 'React.js', hours: '44.5 hrs' },
      { name: 'Node.js: Zero to Expert', hours: '28.5 hrs' },
    ],
    languagesTitle: 'Languages',
    languages: [
      { name: 'Spanish', level: 'Native' },
      { name: 'English', level: 'B2 Upper-Intermediate' },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: "Let's build something solid.",
    text: 'Open to senior full-stack and architecture opportunities. The fastest way to reach me is by email.',
    email: 'Email me',
    phone: 'Call',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    cv: 'Download CV',
  },
  footer: { rights: 'All rights reserved.', top: 'Back to top' },
  notFound: {
    title: 'Page not found',
    text: 'The page you are looking for does not exist or has moved.',
    back: 'Back to home',
  },
  ui: {
    toggleTheme: 'Toggle theme',
    toggleLanguage: 'Cambiar a español',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    skip: 'Skip to content',
  },
}
