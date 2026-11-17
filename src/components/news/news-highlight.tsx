import Link from "next/link"

import { CmsImage } from "@/components/cms-image"
import Chevron from "@/components/icons/chevron"
import { OnlyFor } from "@/components/only-for"
import { audienceBg, audienceLabel, CHIROS } from "@/lib/chiro"
import type { Post } from "@/lib/contentful"
import { cx } from "@/lib/cx"
import { formatLongDate } from "@/lib/format"

import { chevronAfter } from "../chevron-link-styles"
import { featuredPostFor } from "./featured-post"

/**
 * The featured news post of the chosen chiro, as a big image card (the
 * latest Itterbeek-wide one when no chiro is chosen yet).
 */
export function NewsHighlight({
  posts,
  withMargin = false,
}: {
  posts: Post[]
  withMargin?: boolean
}) {
  const variants = [
    ...CHIROS.map(chiro => ({
      key: chiro,
      post: featuredPostFor(posts, chiro),
    })),
    { key: "unchosen" as const, post: featuredPostFor(posts, null) },
  ]
  return variants.map(({ key, post }) => {
    return (
      <OnlyFor key={key} chiro={key}>
        <section
          className={cx(
            "col-[3/span_10] flex flex-col max-tablet:col-[2/span_12]",
            withMargin && "mt-16 max-mobile:mt-12",
            post && "mb-16 max-tablet:mb-12",
          )}
        >
          {post && (
            <>
              <h2
                className={cx(
                  "mt-0 mb-3 block self-start rounded-xs px-6 py-2 text-lg text-styled-header-text uppercase max-mobile:px-4 max-mobile:text-sm",
                  audienceBg[post.audience],
                )}
              >
                {`Uitgelicht bericht: ${audienceLabel(post.audience)}`}
              </h2>
              <div className="relative flex">
                <CmsImage
                  image={post.banner}
                  alt=""
                  sizes="(max-width: 1024px) 100vw, 950px"
                  className="h-[360px] w-full rounded-xs after:absolute after:inset-0 after:rounded-xs after:bg-[linear-gradient(180deg,rgba(24,24,25,0.33)_0%,rgba(24,24,25,0.5)_63.54%,rgba(24,24,25,0.5)_100%)] max-tablet:h-[280px] max-mobile:h-[200px]"
                />
                <div className="absolute bottom-0 p-12 max-mobile:p-6">
                  <h3 className="mt-0 mb-1 block text-2xl leading-none text-styled-header-text uppercase max-mobile:text-lg">
                    {post.title}
                  </h3>
                  <small className="mb-4 block text-xs leading-none text-highlight-text uppercase">
                    {formatLongDate(post.date)}
                  </small>
                  <Link
                    href={`/nieuws/${post.slug}/`}
                    className={cx(
                      chevronAfter,
                      "text-lg text-highlight-text [&_path]:fill-highlight-text",
                    )}
                  >
                    <span>Lees meer</span>
                    <Chevron />
                  </Link>
                </div>
              </div>
              <hr className="mt-2 w-[66%] border-solid border-border" />
            </>
          )}
        </section>
      </OnlyFor>
    )
  })
}
