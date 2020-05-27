/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useContext } from "react"

import { GenderContext } from "../../context/GenderContext"

import { ChooseChiro } from "./chooserStyles"
import Boy from "../../assets/images/jongen.svg"
import BoyWave from "../../assets/images/jongen-zwaaien.svg"
import Girl from "../../assets/images/meisje.svg"
import GirlWave from "../../assets/images/meisje-zwaaien.svg"

export const ChoosePage = () => {
  const { dispatch } = useContext(GenderContext)

  return (
    <>
      <ChooseChiro
        jokonta
        onClick={() => {
          dispatch({ type: "TOGGLE_MALE" })
        }}
      >
        <h1
          sx={{
            variant: "text.headingAlternative",
          }}
        >
          Jokonta
        </h1>
        <h2
          sx={{
            variant: "text.headingAlternative",
          }}
        >
          Jokonta
        </h2>
        <Boy />
        <BoyWave className="waving" />
      </ChooseChiro>
      <ChooseChiro
        onClick={() => {
          dispatch({ type: "TOGGLE_FEMALE" })
        }}
      >
        <h1
          sx={{
            variant: "text.headingAlternative",
          }}
        >
          Allegro
        </h1>
        <h2
          sx={{
            variant: "text.headingAlternative",
          }}
        >
          Allegro
        </h2>
        <Girl />
        <GirlWave className="waving" />
      </ChooseChiro>
    </>
  )
}
