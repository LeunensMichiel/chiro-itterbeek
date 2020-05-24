import React, { useContext } from "react"
import { HighlightWrapper, HighlightItem } from "./newsStyles"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { GenderContext } from "../../context/GenderContext"

import Chevron from "../../assets/icons/chevron.svg"
export const NewsHighlight = ({ margin }) => {
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
  // // data.jokontaFt.edges[0] = undefined
  // if (genderState.gender === 1) {
  //   if (data.itterbeekFt.edges[0] || data.jokontaFt.edges[0]) {
  //     return null
  //   }
  // }
  // // const isCommon = () => {
  // //   if (genderState.gender === 1) {
  // //     return new
  // //   } else {

  // //   }
  // // }
  // console.log(data.itterbeekFt.edges[0])
  // console.log(data.jokontaFt.edges[0])

  return (
    <HighlightWrapper margin={margin ? 1 : 0}>
      <h2>Uitgelicht bericht: Algemeen</h2>
      <HighlightItem>
        <Img
          className="headline__image"
          fluid={data.headlineImage.childImageSharp.fluid}
        />
        <div className="headline__text">
          <h3>Toxken blijkt dan toch een schattig ventjn te zijn</h3>
          <small>Vrijdag 1 april om 21:00</small>
          <Link>
            <span>Lees meer</span>
            <Chevron />
          </Link>
        </div>
      </HighlightItem>
      <hr />
    </HighlightWrapper>
  )
}
