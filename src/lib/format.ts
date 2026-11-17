// Contentful stores dates as local wall-clock strings ("2026-11-21T14:00").
// Parsing and formatting both in local time keeps that wall-clock time, on
// the build server and in the browser alike.

const longDate = new Intl.DateTimeFormat("nl-BE", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
})
const monthName = new Intl.DateTimeFormat("nl-BE", { month: "long" })
const time = new Intl.DateTimeFormat("nl-BE", {
  hour: "2-digit",
  minute: "2-digit",
})

/** "zaterdag 21 november 2026" */
export const formatLongDate = (date: string | Date) =>
  longDate.format(new Date(date))

/** "november" */
export const formatMonth = (date: string | Date) =>
  monthName.format(new Date(date))

/** "14:00" */
export const formatTime = (date: string | Date) => time.format(new Date(date))

/** "Editie september - oktober 2026" */
export const formatEdition = (startdate: string, enddate: string) =>
  `Editie ${formatMonth(startdate)} - ${formatMonth(enddate)} ${new Date(enddate).getFullYear()}`

/**
 * Plain-text excerpt of a Markdown field: strips the Markdown syntax and cuts
 * at `length` characters, like the old gatsby-transformer-remark excerpt.
 */
export function toPlainExcerpt(markdown: string, length = 120) {
  const text = markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/^\s{0,3}(#{1,6}|>|[-*+]|\d+\.)\s+/gm, "")
    .replace(/(\*\*|__|\*|_|~~|`)/g, "")
    .replace(/\s+/g, " ")
    .trim()
  return text.length > length ? `${text.slice(0, length)}…` : text
}

/** "YYYY-MM-DD" of a date in local time */
export const localDay = (date: Date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`
