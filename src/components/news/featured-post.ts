import type { Chiro } from "@/lib/chiro"
import type { Post } from "@/lib/contentful"

/**
 * The featured post for a chiro: its own latest featured post, or the latest
 * featured Itterbeek-wide one when that one is newer (or the only one).
 */
export function featuredPostFor(posts: Post[], chiro: Chiro | null) {
  const own = chiro
    ? posts.find(post => post.isFeatured && post.audience === chiro)
    : undefined
  const common = posts.find(
    post => post.isFeatured && post.audience === "itterbeek",
  )
  if (!own || !common) return own ?? common ?? null
  return new Date(own.date) < new Date(common.date) ? common : own
}
