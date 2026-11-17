"use client"

import { useId, useState, type FocusEvent } from "react"

import { cx } from "@/lib/cx"

import LinkLogo from "./icons/link"

const OTHER_LINKS = [
  { href: "https://chiro.be/", label: "Chiro Nationaal" },
  { href: "https://www.debanier.be/", label: "De Banier" },
  { href: "https://jongeren.jind.be/", label: "JIND" },
  { href: "https://www.dilbeek.be/", label: "Gemeente Dilbeek" },
]

/**
 * A round link button with a pop-up of other useful links. It toggles on tap
 * (iOS doesn't focus buttons, so a focus-only pop-up never opened there) and
 * closes on Escape or when focus leaves it.
 */
export function OtherLinks({
  onMuted,
  className,
}: {
  onMuted: boolean
  className?: string
}) {
  const [open, setOpen] = useState(false)
  const id = useId()

  const closeOnBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false)
  }

  return (
    <div
      className={cx("relative ml-2 flex", className)}
      onBlur={closeOnBlur}
      onKeyDown={event => {
        if (event.key === "Escape") setOpen(false)
      }}
    >
      <button
        type="button"
        className={cx(
          "social-icon",
          open &&
            "[--social-circle:var(--color-chiro-dark)] [&_path]:fill-styled-header-text!",
        )}
        aria-label="Overige links"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen(!open)}
      >
        <LinkLogo />
      </button>
      <div
        id={id}
        className={cx(
          "absolute bottom-12 z-10 flex flex-col rounded-xs p-6 text-left shadow-container transition-[opacity,visibility] duration-200 ease-chiro",
          onMuted ? "left-0 bg-border" : "right-0 bg-background-muted",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        {OTHER_LINKS.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 font-bold whitespace-nowrap text-aside-text no-underline transition-colors duration-300 ease-in-out hover:text-chiro-ink"
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  )
}
