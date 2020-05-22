/** @jsx jsx */
import React, { useContext, useState, useRef } from "react"
import { jsx } from "theme-ui"
import { CSSTransition } from "react-transition-group"
import { GenderContext } from "../../context/GenderContext"
import {
  CalendarItemWrapper,
  CalendarItemHeader,
  CalendarItemBody,
} from "./calendarStyles"

import Chevron from "../../assets/icons/chevron.svg"

export const CalendarItem = ({ calItem, currentDate }) => {
  const [calItemActive, setItemActive] = useState("")
  const [calItemHeight, setHeightState] = useState("88px")
  const contentRef = useRef(null)

  const { genderState } = useContext(GenderContext)
  const itemDate = new Date(calItem.date)

  function toggleAccordion() {
    setItemActive(calItemActive === "" ? "cal__item__active" : "")
    setHeightState(
      calItemActive === "cal__item__active"
        ? "88px"
        : `${contentRef.current.scrollHeight}px`
    )
  }

  function shouldShowGender() {
    switch (calItem.gender) {
      case "Itterbeek":
        return true
      case "Jokonta":
        return genderState.gender === 1
      case "Allegro":
        return genderState.gender === 2
      default:
        return true
    }
  }

  return (
    <CSSTransition
      in={shouldShowGender()}
      addEndListener={(node, done) =>
        node.addEventListener("transitionend", done, false)
      }
      classNames="cal__item"
      unmountOnExit
    >
      <>
        {itemDate.getMonth() === currentDate.getMonth() &&
          itemDate.getFullYear() === currentDate.getFullYear() &&
          shouldShowGender() && (
            <CalendarItemWrapper
              maxHeight={calItemHeight}
              className={`${calItemActive}`}
            >
              <CalendarItemHeader gender={genderState.gender}>
                <span>{itemDate.getDate()}</span>
                <span
                  sx={{
                    variant: "text.heading",
                  }}
                >
                  {itemDate.toLocaleDateString("nl-BE", {
                    month: "long",
                  })}
                </span>
              </CalendarItemHeader>
              <CalendarItemBody maxHeight={calItemHeight}>
                <h3
                  sx={{
                    variant: "text.navHeading",
                  }}
                >
                  {calItem.title}
                </h3>
                <p className="date">
                  {`${itemDate.toLocaleDateString("nl-BE", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })} om  ${itemDate.toLocaleTimeString("nl-BE", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}`}
                </p>
                <p
                  className="innertext"
                  ref={contentRef}
                  sx={{
                    variant: "text.paragraph",
                  }}
                >
                  {calItem.description.description}
                </p>
                <button onClick={toggleAccordion}>
                  <span>{`${calItemActive ? "Minder" : "Meer"} lezen`}</span>
                  <Chevron />
                </button>
              </CalendarItemBody>
            </CalendarItemWrapper>
          )}
      </>
    </CSSTransition>
  )
}
