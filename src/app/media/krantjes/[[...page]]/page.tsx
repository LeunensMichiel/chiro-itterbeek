import { notFound } from "next/navigation"

import { MediaCard } from "@/components/media/media-card"
import { cardGrid, MediaSection } from "@/components/media/media-section"
import { Pagination } from "@/components/pagination"
import { getBoekjes } from "@/lib/contentful"
import { formatEdition } from "@/lib/format"
import { pageMetadata } from "@/lib/metadata"
import {
  PER_PAGE,
  pageCount,
  pageParams,
  paginate,
  parsePage,
} from "@/lib/pagination"

type Props = { params: Promise<{ page?: string[] }> }

const BASE = "/media/krantjes/"
const PER = PER_PAGE.krantjes

export const dynamicParams = false
export const generateStaticParams = async () =>
  pageParams((await getBoekjes()).all.length, PER)

export async function generateMetadata({ params }: Props) {
  const [page] = (await params).page ?? []
  return pageMetadata({
    title: "Krantjes",
    description:
      "Bekijk hier alle krantjes van Chiro Itterbeek. Alle edities van Jokontakt en Chirokrantje zijn aanwezig!",
    path: page ? `${BASE}${page}/` : BASE,
  })
}

export default async function KrantjesPage({ params }: Props) {
  const { all } = await getBoekjes()
  const page = parsePage((await params).page, all.length, PER)
  if (page === null) notFound()

  return (
    <MediaSection title="Alle Krantjes" kind="cards" withBackLink>
      <Pagination
        basePath={BASE}
        page={page}
        pageCount={pageCount(all.length, PER)}
      />
      <div className={cardGrid}>
        {paginate(all, page, PER).map(boekje => (
          <MediaCard
            key={boekje.id}
            audience={boekje.chiro}
            meta={formatEdition(boekje.startdate, boekje.enddate)}
            title={boekje.title}
            href={boekje.url}
            linkLabel="Lees boekje"
            ariaLabel="Boekje bekijken"
          />
        ))}
      </div>
    </MediaSection>
  )
}
