# Akhil Alladi — Creative Portfolio

An editorial-style, responsive portfolio for graphic designer Akhil Alladi. Original visual direction inspired by image-led editorial portfolios, with generous whitespace, expressive typography and a restrained cobalt accent.

## Stack
- Next.js App Router, React and TypeScript
- Tailwind CSS v4
- Framer Motion and Lucide React

## Run locally
Requires Node.js 20.9+.

```bash
npm install
npm run dev
```

## Quality checks
```bash
npm run typecheck
npm run lint
npm run build
```

## Personalise before launch
Update the project content and imagery in `src/data/projects.ts`. Sample imagery and concept entries are placeholders, not verified client deliverables. Replace them with original, approved work. Add your approved CV at `public/Akhil-Alladi-Resume.pdf` and connect a secure form provider before relying on contact submissions. Update the canonical domain in `src/app/layout.tsx` and `src/app/sitemap.ts` when your final domain is known.

## Deploy
Import the repository into Vercel and use the default Next.js build settings. Configure environment variables only for server-side integrations; never expose private API keys in browser code.
