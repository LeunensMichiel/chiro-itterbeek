/** @jsx jsx */
import { useContext } from "react"
import { jsx } from "theme-ui"
import { GenderContext } from "../../context/GenderContext"

import { BannerWrapper } from "./bannerStyles"
import { SwitchTransition, CSSTransition } from "react-transition-group"

export const Banner = ({ jokonta, allegro, text }) => {
  const { genderState } = useContext(GenderContext)
  return (
    <BannerWrapper>
      <h1
        sx={{
          variant: "text.banner",
        }}
      >
        {text}
      </h1>
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
