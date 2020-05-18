import React from "react"

import Layout from "../components/layout"
import { Banner, Highlighted } from "../components"

import JokontaMedia from "../assets/banners/jokonta-bg-media.svg"

const MediaPage = () => {
  return (
    <Layout>
      <Banner
        jokonta={<JokontaMedia />}
        allegro={<JokontaMedia />}
        text="Foto's en Video's"
      />
      <Highlighted />
    </Layout>
  )
}

export default MediaPage
