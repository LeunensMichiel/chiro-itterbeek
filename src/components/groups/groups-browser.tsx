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

  const navItem = (isActive: boolean) =>
    cx(
      "size-[52px] rounded-full border-4 border-solid transition-[border-color,background] duration-200 ease-chiro max-mobile:size-[38px]",
      isActive ? "border-accent-gray" : "border-background-muted",
    )

  return (
    <section className="col-[3/span_10] mb-24 flex flex-col items-center max-tablet:col-[2/span_12] max-tablet:mb-16">
      <nav className="mb-12 flex w-full max-w-[570px] justify-around rounded-xs bg-background-muted p-6 max-mobile:mb-6 max-mobile:flex-wrap max-mobile:px-2">
        {groups.map(({ id, color, name }, index) => (
          <button
            key={id}
            className={navItem(index === active)}
            style={{ background: groupColor(color) }}
            onClick={() => setActive(index)}
            aria-label={name}
            aria-pressed={index === active}
          />
        ))}
        <button
          className={navItem(showLeiding)}
          style={{ background: groupColor() }}
          onClick={() => setActive(LEIDING)}
          aria-label="Leiding"
          aria-pressed={showLeiding}
        />
      </nav>
      {showLeiding ? leiding : groups[active]?.view}
    </section>
  )
}
