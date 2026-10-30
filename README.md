# Akhil Alladi — Creative Portfolio

An editorial-style, responsive portfolio for graphic designer Akhil Alladi, built with Next.js, React and TypeScript and published as a static site on GitHub Pages.

## Stack
- Next.js App Router with static export
- React and TypeScript
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
GITHUB_PAGES=true npm run build
```

## Deployment — GitHub Pages
Every push to `main` runs the GitHub Pages deployment workflow. Next.js exports the site to `out/`, and GitHub Actions publishes that folder.

The project site URL is:
https://akhilalladi-code.github.io/akhil-alladi-portfolio/

### One-time repository setup
In GitHub, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**. The workflow then deploys automatically on pushes to `main`.

## Contact form
The contact form prepares an email using the visitor's default email application; it does not send or store submissions on a server.

## SEO
Canonical metadata, sitemap and robots.txt use the GitHub Pages project-site URL. The sitemap is available at `/akhil-alladi-portfolio/sitemap.xml`.

## Content
Project content is maintained in `src/data/projects.ts`. Keep project descriptions, credits and image rights accurate before publishing.
