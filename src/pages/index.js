import { React } from "react"

import Layout from "../components/layout"
import { Banner, Calendar } from "../components"

import JokontaCal from "../assets/banners/jokonta-bg-kalender.svg"
import AllegroCal from "../assets/banners/allegro-bg-kalender.svg"
import JokontaInfo from "../assets/banners/jokonta-bg-info.svg"
import AllegroInfo from "../assets/banners/allegro-bg-info.svg"

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
    </Layout>
  )
}

export default IndexPage
