import type { MetadataRoute } from "next"

import {
  getAlbums,
  getBoekjes,
  getDocuments,
  getPosts,
  getVideos,
} from "@/lib/contentful"
import { PER_PAGE, pageCount, pagePath } from "@/lib/pagination"
import { site } from "@/lib/site"

export const dynamic = "force-static"

const pages = (basePath: string, total: number, perPage: number) =>
  Array.from({ length: pageCount(total, perPage) }, (_, i) =>
    pagePath(basePath, i + 1),
  )

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, albums, boekjes, documents, videos] = await Promise.all([
    getPosts(),
    getAlbums(),
    getBoekjes(),
    getDocuments(),
    getVideos(),
  ])
  const paths = [
    "/",
    "/media/",
    "/contact/",
    ...pages("/nieuws/", posts.length, PER_PAGE.nieuws),
    ...posts.map(post => `/nieuws/${post.slug}/`),
    ...pages("/media/albums/", albums.length, PER_PAGE.albums),
    ...pages("/media/krantjes/", boekjes.all.length, PER_PAGE.krantjes),
    ...pages("/media/documenten/", documents.length, PER_PAGE.documenten),
    ...pages("/media/videos/", videos.all.length, PER_PAGE.videos),
  ]
  return paths.map(path => ({ url: `${site.url}${path}` }))
}
