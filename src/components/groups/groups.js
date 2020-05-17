/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState } from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import {
  GroupWrapper,
  GroupNavigation,
  GroupNavigationItem,
  Group,
  LeidingItem,
} from "./groupStyles"

export const Groups = () => {
  const data = useStaticQuery(graphql`
    query {
      groupImage: file(relativePath: { eq: "images/jongens.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 950, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const colors = {
    paars: "#8E29CC",
    geel: "#F9CC19",
    groen: "#33A25F",
    rood: "#E83131",
    blauw: "#3960EB",
    oranje: "#ED8B30",
    goud:
      "linear-gradient(83.16deg, #806B40 -0.01%, #CCC8A3 23.95%, #A99768 52.6%, #D7C8AD 100%)",
  }
  return (
    <GroupWrapper>
      <GroupNavigation>
        <GroupNavigationItem color={colors.paars} />
        <GroupNavigationItem isActive={true} color={colors.geel} />
        <GroupNavigationItem color={colors.groen} />
        <GroupNavigationItem color={colors.rood} />
        <GroupNavigationItem color={colors.blauw} />
        <GroupNavigationItem color={colors.oranje} />
        <GroupNavigationItem color={colors.goud} />
      </GroupNavigation>
      <Group color={colors.geel}>
        <h2
          sx={{
            variant: "text.headingAlternative",
          }}
          className="group__header"
        >
          Speelclub
        </h2>
        <Img
          className="group__image"
          fluid={data.groupImage.childImageSharp.fluid}
        />
        <div className="group__description">
          <h4>Voor welke leeftijd?</h4>
          <p>6 tot 10 jaar</p>
          <h4>Voor wie?</h4>
          <p>Voor zij die zich vervelen op hun zondagmiddag!</p>
          <p>
            Als speelclubber ben onze nieuwste aanwinst in onze keitoffe chiro!
            We doen kringspelletjes, spelen verstoppertje, bouwen een kasteel
            met trollen en kabouters, zingen leuke liedjes, enz. Meisjes plagen
            hoort er ook bij!
          </p>
        </div>
        <div className="group__leiding">
          <h3
            sx={{
              variant: "text.navHeadingWhite",
            }}
            className="group__leiding__header"
          >
            Leiding
          </h3>
          <div className="group__leiding__items">
            <LeidingItem>
              <div className="group__leiding__title">Ignas</div>
              <Img
                className="group__leiding__image"
                fluid={data.groupImage.childImageSharp.fluid}
              />
            </LeidingItem>
            <LeidingItem>
              <div className="group__leiding__title">Ignas</div>
              <Img
                className="group__leiding__image"
                fluid={data.groupImage.childImageSharp.fluid}
              />
            </LeidingItem>
            <LeidingItem>
              <div className="group__leiding__title">Ignas</div>
              <Img
                className="group__leiding__image"
                fluid={data.groupImage.childImageSharp.fluid}
              />
            </LeidingItem>
            <LeidingItem>
              <div className="group__leiding__title">Ignas</div>
              <Img
                className="group__leiding__image"
                fluid={data.groupImage.childImageSharp.fluid}
              />
            </LeidingItem>
          </div>
        </div>
      </Group>
    </GroupWrapper>
  )
}
