import React, { useState } from "react"
import loadable from "@loadable/component"
import PropTypes from "prop-types"
import { css, Global } from "@emotion/core"

import { useHasMounted } from "../context/hasMounted"

const Navbar = loadable(() => import("./navigation/navbar"))
const Footer = loadable(() => import("./footer/footer"))

const mainCss = css`
  width: 100%;
  min-height: 100%;
  display: grid;
  grid-template-columns: minmax(16px, 1fr) repeat(12, minmax(24px, 95px)) minmax(
      16px,
      1fr
    );
  flex: 1 1 auto;
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
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)
  if (IsIE()) {
    alert(
      "Internet Explorer is oud en wordt niet meer ondersteund. Chiroitterbeek.be zal hier niet goed op draaien. Gelieve een moderne browser te downloaden zoals Google Chrome of Firefox"
    )
    window.open("https://www.google.com/intl/nl/chrome/")
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
          {children}
        </main>
      )}
      {hasMounted && <Footer />}
      <form
        name="Contact Allegro"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        hidden
      >
        <input type="hidden" name="form-name" value="Contact Allegro" />
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="chiro" value="Allegro" />
        <input type="text" name="naam" />
        <input type="email" name="email" />
        <input type="tel" name="telefoon" />
        <input type="text" name="onderwerp" />
        <textarea name="bericht"></textarea>
      </form>
      <form
        name="Contact Jokonta"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        hidden
      >
        <input type="hidden" name="form-name" value="Contact Jokonta" />
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="chiro" value="Jokonta" />
        <input type="text" name="naam" />
        <input type="email" name="email" />
        <input type="tel" name="telefoon" />
        <input type="text" name="onderwerp" />
        <textarea name="bericht"></textarea>
      </form>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
