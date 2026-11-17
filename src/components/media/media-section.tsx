import Link from "next/link"
import type { ReactNode } from "react"

import { backLink } from "@/components/chevron-link-styles"
import Chevron from "@/components/icons/chevron"
import { cx } from "@/lib/cx"

/**
 * A titled media section; list pages get a "Ga terug" link to /media/, and
 * their title is the page's h1.
 */
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
  const Heading = withBackLink ? "h1" : "h2"
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
      <Heading className="type-alt m-0 mb-12 text-center max-mobile:mb-9 max-mobile:text-4xl">
        {title}
      </Heading>
      {children}
    </section>
  )
}

export const cardGrid =
  "grid grid-cols-3 gap-4 max-mobile:grid-cols-2 max-mobile:gap-3"

export function Disclaimer() {
  return (
    <p className="col-[2/span_12] mb-6 text-center text-sm text-invisible-text">
      De video&apos;s staan op Facebook en YouTube, en gebruiken daarom hun
      cookies.
    </p>
  )
}
