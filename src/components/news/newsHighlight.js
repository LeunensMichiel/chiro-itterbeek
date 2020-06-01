import React, { useContext } from "react"
import { HighlightWrapper, HighlightItem } from "./newsStyles"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { GenderContext } from "../../context/GenderContext"

import Chevron from "../../assets/icons/chevron.svg"
const NewsHighlight = ({ margin }) => {
  const data = useStaticQuery(graphql`
    query {
      headlineImage: file(relativePath: { eq: "images/itterbeek.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 950, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      itterbeekFt: allContentfulBericht(
        sort: { fields: date, order: DESC }
        filter: { isFeatured: { eq: true }, gender: { eq: "Itterbeek" } }
      ) {
        edges {
          node {
            slug
            title
            gender
            id
            date
            banner {
              fluid(maxWidth: 950, quality: 90) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
      jokontaFt: allContentfulBericht(
        sort: { fields: date, order: DESC }
        filter: { isFeatured: { eq: true }, gender: { eq: "Jokonta" } }
      ) {
        edges {
          node {
            slug
            title
            gender
            id
            date
            banner {
              fluid(maxWidth: 950, quality: 90) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
      allegroFt: allContentfulBericht(
        sort: { fields: date, order: DESC }
        filter: { isFeatured: { eq: true }, gender: { eq: "Allegro" } }
      ) {
        edges {
          node {
            slug
            title
            gender
            id
            date
            banner {
              fluid(maxWidth: 950, quality: 90) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)
  const { genderState } = useContext(GenderContext)

  let currentFeatured
  //We set the Gender-based ones as currentFeatured
  if (genderState.gender === 1) {
    currentFeatured = data.jokontaFt.edges[0]
  } else {
    currentFeatured = data.allegroFt.edges[0]
  }
  if (
    //There is no featured post
    typeof currentFeatured === "undefined" &&
    typeof data.itterbeekFt.edges[0] === "undefined"
  ) {
    return null
  }
  //There is a featured post
  if (
    typeof currentFeatured === "undefined" &&
    typeof data.itterbeekFt.edges[0] !== "undefined"
  ) {
    //The commonGender is featured because there is no gender one
    currentFeatured = data.itterbeekFt.edges[0]
  } else if (typeof data.itterbeekFt.edges[0] !== "undefined") {
    //there are 2 featured posts, so we return the one w/ latest date
    const currentDate = new Date(currentFeatured.node.date)
    const commonDate = new Date(data.itterbeekFt.edges[0].node.date)
    if (currentDate < commonDate) {
      currentFeatured = data.itterbeekFt.edges[0]
    }
  }

  if (!currentFeatured.node.banner) {
    currentFeatured.node.banner = data.headlineImage.childImageSharp
  }

  return (
    <HighlightWrapper
      gender={
        currentFeatured.node.gender === "Jokonta"
          ? 1
          : currentFeatured.node.gender === "Allegro"
          ? 2
          : 3
      }
      margin={margin ? 1 : 0}
    >
      <h2>{`Uitgelicht bericht: ${
        currentFeatured.node.gender === "Itterbeek"
          ? "Algemeen"
          : currentFeatured.node.gender
      }`}</h2>
      <HighlightItem>
        <Img
          className="headline__image"
          fluid={currentFeatured.node.banner.fluid}
        />
        <div className="headline__text">
          <h3>{currentFeatured.node.title}</h3>
          <small>
            {new Date(currentFeatured.node.date).toLocaleDateString("nl-BE", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </small>
          <Link to={`/nieuws/${currentFeatured.node.slug}`}>
            <span>Lees meer</span>
            <Chevron />
          </Link>
        </div>
      </HighlightItem>
      <hr />
    </HighlightWrapper>
  )
}

export default NewsHighlight
