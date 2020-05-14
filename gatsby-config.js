require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
}

if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  )
}

module.exports = {
  siteMetadata: {
    title: "Chiro Itterbeek",
    description: `Chiro Itterbeek is een jeugdbeweging gesitueerd in Dilbeek, rond Brussel. Chiro Itterbeek verwelkomt alle leeftijden tussen 6 en 18 jaar, om er samen een leuke zondagnamiddag van te maken!`,
    author: `@leunesmedia`,
    siteUrl: `https://chiro-itterbeek.be`,
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
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-emotion`,
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chiro Itterbeek`,
        short_name: `Chiro Itterbeek`,
        description: `Chiro Itterbeek is een jeugdbeweging gesitueerd in Dilbeek, rond Brussel. Chiro Itterbeek verwelkomt alle leeftijden tussen 6 en 18 jaar, om er samen een leuke zondagnamiddag van te maken!`,
        start_url: `/`,
        background_color: `#272728`,
        theme_color: `#E1143C`,
        display: `browser`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfig,
    },
    `gatsby-plugin-sitemap`,
  ],
}
