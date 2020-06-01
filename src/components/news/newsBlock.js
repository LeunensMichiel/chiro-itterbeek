import React, { useContext } from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"

import { GenderContext } from "../../context/GenderContext"

import { InformationBlock } from "../information/informationStyles"
import { NewsBlockWrapper } from "../news/newsStyles"
import Chevron from "../../assets/icons/chevron.svg"

const NewsBlock = ({ news }) => {
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
  const { genderState } = useContext(GenderContext)
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => (
        <img
          alt="Nieuws foto"
          src={node.data?.target?.fields?.file["nl-BE"]?.url}
        />
      ),
    },
  }
  if (!news.banner) {
    news.banner = data.headlineImage.childImageSharp
  }
  return (
    <NewsBlockWrapper>
      <InformationBlock gender={genderState.gender}>
        <Link to="/nieuws/">
          <Chevron />
          <span>Ga terug</span>
        </Link>
        <Img
          className="information__image__container"
          fluid={news.banner.fluid}
          alt={news.title}
          title={news.title}
        />
        <div className="information__article">
          <h1 className="news__block__title">{news.title}</h1>
          <small className="news__block__title">
            {new Date(news.date).toLocaleDateString("nl-BE", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </small>
          {documentToReactComponents(news.body.json, options)}
        </div>
      </InformationBlock>
    </NewsBlockWrapper>
  )
}

export default NewsBlock
