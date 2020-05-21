import React from "react"
import Layout from "../components/layout"
import { NewsHighlight } from "../components/news/newsHighlight"
import { useStaticQuery, graphql } from "gatsby"

const NewsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      headlineImage: file(relativePath: { eq: "images/jongens.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 950, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <NewsHighlight margin img={data.headlineImage.childImageSharp.fluid} />
    </Layout>
  )
}

export default NewsPage
