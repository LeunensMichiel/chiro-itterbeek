/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { ContactWrapper } from "./bannerStyles"
import { GenderContext } from "../../context/GenderContext"

export const ContactBanner = () => {
  const { genderState } = useContext(GenderContext)
  return (
    <ContactWrapper gender={genderState.gender}>
      <h1
        sx={{
          variant: "text.headingAlternative",
        }}
      >
        Geïnteresseerd, of heb je nog vragen?
      </h1>
      <p
        sx={{
          variant: "text.paragraph",
        }}
      >
        Je bent altijd welkom op elke zondag van 14:00 tot 17:00. De leiding ter
        plekke helpt je graag verder. Je kan ons ook altijd bereiken via onze
        sociale media, of klik hier om ons een berichtje te sturen!
      </p>
      <div className="contact__wrapper__goodbye">Tot dan!</div>
    </ContactWrapper>
  )
}
