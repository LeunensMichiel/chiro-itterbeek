"use client"

import { useState, type ReactNode } from "react"

import { cx } from "@/lib/cx"

import { groupColor } from "./group-styles"

/**
 * Round color buttons to switch between the age groups, with the leiding as
 * the last "group". Shows the leiding when a chiro has no age groups.
 */
export function GroupsBrowser({
  groups,
  leiding,
}: {
  groups: { id: string; color: string; name: string; view: ReactNode }[]
  leiding: ReactNode
}) {
  const [active, setActive] = useState(0)
  const LEIDING = groups.length
  const showLeiding = active === LEIDING || !groups[active]

  const options = [
    ...groups.map(({ id, color, name }, index) => ({
      id,
      name,
      background: groupColor(color),
      isActive: index === active && !showLeiding,
      select: () => setActive(index),
    })),
    {
      id: "leiding",
      name: "Leiding",
      background: groupColor(),
      isActive: showLeiding,
      select: () => setActive(LEIDING),
    },
  ]

  return (
    <section className="col-[3/span_10] mb-24 flex flex-col items-center max-tablet:col-[2/span_12] max-tablet:mb-16">
      {/* A picker with only the leiding to pick would be pointless */}
      {groups.length > 0 && (
        <nav
          aria-label="Leeftijdsgroepen"
          className="mb-12 flex w-full max-w-[680px] flex-wrap justify-around gap-y-4 rounded-xs bg-background-muted px-4 py-6 max-mobile:mb-6 max-mobile:px-2"
        >
          {options.map(({ id, name, background, isActive, select }) => (
            <button
              key={id}
              type="button"
              onClick={select}
              aria-pressed={isActive}
              className="group flex w-[76px] flex-col items-center gap-2 max-mobile:w-[64px]"
            >
              <span
                className={cx(
                  "block size-[52px] rounded-full border-4 border-solid transition-[border-color,scale] duration-200 ease-chiro group-hover:scale-105 max-mobile:size-[40px]",
                  isActive ? "border-header" : "border-background-muted",
                )}
                style={{ background }}
              />
              <span
                className={cx(
                  "text-xs leading-tight font-bold uppercase transition-colors",
                  isActive ? "text-header" : "text-aside-text",
                )}
              >
                {name}
              </span>
            </button>
          ))}
        </nav>
      )}
      {showLeiding ? leiding : groups[active]?.view}
    </section>
  )
}
