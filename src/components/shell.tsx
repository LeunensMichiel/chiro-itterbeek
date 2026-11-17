"use client"

import { usePathname } from "next/navigation"
import { useState, type ReactNode } from "react"

import { Navbar } from "./navbar"

/** Page frame: navigation, the 14-column page grid and the footer. */
export function Shell({
  children,
  footer,
}: {
  children: ReactNode
  footer: ReactNode
}) {
  const pathname = usePathname()
  // The mobile menu is open for the page it was opened on, so navigating
  // closes it.
  const [openOn, setOpenOn] = useState<string | null>(null)
  const open = openOn === pathname

  return (
    <>
      <a
        href="#main"
        className="sr-only z-100000 rounded-xs bg-chiro px-6 py-3 font-bold text-styled-header-text focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Naar de inhoud
      </a>
      <Navbar open={open} onToggle={() => setOpenOn(open ? null : pathname)} />
      <main
        id="main"
        tabIndex={-1}
        className="grid min-h-full w-full flex-auto grid-cols-site content-start overflow-x-hidden pt-[100px] outline-none max-mobile:pt-[72px]"
        aria-hidden={open || undefined}
      >
        {children}
      </main>
      {footer}
    </>
  )
}
