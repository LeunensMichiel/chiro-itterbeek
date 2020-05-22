/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState, useContext, useEffect } from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { SwitchTransition, CSSTransition } from "react-transition-group"

import { GenderContext } from "../../context/GenderContext"

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
      allLeiding: allContentfulLeiding {
        edges {
          node {
            firstname
            food
            gender
            id
            birthday(fromNow: true)
            lastname
            nickname
            activities
            profilePicture {
              fixed(width: 120, height: 120, quality: 80) {
                ...GatsbyContentfulFixed_withWebp
              }
            }
          }
        }
      }
      allGroup: allContentfulLeeftijdsgroep(sort: { fields: rang }) {
        edges {
          node {
            age
            banner {
              fluid(maxWidth: 600, quality: 90) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
            color
            id
            gender
            name
            description {
              description
            }
            leiding {
              firstname
              profilePicture {
                fixed(height: 120, width: 120, quality: 80) {
                  ...GatsbyContentfulFixed_withWebp
                }
              }
            }
          }
        }
      }
    }
  `)

  const { genderState } = useContext(GenderContext)
  const [activeGroup, setActiveGroup] = useState(0)
  useEffect(() => {
    return () => {
      setActiveGroup(0)
    }
  }, [genderState.gender])

  const filteredGroups = data.allGroup.edges.filter(group =>
    genderState.gender === 1
      ? group.node.gender === true
      : group.node.gender === false
  )

  const getColor = color => {
    switch (color) {
      case "paars":
        return "#8E29CC"
      case "geel":
        return "#F9CC19"
      case "groen":
        return "#33A25F"
      case "rood":
        return "#E83131"
      case "blauw":
        return "#3960EB"
      case "oranje":
        return "#ED8B30"
      default:
        return "linear-gradient(83.16deg, #806B40 -0.01%, #CCC8A3 23.95%, #A99768 52.6%, #D7C8AD 100%)"
    }
  }

  return (
    <GroupWrapper>
      <GroupNavigation>
        {filteredGroups.map((group, index) => (
          <GroupNavigationItem
            isActive={index === activeGroup}
            color={getColor(group.node.color)}
            onClick={() => setActiveGroup(index)}
          />
        ))}
        {/* <GroupNavigationItem
          color={getColor()}
          onClick={() => setActiveGroup(filteredGroups.length + 1)}
          isActive={filteredGroups.length + 1 === activeGroup}
        /> */}
      </GroupNavigation>
      <Group color={getColor(filteredGroups[activeGroup].node.color)}>
        <h2
          sx={{
            variant: "text.headingAlternative",
          }}
          className="group__header"
        >
          {filteredGroups[activeGroup].node.name}
        </h2>
        <Img
          className="group__image"
          fluid={filteredGroups[activeGroup].node.banner.fluid}
          title={filteredGroups[activeGroup].node.name}
          alt={filteredGroups[activeGroup].node.name}
        />
        <div className="group__description">
          <h4>Voor welke leeftijd?</h4>
          <p>{`${filteredGroups[activeGroup].node.age[0]} tot ${filteredGroups[activeGroup].node.age[1]} jaar`}</p>
          <h4>Voor wie?</h4>
          <p>{filteredGroups[activeGroup].node.description.description}</p>
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
            {filteredGroups[activeGroup].node.leiding.map(leiding => (
              <LeidingItem>
                <div className="group__leiding__title">{leiding.firstname}</div>
                <Img
                  className="group__leiding__image"
                  fixed={leiding.profilePicture.fixed}
                  alt={leiding.firstname}
                  title={leiding.firstname}
                />
              </LeidingItem>
            ))}
          </div>
        </div>
      </Group>
    </GroupWrapper>
  )
}
