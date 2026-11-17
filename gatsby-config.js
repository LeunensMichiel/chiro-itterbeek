// Load local secrets from a single `.env` file (Node 24 built-in, no dotenv).
// On Netlify there is no `.env`; the variables come from the site settings.
try {
  process.loadEnvFile(".env")
} catch {
  // no .env file present — rely on the environment
}

const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_HOST } =
  process.env

if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_ACCESS_TOKEN) {
  throw new Error(
    "CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN must be set (in .env locally, or in the Netlify environment)."
  )
}

const contentfulConfig = {
  spaceId: CONTENTFUL_SPACE_ID,
  accessToken: CONTENTFUL_ACCESS_TOKEN,
  ...(CONTENTFUL_HOST && { host: CONTENTFUL_HOST }),
}

const description = `Chiro Itterbeek is een jeugdbeweging gesitueerd in Dilbeek, rond Brussel. Chiro Itterbeek verwelkomt alle leeftijden tussen 6 en 18 jaar, om er samen een leuke zondagnamiddag van te maken!`

/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  // Netlify serves every page as `/path/` (it 301s `/path` to `/path/`), and
  // the nav links' active states rely on that, so make Gatsby match it.
  trailingSlash: "always",
  // Automatic JSX runtime via Emotion, so the `css` prop works everywhere.
  // Files using theme-ui's `sx` prop opt in with a
  // `/** @jsxImportSource theme-ui */` pragma (theme-ui builds on Emotion).
  jsxRuntime: "automatic",
  jsxImportSource: "@emotion/react",
  siteMetadata: {
    title: "Chiro Itterbeek",
    description,
    author: `@leunesmedia`,
    siteUrl: `https://chiroitterbeek.be`,
    keywords: [
      `chiro`,
      `itterbeek`,
      `sint-anna-pede`,
      `dilbeek`,
      `jeugd`,
      `jeugdbeweging`,
      `jokonta`,
      `allegro`,
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chiro Itterbeek`,
        short_name: `Chiro Itterbeek`,
        description,
        start_url: `/`,
        background_color: `#272728`,
        theme_color: `#E1143C`,
        display: `browser`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: contentfulConfig,
    },
    `gatsby-plugin-sitemap`,
  ],
}
