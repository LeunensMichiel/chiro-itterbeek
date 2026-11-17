# Chiro Itterbeek

Website of [Chiro Itterbeek](https://chiroitterbeek.be/), a youth movement in Dilbeek, Belgium.
Built with [Next.js](https://nextjs.org/) (App Router, static export), React 19,
TypeScript and [Tailwind CSS](https://tailwindcss.com/) v4. Content is managed in
[Contentful](https://www.contentful.com/), the site is hosted on [Netlify](https://www.netlify.com/).

## Requirements

- Node.js 24 (see `.nvmrc`)
- A Contentful space with the Chiro Itterbeek content model
- A Mapbox access token (for the map on the contact page)

## Setup

```sh
nvm use
npm install
```

Create a `.env` file in the project root (it is git-ignored):

```sh
CONTENTFUL_SPACE_ID=xxxxxxxxxxxx
CONTENTFUL_ACCESS_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   # Content Delivery API token
NEXT_PUBLIC_MAPBOX_TOKEN=pk.xxxxxxxxxxxxxxxx
# optional: CONTENTFUL_HOST=preview.contentful.com (with a Preview API token)
```

On Netlify these variables are set in the site's environment settings instead.

## Commands

| Command             | What it does                                           |
| ------------------- | ------------------------------------------------------ |
| `npm run dev`       | Development server with hot reload at `localhost:3000` |
| `npm run build`     | Static production build into `./out`                   |
| `npm run start`     | Serve the production build from `./out`                |
| `npm run lint`      | ESLint                                                 |
| `npm run typecheck` | TypeScript                                             |
| `npm run format`    | Prettier (also sorts Tailwind classes)                 |

## How it fits together

- **Content**: `src/lib/contentful.ts` holds the typed fetchers, one per content
  type. Pages fetch at build time, so every content change needs a new build:
  Contentful triggers a Netlify build hook.
- **Jokonta / Allegro**: visitors choose a chiro (boys or girls) on their first
  visit. The choice and the light/dark theme live as `data-chiro` and
  `data-theme` attributes on `<html>`, set by an inline script before first
  paint (`src/lib/chiro.ts`). The static HTML contains the content for both
  chiros, and the Tailwind variants `jokonta:`, `allegro:`, `unchosen:` and
  `dark:` show the right one, so there's no flash after load.
- **Styling**: design tokens (colors, breakpoints, font sizes) are in
  `src/app/globals.css`. Breakpoints are desktop-first: use `max-tablet:`,
  `max-mobile:` etc.
- **Images** from Contentful go through `next/image` with a custom loader that
  uses Contentful's Images API for resizing (`src/lib/contentful-image-loader.ts`).
- **Dates**: the calendar and leiding ages are rendered with the build date and
  switch to the visitor's actual date in the browser, so they stay correct
  between builds.

## Deployment

Netlify builds every push using `netlify.toml` (Node 24, `npm run build`, publish `out`).

The contact forms use Netlify Forms. The visible form depends on the chosen chiro,
so `public/__forms.html` declares both forms for Netlify to detect at deploy time.
Keep its field names in sync with `src/components/contact/contact-form.tsx`.
