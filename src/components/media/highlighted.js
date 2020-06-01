/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { HighlightedWrapper } from "./mediaStyles"
import { useStaticQuery, graphql } from "gatsby"

import { GenderContext } from "../../context/GenderContext"

import Boekje from "../../assets/icons/boekje.svg"

const Highlighted = () => {
  const data = useStaticQuery(graphql`
    query {
      jokontakt: allContentfulBoekje(
        sort: { fields: createdAt, order: ASC }
        limit: 1
        filter: { gender: { eq: true } }
      ) {
        edges {
          node {
            id
            title
            url
            enddate
            startdate
          }
        }
      }
      chirokrantje: allContentfulBoekje(
        sort: { fields: createdAt, order: ASC }
        limit: 1
        filter: { gender: { eq: false } }
      ) {
        edges {
          node {
            id
            title
            url
            enddate
            startdate
          }
        }
      }
    }
  `)
  const { genderState } = useContext(GenderContext)
  const boekje =
    genderState.gender === 1
      ? data.jokontakt.edges[0].node
      : data.chirokrantje.edges[0].node
  const startdate = new Date(boekje.startdate)
  const enddate = new Date(boekje.enddate)
  const formatter = new Intl.DateTimeFormat("nl-BE", { month: "long" })

  return (
    <HighlightedWrapper gender={genderState.gender}>
      <div className="boekje">
        <Boekje />
      </div>
      <div className="pdftext">
        <h2
          sx={{
            variant: "text.headingAlternative",
          }}
        >
          {genderState.gender === 1 ? "Jokontakt" : "Chirokrantje"}
        </h2>
        <p
          sx={{
            variant: "text.paragraph",
          }}
        >
          Lees hier de meest recente versie van ons megatof, 2-maandelijks
          chiro-boekje!
        </p>
        <a
          aria-label="Boekje bekijken"
          href={boekje.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Lezen
        </a>
        <small>{`Editie ${formatter.format(startdate)} - ${formatter.format(
          enddate
        )} ${enddate.getFullYear()}`}</small>
      </div>
    </HighlightedWrapper>
  )
}

export default Highlighted
