import React, { useContext, useState } from "react"
import PropTypes from "prop-types"
import { css, Global } from "@emotion/core"
import { GenderContext } from "../context/GenderContext"
import { useHasMounted } from "../context/hasMounted"

import { Navbar, Footer } from "../components"
import { ChoosePage } from "./chooser/choosePage"

const mainCss = css`
  width: 100%;
  min-height: 100%;
  display: grid;
  grid-template-columns: minmax(16px, 1fr) repeat(12, minmax(24px, 95px)) minmax(
      16px,
      1fr
    );
  flex-grow: 1;
  padding-top: 100px;
  overflow-x: hidden;

  @media (max-width: 767px) {
    padding-top: 72px;
  }
`

const IsIE = () => {
  if (typeof window !== `undefined`) {
    return window.navigator.userAgent.match(/(MSIE|Trident)/)
  }
}
const Layout = ({ children }) => {
  const hasMounted = useHasMounted()
  const { genderState } = useContext(GenderContext)
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)
  if (IsIE()) {
    alert(
      "Internet Explorer is oud en wordt niet meer ondersteund. De site zal hier niet goed op draaien. Gelieve een moderne browser te downloaden zoals Google Chrome of Firefox"
    )
  }
  return (
    <>
      <Global
        styles={theme => ({
          body: {
            transition: "background-color 0.4s cubic-bezier(0.87, 0, 0.13, 1)",
          },
        })}
      />
      <Navbar
        show={sideDrawerOpen}
        hamburgerClickHandler={() => {
          setSideDrawerOpen(!sideDrawerOpen)
          document.getElementById("hamburger").classList.toggle("is-active")
        }}
      />
      {hasMounted && (
        <main css={mainCss} aria-hidden={sideDrawerOpen}>
          {genderState.gender === 0 ? <ChoosePage /> : children}
        </main>
      )}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
