/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState, useEffect } from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { SwitchTransition, CSSTransition } from "react-transition-group"

import { Group, LeidingItem } from "./groupStyles"

export const Leiding = ({ color, gender }) => {
  const data = useStaticQuery(graphql`
    query {
      allLeiding: allContentfulLeiding(sort: { fields: firstname }) {
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
              fluid(maxWidth: 150, quality: 80) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
      images: allContentfulAsset(
        filter: { title: { regex: "/Vervangbaar/" } }
        sort: { fields: title }
      ) {
        edges {
          node {
            fluid(maxWidth: 600, quality: 90) {
              ...GatsbyContentfulFluid_withWebp
            }
            title
          }
        }
      }
    }
  `)

  const filteredLeiding = data.allLeiding.edges.filter(leiding =>
    gender === 1 ? leiding.node.gender === true : leiding.node.gender === false
  )

  const [selectedLeiding, setSelectedLeiding] = useState(0)

  return (
    <Group color={color}>
      <h2
        sx={{
          variant: "text.headingAlternative",
        }}
        className="group__header"
      >
        Leiding
      </h2>
      <Img
        className="group__image"
        fluid={data.images.edges[gender === 1 ? 1 : 0].node.fluid}
        title={data.images.edges[gender === 1 ? 1 : 0].node.title}
        alt={data.images.edges[gender === 1 ? 1 : 0].node.title}
      />
      <div className="group__description">
        <h4>{`Ontmoet je ${gender === 1 ? "leiding" : "leidsters"}!`}</h4>
        {gender === 1 ? (
          <p>
            Deze klassebakken staan elke zondag voor je klaar! Klik op een
            leider om hem beter te leren kennen!
          </p>
        ) : (
          <p>
            Deze jongedames staan elke zondag voor je klaar! Klik op een
            leidster om haar beter te leren kennen!
          </p>
        )}
        <div className="group__leiding__grid">
          {filteredLeiding.map((leiding, index) => (
            <LeidingItem
              key={leiding.node.id}
              small
              onClick={() => setSelectedLeiding(index)}
              isSelected={index === selectedLeiding}
            >
              <div className="group__leiding__title">
                {leiding.node.firstname}
              </div>
              <Img
                className="group__leiding__image"
                fluid={leiding.node.profilePicture.fluid}
                alt={leiding.node.firstname}
                title={leiding.node.firstname}
              />
            </LeidingItem>
          ))}
        </div>
      </div>
      <div className="group__leiding group__leiding__about">
        <Img
          className="group__leiding__about__image"
          fluid={filteredLeiding[selectedLeiding].node.profilePicture.fluid}
          alt={filteredLeiding[selectedLeiding].node.firstname}
          title={filteredLeiding[selectedLeiding].node.firstname}
        />
        <div className="group__leiding__about__text">
          <h3>
            {filteredLeiding[selectedLeiding].node.firstname}
            {' "'}
            <span className="group__leiding__about__nickname">
              {filteredLeiding[selectedLeiding].node.nickname}
            </span>
            {'" '}
            {filteredLeiding[selectedLeiding].node.lastname}
          </h3>
          <p>
            Is{" "}
            <b>
              {filteredLeiding[selectedLeiding].node.birthday.substring(0, 2)}
            </b>{" "}
            jaar
          </p>
          <p>
            Eet op de chiro graag{" "}
            <b>
              {filteredLeiding[selectedLeiding].node.food
                .map(f => f.toLowerCase())
                .join(", ")}
            </b>
          </p>
          <p>
            Op de chiro houdt {filteredLeiding[selectedLeiding].node.firstname}{" "}
            van{" "}
            <b>
              {filteredLeiding[selectedLeiding].node.activities
                .map(f => f.toLowerCase())
                .join(", ")}
            </b>
          </p>
        </div>
      </div>
    </Group>
  )
}
