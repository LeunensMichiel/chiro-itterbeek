/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { ContactInfoWrapper, SocialWrapper } from "./contactStyles"
import { useStaticQuery, graphql } from "gatsby"
import { GenderContext } from "../../context/GenderContext"

import Facebook from "../../assets/icons/facebook.svg"
import Instagram from "../../assets/icons/instagram.svg"
import LinkLogo from "../../assets/icons/link.svg"

export const ContactInfo = () => {
  const data = useStaticQuery(graphql`
    query {
      info: allContentfulContactinfo(sort: { fields: updatedAt }) {
        edges {
          node {
            gender
            email
            fullName
            id
            phone
            vb
          }
        }
      }
    }
  `)
  const { genderState, dispatch } = useContext(GenderContext)
  const filteredInfo = data.info.edges.filter(block =>
    genderState.gender === 1
      ? block.node.gender === true
      : block.node.gender === false
  )
  return (
    <ContactInfoWrapper gender={genderState.gender}>
      <h2
        sx={{
          variant: "text.navHeading",
        }}
      >
        Contactgegevens
      </h2>
      <h3>Adres</h3>
      <div className="contact__info__sectionItem">
        <p>Plankenstraat 23</p>
        <p>1701 Itterbeek</p>
        <p>Vlaams-Brabant, België</p>
      </div>
      <h3>Hoofdleiding</h3>
      {filteredInfo.map(block => (
        <div className="contact__info__sectionItem">
          <p>{block.node.fullName}</p>
          {block.node.vb && <p>(volwassen begeleider)</p>}
          <p>{block.node.email}</p>
          <p>{block.node.phone}</p>
        </div>
      ))}
      <h3>Communicatie</h3>
      <div className="contact__info__sectionItem">
        <p>chiro.allegro@outlook.com</p>
        <p>Elke zondag van 14:00 tot 17:00</p>
        <p>Niet bereikbaar en een dringende vraag?</p>
        <p>
          Probeer eens bij de{" "}
          <button
            onClick={() => {
              dispatch({ type: "TOGGLE_GENDER" })
            }}
          >
            {genderState.gender === 1 ? "meisjes." : "jongens."}
          </button>
        </p>
      </div>
      <h3>Nuttige Links</h3>
      <SocialWrapper>
        <a
          href="https://www.facebook.com/ChiroItterbeek"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook />
        </a>
        <a
          href={`https://www.instagram.com/${
            genderState.gender === 1 ? "chirojokonta" : "chiro_allegro"
          }/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram />
        </a>
        <a>
          <LinkLogo />
        </a>
      </SocialWrapper>
    </ContactInfoWrapper>
  )
}
