import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"

import Seo from "../components/seo/seo"
import { NewsWrapper } from "../components/news/newsStyles"
import { MediaNavitation } from "../components/media/mediaStyles"
import Chevron from "../assets/icons/chevron.svg"

import NewsHighlight from "../components/news/newsHighlight"
import NewsItem from "../components/news/newsItem"

const allNews = ({ pageContext, data }) => {
  const { currentPage, numNewsPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numNewsPages
  const prevPage =
    currentPage - 1 === 1 ? "/nieuws/" : `/nieuws/${currentPage - 1}`
  const nextPage = `/nieuws/${currentPage + 1}`

  return (
    <Layout>
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

export const Head = () => (
  <Seo
    title="Nieuws"
    description="Bekijk hier de laatste updates van Chiro Itterbeek. Zowel van de de meisjes (Allegro) als de jongens (Jokonta)!"
  />
)

export const newsListQuery = graphql`
  query allNewsQuery($skip: Int!, $limit: Int!) {
    news: allContentfulBericht(
      sort: { date: DESC }
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
          date
          banner {
            gatsbyImageData(
              layout: FULL_WIDTH
              breakpoints: [238, 475, 950, 1425, 1900]
              quality: 90
              placeholder: BLURRED
            )
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
