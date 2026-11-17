"use client"

import { useRef, useState } from "react"

import type { Audience } from "@/lib/chiro"
import type { CalendarItem } from "@/lib/contentful"
import { cx } from "@/lib/cx"
import { formatLongDate, formatMonth, formatTime } from "@/lib/format"
import { useToday } from "@/lib/use-today"

import Chevron from "./icons/chevron"

const COLLAPSED = "88px"

const visibleFor: Record<Audience, string> = {
  itterbeek: "flex",
  jokonta: "hidden jokonta:flex",
  allegro: "hidden allegro:flex",
}

/** Months since year 0, so months can be compared and stepped through. */
const monthIndex = (date: Date) => date.getFullYear() * 12 + date.getMonth()

function CalendarEntry({ item }: { item: CalendarItem }) {
  const [expanded, setExpanded] = useState(false)
  const [maxHeight, setMaxHeight] = useState(COLLAPSED)
  const textRef = useRef<HTMLParagraphElement>(null)
  const date = new Date(item.date)

  const toggle = () => {
    setMaxHeight(
      expanded ? COLLAPSED : `${textRef.current?.scrollHeight ?? 88}px`,
    )
    setExpanded(!expanded)
  }

  return (
    <article
      className={cx(
        "w-full rounded-xs border border-solid transition-[border-color,opacity] duration-400 ease-chiro max-mobile:flex-col starting:opacity-0",
        expanded ? "border-border-muted" : "border-border",
        visibleFor[item.audience],
      )}
    >
      <div className="flex min-w-[260px] flex-col items-center justify-center bg-background-muted max-tablet:min-w-[200px] max-mobile:flex-row max-mobile:p-2">
        <span className="mb-1 font-alt text-[96px] leading-none text-chiro max-tablet:text-7xl max-mobile:mr-4 max-mobile:mb-0">
          {date.getDate()}
        </span>
        <span className="type-heading">{formatMonth(date)}</span>
      </div>
      <div className="flex h-full flex-col justify-center p-12 max-mobile:p-6">
        <h3 className="type-nav mt-0 mb-1 max-mobile:text-lg">{item.title}</h3>
        <p className="m-0 mb-4 text-sm text-aside-text uppercase max-mobile:text-xs">
          {`${formatLongDate(date)} om ${formatTime(date)}`}
        </p>
        <p
          ref={textRef}
          className="type-paragraph m-0 mb-4 min-h-[88px] overflow-hidden p-0 whitespace-pre-line transition-[max-height,color] duration-400 ease-chiro max-mobile:text-sm"
          style={{ maxHeight }}
        >
          {item.description}
        </p>
        <button
          aria-expanded={expanded}
          onClick={toggle}
          className="flex items-center text-lg text-aside-text underline [&_svg]:mt-1 [&_svg]:ml-2 [&_svg]:h-[11px] [&_svg]:w-auto [&_svg]:fill-aside-text [&_svg]:transition-[fill,rotate] [&_svg]:duration-200 [&_svg]:ease-chiro"
        >
          <span>{`${expanded ? "Minder" : "Meer"} lezen`}</span>
          <Chevron className={expanded ? "-rotate-90" : "rotate-90"} />
        </button>
      </div>
    </article>
  )
}

/** Month-by-month activity calendar, starting at the current month. */
export function Calendar({
  items,
  buildDay,
}: {
  items: CalendarItem[]
  buildDay: string
}) {
  const today = useToday(buildDay)
  // Months ahead of the current one (you can't browse into the past)
  const [offset, setOffset] = useState(0)
  const currentMonth = monthIndex(new Date(today))
  const shownMonth = currentMonth + offset
  const shownDate = new Date(Math.floor(shownMonth / 12), shownMonth % 12, 1)

  const monthItems = items.filter(
    item => monthIndex(new Date(item.date)) === shownMonth,
  )
  const hasItemsFor = (chiro: "jokonta" | "allegro") =>
    monthItems.some(
      item => item.audience === "itterbeek" || item.audience === chiro,
    )
  const canGoBack = offset > 0

  return (
    <section className="col-[3/span_10] mb-24 flex flex-col items-center max-tablet:col-[2/span_12] max-tablet:mb-16">
      <nav className="mb-12 flex w-full max-w-[570px] flex-col items-center rounded-xs bg-background-muted py-6 text-sm leading-none font-bold text-paragraph uppercase max-mobile:mb-6">
        <div className="flex items-center [&_path]:fill-paragraph [&_svg]:h-9 [&_svg]:w-auto">
          <button
            aria-label="Vorige maand"
            disabled={!canGoBack}
            className="cursor-pointer disabled:cursor-default"
            onClick={() => setOffset(Math.max(0, offset - 1))}
          >
            <Chevron
              className={cx(
                "rotate-180",
                !canGoBack && "[&_path]:fill-accent-gray!",
              )}
            />
          </button>
          <div className="mx-9 w-[200px] text-center text-4xl max-mobile:m-0 max-mobile:text-2xl">
            {formatMonth(shownDate)}
            <div className="text-lg">{shownDate.getFullYear()}</div>
          </div>
          <button
            aria-label="Volgende maand"
            onClick={() => setOffset(offset + 1)}
          >
            <Chevron />
          </button>
        </div>
      </nav>
      <div className="flex w-full flex-col gap-2">
        {monthItems.map(item => (
          <CalendarEntry key={item.id} item={item} />
        ))}
      </div>
      <p
        className={cx(
          hasItemsFor("jokonta") && "jokonta:hidden",
          hasItemsFor("allegro") && "allegro:hidden",
        )}
      >
        Er staat niets gepland deze maand.
      </p>
    </section>
  )
}
