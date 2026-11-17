import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Fully static site: Netlify serves ./out, a Contentful webhook triggers a
  // rebuild whenever content changes.
  output: "export",
  // Netlify serves every page as `/path/` (it 301s `/path` to `/path/`).
  trailingSlash: true,
  env: {
    // Mapbox token for the contact map. The old Gatsby name is still accepted
    // so existing .env files and Netlify settings keep working.
    NEXT_PUBLIC_MAPBOX_TOKEN:
      process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? process.env.GATSBY_TOKEN_MAPBOX,
  },
  images: {
    // No image server in a static export: Contentful's Images API resizes.
    loader: "custom",
    loaderFile: "./src/lib/contentful-image-loader.ts",
    qualities: [80, 90],
  },
}

export default nextConfig
