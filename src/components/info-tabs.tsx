"use client"

import { useState, type ReactNode } from "react"

import { cx } from "@/lib/cx"

export type InfoPanel = {
  id: string
  label: string
  image: ReactNode
  content: ReactNode
}

export function InfoTabs({ panels }: { panels: InfoPanel[] }) {
  const [active, setActive] = useState(0)
  const panel = panels[active] ?? panels[0]
  if (!panel) return null

  return (
    <section className="col-[3/span_10] mb-12 flex flex-col items-center max-tablet:col-[2/span_12] max-tablet:mb-6">
      <nav className="mb-12 flex w-full max-w-[570px] justify-around rounded-xs bg-background-muted p-9 max-mobile:mb-6 max-mobile:px-2">
        {panels.map(({ id, label }, index) => (
          <button
            key={id}
            onClick={() => setActive(index)}
            aria-pressed={index === active}
            className={cx(
              "type-nav transition-colors duration-200 ease-in-out hover:text-chiro-light max-mobile:text-lg max-mobile-s:text-sm",
              index === active ? "text-chiro" : "text-header",
            )}
          >
            {label}
          </button>
        ))}
      </nav>
      <article className="flex w-full flex-col items-center">
        {/* keyed, so the new image fades in */}
        <div
          key={panel.id}
          className="w-full transition-opacity duration-200 ease-chiro starting:opacity-0"
        >
          {panel.image}
        </div>
        <div className="rich-text w-full max-w-[850px] -translate-y-12 rounded-xs bg-background-muted-2 p-16 shadow-container max-tablet:max-w-[650px] max-mobile:p-6">
          {panel.content}
        </div>
      </article>
    </section>
  )
}
