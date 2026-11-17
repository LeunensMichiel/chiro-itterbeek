"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cx } from "@/lib/cx"
import { toggleChiro, toggleColorMode } from "@/lib/use-preferences"

import Chiro from "./icons/chiro"
import Dark from "./icons/dark"
import Facebook from "./icons/facebook"
import Female from "./icons/female"
import Instagram from "./icons/instagram"
import Light from "./icons/light"
import Male from "./icons/male"

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/nieuws/", label: "Nieuws" },
  { href: "/media/", label: "Media" },
  { href: "/contact/", label: "Contact" },
]

const external = { target: "_blank", rel: "noopener noreferrer" } as const

const isActive = (pathname: string, href: string) => {
  const path = pathname.endsWith("/") ? pathname : `${pathname}/`
  return href === "/" ? path === "/" : path.startsWith(href)
}

function Logo({ className }: { className?: string }) {
  return (
    <div className={cx("flex items-center", className)}>
      <Link
        href="/"
        className="type-nav flex items-center transition-colors duration-300 ease-in-out hover:text-chiro-ink max-tablet:text-base max-mobile:text-lg"
      >
        <Chiro className="mr-4 h-12 w-auto max-mobile:mx-4 max-mobile:h-9" />
        <span>Chiro Itterbeek</span>
      </Link>
    </div>
  )
}

// Round icon buttons and links on the right of the navigation
const socialBase =
  "cursor-pointer items-center [&_circle]:transition-[fill] [&_circle]:duration-300 [&_circle]:ease-out [&_path]:transition-[fill] [&_path]:duration-300 [&_path]:ease-out [&_svg]:h-9 [&_svg]:w-auto hover:[&_circle]:fill-chiro-dark hover:[&_path]:fill-styled-header-text max-tablet:[&_svg]:h-8 max-mobile:[&_svg]:h-9"
const socialItem = `${socialBase} [&_circle]:fill-background-muted [&_path]:fill-header`
// The visible one of two stacked icons is revealed with a growing circle
const reveal = "[&_path]:animate-reveal"

export function Navbar({
  open,
  onToggle,
}: {
  open: boolean
  onToggle: () => void
}) {
  const pathname = usePathname()

  return (
    <>
      {/* Top bar with the hamburger, mobile only */}
      <nav className="fixed z-10000 hidden h-[72px] w-full items-center justify-between bg-background shadow-nav max-mobile:flex">
        <Logo />
        <button
          className="hamburger"
          type="button"
          onClick={onToggle}
          aria-label="Menu"
          aria-controls="navigation"
          aria-expanded={open}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
      </nav>

      <header
        id="navigation"
        className={cx(
          "fixed z-100 grid h-[100px] w-full grid-cols-site bg-background shadow-nav",
          "max-mobile:inset-x-0 max-mobile:top-[72px] max-mobile:bottom-0 max-mobile:flex max-mobile:h-auto max-mobile:flex-col max-mobile:overflow-y-auto max-mobile:transition-[background-color,translate,visibility] max-mobile:duration-400 max-mobile:ease-chiro",
          // Hidden, not just moved aside, so the closed menu is out of the tab order
          !open && "max-mobile:invisible max-mobile:-translate-x-full",
        )}
      >
        <Logo className="col-[2/span_3] max-mobile:hidden" />

        <nav className="col-[6/span_4] flex items-center justify-self-center max-mobile:flex-auto max-mobile:flex-col max-mobile:justify-center unchosen:invisible">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cx(
                "type-nav flex items-center px-3 py-2 transition-colors duration-300 ease-in-out hover:text-chiro-ink max-tablet:px-2 max-tablet:text-base max-mobile:mb-2 max-mobile:px-0 max-mobile:text-4xl max-mobile:last:mb-0",
                isActive(pathname, href) && "text-chiro-ink",
              )}
              aria-current={isActive(pathname, href) ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>

        <nav className="col-[11/span_3] flex items-center justify-self-end max-mobile:min-h-24 max-mobile:flex-wrap max-mobile:justify-center max-mobile:pb-6">
          <button
            className={cx(
              socialBase,
              "flex gap-3 max-mobile:mb-6 max-mobile:basis-full max-mobile:justify-center unchosen:hidden [&_circle]:fill-chiro [&_path]:fill-styled-header-text",
            )}
            onClick={toggleChiro}
            title="Wissel tussen Jokonta (jongens) en Allegro (meisjes)"
          >
            <Male className={cx("hidden jokonta:block", reveal)} />
            <Female className={cx("jokonta:hidden", reveal)} />
            {/* Spelled out in the mobile menu, a tooltip on desktop */}
            <span className="type-nav sr-only text-base max-mobile:not-sr-only">
              <span className="jokonta:hidden">Naar Jokonta (jongens)</span>
              <span className="hidden jokonta:inline">
                Naar Allegro (meisjes)
              </span>
            </span>
          </button>
          <button
            className={cx(socialItem, "ml-2 flex max-mobile:ml-0")}
            onClick={toggleColorMode}
            aria-label="Verwisselen van kleurenthema (donker of licht)"
          >
            <Dark className={cx("hidden dark:block", reveal)} />
            <Light className={cx("dark:hidden", reveal)} />
          </button>
          <div className="mx-3 h-[18px] w-[2px] rounded-xs bg-background-muted" />
          <a
            className={cx(socialItem, "flex")}
            aria-label="Facebook Chiro Itterbeek"
            href="https://www.facebook.com/ChiroItterbeek"
            {...external}
          >
            <Facebook />
          </a>
          <a
            className={cx(
              socialItem,
              "ml-2 flex max-mobile:ml-4 jokonta:hidden unchosen:hidden",
            )}
            aria-label="Instagram Chiro Allegro"
            href="https://www.instagram.com/chiro_allegro/"
            {...external}
          >
            <Instagram />
          </a>
          <a
            className={cx(
              socialItem,
              "ml-2 hidden max-mobile:ml-4 jokonta:flex",
            )}
            aria-label="Instagram Chiro Jokonta"
            href="https://www.instagram.com/chirojokonta/"
            {...external}
          >
            <Instagram />
          </a>
        </nav>
      </header>
    </>
  )
}
