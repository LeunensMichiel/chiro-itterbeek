import allegroCalendar from "@/assets/banners/allegro-bg-kalender.svg"
import allegroGroups from "@/assets/banners/allegro-bg-groepen.svg"
import allegroInfo from "@/assets/banners/allegro-bg-info.svg"
import jokontaCalendar from "@/assets/banners/jokonta-bg-kalender.svg"
import jokontaGroups from "@/assets/banners/jokonta-bg-groepen.svg"
import jokontaInfo from "@/assets/banners/jokonta-bg-info.svg"
import { Banner } from "@/components/banner"
import { Calendar } from "@/components/calendar"
import { ChoosePage } from "@/components/choose-page"
import { ContactBanner } from "@/components/contact-banner"
import { Groups } from "@/components/groups/groups"
import { Information } from "@/components/information"
import { NewsHighlight } from "@/components/news/news-highlight"
import { OnlyFor } from "@/components/only-for"
import {
  getAgeGroups,
  getCalendarItems,
  getInfoBlocks,
  getLeiding,
  getLeidingPhotos,
  getPosts,
} from "@/lib/contentful"
import { localDay } from "@/lib/format"
import { pageMetadata } from "@/lib/metadata"
import { site } from "@/lib/site"

export const metadata = {
  ...pageMetadata({
    title: "Home",
    description:
      "Welkom op de website van Chiro Itterbeek! We zijn een enorm leuke jeugdbeweging gelegen in Dilbeek, België. Voor de jongens ga je naar chiro Jokonta, voor de meisjes naar chiro Allegro!",
    path: "/",
  }),
  // The title template doesn't apply to the root segment's own page
  title: { absolute: `${site.title} - Home` },
}

export default async function HomePage() {
  const [posts, calendarItems, infoBlocks, groups, leiding, leidingPhotos] =
    await Promise.all([
      getPosts(),
      getCalendarItems(),
      getInfoBlocks(),
      getAgeGroups(),
      getLeiding(),
      getLeidingPhotos(),
    ])
  const buildDay = localDay(new Date())

  return (
    <>
      <OnlyFor chiro="unchosen">
        <ChoosePage />
      </OnlyFor>
      <OnlyFor chiro="chosen">
        <Banner
          text="Programma"
          jokonta={jokontaCalendar}
          allegro={allegroCalendar}
        />
        <NewsHighlight posts={posts} />
        <Calendar items={calendarItems} buildDay={buildDay} />
        <Banner text="Informatie" jokonta={jokontaInfo} allegro={allegroInfo} />
        <Information blocks={infoBlocks} />
        <Banner
          text="Leeftijdsgroepen"
          jokonta={jokontaGroups}
          allegro={allegroGroups}
        />
        <Groups
          groups={groups}
          leiding={leiding}
          leidingPhotos={leidingPhotos}
          buildDay={buildDay}
        />
        <ContactBanner />
      </OnlyFor>
    </>
  )
}
