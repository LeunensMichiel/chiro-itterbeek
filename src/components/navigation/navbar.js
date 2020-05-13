/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { useColorMode } from "theme-ui"

import {
  NavWrapper,
  ItterbeekWrapper,
  LinkWrapper,
  SocialWrapper,
} from "./navbarStyles"

import Chiro from "../../assets/icons/chiro.svg"
import Female from "../../assets/icons/female.svg"
import Male from "../../assets/icons/male.svg"
import Light from "../../assets/icons/light.svg"
import Dark from "../../assets/icons/dark.svg"
import Facebook from "../../assets/icons/facebook.svg"
import Instagram from "../../assets/icons/instagram.svg"

export const Navbar = () => {
  const [colorMode, setColorMode] = useColorMode()

  return (
    <NavWrapper>
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
      <LinkWrapper>
        <Link
          sx={{
            variant: "text.navHeading",
          }}
          to="/news/"
          partiallyActive={true}
          activeClassName="active"
        >
          Nieuws
        </Link>
        <Link
          sx={{
            variant: "text.navHeading",
          }}
          to="/media/"
          partiallyActive={true}
          activeClassName="active"
        >
          Media
        </Link>
        <Link
          sx={{
            variant: "text.navHeading",
          }}
          to="/contact/"
          partiallyActive={true}
          activeClassName="active"
        >
          Contact
        </Link>
      </LinkWrapper>
      <SocialWrapper>
        <a>
          <Female />
        </a>
        <a>
          <Dark
            onClick={e => {
              setColorMode(colorMode === "default" ? "dark" : "default")
            }}
          />
        </a>
        <a>
          <Facebook />
        </a>
        <a>
          <Instagram />
        </a>
      </SocialWrapper>
    </NavWrapper>
  )
}
