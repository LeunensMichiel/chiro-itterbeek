/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

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

export const Footer = () => {
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
        <SocialWrapper>
          <a
            href="https://www.facebook.com/ChiroItterbeek"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook />
          </a>
          <a
            href="https://www.instagram.com/chirojokonta/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
          <a>
            <LinkLogo />
          </a>
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
