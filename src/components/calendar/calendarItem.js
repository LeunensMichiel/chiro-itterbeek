/** @jsx jsx */
import { useContext } from "react"
import { jsx } from "theme-ui"
import { GenderContext } from "../../context/GenderContext"
import {
  CalendarItemWrapper,
  CalendarItemHeader,
  CalendarItemBody,
} from "./calendarStyles"

import Chevron from "../../assets/icons/chevron.svg"

export const CalendarItem = () => {
  const { genderState } = useContext(GenderContext)

  return (
    <CalendarItemWrapper>
      <CalendarItemHeader gender={genderState.gender}>
        <span>5</span>
        <span
          sx={{
            variant: "text.heading",
          }}
        >
          Oktober
        </span>
      </CalendarItemHeader>
      <CalendarItemBody>
        <h3
          sx={{
            variant: "text.navHeading",
          }}
        >
          Inspelenop 🔥
        </h3>
        <p className="date">Zondag 5 oktober 2020 om 14:00</p>
        <p
          sx={{
            variant: "text.paragraph",
          }}
        >
          Gewest West organiseert vandaag InSpelenOp in Dilbeek Centrum. De hele
          namiddag spelletjes en activiteiten voor kinderen! Bruine zeep,
          schminken, gekke kapsels, kajakken…
        </p>
        <button>
          <span>Meer lezen</span>
          <Chevron />
        </button>
      </CalendarItemBody>
    </CalendarItemWrapper>
  )
}
