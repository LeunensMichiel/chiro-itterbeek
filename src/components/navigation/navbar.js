/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"
import React, { useContext } from "react"
import { Link } from "gatsby"
import { SwitchTransition, CSSTransition } from "react-transition-group"

import { GenderContext } from "../../context/GenderContext"

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

export const Navbar = ({ show = false, hamburgerClickHandler }) => {
  const [colorMode, setColorMode] = useColorMode()
  const { genderState, dispatch } = useContext(GenderContext)
  return (
    <>
      <NavbarWrapper>
        <ItterbeekWrapper mobile>
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
      <NavWrapper show={show} gender={genderState.gender}>
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
        <SocialWrapper gender={genderState.gender}>
          <a
            onClick={() => {
              dispatch({ type: "TOGGLE_GENDER" })
            }}
            onKeyDown={() => {
              dispatch({ type: "TOGGLE_GENDER" })
            }}
            role="button"
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
                {genderState.gender === 1 ? <Female /> : <Male />}
              </CSSTransition>
            </SwitchTransition>
          </a>
          <a
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
                {colorMode === "default" ? <Dark /> : <Light />}
              </CSSTransition>
            </SwitchTransition>
          </a>
          <div className="divider__horizontal" />
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
        </SocialWrapper>
      </NavWrapper>
    </>
  )
}
