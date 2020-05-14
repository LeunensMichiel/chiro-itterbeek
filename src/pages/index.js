import { React } from "react"

import Layout from "../components/layout"
import { Banner, Calendar } from "../components"

import Jokonta from "../assets/banners/jokonta-bg-kalender.svg"
import Allegro from "../assets/banners/allegro-bg-kalender.svg"

const IndexPage = () => {
  return (
    <Layout>
      <Banner jokonta={<Jokonta />} allegro={<Allegro />} text={`Programma`} />
      <Calendar />
    </Layout>
  )
}

export default IndexPage
