/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"
import { useContext } from "react"
import { SwitchTransition, CSSTransition } from "react-transition-group"
import { GenderContext } from "../../context/GenderContext"

import { BannerWrapper, BannerOverlay } from "./bannerStyles"

export const Banner = ({ jokonta, allegro, text }) => {
  const { genderState } = useContext(GenderContext)
  const [colorMode] = useColorMode()

  return (
    <BannerWrapper>
      <h1
        sx={{
          variant: "text.banner",
        }}
      >
        {text}
      </h1>
      <BannerOverlay isDark={colorMode === "dark"} />
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
