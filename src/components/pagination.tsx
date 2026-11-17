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

/** Previous / page number / next, for the paginated lists. */
export function Pagination({
  basePath,
  page,
  pageCount,
}: {
  basePath: string
  page: number
  pageCount: number
}) {
  return (
    <nav className="mx-auto mb-12 flex w-full max-w-[570px] items-center justify-center rounded-xs bg-background-muted py-4 text-sm leading-none font-bold text-paragraph uppercase max-mobile:mb-6">
      <PageLink
        href={pagePath(basePath, page - 1)}
        disabled={page <= 1}
        label="Vorige pagina"
        className="[&_svg]:rotate-180"
      />
      <div className="mx-6 text-2xl leading-none">{page}</div>
      <PageLink
        href={pagePath(basePath, page + 1)}
        disabled={page >= pageCount}
        label="Volgende pagina"
      />
    </nav>
  )
}
