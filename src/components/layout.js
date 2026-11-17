import React, { useState } from "react"
import PropTypes from "prop-types"
import { css, Global } from "@emotion/react"

import { useHasMounted } from "../context/hasMounted"
import { useColorModeClass } from "../context/useColorModeClass"
import Navbar from "./navigation/navbar"
import Footer from "./footer/footer"

const mainCss = css`
  width: 100%;
  min-height: 100%;
  display: grid;
  grid-template-columns:
    minmax(16px, 1fr) repeat(12, minmax(24px, 95px))
    minmax(16px, 1fr);
  flex: 1 1 auto;
  padding-top: 100px;
  overflow-x: hidden;

  @media (max-width: 767px) {
    padding-top: 72px;
  }
`

const bodyTransition = {
  body: {
    transition: "background-color 0.4s cubic-bezier(0.87, 0, 0.13, 1)",
  },
}

const Layout = ({ children }) => {
  const hasMounted = useHasMounted()
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)
  useColorModeClass()

  return (
    <>
      <Global styles={bodyTransition} />
      <Navbar
        show={sideDrawerOpen}
        hamburgerClickHandler={() => setSideDrawerOpen(open => !open)}
      />
      {hasMounted && (
        <main css={mainCss} aria-hidden={sideDrawerOpen}>
          {children}
        </main>
      )}
      {hasMounted && <Footer />}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
