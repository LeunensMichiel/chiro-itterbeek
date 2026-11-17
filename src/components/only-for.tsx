import type { ReactNode } from "react"

import type { Chiro } from "@/lib/chiro"

const visibility = {
  jokonta: "hidden jokonta:contents",
  allegro: "hidden allegro:contents",
  /** Before a chiro is chosen (the choose screen) */
  unchosen: "hidden unchosen:contents",
  /** Once a chiro is chosen */
  chosen: "contents unchosen:hidden",
} satisfies Record<Chiro | "unchosen" | "chosen", string>

/**
 * Shows its children only for the given chiro (or choice state). Content for
 * both chiros is in the static HTML; CSS shows the right one, so there's no
 * flash after load. `display: contents` keeps the children in the parent's
 * grid or flex layout.
 */
export function OnlyFor({
  chiro,
  children,
}: {
  chiro: keyof typeof visibility
  children: ReactNode
}) {
  return <div className={visibility[chiro]}>{children}</div>
}
