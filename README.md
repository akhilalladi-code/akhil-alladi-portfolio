# Akhil Alladi — Graphic Design Portfolio

A premium, editorial-style portfolio for **Akhil Alladi**, Senior Graphic Designer based in Hyderabad, India. The site presents design work, professional experience, services, resume and contact information through a responsive Next.js application.

**Live site:** https://akhilalladi-code.github.io/akhil-alladi-portfolio/  
**Repository:** https://github.com/akhilalladi-code/akhil-alladi-portfolio

---

## Portfolio features

- Responsive home, work archive, individual project pages, about, services, resume and contact pages.
- Project archive with category filters and individual case-study routes.
- Editorial visual direction, restrained motion and responsive navigation.
- Keyboard focus styles, skip link and reduced-motion support.
- Print-friendly resume with browser Print / Save as PDF.
- Page metadata, canonical URLs, Open Graph metadata, sitemap and robots.txt.
- Static export deployed through **GitHub Pages and GitHub Actions**.

## Technology

- Next.js 15, React 19 and TypeScript
- Tailwind CSS v4
- Framer Motion and Lucide React
- GitHub Actions and GitHub Pages

## Run locally

Requirements: Node.js 20.9+ and npm.

```bash
git clone https://github.com/akhilalladi-code/akhil-alladi-portfolio.git
cd akhil-alladi-portfolio
npm install
npm run dev
```

Open http://localhost:3000.

## Quality checks

```bash
npm run typecheck
npm run lint
npm run build
```

For the GitHub Pages base path:

```bash
GITHUB_PAGES=true npm run build
```

The static export is generated in `out/`.

## Project content

The project archive data is maintained in `src/data/projects.ts`. The current archive contains 12 entries. A separate repository, [akhil-alladi-netflix-portfolio](https://github.com/akhilalladi-code/akhil-alladi-netflix-portfolio), contains 24 project detail pages based on the supplied saved Behance profile capture.

**Important asset status:** The saved Behance capture supplied cover previews and project-page information, not the complete original image galleries or video files. Some previews in the separate 24-project archive still reference Behance-hosted image URLs. Do not describe those previews as locally hosted originals. Replace them with approved original files when available.

Behance source profile: https://www.behance.net/akhil_alladi

### Updating projects

1. Edit the relevant project entry in `src/data/projects.ts`.
2. Keep each project slug unique and URL-safe.
3. Match every image to the correct project and provide descriptive alt text.
4. Use locally hosted, approved assets where the original files are available.
5. Clearly identify concept work and avoid presenting placeholders as commissioned client work.
6. Verify project descriptions, role, credits and publication permissions before publishing.

## Repository structure

```text
src/
  app/                 Pages and project routes
  components/          Shared navigation and UI components
  data/projects.ts     Project archive data
public/
  images/              Local image assets
.github/workflows/     CI and GitHub Pages deployment
```

## GitHub Pages deployment

This project is designed for GitHub Pages; it does not require Vercel.

1. Open **Settings → Pages**.
2. Set the source to **GitHub Actions**.
3. Ensure the workflow has permission to publish Pages.
4. Push changes to `main` and monitor the Actions tab.

The configured project URL is:

https://akhilalladi-code.github.io/akhil-alladi-portfolio/

If the repository name or hosting path changes, update the Next.js base path, canonical metadata, sitemap and robots configuration.

## Accessibility and interaction

- Keyboard-accessible navigation and visible focus states.
- Reduced-motion support.
- Touch-friendly behavior on mobile devices.
- Motion and pointer effects are limited to suitable devices.

## Contact form

The contact form uses a `mailto:` workflow. It opens the visitor's email application; it is not a server-side form and does not store submissions.

## Pre-publication checklist

- [ ] Replace any remaining sample or placeholder images with approved original work.
- [ ] Verify project descriptions, client names, credits and permissions.
- [ ] Confirm resume dates, education and certifications.
- [ ] Test mobile navigation and all project routes.
- [ ] Test keyboard navigation and reduced-motion behavior.
- [ ] Run typecheck, lint and production build.
- [ ] Confirm the GitHub Pages workflow succeeds.

---

© Akhil Alladi. All rights reserved.
