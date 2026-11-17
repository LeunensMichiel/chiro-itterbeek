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
      <Navbar open={open} onToggle={() => setOpenOn(open ? null : pathname)} />
      <main
        className="grid min-h-full w-full flex-auto grid-cols-site overflow-x-hidden pt-[100px] max-mobile:pt-[72px]"
        aria-hidden={open || undefined}
      >
        {children}
      </main>
      {footer}
    </>
  )
}
