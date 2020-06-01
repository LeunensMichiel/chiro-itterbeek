/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext, Fragment } from "react"

import { GenderContext } from "../../context/GenderContext"

import { ChooseChiro } from "./chooserStyles"
import Boy from "../../assets/images/jongen.svg"
import BoyWave from "../../assets/images/jongen-zwaaien.svg"
import Girl from "../../assets/images/meisje.svg"
import GirlWave from "../../assets/images/meisje-zwaaien.svg"
const ChoosePage = () => {
  const { dispatch } = useContext(GenderContext)
  return (
    <Fragment>
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
        <img src={Boy} alt="Jongetje van Itterbeek" />
        <img
          src={BoyWave}
          className="waving"
          alt="Jongetje van Chiro Itterbeek dat zwaait."
        />
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
        <img src={Girl} alt="Meisje van Itterbeek" />
        <img
          src={GirlWave}
          className="waving"
          alt="Meisje van Chiro Itterbeek dat zwaait."
        />
      </ChooseChiro>
    </Fragment>
  )
}
export default ChoosePage
