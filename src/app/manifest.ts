import type { MetadataRoute } from "next"

import { site } from "@/lib/site"

export const dynamic = "force-static"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.title,
    short_name: site.title,
    description: site.description,
    start_url: "/",
    background_color: "#272728",
    theme_color: "#E1143C",
    display: "browser",
    icons: [48, 72, 96, 144, 192, 256, 384, 512].map(size => ({
      src: `/icons/icon-${size}x${size}.png`,
      sizes: `${size}x${size}`,
      type: "image/png",
    })),
  }
}
