"use client"

import { useLayoutEffect, useRef, useState } from "react"

import type { Audience } from "@/lib/chiro"
import type { CalendarItem } from "@/lib/contentful"
import { cx } from "@/lib/cx"
import { formatMonth, formatTime, formatWeekday } from "@/lib/format"
import { useToday } from "@/lib/use-today"

import Chevron from "./icons/chevron"

const COLLAPSED = 88

const visibleFor: Record<Audience, string> = {
  itterbeek: "flex",
  jokonta: "hidden jokonta:flex",
  allegro: "hidden allegro:flex",
}

/** Months since year 0, so months can be compared and stepped through. */
const monthIndex = (date: Date) => date.getFullYear() * 12 + date.getMonth()

/** Sundays without chiro are listed too; they get a quieter card. */
const isNoChiro = (item: CalendarItem) => /geen chiro/i.test(item.title)

function CalendarEntry({ item, today }: { item: CalendarItem; today: string }) {
  const [expanded, setExpanded] = useState(false)
  const [maxHeight, setMaxHeight] = useState(COLLAPSED)
  // Only texts that don't fit get a "Meer lezen" button
  const [overflows, setOverflows] = useState(false)
  const textRef = useRef<HTMLParagraphElement>(null)
  const date = new Date(item.date)
  const isPast = item.date.slice(0, 10) < today
  const noChiro = isNoChiro(item)

  useLayoutEffect(() => {
    const text = textRef.current
    if (!text) return
    const measure = () => setOverflows(text.scrollHeight > COLLAPSED + 1)
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(text)
    return () => observer.disconnect()
  }, [])

  return (
    <article
      className={cx(
        "w-full rounded-xs border border-solid transition-[border-color,opacity] duration-400 ease-chiro max-mobile:flex-col starting:opacity-0",
        expanded ? "border-border-muted" : "border-border",
        isPast && "opacity-60",
        visibleFor[item.audience],
      )}
    >
      <div className="flex min-w-[260px] flex-col items-center justify-center bg-background-muted max-tablet:min-w-[200px] max-mobile:flex-row max-mobile:p-2">
        <span
          className={cx(
            "mb-1 font-alt text-[96px] leading-none max-tablet:text-7xl max-mobile:mr-4 max-mobile:mb-0",
            noChiro ? "text-aside-text" : "text-chiro-ink",
          )}
        >
          {date.getDate()}
        </span>
        <span className="type-heading">{formatMonth(date)}</span>
      </div>
      <div className="flex h-full flex-col justify-center p-12 max-mobile:p-6">
        <h3 className="type-nav mt-0 mb-1 max-mobile:text-lg">{item.title}</h3>
        <p className="m-0 mb-4 text-sm text-aside-text uppercase max-mobile:text-xs">
          {isPast
            ? `${formatWeekday(date)} · voorbij`
            : noChiro
              ? formatWeekday(date)
              : `${formatWeekday(date)} · ${formatTime(date)}`}
        </p>
        {item.description && (
          <p
            ref={textRef}
            className="type-paragraph m-0 overflow-hidden p-0 whitespace-pre-line transition-[max-height,color] duration-400 ease-chiro max-mobile:text-sm"
            style={{ maxHeight }}
          >
            {item.description}
          </p>
        )}
        {(overflows || expanded) && (
          <button
            aria-expanded={expanded}
            onClick={() => {
              setMaxHeight(
                expanded ? COLLAPSED : (textRef.current?.scrollHeight ?? 0),
              )
              setExpanded(!expanded)
            }}
            className="mt-4 flex items-center self-start text-lg text-aside-text underline underline-offset-2 [&_svg]:mt-1 [&_svg]:ml-2 [&_svg]:h-[11px] [&_svg]:w-auto [&_svg]:fill-aside-text [&_svg]:transition-[fill,rotate] [&_svg]:duration-200 [&_svg]:ease-chiro"
          >
            <span>{`${expanded ? "Minder" : "Meer"} lezen`}</span>
            <Chevron className={expanded ? "-rotate-90" : "rotate-90"} />
          </button>
        )}
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
  // …nor past the last month that has something planned
  const lastMonth = Math.max(
    currentMonth,
    ...items.map(item => monthIndex(new Date(item.date))),
  )
  const canGoForward = shownMonth < lastMonth

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
            disabled={!canGoForward}
            className="cursor-pointer disabled:cursor-default"
            onClick={() => setOffset(offset + 1)}
          >
            <Chevron
              className={cx(!canGoForward && "[&_path]:fill-accent-gray!")}
            />
          </button>
        </div>
      </nav>
      <div className="flex w-full flex-col gap-2">
        {monthItems.map(item => (
          <CalendarEntry key={item.id} item={item} today={today} />
        ))}
      </div>
      <p
        className={cx(
          "type-paragraph m-0 w-full rounded-xs border border-dashed border-border-muted p-12 text-center text-aside-text max-mobile:p-6",
          hasItemsFor("jokonta") && "jokonta:hidden",
          hasItemsFor("allegro") && "allegro:hidden",
        )}
      >
        {canGoForward
          ? "Er staat niets gepland deze maand. Kijk eens bij de volgende maand!"
          : "Er staat nog niets gepland. Het programma volgt snel!"}
      </p>
    </section>
  )
}
