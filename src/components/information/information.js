/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext, useState, Fragment } from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { SwitchTransition, CSSTransition } from "react-transition-group"
import { GenderContext } from "../../context/GenderContext"

import {
  InformationWrapper,
  InformationNavigation,
  InformationBlock,
} from "./informationStyles"

const Information = () => {
  const data = useStaticQuery(graphql`
    query {
      infoBlocks: allContentfulInformatieblok(
        sort: { fields: rank, order: ASC }
      ) {
        edges {
          node {
            gender
            rank
            title
            id
            banner {
              fluid(maxWidth: 950, quality: 90) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
            info {
              json
            }
          }
        }
      }
      defaultImage: file(relativePath: { eq: "images/itterbeek.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 30) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const { genderState } = useContext(GenderContext)
  const [currentTab, setCurrentTab] = useState(0)
  const filteredBlocks = data.infoBlocks.edges.filter(block =>
    genderState.gender === 1
      ? block.node.gender === "Jokonta"
      : block.node.gender === "Allegro"
  )

  if (!filteredBlocks[currentTab].node.banner) {
    filteredBlocks[currentTab].node.banner = data.defaultImage.childImageSharp
  }

  return (
    <InformationWrapper>
      <InformationNavigation gender={genderState.gender}>
        <button
          sx={{
            variant: "text.navHeading",
            color:
              currentTab === 0
                ? genderState.gender === 1
                  ? "jokonta"
                  : "allegro"
                : "header",
          }}
          onClick={() => setCurrentTab(0)}
        >
          Algemeen
        </button>
        <button
          sx={{
            variant: "text.navHeading",
            color:
              currentTab === 1
                ? genderState.gender === 1
                  ? "jokonta"
                  : "allegro"
                : "header",
          }}
          onClick={() => setCurrentTab(1)}
        >
          Inschrijven
        </button>
        <button
          sx={{
            variant: "text.navHeading",
            color:
              currentTab === 2
                ? genderState.gender === 1
                  ? "jokonta"
                  : "allegro"
                : "header",
          }}
          onClick={() => setCurrentTab(2)}
        >
          Uniform
        </button>
      </InformationNavigation>
      <InformationBlock gender={genderState.gender}>
        <SwitchTransition>
          <CSSTransition
            key={filteredBlocks[currentTab].node.id}
            addEndListener={(node, done) =>
              node.addEventListener("transitionend", done, false)
            }
            classNames="fade"
          >
            <Fragment>
              <Img
                className="information__image__container"
                fluid={filteredBlocks[currentTab].node.banner.fluid}
                alt={filteredBlocks[currentTab].node.title}
                title={filteredBlocks[currentTab].node.title}
              />

              <div className="information__article">
                {documentToReactComponents(
                  filteredBlocks[currentTab].node.info.json
                )}
              </div>
            </Fragment>
          </CSSTransition>
        </SwitchTransition>
      </InformationBlock>
    </InformationWrapper>
  )
}

export default Information
