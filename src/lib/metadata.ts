import type { Metadata } from "next"

import ogImage from "@/assets/images/itterbeek.jpg"

import { site } from "./site"

/** Title, description and the matching Open Graph / Twitter tags of a page. */
export function pageMetadata({
  title,
  description = site.description,
  path,
}: {
  title: string
  description?: string
  path: string
}): Metadata {
  const image = {
    url: ogImage.src,
    width: ogImage.width,
    height: ogImage.height,
    alt: title,
  }
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type: "website",
      siteName: site.title,
      locale: "nl_BE",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      creator: site.author,
      title,
      description,
      images: [image],
    },
  }
}
