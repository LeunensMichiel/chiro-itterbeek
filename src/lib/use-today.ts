"use client"

import { useSyncExternalStore } from "react"

import { localDay } from "./format"

const subscribe = () => () => {}

/**
 * Today's date in the browser ("YYYY-MM-DD"). The static HTML is rendered
 * with the build date, then hydration switches to the visitor's real date, so
 * date-dependent bits (calendar month, ages) stay correct between builds.
 */
export const useToday = (buildDay: string) =>
  useSyncExternalStore(
    subscribe,
    () => localDay(new Date()),
    () => buildDay,
  )
