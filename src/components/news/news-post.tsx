import Link from "next/link"

import { backLink } from "@/components/chevron-link-styles"
import { CmsImage } from "@/components/cms-image"
import Chevron from "@/components/icons/chevron"
import { RichText } from "@/components/rich-text"
import type { Post } from "@/lib/contentful"
import { formatLongDate } from "@/lib/format"

export function NewsPost({ post }: { post: Post }) {
  return (
    <article className="col-[3/span_10] mt-16 mb-12 max-tablet:col-[2/span_12] max-tablet:mt-12 max-mobile:mt-9">
      <div className="flex w-full flex-col items-center">
        <Link href="/nieuws/" className={`${backLink} self-start`}>
          <Chevron />
          <span>Ga terug</span>
        </Link>
        <CmsImage
          image={post.banner}
          alt={post.title}
          title={post.title}
          sizes="(max-width: 1024px) 100vw, 950px"
          priority
          className="h-[320px] w-full rounded-xs max-tablet:h-[280px] max-mobile:h-[200px]"
        />
        <div className="rich-text w-full max-w-[850px] -translate-y-12 rounded-xs bg-background-muted-2 p-16 shadow-container max-tablet:max-w-[650px] max-mobile:p-6">
          <h1 className="m-0 text-2xl uppercase max-mobile:mb-1 max-mobile:text-xl max-mobile:leading-[1.2]">
            {post.title}
          </h1>
          <small className="mb-9 block text-sm leading-none text-aside-text uppercase">
            {formatLongDate(post.date)}
          </small>
          {post.body && <RichText document={post.body} />}
        </div>
      </div>
    </article>
  )
}
