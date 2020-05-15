/** @jsx jsx */
import { useContext, useState, useRef } from "react"
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
  const [calItemActive, setItemActive] = useState("")
  const [calItemHeight, setHeightState] = useState("88px")
  const contentRef = useRef(null)

  function toggleAccordion() {
    setItemActive(calItemActive === "" ? "cal__item__active" : "")
    setHeightState(
      calItemActive === "cal__item__active"
        ? "88px"
        : `${contentRef.current.scrollHeight}px`
    )
  }

  return (
    <CalendarItemWrapper
      maxHeight={calItemHeight}
      className={`${calItemActive}`}
    >
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
      <CalendarItemBody maxHeight={calItemHeight}>
        <h3
          sx={{
            variant: "text.navHeading",
          }}
        >
          Inspelenop 🔥
        </h3>
        <p className="date">Zondag 5 oktober 2020 om 14:00</p>
        <p
          className="innertext"
          ref={contentRef}
          sx={{
            variant: "text.paragraph",
          }}
        >
          Zaterdag is er eerst een kubbtoernooi, per ploeg mogen 6 mensen
          spelen. Dit gaat door aan de terreinen van de Chiro en start om 14u30.
        </p>
        <button onClick={toggleAccordion}>
          <span>{`${calItemActive ? "Minder" : "Meer"} lezen`}</span>
          <Chevron />
        </button>
      </CalendarItemBody>
    </CalendarItemWrapper>
  )
}
