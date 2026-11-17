"use client"

import dynamic from "next/dynamic"

// Mapbox only runs in the browser, and only this page needs it.
const ContactMap = dynamic(() => import("./contact-map"), { ssr: false })

export function MapLoader() {
  return (
    <aside className="relative col-[2/span_7] mb-16 rounded-xs max-tablet:col-[2/span_6] max-tablet:border max-tablet:border-r-0 max-tablet:border-solid max-tablet:border-border max-mobile:col-[2/span_12] max-mobile:mb-12 max-mobile:h-[200px] max-mobile:border-none max-mobile:px-2 [&_div]:rounded-xs">
      <ContactMap />
    </aside>
  )
}
