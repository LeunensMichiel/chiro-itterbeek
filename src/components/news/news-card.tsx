import Link from "next/link"

import { CmsImage } from "@/components/cms-image"
import Chevron from "@/components/icons/chevron"
import { audienceBg, audienceLabel } from "@/lib/chiro"
import type { Post } from "@/lib/contentful"
import { cx } from "@/lib/cx"
import { formatLongDate } from "@/lib/format"

import { chevronAfter } from "../chevron-link-styles"

export function NewsCard({
  post,
  className,
}: {
  post: Post
  className?: string
}) {
  return (
    <article
      className={cx(
        "flex h-[420px] w-full flex-col rounded-xs border border-solid border-border bg-background-muted-2 max-tablet:h-auto",
        className,
      )}
    >
      <div className="relative">
        <CmsImage
          image={post.banner}
          alt=""
          sizes="(max-width: 767px) 100vw, (max-width: 1024px) 33vw, 380px"
          className="h-[200px] w-full"
        />
        <div
          className={cx(
            "absolute top-0 flex w-[140px] items-center justify-center rounded-xs px-9 py-4 text-lg leading-none font-bold text-styled-header-text uppercase max-mobile:w-auto max-mobile:px-4 max-mobile:py-2 max-mobile:text-sm",
            audienceBg[post.audience],
          )}
        >
          {audienceLabel(post.audience)}
        </div>
      </div>
      <div className="flex h-full flex-col p-4">
        <small className="mb-1 block text-xs leading-none text-aside-text uppercase">
          {formatLongDate(post.date)}
        </small>
        <h3 className="mt-0 mb-4 text-lg leading-none font-bold text-header">
          {post.title}
        </h3>
        <p className="mt-0 text-sm">{post.excerpt}</p>
        <Link
          href={`/nieuws/${post.slug}/`}
          className={cx(
            chevronAfter,
            "mt-auto mb-4 text-sm text-aside-text [&_path]:fill-aside-text",
          )}
        >
          <span>
            Lees meer<span className="sr-only">: {post.title}</span>
          </span>
          <Chevron />
        </Link>
      </div>
    </article>
  )
}
