import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { NewsItemWrapper } from "./newsStyles"
import Chevron from "../../assets/icons/chevron.svg"

const NewsItem = ({ news }) => {
  const data = useStaticQuery(graphql`
    query {
      headlineImage: file(relativePath: { eq: "images/itterbeek.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            breakpoints: [225, 450, 900, 1350, 1800]
            quality: 90
            placeholder: BLURRED
          )
        }
      }
    }
  `)
  const banner = getImage(news.banner) ?? getImage(data.headlineImage)

  return (
    <NewsItemWrapper
      gender={news.gender === "Jokonta" ? 1 : news.gender === "Allegro" ? 2 : 3}
    >
      <div className="news__item__header">
        <GatsbyImage className="news__item__image" image={banner} alt="" />
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

export default NewsItem
