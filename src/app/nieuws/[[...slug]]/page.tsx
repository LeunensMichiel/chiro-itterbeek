import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { NewsCard } from "@/components/news/news-card"
import { NewsHighlight } from "@/components/news/news-highlight"
import { NewsPost } from "@/components/news/news-post"
import { Pagination } from "@/components/pagination"
import { getPosts } from "@/lib/contentful"
import { pageMetadata } from "@/lib/metadata"
import {
  PER_PAGE,
  pageCount,
  pageParams,
  paginate,
  parsePage,
} from "@/lib/pagination"

/*
 * One route for the news list (/nieuws/, /nieuws/2/, …) and the posts
 * (/nieuws/<slug>/): both live directly under /nieuws/.
 */

type Props = { params: Promise<{ slug?: string[] }> }

export const dynamicParams = false

export async function generateStaticParams() {
  const posts = await getPosts()
  const numeric = posts.filter(post => /^\d+$/.test(post.slug))
  if (numeric.length > 0) {
    throw new Error(
      `News slugs can't be just a number (they'd clash with the list pages): ${numeric.map(post => post.slug).join(", ")}`,
    )
  }
  return [
    ...pageParams(posts.length, PER_PAGE.nieuws).map(({ page }) => ({
      slug: page,
    })),
    ...posts.map(post => ({ slug: [post.slug] })),
  ]
}

async function resolve(params: Props["params"]) {
  const { slug } = await params
  const posts = await getPosts()
  const page = parsePage(slug, posts.length, PER_PAGE.nieuws)
  if (page !== null) return { kind: "list" as const, page, posts }
  const post =
    slug?.length === 1 ? posts.find(p => p.slug === slug[0]) : undefined
  return post ? { kind: "post" as const, post } : null
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const route = await resolve(params)
  if (!route) return {}
  if (route.kind === "post") {
    return pageMetadata({
      title: route.post.title,
      description: route.post.excerpt,
      path: `/nieuws/${route.post.slug}/`,
    })
  }
  return pageMetadata({
    title: "Nieuws",
    description:
      "Bekijk hier de laatste updates van Chiro Itterbeek. Zowel van de de meisjes (Allegro) als de jongens (Jokonta)!",
    path: route.page === 1 ? "/nieuws/" : `/nieuws/${route.page}/`,
  })
}

export default async function NewsPage({ params }: Props) {
  const route = await resolve(params)
  if (!route) notFound()
  if (route.kind === "post") return <NewsPost post={route.post} />

  const { page, posts } = route
  return (
    <>
      {page === 1 && <NewsHighlight posts={posts} withMargin />}
      <section className="col-[2/span_12] mb-24 max-tablet:mb-12">
        <Pagination
          basePath="/nieuws/"
          page={page}
          pageCount={pageCount(posts.length, PER_PAGE.nieuws)}
        />
        <div className="grid grid-cols-3 gap-4 max-mobile:grid-cols-1">
          {paginate(posts, page, PER_PAGE.nieuws).map(post => (
            <NewsCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </>
  )
}
