"use client"

import { useSyncExternalStore } from "react"

import { CHIRO_STORAGE_KEY, THEME_STORAGE_KEY, type Chiro } from "./chiro"

export type ColorMode = "light" | "dark"

const root = () => document.documentElement

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange)
  observer.observe(root(), {
    attributes: true,
    attributeFilter: ["data-chiro", "data-theme"],
  })
  return () => observer.disconnect()
}

function store(key: string, value: string) {
  try {
    localStorage.setItem(key, value)
  } catch {
    // storage unavailable (private mode): the choice just won't persist
  }
}

const readChiro = (): Chiro | null => {
  const chiro = root().dataset.chiro
  return chiro === "jokonta" || chiro === "allegro" ? chiro : null
}

const readColorMode = (): ColorMode =>
  root().dataset.theme === "dark" ? "dark" : "light"

/** The chosen chiro, or null when none is chosen yet (and during SSR). */
export const useChiro = () =>
  useSyncExternalStore(subscribe, readChiro, () => null)

/** The active color mode (null during SSR). */
export const useColorMode = () =>
  useSyncExternalStore<ColorMode | null>(subscribe, readColorMode, () => null)

export function setChiro(chiro: Chiro) {
  root().dataset.chiro = chiro
  store(CHIRO_STORAGE_KEY, chiro === "jokonta" ? "1" : "2")
}

export const toggleChiro = () =>
  setChiro(readChiro() === "jokonta" ? "allegro" : "jokonta")

export function toggleColorMode() {
  const mode: ColorMode = readColorMode() === "dark" ? "light" : "dark"
  root().dataset.theme = mode
  store(THEME_STORAGE_KEY, mode)
}
