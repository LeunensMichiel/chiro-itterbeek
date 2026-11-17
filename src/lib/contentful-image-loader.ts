import type { ImageLoaderProps } from "next/image"

/**
 * next/image loader for a static export: Contentful's Images API does the
 * resizing and format conversion. Only used for Contentful assets; local
 * images are rendered with `unoptimized`.
 */
export default function contentfulImageLoader({
  src,
  width,
  quality,
}: ImageLoaderProps) {
  const url = new URL(src)
  url.searchParams.set("w", String(width))
  url.searchParams.set("q", String(quality ?? 75))
  url.searchParams.set("fm", "webp")
  return url.toString()
}
