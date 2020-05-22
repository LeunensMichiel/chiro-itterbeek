import React from "react"
import PropTypes from "prop-types"
import { css, Global } from "@emotion/core"

import { Navbar, Footer } from "../components"
const mainCss = css`
  width: 100%;
  min-height: 100%;
  display: grid;
  grid-template-columns: minmax(16px, 1fr) repeat(12, minmax(24px, 95px)) minmax(
      16px,
      1fr
    );
  padding-top: 100px;
`

const Layout = ({ children }) => {
  return (
    <>
      <Global
        styles={theme => ({
          body: {
            transition: "background-color 0.4s cubic-bezier(0.87, 0, 0.13, 1)",
          },
        })}
      />
      <Navbar />
      <main css={mainCss}>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
