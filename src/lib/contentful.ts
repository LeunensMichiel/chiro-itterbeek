import {
  createClient,
  type Asset,
  type EntryFieldTypes,
  type EntrySkeletonType,
} from "contentful"
import type { Document } from "@contentful/rich-text-types"

import type { Audience, Chiro } from "./chiro"
import { toPlainExcerpt } from "./format"

/*
 * Typed access to the Contentful Delivery API. Every fetcher maps entries
 * onto small plain objects, so components never touch the SDK's shapes.
 */

// ---------------------------------------------------------------------------
// Domain types

export type CmsImage = {
  url: string
  width: number
  height: number
  title: string
}

export type Post = {
  id: string
  slug: string
  title: string
  date: string
  audience: Audience
  isFeatured: boolean
  banner: CmsImage | null
  excerpt: string
  body: Document | null
}

export type CalendarItem = {
  id: string
  title: string
  date: string
  description: string
  audience: Audience
}

export type InfoBlock = {
  id: string
  title: string
  rank: number
  chiro: Chiro
  banner: CmsImage | null
  info: Document | null
}

export type LeidingMember = {
  id: string
  firstname: string
  lastname: string
  nickname: string
  birthday: string
  food: string[]
  activities: string[]
  chiro: Chiro
  profilePicture: CmsImage | null
}

export type AgeGroup = {
  id: string
  name: string
  description: string
  ages: [number, number]
  color: string
  chiro: Chiro
  banner: CmsImage | null
  leiding: Pick<LeidingMember, "id" | "firstname" | "profilePicture">[]
}

export type ContactInfo = {
  id: string
  fullName: string
  email: string
  phone: string
  isVolwassenBegeleider: boolean
  chiro: Chiro
}

export type Album = {
  id: string
  title: string
  url: string
  date: string
  audience: Audience
}

export type Video = {
  id: string
  title: string
  url: string
  audience: Audience
}

export type Boekje = {
  id: string
  title: string
  url: string
  startdate: string
  enddate: string
  chiro: Chiro
}

export type CmsDocument = {
  id: string
  title: string
  url: string
  createdAt: string
  audience: Audience
}

// ---------------------------------------------------------------------------
// Content model (Contentful content type ids and fields)

type AudienceField = EntryFieldTypes.Symbol<"Itterbeek" | "Jokonta" | "Allegro">

type PostSkeleton = EntrySkeletonType<
  {
    title: EntryFieldTypes.Symbol
    slug: EntryFieldTypes.Symbol
    date: EntryFieldTypes.Date
    banner?: EntryFieldTypes.AssetLink
    body?: EntryFieldTypes.RichText
    excerpt: EntryFieldTypes.Text
    gender: AudienceField
    isFeatured: EntryFieldTypes.Boolean
  },
  "post"
>

type CalendarItemSkeleton = EntrySkeletonType<
  {
    title: EntryFieldTypes.Symbol
    date: EntryFieldTypes.Date
    description: EntryFieldTypes.Text
    gender: AudienceField
  },
  "calendarItem"
>

type InfoBlockSkeleton = EntrySkeletonType<
  {
    title: EntryFieldTypes.Symbol
    banner: EntryFieldTypes.AssetLink
    info: EntryFieldTypes.RichText
    gender: AudienceField
    rank: EntryFieldTypes.Integer
  },
  "informationblock"
>

type LeidingSkeleton = EntrySkeletonType<
  {
    firstname: EntryFieldTypes.Symbol
    nickname: EntryFieldTypes.Symbol
    lastname: EntryFieldTypes.Symbol
    birthday: EntryFieldTypes.Date
    food: EntryFieldTypes.Array<EntryFieldTypes.Symbol>
    activities: EntryFieldTypes.Array<EntryFieldTypes.Symbol>
    profilePicture: EntryFieldTypes.AssetLink
    /** true = Jokonta */
    gender: EntryFieldTypes.Boolean
  },
  "leiding"
>

type GroupSkeleton = EntrySkeletonType<
  {
    name: EntryFieldTypes.Symbol
    description: EntryFieldTypes.Text
    banner: EntryFieldTypes.AssetLink
    age: EntryFieldTypes.Array<EntryFieldTypes.Symbol>
    color: EntryFieldTypes.Symbol
    /** true = Jokonta */
    gender: EntryFieldTypes.Boolean
    leiding: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<LeidingSkeleton>>
  },
  "group"
>

type ContactInfoSkeleton = EntrySkeletonType<
  {
    fullName: EntryFieldTypes.Symbol
    email: EntryFieldTypes.Symbol
    phone: EntryFieldTypes.Symbol
    /** true = Jokonta */
    gender: EntryFieldTypes.Boolean
    vb: EntryFieldTypes.Boolean
  },
  "contactinfo"
>

type AlbumSkeleton = EntrySkeletonType<
  {
    title: EntryFieldTypes.Symbol
    url: EntryFieldTypes.Symbol
    date: EntryFieldTypes.Date
    gender: AudienceField
  },
  "album"
>

type VideoSkeleton = EntrySkeletonType<
  {
    title: EntryFieldTypes.Symbol
    url: EntryFieldTypes.Symbol
    gender: AudienceField
    featured: EntryFieldTypes.Boolean
  },
  "video"
>

type BoekjeSkeleton = EntrySkeletonType<
  {
    title: EntryFieldTypes.Symbol
    url: EntryFieldTypes.Symbol
    startdate: EntryFieldTypes.Date
    enddate: EntryFieldTypes.Date
    /** true = Jokonta */
    gender: EntryFieldTypes.Boolean
  },
  "boekje"
>

type DocumentSkeleton = EntrySkeletonType<
  {
    title: EntryFieldTypes.Symbol
    url: EntryFieldTypes.Symbol
    gender: AudienceField
  },
  "document"
>

// ---------------------------------------------------------------------------
// Client

let client: ReturnType<typeof createDeliveryClient> | undefined

function createDeliveryClient() {
  const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_HOST } =
    process.env
  if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_ACCESS_TOKEN) {
    throw new Error(
      "CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN must be set (in .env locally, or in the Netlify environment).",
    )
  }
  return createClient({
    space: CONTENTFUL_SPACE_ID,
    accessToken: CONTENTFUL_ACCESS_TOKEN,
    ...(CONTENTFUL_HOST && { host: CONTENTFUL_HOST }),
  }).withoutUnresolvableLinks
}

const contentful = () => (client ??= createDeliveryClient())

/** Runs a fetcher once per build worker; every page reuses the result. */
function once<T>(fetcher: () => Promise<T>) {
  let promise: Promise<T> | undefined
  return () => (promise ??= fetcher())
}

// The CDA returns at most 1000 items per request; every type here is far below.
const LIMIT = 1000

// ---------------------------------------------------------------------------
// Mapping helpers

const toAudience = (gender: "Itterbeek" | "Jokonta" | "Allegro"): Audience =>
  gender === "Jokonta"
    ? "jokonta"
    : gender === "Allegro"
      ? "allegro"
      : "itterbeek"

const toChiro = (isJokonta: boolean): Chiro =>
  isJokonta ? "jokonta" : "allegro"

function toImage(
  asset: Asset<"WITHOUT_UNRESOLVABLE_LINKS"> | undefined,
): CmsImage | null {
  const file = asset?.fields.file
  const size = file?.details.image
  if (!asset || !file?.url || !size) return null
  return {
    url: file.url.startsWith("//") ? `https:${file.url}` : file.url,
    width: size.width,
    height: size.height,
    title: asset.fields.title ?? "",
  }
}

// ---------------------------------------------------------------------------
// Fetchers

/** All news posts, newest first (the "dummy" placeholder post excluded). */
export const getPosts = once(async (): Promise<Post[]> => {
  const { items } = await contentful().getEntries<PostSkeleton>({
    content_type: "post",
    order: ["-fields.date"],
    "fields.title[ne]": "dummy",
    limit: LIMIT,
  })
  return items.map(({ sys, fields }) => ({
    id: sys.id,
    slug: fields.slug,
    title: fields.title,
    date: fields.date,
    audience: toAudience(fields.gender),
    isFeatured: fields.isFeatured,
    banner: toImage(fields.banner),
    excerpt: toPlainExcerpt(fields.excerpt),
    body: fields.body ?? null,
  }))
})

/**
 * Calendar items from the first day of the build's month on, oldest first.
 * The calendar itself picks the visible month in the browser, so it stays
 * correct between content builds.
 */
export const getCalendarItems = once(async (): Promise<CalendarItem[]> => {
  const now = new Date()
  const monthStart = new Date(Date.UTC(now.getFullYear(), now.getMonth(), 1))
    .toISOString()
    .replace(
      ".000Z",
      "Z",
    ) as `${number}-${number}-${number}T${number}:${number}:${number}Z`
  const { items } = await contentful().getEntries<CalendarItemSkeleton>({
    content_type: "calendarItem",
    order: ["fields.date"],
    "fields.date[gte]": monthStart,
    limit: LIMIT,
  })
  return items.map(({ sys, fields }) => ({
    id: sys.id,
    title: fields.title,
    date: fields.date,
    description: fields.description,
    audience: toAudience(fields.gender),
  }))
})

export const getInfoBlocks = once(async (): Promise<InfoBlock[]> => {
  const { items } = await contentful().getEntries<InfoBlockSkeleton>({
    content_type: "informationblock",
    order: ["fields.rank"],
    limit: LIMIT,
  })
  return items.map(({ sys, fields }) => ({
    id: sys.id,
    title: fields.title,
    rank: fields.rank,
    chiro: fields.gender === "Jokonta" ? "jokonta" : "allegro",
    banner: toImage(fields.banner),
    info: fields.info ?? null,
  }))
})

/** Age groups, ordered by the first age in their `age` field (as before). */
export const getAgeGroups = once(async (): Promise<AgeGroup[]> => {
  const { items } = await contentful().getEntries<GroupSkeleton>({
    content_type: "group",
    include: 2,
    limit: LIMIT,
  })
  return items
    .map(({ sys, fields }) => {
      const ages = fields.age.map(Number)
      const sorted = [...ages].sort((a, b) => a - b)
      return {
        rang: ages[0] ?? 0,
        group: {
          id: sys.id,
          name: fields.name,
          description: fields.description,
          ages: [sorted[0] ?? 0, sorted[1] ?? 0] as [number, number],
          color: fields.color,
          chiro: toChiro(fields.gender),
          banner: toImage(fields.banner),
          leiding: fields.leiding.flatMap(entry =>
            entry
              ? [
                  {
                    id: entry.sys.id,
                    firstname: entry.fields.firstname,
                    profilePicture: toImage(entry.fields.profilePicture),
                  },
                ]
              : [],
          ),
        },
      }
    })
    .sort((a, b) => a.rang - b.rang)
    .map(({ group }) => group)
})

export const getLeiding = once(async (): Promise<LeidingMember[]> => {
  const { items } = await contentful().getEntries<LeidingSkeleton>({
    content_type: "leiding",
    order: ["fields.firstname"],
    limit: LIMIT,
  })
  return items.map(({ sys, fields }) => ({
    id: sys.id,
    firstname: fields.firstname,
    lastname: fields.lastname,
    nickname: fields.nickname,
    birthday: fields.birthday,
    food: fields.food ?? [],
    activities: fields.activities ?? [],
    chiro: toChiro(fields.gender),
    profilePicture: toImage(fields.profilePicture),
  }))
})

/**
 * The group photo of each chiro's leiding: the two assets titled
 * "Leiding … (Vervangbaar!)", sorted by title (Allegro, then Jokonta).
 */
export const getLeidingPhotos = once(
  async (): Promise<Record<Chiro, CmsImage | null>> => {
    const { items } = await contentful().getAssets({
      "fields.title[match]": "Vervangbaar",
      limit: LIMIT,
    })
    const sorted = items
      .map(asset => toImage(asset))
      .filter((image): image is CmsImage => image !== null)
      .sort((a, b) => a.title.localeCompare(b.title))
    return { allegro: sorted[0] ?? null, jokonta: sorted[1] ?? null }
  },
)

export const getContactInfo = once(async (): Promise<ContactInfo[]> => {
  const { items } = await contentful().getEntries<ContactInfoSkeleton>({
    content_type: "contactinfo",
    order: ["sys.updatedAt"],
    limit: LIMIT,
  })
  return items.map(({ sys, fields }) => ({
    id: sys.id,
    fullName: fields.fullName,
    email: fields.email,
    phone: fields.phone,
    isVolwassenBegeleider: fields.vb,
    chiro: toChiro(fields.gender),
  }))
})

/** All albums, newest first. */
export const getAlbums = once(async (): Promise<Album[]> => {
  const { items } = await contentful().getEntries<AlbumSkeleton>({
    content_type: "album",
    order: ["-fields.date"],
    limit: LIMIT,
  })
  return items.map(({ sys, fields }) => ({
    id: sys.id,
    title: fields.title,
    url: fields.url,
    date: fields.date,
    audience: toAudience(fields.gender),
  }))
})

/** All videos, newest first; `featured` lists the featured ones oldest first. */
export const getVideos = once(
  async (): Promise<{ all: Video[]; featured: Video[] }> => {
    const { items } = await contentful().getEntries<VideoSkeleton>({
      content_type: "video",
      order: ["-sys.createdAt"],
      limit: LIMIT,
    })
    const toVideo = ({ sys, fields }: (typeof items)[number]): Video => ({
      id: sys.id,
      title: fields.title,
      url: fields.url,
      audience: toAudience(fields.gender),
    })
    return {
      all: items.map(toVideo),
      featured: items
        .filter(({ fields }) => fields.featured)
        .reverse()
        .map(toVideo),
    }
  },
)

/**
 * All krantjes, latest edition first, plus the highlighted one per chiro: the
 * first-created entry, as before (it's the entry that gets updated each time).
 */
export const getBoekjes = once(
  async (): Promise<{
    all: Boekje[]
    highlighted: Record<Chiro, Boekje | null>
  }> => {
    const { items } = await contentful().getEntries<BoekjeSkeleton>({
      content_type: "boekje",
      order: ["sys.createdAt"],
      limit: LIMIT,
    })
    const byCreation = items.map(({ sys, fields }) => ({
      id: sys.id,
      title: fields.title,
      url: fields.url,
      startdate: fields.startdate,
      enddate: fields.enddate,
      chiro: toChiro(fields.gender),
    }))
    return {
      // latest edition first; same end date: the newest entry first
      all: [...byCreation]
        .reverse()
        .sort((a, b) => b.enddate.localeCompare(a.enddate)),
      highlighted: {
        jokonta: byCreation.find(boekje => boekje.chiro === "jokonta") ?? null,
        allegro: byCreation.find(boekje => boekje.chiro === "allegro") ?? null,
      },
    }
  },
)

/** All other documents, by title. */
export const getDocuments = once(async (): Promise<CmsDocument[]> => {
  const { items } = await contentful().getEntries<DocumentSkeleton>({
    content_type: "document",
    order: ["fields.title"],
    limit: LIMIT,
  })
  return items.map(({ sys, fields }) => ({
    id: sys.id,
    title: fields.title,
    url: fields.url,
    createdAt: sys.createdAt,
    audience: toAudience(fields.gender),
  }))
})
