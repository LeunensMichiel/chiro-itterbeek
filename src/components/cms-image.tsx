import Image, { type StaticImageData } from "next/image"

import fallbackImage from "@/assets/images/itterbeek.jpg"
import type { CmsImage as CmsImageData } from "@/lib/contentful"
import { cx } from "@/lib/cx"

type Props = {
  /** Contentful image; falls back to the default Itterbeek photo when null. */
  image: CmsImageData | null
  alt: string
  /** `sizes` attribute for the responsive srcset */
  sizes: string
  quality?: 80 | 90
  /**
   * Fixed-size images (avatars) skip the aspect-ratio spacer that otherwise
   * gives the wrapper the image's natural height.
   */
  fixed?: boolean
  priority?: boolean
  className?: string
}

/**
 * A cover-fitted image in a positioned wrapper that takes the className,
 * resized by Contentful's Images API.
 */
export function CmsImage({
  image,
  alt,
  sizes,
  quality = 90,
  fixed = false,
  priority = false,
  className,
}: Props) {
  const source: CmsImageData | StaticImageData = image ?? fallbackImage
  return (
    <div className={cx("relative overflow-hidden", className)}>
      {!fixed && (
        <div
          aria-hidden
          style={{ paddingTop: `${(source.height / source.width) * 100}%` }}
        />
      )}
      <Image
        src={image ? image.url : fallbackImage}
        alt={alt}
        fill
        sizes={sizes}
        quality={quality}
        unoptimized={!image}
        priority={priority}
        className="object-cover"
      />
    </div>
  )
}
