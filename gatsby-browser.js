import React from "react"
import GenderProvider from "./src/context/GenderContext"
import { Global, css } from "@emotion/core"

const GlobalStyles = css`
  html {
    height: 100%;
  }
  body,
  #___gatsby {
    height: 100%;
  }

  #gatsby-focus-wrapper {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
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

export const wrapRootElement = ({ element }) => (
  <GenderProvider>
    <Global styles={GlobalStyles} />
    {element}
  </GenderProvider>
)
