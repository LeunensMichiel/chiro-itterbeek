import React, { useContext } from "react"
import loadable from "@loadable/component"

import { GenderContext } from "../context/GenderContext"

import Layout from "../components/layout"
import SEO from "../components/seo/seo"

import JokontaCal from "../assets/banners/jokonta-bg-kalender.svg"
import AllegroCal from "../assets/banners/allegro-bg-kalender.svg"
import JokontaInfo from "../assets/banners/jokonta-bg-info.svg"
import AllegroInfo from "../assets/banners/allegro-bg-info.svg"
import JokontaGroep from "../assets/banners/jokonta-bg-groepen.svg"
import AllegroGroep from "../assets/banners/allegro-bg-groepen.svg"
const ChoosePage = loadable(() => import("../components/chooser/choosePage"))
const NewsHighlight = loadable(() => import("../components/news/newsHighlight"))
const Banner = loadable(() => import("../components/banner/banner"))
const ContactBanner = loadable(() =>
  import("../components/banner/contactBanner")
)
const Calendar = loadable(() => import("../components/calendar/calendar"))
const Information = loadable(() =>
  import("../components/information/information")
)
const Groups = loadable(() => import("../components/groups/groups"))

const IndexPage = () => {
  const { genderState } = useContext(GenderContext)

  return (
    <Layout>
      <SEO
        title="Home"
        description="Welkom op de website van Chiro Itterbeek! We zijn een enorm leuke jeugdbeweging gelegen in Dilbeek, België. Voor de jongens ga je naar chiro Jokonta, voor de meisjes naar chiro Allegro!"
      />
      {genderState.gender === 0 ? (
        <ChoosePage />
      ) : (
        <>
          <Banner
            jokonta={JokontaCal}
            allegro={AllegroCal}
            text={`Programma`}
          />
          <NewsHighlight />
          <Calendar />
          <Banner
            jokonta={JokontaInfo}
            allegro={AllegroInfo}
            text={`Informatie`}
          />
          <Information />
          <Banner
            jokonta={JokontaGroep}
            allegro={AllegroGroep}
            text={`Leeftijdsgroepen`}
          />
          <Groups />
          <ContactBanner />
        </>
      )}
    </Layout>
  )
}

export default IndexPage
