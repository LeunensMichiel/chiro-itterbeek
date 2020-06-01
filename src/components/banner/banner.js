/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"
import { useContext, useRef, useEffect } from "react"
import { SwitchTransition, CSSTransition } from "react-transition-group"
import { GenderContext } from "../../context/GenderContext"
import { gsap } from "gsap"

import { BannerWrapper, BannerOverlay } from "./bannerStyles"

const Banner = ({ jokonta, allegro, text }) => {
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
          <div className="banner__image__container">
            <img
              src={genderState.gender === 1 ? jokonta : allegro}
              alt={text}
            />
          </div>
        </CSSTransition>
      </SwitchTransition>
    </BannerWrapper>
  )
}

export default Banner
