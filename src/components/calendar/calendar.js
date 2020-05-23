import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import { CalendarWrapper, CalendarNavigationWrapper } from "./calendarStyles"
import { CalendarItem } from "./calendarItem"

import Chevron from "../../assets/icons/chevron.svg"

export const Calendar = () => {
  const data = useStaticQuery(graphql`
    query {
      calendar: allContentfulKalenderItem(
        filter: { isFuture: { eq: true } }
        sort: { fields: date, order: ASC }
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
  const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth())

  const [dateState, setDateState] = useState(firstDay)
  const changeDate = increment => {
    let newDate
    if (increment) {
      newDate = new Date(dateState.setMonth(dateState.getMonth() + 1))
      setDateState(newDate)
    } else {
      if (dateState >= currentDate) {
        newDate = new Date(dateState.setMonth(dateState.getMonth() - 1))
        setDateState(newDate)
      }
    }
  }

  return (
    <CalendarWrapper>
      <CalendarNavigationWrapper disabled={dateState >= currentDate}>
        <div className="cal__nav__flex">
          <button
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
