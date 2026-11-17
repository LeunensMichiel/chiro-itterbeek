import allegroMedia from "@/assets/banners/allegro-bg-media.svg"
import jokontaMedia from "@/assets/banners/jokonta-bg-media.svg"
import { Banner } from "@/components/banner"
import { ChoosePage } from "@/components/choose-page"
import { HighlightedBoekje } from "@/components/media/highlighted-boekje"
import { MediaCard } from "@/components/media/media-card"
import {
  cardGrid,
  Disclaimer,
  MediaSection,
} from "@/components/media/media-section"
import { MoreMedia } from "@/components/media/more-media"
import { VideoGrid } from "@/components/media/video-grid"
import { OnlyFor } from "@/components/only-for"
import { CHIROS, isFor } from "@/lib/chiro"
import { getAlbums, getBoekjes, getVideos } from "@/lib/contentful"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: "Media",
  description:
    "Bekijk hier alle soorten media van Chiro Itterbeek. Boekjes, albums, video's en overige documenten.",
  path: "/media/",
})

export default async function MediaPage() {
  const [albums, videos, boekjes] = await Promise.all([
    getAlbums(),
    getVideos(),
    getBoekjes(),
  ])
  const recentAlbums = albums.slice(0, 9)

  return (
    <>
      <OnlyFor chiro="unchosen">
        <ChoosePage />
      </OnlyFor>
      <OnlyFor chiro="chosen">
        <Banner
          text="Foto's en Video's"
          level={1}
          jokonta={jokontaMedia}
          allegro={allegroMedia}
        />
        <MoreMedia />
        <HighlightedBoekje boekjes={boekjes.highlighted} />
        {CHIROS.map(chiro => (
          <OnlyFor key={chiro} chiro={chiro}>
            <MediaSection title="Uitgelichte video's" kind="videos">
              <VideoGrid
                videos={videos.featured.filter(video =>
                  isFor(video.audience, chiro),
                )}
              />
            </MediaSection>
            <MediaSection title="Recente Albums" kind="cards">
              <div className={cardGrid}>
                {recentAlbums
                  .filter(album => isFor(album.audience, chiro))
                  .map(album => (
                    <MediaCard
                      key={album.id}
                      audience={album.audience}
                      title={album.title}
                      href={album.url}
                      linkLabel="Bekijk album"
                    />
                  ))}
              </div>
            </MediaSection>
          </OnlyFor>
        ))}
        <Disclaimer />
      </OnlyFor>
    </>
  )
}
