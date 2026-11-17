import { cx } from "@/lib/cx"

import Facebook from "./icons/facebook"
import Instagram from "./icons/instagram"
import { OtherLinks } from "./other-links"

const external = { target: "_blank", rel: "noopener noreferrer" } as const

/**
 * Facebook, the chosen chiro's Instagram (none before a chiro is chosen), and
 * a pop-up with other links. The footer shows it on the page
 * background, the contact card on a muted one (`onMuted`).
 */
export function SocialLinks({
  onMuted = false,
  className,
}: {
  onMuted?: boolean
  className?: string
}) {
  // The contact card's icons are blocks (a bit taller: inline svg + line height)
  const show = onMuted ? "block" : "flex"
  const showForJokonta = onMuted ? "jokonta:block" : "jokonta:flex"
  return (
    <nav
      className={cx(
        "flex",
        onMuted && "[--social-circle:var(--color-border)]",
        className,
      )}
    >
      <a
        className={cx("social-icon", show)}
        aria-label="Facebook Chiro Itterbeek"
        href="https://www.facebook.com/ChiroItterbeek"
        {...external}
      >
        <Facebook />
      </a>
      <a
        className={cx("social-icon ml-2 jokonta:hidden unchosen:hidden", show)}
        aria-label="Instagram Chiro Allegro"
        href="https://www.instagram.com/chiro_allegro/"
        {...external}
      >
        <Instagram />
      </a>
      <a
        className={cx("social-icon ml-2 hidden", showForJokonta)}
        aria-label="Instagram Chiro Jokonta"
        href="https://www.instagram.com/chirojokonta/"
        {...external}
      >
        <Instagram />
      </a>
      <OtherLinks onMuted={onMuted} />
    </nav>
  )
}
