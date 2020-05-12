import React from "react"
import { useColorMode } from "theme-ui"

const IndexPage = () => {
  const [colorMode, setColorMode] = useColorMode()

  return (
    <div>
      <h1>Hello World!</h1>
      <button
        onClick={() => {
          setColorMode(colorMode === "default" ? "dark" : "default")
        }}
      >
        Toggle {colorMode === "default" ? "Dark" : "Light"}
      </button>
    </div>
  )
}

export default IndexPage
