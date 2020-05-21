import React from "react"
import { NewsItemWrapper } from "./newsStyles"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Chevron from "../../assets/icons/chevron.svg"

export const NewsItem = () => {
  const data = useStaticQuery(graphql`
    query {
      headlineImage: file(relativePath: { eq: "images/itterbeek.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <NewsItemWrapper>
      <div className="news__item__header">
        <Img
          className="news__item__image"
          fluid={data.headlineImage.childImageSharp.fluid}
        />
        <div className="news__item__type">Jokonta</div>
      </div>
      <div className="news__item__body">
        <small>Vrijdag 1 april om 20:00</small>
        <h3>
          Leunie skipt weer kuis- en keurdag en hint op tweede comeback!!!
        </h3>
        <p>
          {`${`Lorem ipsum dolor sit amet
          Habitant aenean`.substring(0, 230)}...`}
        </p>
        <Link>
          <span>Lees meer</span>
          <Chevron />
        </Link>
      </div>
    </NewsItemWrapper>
  )
}
