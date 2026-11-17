export const PER_PAGE = {
  albums: 15,
  krantjes: 15,
  documenten: 15,
  videos: 4,
  nieuws: 9,
} as const

export const pageCount = (total: number, perPage: number) =>
  Math.max(1, Math.ceil(total / perPage))

/** Page 1 lives at the base path, page n at `${basePath}${n}/`. */
export const pagePath = (basePath: string, page: number) =>
  page <= 1 ? basePath : `${basePath}${page}/`

export const paginate = <T>(items: T[], page: number, perPage: number) =>
  items.slice((page - 1) * perPage, page * perPage)

/** Static params for an optional catch-all `[[...page]]` route. */
export const pageParams = (total: number, perPage: number) =>
  Array.from({ length: pageCount(total, perPage) }, (_, i) => ({
    page: i === 0 ? [] : [String(i + 1)],
  }))

/** Parses `[[...page]]` params; returns null for anything that isn't a page. */
export function parsePage(
  param: string[] | undefined,
  total: number,
  perPage: number,
) {
  if (!param || param.length === 0) return 1
  if (param.length !== 1 || !/^\d+$/.test(param[0]!)) return null
  const page = Number(param[0])
  return page >= 2 && page <= pageCount(total, perPage) ? page : null
}
