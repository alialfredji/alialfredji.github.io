# Personal Website

A personal blog and portfolio website built with [Astro](https://astro.build/), TypeScript, and TailwindCSS.

## Setup

Install dependencies:

```bash
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:4321`.

## Build

Build the production site:

```bash
npm run build
```

This command:
- Runs TypeScript type checking (`astro check`)
- Builds the site to `./dist/`
- Generates search index with Pagefind
- Copies Pagefind assets to `public/`

Preview the production build locally:

```bash
npm run preview
```

## Code Quality

Format code with Prettier:

```bash
npm run format
```

Check formatting without making changes:

```bash
npm run format:check
```

Lint code with ESLint:

```bash
npm run lint
```

Auto-fix linting issues:

```bash
npm run lint:fix
```

## TypeScript

Generate TypeScript types for Astro modules:

```bash
npm run sync
```

## Project Structure

- `src/pages/` - Routes and pages
- `src/data/blog/` - Blog posts (Markdown files)
- `src/components/` - Reusable components
- `src/layouts/` - Page layouts
- `src/config.ts` - Site configuration
- `public/` - Static assets

## Tech Stack

- **Framework**: Astro 5.x
- **Language**: TypeScript
- **Styling**: TailwindCSS 4.x
- **Search**: Pagefind
- **Deployment**: GitHub Pages (via GitHub Actions)

