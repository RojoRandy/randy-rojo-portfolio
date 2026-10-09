# Randy Rojo | Portfolio

Personal portfolio of Randy Rojo, Senior Full-Stack Software Engineer. Live at https://randy-rojo-portfolio.vercel.app/

## Stack
React 19, Vite, TypeScript, Tailwind CSS v4, React Router, lucide-react / react-icons.

## Features
- Light and dark themes (follows the system preference, persisted)
- English / Spanish (detected from the browser, persisted)
- Sections: hero, about, experience, independent projects, skills, education & courses, contact

## Content
All copy lives in `src/content/`:
- `en.ts` / `es.ts`: translated text (the `Content` interface in `en.ts` keeps both in sync)
- `shared.ts`: language-independent data (links, tech stacks, skill groups)

CV PDFs are served from `public/` (`Randy_Rojo_Resume.pdf` for EN, `Randy_Rojo_Curriculum.pdf` for ES). Replace them to update the downloads.

## Scripts
```bash
pnpm install
pnpm dev      # local dev server
pnpm lint
pnpm build    # type-check + production build
pnpm preview
```

## Deployment
Deployed on Vercel. `vercel.json` rewrites all routes to `index.html` for the SPA.
