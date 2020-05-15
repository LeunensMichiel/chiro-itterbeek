/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { useColorMode } from "theme-ui"
import { SwitchTransition, CSSTransition } from "react-transition-group"
import { GenderContext } from "../../context/GenderContext"

import { BannerWrapper, BannerOverlay } from "./bannerStyles"

export const Banner = ({ jokonta, allegro, text }) => {
  const { genderState } = useContext(GenderContext)
  const [colorMode] = useColorMode()

  return (
    <BannerWrapper>
      <BannerOverlay isDark={colorMode === "dark"}>
        <h1
          sx={{
            variant: "text.banner",
          }}
        >
          {text}
        </h1>
      </BannerOverlay>
      <SwitchTransition>
        <CSSTransition
          key={genderState.gender}
          addEndListener={(node, done) =>
            node.addEventListener("transitionend", done, false)
          }
          classNames="fade"
        >
          {genderState.gender === 1 ? jokonta : allegro}
        </CSSTransition>
      </SwitchTransition>
    </BannerWrapper>
  )
}
