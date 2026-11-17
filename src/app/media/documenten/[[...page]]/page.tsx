import { notFound } from "next/navigation"

import { MediaCard } from "@/components/media/media-card"
import { cardGrid, MediaSection } from "@/components/media/media-section"
import { Pagination } from "@/components/pagination"
import { getDocuments } from "@/lib/contentful"
import { formatDate } from "@/lib/format"
import { pageMetadata } from "@/lib/metadata"
import {
  PER_PAGE,
  pageCount,
  pageParams,
  paginate,
  parsePage,
} from "@/lib/pagination"

type Props = { params: Promise<{ page?: string[] }> }

const BASE = "/media/documenten/"
const PER = PER_PAGE.documenten

/** "PDF · " from the file's extension, or nothing when there isn't one. */
function fileType(url: string) {
  const extension = /\.([a-z0-9]{2,4})(?:[?#]|$)/i.exec(url)?.[1]
  return extension ? `${extension.toUpperCase()} · ` : ""
}

export const dynamicParams = false
export const generateStaticParams = async () =>
  pageParams((await getDocuments()).length, PER)

export async function generateMetadata({ params }: Props) {
  const [page] = (await params).page ?? []
  return pageMetadata({
    title: "Overige Documenten",
    description:
      "Overige documenten van Chiro Itterbeek. Kampbundels, Medische fishes, privacyverklaringen, enzovoort.",
    path: page ? `${BASE}${page}/` : BASE,
  })
}

export default async function DocumentsPage({ params }: Props) {
  const documents = await getDocuments()
  const page = parsePage((await params).page, documents.length, PER)
  if (page === null) notFound()

  return (
    <MediaSection title="Overige Documenten" kind="cards" withBackLink>
      <Pagination
        basePath={BASE}
        page={page}
        pageCount={pageCount(documents.length, PER)}
      />
      <div className={cardGrid}>
        {paginate(documents, page, PER).map(document => (
          <MediaCard
            key={document.id}
            audience={document.audience}
            meta={`${fileType(document.url)}${formatDate(document.createdAt)}`}
            title={document.title}
            href={document.url}
            linkLabel="Bekijk document"
          />
        ))}
      </div>
      <Pagination
        basePath={BASE}
        page={page}
        pageCount={pageCount(documents.length, PER)}
        position="bottom"
      />
    </MediaSection>
  )
}
