import React, { useContext } from "react"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS } from "@contentful/rich-text-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql, Link } from "gatsby"

import { GenderContext } from "../../context/GenderContext"

import { InformationBlock } from "../information/informationStyles"
import { NewsBlockWrapper } from "../news/newsStyles"
import Chevron from "../../assets/icons/chevron.svg"

const richTextOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const url = node.data?.target?.file?.url
      return url ? <img alt="Nieuws foto" src={url} loading="lazy" /> : null
    },
  },
}

const NewsBlock = ({ news }) => {
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
  const { genderState } = useContext(GenderContext)
  const banner = getImage(news.banner) ?? getImage(data.headlineImage)

  return (
    <NewsBlockWrapper>
      <InformationBlock gender={genderState.gender}>
        <Link to="/nieuws/">
          <Chevron />
          <span>Ga terug</span>
        </Link>
        <GatsbyImage
          className="information__image__container"
          image={banner}
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
          {news.body && renderRichText(news.body, richTextOptions)}
        </div>
      </InformationBlock>
    </NewsBlockWrapper>
  )
}

export default NewsBlock
