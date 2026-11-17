import { useEffect } from "react"
import { useColorMode } from "theme-ui"

const MODES = ["light", "dark"]

/**
 * Keeps a `theme-ui-<mode>` class on <html> in sync with the color mode.
 *
 * theme-ui emits `html.theme-ui-<mode>` CSS-variable rules next to the plain
 * `html` rule. When the first client render (OS preference) differs from the
 * server render, Emotion can leave a stale copy of the plain `html` rule
 * behind, which then wins the cascade and freezes the colors. The class rules
 * are more specific, so with the class in place the right colors always win.
 *
 * Also migrates the color mode stored by the old site ("default") to "light".
 */
export function useColorModeClass() {
  const [colorMode, setColorMode] = useColorMode()

  useEffect(() => {
    if (!MODES.includes(colorMode)) {
      setColorMode("light")
      return
    }
    const { classList } = document.documentElement
    MODES.forEach(mode => classList.remove(`theme-ui-${mode}`))
    classList.add(`theme-ui-${colorMode}`)
  }, [colorMode, setColorMode])
}
