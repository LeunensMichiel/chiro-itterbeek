import { notFound } from "next/navigation"

import { Disclaimer, MediaSection } from "@/components/media/media-section"
import { VideoGrid } from "@/components/media/video-grid"
import { Pagination } from "@/components/pagination"
import { getVideos } from "@/lib/contentful"
import { pageMetadata } from "@/lib/metadata"
import {
  PER_PAGE,
  pageCount,
  pageParams,
  paginate,
  parsePage,
} from "@/lib/pagination"

type Props = { params: Promise<{ page?: string[] }> }

const BASE = "/media/videos/"
const PER = PER_PAGE.videos

export const dynamicParams = false
export const generateStaticParams = async () =>
  pageParams((await getVideos()).all.length, PER)

export async function generateMetadata({ params }: Props) {
  const [page] = (await params).page ?? []
  return pageMetadata({
    title: "Alle video's",
    description:
      "Bekijk hier alle video's van Chiro Itterbeek. Zowel van de jongens als de meisjes!",
    path: page ? `${BASE}${page}/` : BASE,
  })
}

export default async function VideosPage({ params }: Props) {
  const { all } = await getVideos()
  const page = parsePage((await params).page, all.length, PER)
  if (page === null) notFound()

  return (
    <>
      <MediaSection title="Alle Video's" kind="videos" withBackLink>
        <Pagination
          basePath={BASE}
          page={page}
          pageCount={pageCount(all.length, PER)}
        />
        <VideoGrid videos={paginate(all, page, PER)} />
        <Pagination
          basePath={BASE}
          page={page}
          pageCount={pageCount(all.length, PER)}
          position="bottom"
        />
      </MediaSection>
      <Disclaimer />
    </>
  )
}
