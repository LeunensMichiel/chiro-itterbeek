import Link from "next/link"
import type { ReactNode } from "react"

import { backLink } from "@/components/chevron-link-styles"
import Chevron from "@/components/icons/chevron"
import { cx } from "@/lib/cx"

/** A titled media section; list pages get a "Ga terug" link to /media/. */
export function MediaSection({
  title,
  kind,
  withBackLink = false,
  children,
}: {
  title: string
  kind: "videos" | "cards"
  withBackLink?: boolean
  children: ReactNode
}) {
  return (
    <section
      className={cx(
        "col-[2/span_12] mt-12 mb-24 flex flex-col max-mobile:mt-9",
        kind === "videos"
          ? "max-tablet:mb-9 max-mobile:mb-6"
          : "max-tablet:mb-12",
      )}
    >
      {withBackLink && (
        <Link href="/media/" className={backLink}>
          <Chevron />
          <span>Ga terug</span>
        </Link>
      )}
      <h2 className="type-alt m-0 mb-12 text-center max-mobile:mb-9 max-mobile:text-4xl">
        {title}
      </h2>
      {children}
    </section>
  )
}

export const cardGrid =
  "grid grid-cols-3 gap-4 max-mobile:grid-cols-2 max-mobile:gap-3"

export function Disclaimer() {
  return (
    <p className="col-[2/span_12] mb-6 text-center text-xs text-border">
      Disclaimer: de video&apos;s maken gebruik van externe cookies, aangezien
      deze op Facebook en Youtube geüpload staan.
    </p>
  )
}
