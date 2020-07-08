/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"
import { useContext, Fragment } from "react"
import { Link } from "gatsby"
import { SwitchTransition, CSSTransition } from "react-transition-group"

import { GenderContext } from "../../context/GenderContext"
import { useHasMounted } from "../../context/hasMounted"

import {
  NavWrapper,
  ItterbeekWrapper,
  LinkWrapper,
  NavbarWrapper,
  SocialWrapper,
} from "./navbarStyles"

import Chiro from "../../assets/icons/chiro.svg"
import Female from "../../assets/icons/female.svg"
import Male from "../../assets/icons/male.svg"
import Light from "../../assets/icons/light.svg"
import Dark from "../../assets/icons/dark.svg"
import Facebook from "../../assets/icons/facebook.svg"
import Instagram from "../../assets/icons/instagram.svg"

const Navbar = ({ show = false, hamburgerClickHandler }) => {
  const [colorMode, setColorMode] = useColorMode()
  const { genderState, dispatch } = useContext(GenderContext)
  const hasMounted = useHasMounted()

  return (
    <Fragment>
      <NavbarWrapper>
        {hasMounted && (
          <ItterbeekWrapper gender={genderState.gender} mobile>
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
        )}
        <button
          className="hamburger hamburger--elastic"
          type="button"
          onClick={hamburgerClickHandler}
          onKeyDown={hamburgerClickHandler}
          id="hamburger"
          aria-label="Menu"
          aria-controls="navigation"
          aria-expanded={show}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </NavbarWrapper>
      <NavWrapper show={show}>
        {hasMounted && (
          <ItterbeekWrapper gender={genderState.gender}>
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
        )}
        {hasMounted && (
          <LinkWrapper gender={genderState.gender}>
            <Link
              sx={{
                variant: "text.navHeading",
              }}
              to="/"
              activeClassName="active"
              className="link__home"
            >
              Home
            </Link>
            <Link
              sx={{
                variant: "text.navHeading",
              }}
              to="/nieuws/"
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
        )}
        {hasMounted && (
          <SocialWrapper gender={genderState.gender}>
            <a
              onClick={() => {
                dispatch({ type: "TOGGLE_GENDER" })
              }}
              onKeyDown={() => {
                dispatch({ type: "TOGGLE_GENDER" })
              }}
              role="button"
              aria-label="Verwisselen van Chiro (Meisjes of Jongens)"
              tabIndex={0}
            >
              <SwitchTransition>
                <CSSTransition
                  key={genderState.gender}
                  addEndListener={(node, done) =>
                    node.addEventListener("transitionend", done, false)
                  }
                  classNames="fade"
                >
                  {genderState.gender === 1 ? <Male /> : <Female />}
                </CSSTransition>
              </SwitchTransition>
            </a>
            <a
              aria-label="Verwisselen van kleurenthema (donker of licht)"
              onClick={() => {
                setColorMode(colorMode === "default" ? "dark" : "default")
              }}
              onKeyDown={() => {
                setColorMode(colorMode === "default" ? "dark" : "default")
              }}
              role="button"
              tabIndex={0}
            >
              <SwitchTransition>
                <CSSTransition
                  key={colorMode}
                  addEndListener={(node, done) =>
                    node.addEventListener("transitionend", done, false)
                  }
                  classNames="fade"
                >
                  {colorMode === "default" ? <Light /> : <Dark />}
                </CSSTransition>
              </SwitchTransition>
            </a>
            <div className="divider__horizontal" />
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
          </SocialWrapper>
        )}
      </NavWrapper>
    </Fragment>
  )
}

export default Navbar
