import React from "react"
import { graphql } from "gatsby"
import loadable from "@loadable/component"

import Layout from "../components/layout"
import SEO from "../components/seo/seo"

const NewsBlock = loadable(() => import("../components/news/newsBlock"))

const newsPost = ({ data }) => {
  return (
    <Layout>
      <SEO
        title={data.bericht.title}
        description={data.bericht.excerpt.childMarkdownRemark.excerpt}
      />
      <NewsBlock news={data.bericht} />
    </Layout>
  )
}

export default newsPost

export const newsItemquery = graphql`
  query newsBlockquery($slug: String!) {
    bericht: contentfulBericht(slug: { eq: $slug }) {
      title
      slug
      date
      banner {
        fluid(maxWidth: 950, quality: 90) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      id
      body {
        json
      }
      excerpt {
        childMarkdownRemark {
          excerpt(format: PLAIN, pruneLength: 120, truncate: true)
        }
      }
    }
  }
`
