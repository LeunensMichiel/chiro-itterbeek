import React, { useEffect } from "react"
import PropTypes from "prop-types"

import { Navbar } from "../components"

const Layout = ({ children }) => {
  useEffect(() => {
    document.body.style.transition =
      "background-color 0.4s cubic-bezier(0.87, 0, 0.13, 1), color 0.4s cubic-bezier(0.87, 0, 0.13, 1)"
  })
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
