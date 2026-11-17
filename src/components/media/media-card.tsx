import Chevron from "@/components/icons/chevron"
import { audienceBg, audienceLabel, type Audience } from "@/lib/chiro"
import { cx } from "@/lib/cx"

import { chevronAfter } from "../chevron-link-styles"

/** Card for an album, krantje or document: who it's for, title and a link. */
export function MediaCard({
  audience,
  meta,
  title,
  href,
  linkLabel,
  ariaLabel,
}: {
  audience: Audience
  meta?: string
  title: string
  href: string
  linkLabel: string
  ariaLabel: string
}) {
  return (
    <div className="flex h-full w-full flex-col rounded-xs border border-solid border-border bg-background-muted-2">
      <div
        className={cx(
          "mb-4 flex w-[140px] items-center justify-center rounded-xs px-9 py-4 text-lg leading-none font-bold text-styled-header-text uppercase max-tablet:mb-0 max-mobile:w-auto max-mobile:self-start max-mobile:px-4 max-mobile:py-2 max-mobile:text-sm",
          audienceBg[audience],
        )}
      >
        {audienceLabel(audience)}
      </div>
      <div className="flex grow flex-col p-4">
        {meta && (
          <small className="mb-1 block text-xs text-invisible-text max-mobile:text-[9px]">
            {meta}
          </small>
        )}
        <div className="mb-4 text-lg leading-none font-bold break-all text-header max-mobile:text-base">
          {title}
        </div>
        <a
          aria-label={ariaLabel}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cx(
            chevronAfter,
            "mt-auto mb-4 text-sm text-aside-text max-tablet:mb-2 max-mobile:mb-0 [&_path]:fill-aside-text",
          )}
        >
          <span>{linkLabel}</span>
          <Chevron />
        </a>
      </div>
    </div>
  )
}
