import { cx } from "@/lib/cx"

/** The card grid shared by an age group and the leiding view. */
export const groupGrid =
  "grid w-full grid-cols-10 grid-rows-[auto_minmax(auto,250px)_auto] content-start items-start gap-3 max-mobile:flex max-mobile:flex-col max-mobile:items-stretch max-mobile:justify-start"

export const groupHeader =
  "type-alt col-[1/span_4] row-1 m-0 block rounded-xs p-6 text-center max-mobile:p-4"

export const groupImage =
  "col-[5/span_6] row-[1/span_2] h-full max-h-[360px] w-full rounded-xs max-mobile:max-h-[200px] max-mobile:min-h-[200px]"

export const groupDescription =
  "col-[1/span_4] row-[2/span_2] h-full rounded-xs bg-background-muted p-9 max-tablet:p-6 [&_h4]:m-0 [&_h4]:text-header [&_h4]:uppercase [&_p]:mt-0 [&_p]:whitespace-pre-line"

export const groupLeidingBox =
  "col-[5/span_6] row-3 flex min-h-full flex-col rounded-xs max-mobile:min-h-auto"

/** A round leiding photo with the first name on top. */
export const leidingItem = (small: boolean) =>
  cx(
    "relative flex items-center justify-center",
    small ? "size-24 max-laptop:size-18" : "size-30",
  )

export const leidingName = (small: boolean) =>
  cx(
    "pointer-events-none absolute z-10 text-center leading-none font-bold text-styled-header-text uppercase",
    small ? "text-xs max-laptop:text-[11px]" : "text-sm",
  )

export const leidingPhoto =
  "size-full rounded-full border-4 border-solid transition-[border-color] duration-200 ease-chiro after:absolute after:inset-0 after:bg-[rgba(24,24,25,0.45)]"

/**
 * Text on a group color: white, or dark on the bright ones (yellow, orange and
 * the leiding's gold), where white can't be read.
 */
export const groupText = (color?: string) =>
  color === "paars" ||
  color === "groen" ||
  color === "rood" ||
  color === "blauw"
    ? "text-styled-header-text"
    : "text-on-bright"

/** Group colors as set in Contentful; the leiding get a golden gradient. */
export function groupColor(color?: string) {
  switch (color) {
    case "paars":
      return "#8E29CC"
    case "geel":
      return "#F9CC19"
    case "groen":
      return "#33A25F"
    case "rood":
      return "#E83131"
    case "blauw":
      return "#3960EB"
    case "oranje":
      return "#ED8B30"
    default:
      return "linear-gradient(83.16deg, #806B40 -0.01%, #CCC8A3 23.95%, #A99768 52.6%, #D7C8AD 100%)"
  }
}
