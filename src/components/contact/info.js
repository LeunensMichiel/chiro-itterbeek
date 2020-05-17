/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { ContactInfoWrapper, SocialWrapper } from "./contactStyles"
import { GenderContext } from "../../context/GenderContext"

import Facebook from "../../assets/icons/facebook.svg"
import Instagram from "../../assets/icons/instagram.svg"
import LinkLogo from "../../assets/icons/link.svg"

export const ContactInfo = () => {
  const { genderState, dispatch } = useContext(GenderContext)
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
      <div className="contact__info__sectionItem">
        <p>Louise Vaes</p>
        <p>louise@idk.com</p>
        <p>0400 12 34 56</p>
      </div>
      <div className="contact__info__sectionItem">
        <p>Anne-Marie Govaert </p>
        <p>(volwassen beleidster)</p>
        <p>leidster@idk.com</p>
        <p>0400 12 34 56</p>
      </div>
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
