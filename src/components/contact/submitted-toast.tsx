"use client"

import { useSearchParams } from "next/navigation"

/** Confirmation after Netlify Forms redirects back to /contact/?submit=ok */
export function SubmittedToast() {
  const submitted = useSearchParams().get("submit") === "ok"
  if (!submitted) return null
  return (
    <div
      role="status"
      className="fixed bottom-0 left-1/2 z-1000 w-[calc(100%-2rem)] max-w-[360px] -translate-x-1/2 animate-toast rounded-xs bg-background-muted-2 px-6 py-4 text-center text-header opacity-0 shadow-container motion-reduce:bottom-[30px] motion-reduce:animate-none motion-reduce:opacity-100"
    >
      Bericht verzonden! De leiding antwoordt je zo snel mogelijk.
    </div>
  )
}
