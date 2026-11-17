"use client"

import { toggleChiro } from "@/lib/use-preferences"

export function SwitchChiroButton({ label }: { label: string }) {
  return (
    <button
      className="underline underline-offset-2 transition-colors hover:text-chiro-ink"
      onClick={toggleChiro}
    >
      {label}
    </button>
  )
}
