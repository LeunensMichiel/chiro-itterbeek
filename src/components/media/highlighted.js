/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { HighlightedWrapper } from "./mediaStyles"
import { GenderContext } from "../../context/GenderContext"

import Boekje from "../../assets/icons/boekje.svg"

export const Highlighted = () => {
  const { genderState } = useContext(GenderContext)

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
          href="https://www.facebook.com/ChiroItterbeek"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lezen
        </a>
        <small>Editie november-december 2020</small>
      </div>
    </HighlightedWrapper>
  )
}
