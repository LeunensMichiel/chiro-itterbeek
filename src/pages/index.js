import { React } from "react"

import Layout from "../components/layout"
import { Banner, Calendar, Information } from "../components"

import JokontaCal from "../assets/banners/jokonta-bg-kalender.svg"
import AllegroCal from "../assets/banners/allegro-bg-kalender.svg"
import JokontaInfo from "../assets/banners/jokonta-bg-info.svg"
import AllegroInfo from "../assets/banners/allegro-bg-info.svg"
import JokontaGroep from "../assets/banners/jokonta-bg-groepen.svg"
import AllegroGroep from "../assets/banners/allegro-bg-groepen.svg"

const IndexPage = () => {
  return (
    <Layout>
      <Banner
        jokonta={<JokontaCal />}
        allegro={<AllegroCal />}
        text={`Programma`}
      />
      <Calendar />
      <Banner
        jokonta={<JokontaInfo />}
        allegro={<AllegroInfo />}
        text={`Informatie`}
      />
      <Information />
      <Banner
        jokonta={<JokontaGroep />}
        allegro={<AllegroGroep />}
        text={`Leeftijdsgroepen`}
      />
    </Layout>
  )
}

export default IndexPage
