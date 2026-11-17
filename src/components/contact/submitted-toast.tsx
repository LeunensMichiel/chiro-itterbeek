"use client"

import { useSearchParams } from "next/navigation"

/** Confirmation after Netlify Forms redirects back to /contact/?submit=ok */
export function SubmittedToast() {
  const submitted = useSearchParams().get("submit") === "ok"
  if (!submitted) return null
  return (
    <div
      role="status"
      className="fixed bottom-0 left-1/2 z-1000 w-full max-w-[250px] -translate-x-1/2 animate-toast rounded-xs bg-background-muted-2 p-2 text-center text-header opacity-0 shadow-container"
    >
      Bericht succesvol verzonden!
    </div>
  )
}
