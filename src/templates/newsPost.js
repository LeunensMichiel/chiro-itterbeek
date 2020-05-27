import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import { NewsBlock } from "../components"

const newsPost = ({ data }) => {
  return (
    <Layout>
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
    }
  }
`
