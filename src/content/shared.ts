export const profile = {
  name: 'Randy Rojo',
  fullName: 'Randy David Rojo Quintero',
  email: 'rojo.q.randy@gmail.com',
  phone: '+526182242331',
  phoneDisplay: '+52 618 224 2331',
  linkedin: 'https://www.linkedin.com/in/rojo-randy',
  github: 'https://github.com/RojoRandy',
  cv: {
    en: '/Randy_Rojo_Resume.pdf',
    es: '/Randy_Rojo_Curriculum.pdf',
  },
} as const

export const heroStack = [
  'TypeScript',
  'NestJS',
  'Vue 3',
  'PostgreSQL',
  'AWS',
  'Docker',
] as const

export const experienceMeta: Record<
  string,
  { clientUrl?: string; stack: string[] }
> = {
  alluxi: {
    clientUrl: 'https://login.e-days.com/',
    stack: ['Vue 3', 'TypeScript', 'Node.js', '.NET 10', 'FastEndpoints', 'SQL Server', 'Azure DevOps'],
  },
  raddatz: {
    stack: ['TypeScript', 'NestJS', 'NATS', 'Vue.js', 'React Native', 'PostgreSQL', 'Docker', 'GitHub Actions', 'Railway', 'S3', 'CloudFront'],
  },
  xid: {
    clientUrl: 'https://www2.portalagenteslomas.com.mx/booking/6299/hotels',
    stack: ['TypeScript', 'NestJS', 'TypeORM', 'Vue 3', 'PostgreSQL', 'MySQL', 'Docker', 'GCP Cloud Run', 'GCP Buckets'],
  },
  ion: {
    clientUrl: 'https://www.ion.com.mx/',
    stack: ['TypeScript', 'Node.js', 'Serverless', 'Lambda', 'API Gateway', 'Cognito', 'CloudWatch', 'GraphQL', 'Vue 3', 'SQL Server', 'Jest'],
  },
}

export const projectMeta: Record<string, { stack: string[] }> = {
  ride: {
    stack: ['NestJS', 'PostgreSQL', 'Redis', 'Socket.io', 'Stripe', 'Azure Container Apps'],
  },
  arada: {
    stack: ['NestJS', 'Prisma', 'PostgreSQL', 'React', 'Docker', 'Railway'],
  },
  lignum: {
    stack: ['NestJS', 'PostgreSQL', 'React', 'Astro', 'OpenAPI', 'Railway'],
  },
  solanus: {
    stack: ['NestJS', 'PostgreSQL', 'React', 'Vite', 'Playwright', 'Docker'],
  },
}

export const skillGroups: { id: string; items: string[] }[] = [
  {
    id: 'backend',
    items: ['JavaScript', 'TypeScript', 'Node.js', 'NestJS', 'Microservices', 'Multi-tenant SaaS', 'REST APIs', 'Docker', 'Socket.io', 'GitHub Actions', 'Git', 'Python'],
  },
  {
    id: 'frontend',
    items: ['Vue.js', 'React', 'React Native', 'Astro', 'Tailwind CSS', 'Radix UI', 'HTML', 'CSS'],
  },
  {
    id: 'databases',
    items: ['PostgreSQL', 'SQL Server', 'MySQL', 'Redis'],
  },
  {
    id: 'cloud',
    items: ['S3', 'CloudFront', 'Lambda', 'API Gateway', 'Amplify', 'Cognito', 'CloudWatch', 'Railway', 'Cloudflare', 'Azure Container Apps', 'Azure Blob Storage'],
  },
  {
    id: 'tools',
    items: ['TypeORM', 'MikroORM', 'Prisma', 'TanStack Query', 'GraphQL', 'OpenAPI', 'Puppeteer', 'Clerk', 'Stripe', 'Jest', 'Vitest', 'Playwright', '.NET unit testing'],
  },
  {
    id: 'ai',
    items: ['Claude Code', 'Codex'],
  },
]
