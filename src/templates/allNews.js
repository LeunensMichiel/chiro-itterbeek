import React from "react"
import Layout from "../components/layout"
import loadable from "@loadable/component"
import { graphql, Link } from "gatsby"

import SEO from "../components/seo/seo"
import { NewsWrapper } from "../components/news/newsStyles"
import { MediaNavitation } from "../components/media/mediaStyles"
import Chevron from "../assets/icons/chevron.svg"

const NewsHighlight = loadable(() => import("../components/news/newsHighlight"))
const NewsItem = loadable(() => import("../components/news/newsItem"))

const allNews = ({ pageContext, data }) => {
  const { currentPage, numNewsPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numNewsPages
  const prevPage =
    currentPage - 1 === 1 ? "/nieuws/" : `/nieuws/${currentPage - 1}`
  const nextPage = `/nieuws/${currentPage + 1}`

  return (
    <Layout>
      <SEO
        title="Nieuws"
        description="Bekijk hier de laatste updates van Chiro Itterbeek. Zowel van de de meisjes (Allegro) als de jongens (Jokonta)!"
      />
      {isFirst && <NewsHighlight margin />}
      <NewsWrapper isFirst>
        <MediaNavitation isFirst={isFirst} isLast={isLast}>
          <Link to={prevPage}>
            <Chevron />
          </Link>
          <div className="media__pagenumber">{currentPage}</div>
          <Link to={nextPage}>
            <Chevron />
          </Link>
        </MediaNavitation>
        <div className="news__grid">
          {data.news.edges.map(newsItem => (
            <NewsItem key={newsItem.node.id} news={newsItem.node} />
          ))}
        </div>
      </NewsWrapper>
    </Layout>
  )
}

export default allNews

export const newsListQuery = graphql`
  query allNewsQuery($skip: Int!, $limit: Int!) {
    news: allContentfulBericht(
      sort: { fields: date, order: DESC }
      skip: $skip
      limit: $limit
      filter: { title: { ne: "dummy" } }
    ) {
      edges {
        node {
          slug
          title
          gender
          id
          body {
            json
          }
          date
          banner {
            fluid(maxWidth: 950, quality: 90) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          excerpt {
            childMarkdownRemark {
              excerpt(format: PLAIN, pruneLength: 120, truncate: true)
            }
          }
        }
      }
    }
  }
`
