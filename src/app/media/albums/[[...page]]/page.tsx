import { notFound } from "next/navigation"

import { MediaCard } from "@/components/media/media-card"
import { cardGrid, MediaSection } from "@/components/media/media-section"
import { Pagination } from "@/components/pagination"
import { getAlbums } from "@/lib/contentful"
import { pageMetadata } from "@/lib/metadata"
import {
  PER_PAGE,
  pageCount,
  pageParams,
  paginate,
  parsePage,
} from "@/lib/pagination"

type Props = { params: Promise<{ page?: string[] }> }

const BASE = "/media/albums/"
const PER = PER_PAGE.albums

export const dynamicParams = false
export const generateStaticParams = async () =>
  pageParams((await getAlbums()).length, PER)

export async function generateMetadata({ params }: Props) {
  const [page] = (await params).page ?? []
  return pageMetadata({
    title: "Albums",
    description: "Alle albums van chiro Jokonta en chiro Allegro.",
    path: page ? `${BASE}${page}/` : BASE,
  })
}

export default async function AlbumsPage({ params }: Props) {
  const albums = await getAlbums()
  const page = parsePage((await params).page, albums.length, PER)
  if (page === null) notFound()

  return (
    <MediaSection title="Alle Albums" kind="cards" withBackLink>
      <Pagination
        basePath={BASE}
        page={page}
        pageCount={pageCount(albums.length, PER)}
      />
      <div className={cardGrid}>
        {paginate(albums, page, PER).map(album => (
          <MediaCard
            key={album.id}
            audience={album.audience}
            title={album.title}
            href={album.url}
            linkLabel="Bekijk album"
            ariaLabel="Album bekijken"
          />
        ))}
      </div>
    </MediaSection>
  )
}
