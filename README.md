# brady.ai

Personal website for Brady Hunt — Director of AI at [Artisight](https://www.artisight.com), building computer vision and ML systems for the leading smart hospital platform in the United States.

The site showcases research publications, career news and milestones, and professional background spanning work at Artisight, Dartmouth, and Rice University.

**Live at [brady.ai](https://brady.ai)**

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router, static export)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) with dark mode
- [next-themes](https://github.com/pacocoursey/next-themes) for theme persistence
- Custom BibTeX parser for publications
- Deployed on [Netlify](https://www.netlify.com/)

## Local development

```bash
# Install dependencies
npm install

# Start dev server with hot reload
npm run dev
# → http://localhost:3000

# Build static export (same as Netlify production build)
npm run build

# Preview the production build locally
npx serve out
```

## Project structure

```
src/
├── app/                    # Next.js pages (about, news, publications)
├── components/             # React components (Navbar, ProfileHero, PublicationCard, etc.)
├── content/
│   ├── bibliography/       # papers.bib (BibTeX publications)
│   └── news/               # Markdown news items with frontmatter
├── lib/                    # Content loaders (BibTeX parser, news, site config)
└── types/                  # TypeScript interfaces

public/
├── images/                 # Profile photo, publication thumbnails
├── pdf/                    # PDF documents
└── favicon.svg             # Site favicon
```

## Adding content

**News items:** Create a new `.md` file in `src/content/news/` with date frontmatter:

```markdown
---
date: 2026-04-01 12:00:00-0000
inline: true
---

Your news content here with <a href="https://example.com">links</a>.
```

**Publications:** Add BibTeX entries to `src/content/bibliography/papers.bib`. Set `selected={true}` to feature on the home page. Add `thumbnail={/images/publications/filename.png}` for an image.

## Deployment

Netlify builds automatically on push to `master`. Configuration is in `netlify.toml`:

- Build command: `npm run build`
- Publish directory: `out`
- Node version: 20
