import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo/seo"
import NewsBlock from "../components/news/newsBlock"

const NewsPost = ({ data }) => (
  <Layout>
    <NewsBlock news={data.bericht} />
  </Layout>
)

export default NewsPost

export const Head = ({ data }) => (
  <Seo
    title={data.bericht.title}
    description={data.bericht.excerpt?.childMarkdownRemark?.excerpt}
  />
)

export const newsItemquery = graphql`
  query newsBlockquery($slug: String!) {
    bericht: contentfulBericht(slug: { eq: $slug }, title: { ne: "dummy" }) {
      title
      slug
      date
      banner {
        gatsbyImageData(
          layout: FULL_WIDTH
          breakpoints: [238, 475, 950, 1425, 1900]
          quality: 90
          placeholder: BLURRED
        )
      }
      id
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            title
            file {
              url
            }
          }
        }
      }
      excerpt {
        childMarkdownRemark {
          excerpt(format: PLAIN, pruneLength: 120, truncate: true)
        }
      }
    }
  }
`
