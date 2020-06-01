/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState, useContext, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import loadable from "@loadable/component"

import { GenderContext } from "../../context/GenderContext"

import {
  GroupWrapper,
  GroupNavigation,
  GroupNavigationItem,
} from "./groupStyles"

const Leiding = loadable(() => import("./leiding"))
const AgeGroup = loadable(() => import("./ageGroup"))

const Groups = () => {
  const data = useStaticQuery(graphql`
    query {
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
              id
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

  const currentGroup = filteredGroups[activeGroup] || filteredGroups[0]

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
            key={group.node.id}
          />
        ))}
        <GroupNavigationItem
          color={getColor()}
          onClick={() => setActiveGroup(filteredGroups.length + 1)}
          isActive={filteredGroups.length + 1 === activeGroup}
        />
      </GroupNavigation>
      {activeGroup === filteredGroups.length + 1 ? (
        <Leiding color={getColor()} gender={genderState.gender} />
      ) : (
        <AgeGroup
          color={getColor(currentGroup.node.color)}
          group={currentGroup.node}
        />
      )}
    </GroupWrapper>
  )
}

export default Groups
