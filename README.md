# Chiro Itterbeek

Website of [Chiro Itterbeek](https://chiroitterbeek.be/), a youth movement in Dilbeek, Belgium.
Built with [Gatsby 5](https://www.gatsbyjs.com/) + React 19, content managed in
[Contentful](https://www.contentful.com/), hosted on [Netlify](https://www.netlify.com/).

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
GATSBY_TOKEN_MAPBOX=pk.xxxxxxxxxxxxxxxx
# optional: CONTENTFUL_HOST=preview.contentful.com (with a Preview API token)
```

On Netlify these variables are set in the site's environment settings instead.

## Commands

| Command         | What it does                                           |
| --------------- | ------------------------------------------------------ |
| `npm run dev`   | Development server with hot reload at `localhost:8000` |
| `npm run build` | Production build into `./public`                       |
| `npm run serve` | Serve the production build at `localhost:9000`         |
| `npm run clean` | Clear Gatsby's `.cache` and `public` folders           |

## Deployment

Netlify builds every push using `netlify.toml` (Node 24, `npm run build`, publish `public`).
Gatsby automatically uses `gatsby-adapter-netlify` there. Content changes in
Contentful should trigger a Netlify build hook.

The contact forms use Netlify Forms. Hidden copies of both forms are rendered into
the static HTML of `/contact/` (see `gatsby-ssr.js`) so Netlify detects them at deploy time.
