import React from "react"
import { Global, css } from "@emotion/react"
import GenderProvider from "./context/GenderContext"

const globalStyles = css`
  html {
    height: 100%;
    overflow-y: scroll;
  }
  body,
  #___gatsby {
    height: 100%;
  }

  #gatsby-focus-wrapper {
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }

  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: normal;
    cursor: pointer;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;
  }
`

const wrapRootElement = ({ element }) => (
  <GenderProvider>
    <Global styles={globalStyles} />
    {element}
  </GenderProvider>
)

export default wrapRootElement
