import type { Metadata, Viewport } from "next"
import { Bangers, PT_Sans } from "next/font/google"
import type { ReactNode } from "react"

import { Footer } from "@/components/footer"
import { Shell } from "@/components/shell"
import { preferencesScript } from "@/lib/chiro"
import { site } from "@/lib/site"

import "./globals.css"

const ptSans = PT_Sans({
  weight: ["400", "700"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-pt-sans",
})
const bangers = Bangers({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-bangers",
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `${site.title} - %s` },
  description: site.description,
  keywords: [...site.keywords],
  icons: {
    icon: "/favicon-32x32.png",
    apple: [48, 72, 96, 144, 192, 256, 384, 512].map(size => ({
      url: `/icons/icon-${size}x${size}.png`,
      sizes: `${size}x${size}`,
    })),
  },
}

export const viewport: Viewport = {
  themeColor: "#E1143C",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // The inline script sets data-chiro and data-theme before first paint,
    // so React must not complain that they differ from the server HTML.
    <html
      lang="nl"
      className={`${ptSans.variable} ${bangers.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: preferencesScript }} />
      </head>
      <body>
        <Shell footer={<Footer />}>{children}</Shell>
      </body>
    </html>
  )
}
