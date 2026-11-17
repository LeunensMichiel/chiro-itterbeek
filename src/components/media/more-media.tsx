import Link from "next/link"

import Chevron from "@/components/icons/chevron"
import { cx } from "@/lib/cx"

import { chevronAfter } from "../chevron-link-styles"

const LINKS = [
  { href: "/media/krantjes/", label: "Bekijk alle krantjes" },
  { href: "/media/albums/", label: "Bekijk alle foto's" },
  { href: "/media/videos/", label: "Bekijk alle filmpjes" },
  { href: "/media/documenten/", label: "Overige documenten" },
]

export function MoreMedia() {
  return (
    <nav className="col-[2/span_3] mb-24 flex h-[315px] flex-col rounded-xs border border-solid border-border bg-background-muted-2 max-tablet:col-[2/span_4] max-tablet:mr-4 max-tablet:mb-9 max-tablet:h-[280px] max-mobile:col-[2/span_10] max-mobile:h-[260px]">
      <h2 className="mt-0 mb-6 block self-start rounded-xs bg-chiro px-9 py-4 text-lg text-styled-header-text uppercase max-tablet:mb-2 max-mobile:px-4 max-mobile:py-2 max-mobile:text-sm">
        Meer Media!
      </h2>
      <div className="px-6 py-4">
        {LINKS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={cx(
              chevronAfter,
              "mb-4 text-lg text-paragraph [&_path]:fill-aside-text",
            )}
          >
            <span>{label}</span>
            <Chevron />
          </Link>
        ))}
        <small className="block text-xs text-invisible-text max-tablet:text-[10px]">
          Wil je meer up to date blijven? Bezoek dan zeker ook onze instagram en
          facebook!
        </small>
      </div>
    </nav>
  )
}
