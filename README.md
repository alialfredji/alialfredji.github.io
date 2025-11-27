# Personal Website

A personal blog and portfolio website built with [Astro](https://astro.build/), TypeScript, and TailwindCSS.

## Setup

Install dependencies:

```bash
npm install
```

### Environment Variables

**For Local Development:**

Create a `.env` file in the root directory:

```bash
# Optional: Google Site Verification (for Google Search Console)
PUBLIC_GOOGLE_SITE_VERIFICATION=your-verification-code

# Optional: Google Analytics 4 (GA4) Measurement ID
PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

**For GitHub Pages Deployment:**

Set these as repository secrets in GitHub:

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add each secret:
   - **Name**: `PUBLIC_GOOGLE_SITE_VERIFICATION`
   - **Secret**: Your verification code
   - **Name**: `PUBLIC_GOOGLE_ANALYTICS_ID`
   - **Secret**: Your GA4 Measurement ID (e.g., `G-XXXXXXXXXX`)

The GitHub Actions workflow will automatically use these secrets during the build process.

**Getting your Google Site Verification code:**

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Sign in with your Google account
3. Click "Add Property" → Choose "URL prefix" → Enter your website URL (e.g., `https://alfredji.com/`)
4. Select "HTML tag" as the verification method
5. Copy the `content` value from the meta tag shown (the long string after `content="..."`)
6. Add it to your `.env` file as `PUBLIC_GOOGLE_SITE_VERIFICATION`
7. Deploy your site and click "Verify" in Google Search Console

After verification, you can:

- Submit your sitemap (`/sitemap-index.xml`)
- Monitor indexing status and search performance
- View search queries, clicks, impressions, and average position

**Getting your Google Analytics Measurement ID:**

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a property (or use an existing one)
3. Set up a Web data stream
4. Copy your Measurement ID (format: `G-XXXXXXXXXX`)
5. Add it to your `.env` file as `PUBLIC_GOOGLE_ANALYTICS_ID`

The Google Analytics integration automatically:

- Tracks page views on initial page load
- Tracks page views on client-side navigation (Astro transitions)
- Uses the latest GA4 gtag.js implementation

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
