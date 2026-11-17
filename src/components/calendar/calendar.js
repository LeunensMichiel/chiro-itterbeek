import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import { CalendarWrapper, CalendarNavigationWrapper } from "./calendarStyles"
import { CalendarItem } from "./calendarItem"

import Chevron from "../../assets/icons/chevron.svg"

const Calendar = () => {
  const data = useStaticQuery(graphql`
    query {
      calendar: allContentfulKalenderItem(
        filter: { isFuture: { eq: true } }
        sort: { date: ASC }
      ) {
        edges {
          node {
            date
            gender
            title
            id
            description {
              description
            }
          }
        }
      }
    }
  `)

  const currentDate = new Date()
  const firstDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  )

  const [dateState, setDateState] = useState(firstDay)
  const changeDate = increment => {
    if (!increment && dateState < currentDate) return
    setDateState(
      new Date(
        dateState.getFullYear(),
        dateState.getMonth() + (increment ? 1 : -1),
        1
      )
    )
  }

  return (
    <CalendarWrapper>
      <CalendarNavigationWrapper disabled={dateState >= currentDate}>
        <div className="cal__nav__flex">
          <button
            aria-label="Vorige maand"
            onClick={() => {
              changeDate(false)
            }}
          >
            <Chevron />
          </button>
          <div className="cal__nav__month">
            {dateState.toLocaleDateString("nl-BE", { month: "long" })}
            <div className="cal__nav__year">{dateState.getFullYear()}</div>
          </div>
          <button
            aria-label="Volgende maand"
            onClick={e => {
              changeDate(true)
            }}
          >
            <Chevron />
          </button>
        </div>
      </CalendarNavigationWrapper>
      {data.calendar.edges.map(calItem => (
        <CalendarItem
          key={calItem.node.id}
          calItem={calItem.node}
          currentDate={dateState}
        />
      ))}
      <p>Er staat niets gepland deze maand.</p>
    </CalendarWrapper>
  )
}

export default Calendar
