/** @jsxImportSource theme-ui */
import { useContext, useState, useRef, Fragment } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { SwitchTransition, CSSTransition } from "react-transition-group"
import { GenderContext } from "../../context/GenderContext"

import {
  InformationWrapper,
  InformationNavigation,
  InformationBlock,
} from "./informationStyles"

const TABS = ["Algemeen", "Inschrijven", "Uniform"]

const Information = () => {
  const data = useStaticQuery(graphql`
    query {
      infoBlocks: allContentfulInformatieblok(sort: { rank: ASC }) {
        edges {
          node {
            gender
            rank
            title
            id
            banner {
              gatsbyImageData(
                layout: FULL_WIDTH
                breakpoints: [238, 475, 950, 1425, 1900]
                quality: 90
                placeholder: BLURRED
              )
            }
            info {
              raw
            }
          }
        }
      }
      defaultImage: file(relativePath: { eq: "images/itterbeek.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            breakpoints: [100, 200, 400, 600, 800]
            quality: 30
            placeholder: BLURRED
          )
        }
      }
    }
  `)

  const { genderState } = useContext(GenderContext)
  const [currentTab, setCurrentTab] = useState(0)
  const imageRef = useRef(null)
  const filteredBlocks = data.infoBlocks.edges.filter(block =>
    genderState.gender === 1
      ? block.node.gender === "Jokonta"
      : block.node.gender === "Allegro"
  )

  // Tabs map onto the blocks in rank order; only show tabs that have a block.
  const tabs = TABS.slice(0, filteredBlocks.length)
  const activeTab = currentTab < tabs.length ? currentTab : 0
  const currentBlock = filteredBlocks[activeTab]?.node
  if (!currentBlock) return null
  const banner = getImage(currentBlock.banner) ?? getImage(data.defaultImage)
  const activeColor = genderState.gender === 1 ? "jokonta" : "allegro"

  return (
    <InformationWrapper>
      <InformationNavigation gender={genderState.gender}>
        {tabs.map((label, index) => (
          <button
            key={label}
            sx={{
              variant: "text.navHeading",
              color: activeTab === index ? activeColor : "header",
            }}
            onClick={() => setCurrentTab(index)}
          >
            {label}
          </button>
        ))}
      </InformationNavigation>
      <InformationBlock gender={genderState.gender}>
        <SwitchTransition>
          <CSSTransition
            key={currentBlock.id}
            nodeRef={imageRef}
            addEndListener={done =>
              imageRef.current?.addEventListener("transitionend", done, false)
            }
            classNames="fade"
          >
            <Fragment>
              {/* Only the image fades (as before); the wrapper carries the ref. */}
              <div className="information__image__container" ref={imageRef}>
                <GatsbyImage
                  image={banner}
                  alt={currentBlock.title}
                  title={currentBlock.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "inherit",
                  }}
                />
              </div>

              <div className="information__article">
                {currentBlock.info && renderRichText(currentBlock.info)}
              </div>
            </Fragment>
          </CSSTransition>
        </SwitchTransition>
      </InformationBlock>
    </InformationWrapper>
  )
}

export default Information
