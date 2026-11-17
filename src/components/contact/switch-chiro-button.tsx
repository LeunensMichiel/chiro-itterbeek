"use client"

import { toggleChiro } from "@/lib/use-preferences"

export function SwitchChiroButton({ label }: { label: string }) {
  return (
    <button
      className="underline"
      aria-label="Wisselen van Chiro (Jongens of Meisjes)"
      onClick={toggleChiro}
    >
      {label}
    </button>
  )
}
