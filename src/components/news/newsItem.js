import React from "react"
import { NewsItemWrapper } from "./newsStyles"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Chevron from "../../assets/icons/chevron.svg"

export const NewsItem = ({ news }) => {
  const data = useStaticQuery(graphql`
    query {
      headlineImage: file(relativePath: { eq: "images/itterbeek.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  if (!news.banner) {
    news.banner = data.headlineImage.childImageSharp
  }
  return (
    <NewsItemWrapper
      gender={news.gender === "Jokonta" ? 1 : news.gender === "Allegro" ? 2 : 3}
    >
      <div className="news__item__header">
        <Img className="news__item__image" fluid={news.banner.fluid} />
        <div className="news__item__type">
          {news.gender === "Itterbeek" ? "Algemeen" : news.gender}
        </div>
      </div>
      <div className="news__item__body">
        <small>
          {new Date(news.date).toLocaleDateString("nl-BE", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </small>
        <h3>{news.title}</h3>
        <p>{news.excerpt.childMarkdownRemark.excerpt}</p>
        <Link to={`/nieuws/${news.slug}`}>
          <span>Lees meer</span>
          <Chevron />
        </Link>
      </div>
    </NewsItemWrapper>
  )
}
