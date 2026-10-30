# Akhil Alladi — Creative Portfolio

A premium, editorial-style portfolio for **Akhil Alladi**, Senior Graphic Designer based in Hyderabad, India. The site presents selected design work, professional experience, services and contact information through a responsive Next.js application.

**Live website:** https://akhilalladi-code.github.io/akhil-alladi-portfolio/  
**Repository:** https://github.com/akhilalladi-code/akhil-alladi-portfolio

---

## Features

- **Responsive portfolio:** Home, Work, individual project case studies, About, Services, Resume and Contact pages.
- **Project archive:** Category filters, project metadata and individual case-study navigation.
- **Desktop interaction layer:** Custom pointer-following cursor, project hover labels and subtle hover interactions on fine-pointer devices.
- **Motion and visual details:** Hero reveal, route transitions, editorial scrolling marquee and page scroll progress indicator.
- **Touch-friendly experience:** Native cursor behavior on touch devices and a collapsible mobile navigation menu.
- **Accessibility preferences:** Keyboard focus styles, skip-to-content link and reduced-motion support.
- **Resume print layout:** Use the Resume page's **Print / Save as PDF** control to print or save a PDF from the browser.
- **SEO foundations:** Page metadata, canonical URL, Open Graph metadata, sitemap and robots.txt.
- **Static hosting:** Exported with Next.js and deployed to GitHub Pages through GitHub Actions.

## Technology

- Next.js 15 — App Router and static export
- React 19 and TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React
- GitHub Actions and GitHub Pages

## Getting started

### Requirements

- Node.js 20.9 or newer (Node.js 22 is used in the deployment workflow)
- npm

### Install and run

```bash
git clone https://github.com/akhilalladi-code/akhil-alladi-portfolio.git
cd akhil-alladi-portfolio
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

### Quality checks

Run these before submitting changes:

```bash
npm run typecheck
npm run lint
npm run build
```

To build using the same GitHub Pages base path as the deployment workflow:

```bash
GITHUB_PAGES=true npm run build
```

The static site is generated in the `out/` directory.

## Project structure

```text
src/
  app/
    about/              About page
    contact/            Contact form (mailto workflow)
    resume/             Experience and print-ready resume
    services/           Design services
    work/
      [slug]/           Individual project case studies
    globals.css         Global styles and responsive interaction styling
    layout.tsx          Root layout, metadata and shared site shell
    page.tsx            Homepage
  components/
    page-transition.tsx Route transition animation
    print-resume.tsx   Browser print / PDF action
    site-effects.tsx   Cursor, scroll progress and pointer effects
    site-header.tsx    Responsive navigation
  data/
    projects.ts         Portfolio project data

public/
  images/               Local image assets
.github/
  workflows/            CI and GitHub Pages deployment workflows
```

## Updating portfolio content

### Projects

The Work archive currently features **12 projects from Akhil’s Behance profile**. Project entries are maintained in `src/data/projects.ts`. Each project includes a slug, title, category, year, description, client/context, scope, Behance cover image, alternative text, featured flag and the original Behance project URL. Project thumbnails link to the original Behance project, and each internal project page also provides a link to view the full project on Behance.\n\nBehance profile: https://www.behance.net/akhil_alladi

When adding or editing a project:

1. Keep the linked Behance project and its cover image matched correctly; replace the cover with a locally hosted optimised image if you later have approved original files.
2. Write accurate project descriptions and identify your role clearly.
3. Mark independent concepts and unfinished entries as concepts/placeholders.
4. Add descriptive alternative text for meaningful images.
5. Check that each project slug is unique and URL-safe.

Do not present concept work or placeholder imagery as commissioned client work.

### Portrait and other images

The About page references:

`public/images/akhil-alladi-portrait.webp`

Replace this with an approved portrait at the same path, or update the image reference in the About page. Optimise images for the web and use descriptive filenames and alt text.

### Resume

The Resume page is designed to print cleanly. Open **Resume → Print / Save as PDF**, then choose **Save as PDF** in the browser's print dialog. Verify employment dates, certifications and education details before sharing the exported document.

## Interaction and accessibility notes

- The custom cursor is enabled only when the device reports a fine pointer and hover support.
- Touch devices retain their normal pointer/touch behavior.
- The cursor effect is disabled when the visitor requests reduced motion.
- Interactive elements retain keyboard focus indicators.
- The mobile menu exposes its expanded state to assistive technology.
- Motion is intentionally restrained; avoid adding effects that interfere with reading, navigation or performance.

## Contact form behavior

The Contact page validates the visitor's name, email and message, then opens a pre-addressed email in the visitor's default mail application using a `mailto:` link.

**Important:** This is not a server-side form. The website does not store, deliver or track submissions. A backend form service would be needed for direct submission without an email application.

## Deploying to GitHub Pages

The repository includes two GitHub Actions workflows:

- **Portfolio CI:** runs type checking, linting and the production build.
- **Deploy portfolio to GitHub Pages:** builds the static export and deploys the `out/` directory.

Deployment is triggered by pushes to the `main` branch and can also be started manually from the Actions tab.

### One-time GitHub Pages setup

1. Open the repository's **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Confirm the Pages deployment workflow has permission to publish.
4. Push changes to `main` and monitor the Actions tab for the build and deployment results.

The project uses the `/akhil-alladi-portfolio` base path when `GITHUB_PAGES=true`. Keep this setting consistent with the repository name unless you move the site to a custom domain or a different hosting target.

## SEO URLs

- Website: https://akhilalladi-code.github.io/akhil-alladi-portfolio/
- Sitemap: https://akhilalladi-code.github.io/akhil-alladi-portfolio/sitemap.xml
- Robots: https://akhilalladi-code.github.io/akhil-alladi-portfolio/robots.txt

If the hosting URL or domain changes, update the canonical and metadata base URL, sitemap and robots configuration accordingly.

## Pre-launch checklist

- [ ] Replace all sample and placeholder project images with approved original work.
- [ ] Verify project descriptions, client names, credits and publication permissions.
- [ ] Replace the About portrait with the final approved image.
- [ ] Verify resume dates, education and certification details.
- [ ] Test the mobile navigation and all page links on a real phone.
- [ ] Test the desktop cursor and project hover states with a mouse.
- [ ] Check the site with reduced motion enabled and keyboard-only navigation.
- [ ] Run typecheck, lint and production build successfully.
- [ ] Confirm the latest GitHub Pages deployment completed successfully.
- [ ] Review page titles, social sharing preview and search indexing after launch.

---

© Akhil Alladi. All rights reserved.
