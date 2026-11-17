import Link from "next/link"

import { pagePath } from "@/lib/pagination"
import { cx } from "@/lib/cx"

import Chevron from "./icons/chevron"

function PageLink({
  href,
  disabled,
  label,
  className,
}: {
  href: string
  disabled: boolean
  label: string
  className?: string
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : undefined}
      className={cx(
        "[&_path]:transition-[fill] [&_svg]:h-[18px] [&_svg]:w-auto",
        disabled
          ? "pointer-events-none [&_path]:fill-accent-gray"
          : "[&_path]:fill-paragraph",
        className,
      )}
    >
      <Chevron />
    </Link>
  )
}

/**
 * Previous / page number / next, for the paginated lists. Lists put it above
 * and below the items (`position`); it isn't shown when there's one page.
 */
export function Pagination({
  basePath,
  page,
  pageCount,
  position = "top",
}: {
  basePath: string
  page: number
  pageCount: number
  position?: "top" | "bottom"
}) {
  if (pageCount <= 1) return null
  return (
    <nav
      aria-label={position === "top" ? "Paginering" : "Paginering onderaan"}
      className={cx(
        "mx-auto flex w-full max-w-[570px] items-center justify-center rounded-xs bg-background-muted py-4 text-sm leading-none font-bold text-paragraph uppercase",
        position === "top" ? "mb-12 max-mobile:mb-6" : "mt-12 max-mobile:mt-6",
      )}
    >
      <PageLink
        href={pagePath(basePath, page - 1)}
        disabled={page <= 1}
        label="Vorige pagina"
        className="[&_svg]:rotate-180"
      />
      <div className="mx-6 text-2xl leading-none tabular-nums">
        {page}
        <span className="text-base text-aside-text">{` / ${pageCount}`}</span>
      </div>
      <PageLink
        href={pagePath(basePath, page + 1)}
        disabled={page >= pageCount}
        label="Volgende pagina"
      />
    </nav>
  )
}
