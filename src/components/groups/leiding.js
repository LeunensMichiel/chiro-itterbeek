/** @jsxImportSource theme-ui */
import { useState } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

import { Group, LeidingItem } from "./groupStyles"

// Exact age in whole years (calculated in the browser, so it's always current)
const getAge = birthday => {
  // use the calendar date as entered in Contentful (YYYY-MM-DD…), not UTC
  const [year, month, day] = String(birthday)
    .slice(0, 10)
    .split("-")
    .map(Number)
  const now = new Date()
  let age = now.getFullYear() - year
  const hadBirthday =
    now.getMonth() + 1 > month ||
    (now.getMonth() + 1 === month && now.getDate() >= day)
  if (!hadBirthday) age -= 1
  return age
}

const Leiding = ({ color, gender }) => {
  const data = useStaticQuery(graphql`
    query {
      allLeiding: allContentfulLeiding(sort: { firstname: ASC }) {
        edges {
          node {
            firstname
            food
            gender
            id
            birthday
            lastname
            nickname
            activities
            profilePicture {
              gatsbyImageData(
                layout: FULL_WIDTH
                breakpoints: [38, 75, 150, 225, 300]
                quality: 80
                placeholder: BLURRED
              )
            }
          }
        }
      }
      images: allContentfulAsset(
        filter: { title: { regex: "/Vervangbaar/" } }
        sort: { title: ASC }
      ) {
        edges {
          node {
            gatsbyImageData(
              layout: FULL_WIDTH
              breakpoints: [150, 300, 600, 900, 1200]
              quality: 90
              placeholder: BLURRED
            )
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
  const groupImage = data.images.edges[gender === 1 ? 1 : 0]?.node
  const selected = (filteredLeiding[selectedLeiding] || filteredLeiding[0])
    ?.node

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
      {groupImage && (
        <GatsbyImage
          className="group__image"
          image={getImage(groupImage)}
          title={groupImage.title}
          alt={groupImage.title}
        />
      )}
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
              <GatsbyImage
                className="group__leiding__image"
                image={getImage(leiding.node.profilePicture)}
                alt={leiding.node.firstname}
                title={leiding.node.firstname}
              />
            </LeidingItem>
          ))}
        </div>
      </div>
      {selected && (
        <div className="group__leiding group__leiding__about">
          <GatsbyImage
            className="group__leiding__about__image"
            image={getImage(selected.profilePicture)}
            alt={selected.firstname}
            title={selected.firstname}
          />
          <div className="group__leiding__about__text">
            <h3>
              {selected.firstname}
              {' "'}
              <span className="group__leiding__about__nickname">
                {selected.nickname}
              </span>
              {'" '}
              {selected.lastname}
            </h3>
            <p>
              Is <b>{getAge(selected.birthday)}</b> jaar
            </p>
            <p>
              Eet op de chiro graag{" "}
              <b>{selected.food.map(f => f.toLowerCase()).join(", ")}</b>
            </p>
            <p>
              Op de chiro houdt {selected.firstname} van{" "}
              <b>{selected.activities.map(f => f.toLowerCase()).join(", ")}</b>
            </p>
          </div>
        </div>
      )}
    </Group>
  )
}

export default Leiding
