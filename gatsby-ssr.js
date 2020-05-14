import React from "react"
import GenderProvider from "./src/context/GenderContext"
import { Global, css } from "@emotion/core"

const GlobalStyles = css`
  html {
    height: 100%;
  }
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
    /* min-height: 100%; */
  }
`

export const wrapRootElement = ({ element }) => (
  <GenderProvider>
    <Global styles={GlobalStyles} />
    {element}
  </GenderProvider>
)
