/** Which chiro something belongs to: the boys (Jokonta) or the girls (Allegro). */
export type Chiro = "jokonta" | "allegro"
/** Content can also be for both chiros ("Itterbeek", shown as "Algemeen"). */
export type Audience = Chiro | "itterbeek"

export const CHIROS = ["jokonta", "allegro"] as const satisfies Chiro[]

export const audienceLabel = (audience: Audience) =>
  audience === "jokonta"
    ? "Jokonta"
    : audience === "allegro"
      ? "Allegro"
      : "Algemeen"

export const chiroName = (chiro: Chiro) =>
  chiro === "jokonta" ? "Jokonta" : "Allegro"

/** Background color class per audience (Itterbeek-wide content uses the accent). */
export const audienceBg: Record<Audience, string> = {
  jokonta: "bg-jokonta",
  allegro: "bg-allegro",
  itterbeek: "bg-accent",
}

/** Is `audience` content visible to someone who chose `chiro`? */
export const isFor = (audience: Audience, chiro: Chiro) =>
  audience === "itterbeek" || audience === chiro

/*
 * Visitor preferences live as attributes on <html>, set by an inline script
 * before first paint: `data-chiro` (jokonta | allegro | none) and
 * `data-theme` (light | dark). CSS variants key off them, so the static HTML
 * holds the content for both chiros and the right one shows without a flash.
 * Storage keys and values are the ones the old site used, so returning
 * visitors keep their choice.
 */
export const CHIRO_STORAGE_KEY = "chiro-itterbeek-gender" // "1" Jokonta, "2" Allegro
export const THEME_STORAGE_KEY = "theme-ui-color-mode" // "light" | "dark"

export const preferencesScript = `(function () {
  var d = document.documentElement
  function get(key) { try { return localStorage.getItem(key) } catch (e) { return null } }
  var chiro = get("${CHIRO_STORAGE_KEY}")
  d.dataset.chiro = chiro === "1" ? "jokonta" : chiro === "2" ? "allegro" : "none"
  var theme = get("${THEME_STORAGE_KEY}")
  if (theme === "default") theme = "light"
  if (theme !== "light" && theme !== "dark") {
    theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  }
  d.dataset.theme = theme
})()`
