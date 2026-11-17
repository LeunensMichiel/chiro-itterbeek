import { cx } from "@/lib/cx"

import Facebook from "./icons/facebook"
import Instagram from "./icons/instagram"
import LinkLogo from "./icons/link"

const OTHER_LINKS = [
  { href: "https://chiro.be/", label: "Chiro Nationaal" },
  { href: "https://www.debanier.be/", label: "De Banier" },
  { href: "https://jongeren.jind.be/", label: "JIND" },
  { href: "https://www.dilbeek.be/", label: "Gemeente Dilbeek" },
]

const external = { target: "_blank", rel: "noopener noreferrer" } as const

/**
 * Facebook, the chosen chiro's Instagram, and a pop-up with other links that
 * opens while its button has focus. The footer shows it on the page
 * background, the contact card on a muted one (`onMuted`).
 */
export function SocialLinks({
  onMuted = false,
  className,
}: {
  onMuted?: boolean
  className?: string
}) {
  const surface = onMuted ? "bg-border" : "bg-background-muted"
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
        className={cx("social-icon ml-2 jokonta:hidden", show)}
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
      <div
        className={cx(
          "group relative ml-2 flex",
          onMuted ? "justify-start" : "justify-end",
        )}
      >
        <button
          className="social-icon group-focus-within:[--social-circle:var(--color-invisible-text)] group-active:[--social-circle:var(--color-invisible-text)] group-focus-within:[&_path]:fill-styled-header-text"
          aria-label="Overige links"
          aria-haspopup="true"
        >
          <LinkLogo />
        </button>
        <div
          className={cx(
            "invisible absolute bottom-12 z-10 flex flex-col rounded-xs p-6 text-left opacity-0 transition-opacity duration-200 ease-chiro group-focus-within:visible group-focus-within:opacity-100 group-active:visible group-active:opacity-100",
            surface,
          )}
        >
          {OTHER_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="p-1 font-bold whitespace-nowrap text-aside-text no-underline transition-colors duration-300 ease-in-out hover:text-chiro"
              {...external}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
