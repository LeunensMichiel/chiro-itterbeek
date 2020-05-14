import React from "react"
import GenderProvider from "./src/context/GenderContext"

export const wrapRootElement = ({ element }) => (
  <GenderProvider>{element}</GenderProvider>
)
