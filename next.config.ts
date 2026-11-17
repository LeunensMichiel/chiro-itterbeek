import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Fully static site: Netlify serves ./out, a Contentful webhook triggers a
  // rebuild whenever content changes.
  output: "export",
  // Netlify serves every page as `/path/` (it 301s `/path` to `/path/`).
  trailingSlash: true,
  images: {
    // No image server in a static export: Contentful's Images API resizes.
    loader: "custom",
    loaderFile: "./src/lib/contentful-image-loader.ts",
    qualities: [80, 90],
  },
}

export default nextConfig
