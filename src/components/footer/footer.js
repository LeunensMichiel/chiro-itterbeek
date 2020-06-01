/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { Link } from "gatsby"
import { GenderContext } from "../../context/GenderContext"

import {
  FooterWrapper,
  ItterbeekWrapper,
  SocialWrapper,
  FooterText,
} from "./footerStyles"

import Facebook from "../../assets/icons/facebook.svg"
import Instagram from "../../assets/icons/instagram.svg"
import LinkLogo from "../../assets/icons/link.svg"
import Chiro from "../../assets/icons/chiro.svg"

const Footer = () => {
  const { genderState } = useContext(GenderContext)

  return (
    <FooterWrapper>
      <div className="flex">
        <ItterbeekWrapper>
          <Link
            sx={{
              variant: "text.navHeading",
            }}
            to="/"
          >
            <Chiro />
            <span>Chiro Itterbeek</span>
          </Link>
        </ItterbeekWrapper>
        <SocialWrapper gender={genderState.gender}>
          <a
            aria-label="Facebook Chiro Itterbeek"
            href="https://www.facebook.com/ChiroItterbeek"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook />
          </a>
          <a
            aria-label="Instagram Chiro Itterbeek"
            href={`https://www.instagram.com/${
              genderState.gender === 1 ? "chirojokonta" : "chiro_allegro"
            }/`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
          <button aria-label="Overige Links">
            <div className="links__other">
              <a
                href="https://chiro.be/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chiro Nationaal
              </a>
              <a
                href="https://www.debanier.be/"
                target="_blank"
                rel="noopener noreferrer"
              >
                De Banier
              </a>
              <a
                href="https://jongeren.jind.be/"
                target="_blank"
                rel="noopener noreferrer"
              >
                JIND
              </a>
              <a
                href="https://www.dilbeek.be/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gemeente Dilbeek
              </a>
            </div>
            <LinkLogo />
          </button>
        </SocialWrapper>
      </div>
      <FooterText
        sx={{
          variant: "text.footer",
        }}
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="/privacyverklaring-chiro-itterbeek.pdf"
        >
          Privacyverklaring
        </a>{" "}
        | © Chiro Itterbeek {new Date().getFullYear()} | Design door{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://fvbdesign.com/"
        >
          FVB Design
        </a>{" "}
        | Ontwikkeling door{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://leunesmedia.com/"
        >
          Leunes Media
        </a>
      </FooterText>
    </FooterWrapper>
  )
}

export default Footer
