/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"
import { useContext, useRef, useEffect } from "react"
import { SwitchTransition, CSSTransition } from "react-transition-group"
import { GenderContext } from "../../context/GenderContext"
import { gsap } from "gsap"

import { BannerWrapper, BannerOverlay } from "./bannerStyles"

export const Banner = ({ jokonta, allegro, text }) => {
  const overlay = useRef(null)
  const { genderState } = useContext(GenderContext)
  const [colorMode] = useColorMode()

  useEffect(() => {
    gsap.to(overlay.current, {
      duration: 0.5,
      ease: "expo.inOut",
      height: colorMode === "dark" ? "100%" : "110px",
    })
  }, [colorMode])

  return (
    <BannerWrapper>
      <h1
        sx={{
          variant: "text.banner",
        }}
      >
        {text}
      </h1>
      <BannerOverlay ref={overlay} isDark={colorMode === "dark"} />
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
