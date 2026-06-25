# Mohammed Sinan — Portfolio

A clean, minimalist personal portfolio built with [Astro](https://astro.build), Tailwind CSS, and MDX. Includes a git-based blog — add MDX files to publish posts.

## Quick start

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # preview production build
```

## Project structure

```
src/
├── content/blog/     # MDX blog posts (publish here)
├── data/             # Site config and project entries
├── layouts/          # BaseLayout, BlogLayout
├── components/       # Header, Footer, cards, etc.
├── pages/            # Routes
└── utils/blog.ts     # Post helpers (draft filter, reading time)
```

## Publishing a blog post

1. Create a new file in `src/content/blog/`:

```mdx
---
title: Your Post Title
description: A one-line summary for SEO and the blog index.
pubDate: 2026-03-22
tags: ['architecture', 'nodejs']
draft: false
---

Your content here. Supports **markdown**, code blocks, and headings.
```

2. Preview locally:

```bash
npm run dev
```

3. Commit and push — your host (Vercel, Netlify, DigitalOcean) rebuilds automatically.

### Draft posts

Set `draft: true` to hide a post from production builds. Drafts remain visible in `npm run dev` for previewing.

### Updating a post

Edit the MDX file. Optionally set `updatedDate: 2026-03-22` in frontmatter.

## Customization

| File | What to change |
|---|---|
| `src/data/site.ts` | Name, email, GitHub, LinkedIn, site URL |
| `astro.config.mjs` | `site` URL (used for sitemap, RSS, OG tags) |
| `src/data/projects.ts` | Project case studies |

## Deployment

Static site — deploy `dist/` to any static host:

- **Vercel / Netlify** — connect repo, build command `npm run build`, output `dist`
- **DigitalOcean App Platform** — static site, same build settings

Update `site` in `astro.config.mjs` and `SITE.url` in `src/data/site.ts` to your production domain before deploying.

## Features

- Minimalist typography-first design with light/dark mode
- MDX blog with tags, reading time, RSS (`/rss.xml`), and sitemap
- Project case studies from structured data
- Open Graph and Twitter meta tags
- Draft post support

## Tech stack

Astro 7 · Tailwind CSS 4 · MDX · TypeScript · @astrojs/sitemap · @astrojs/rss
