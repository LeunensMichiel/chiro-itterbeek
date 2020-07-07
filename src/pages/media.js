import React from "react"
import loadable from "@loadable/component"

import Layout from "../components/layout"
import SEO from "../components/seo/seo"

import JokontaMedia from "../assets/banners/jokonta-bg-media.svg"
import AllegroMedia from "../assets/banners/allegro-bg-media.svg"
const Banner = loadable(() => import("../components/banner/banner"))
const More = loadable(() => import("../components/media/more"))
const Highlighted = loadable(() => import("../components/media/highlighted"))
const TopVideos = loadable(() => import("../components/media/topVideos"))
const TopAlbums = loadable(() => import("../components/media/topAlbums"))

const MediaPage = () => {
  return (
    <Layout>
      <SEO
        title="Media"
        description="Bekijk hier alle soorten media van Chiro Itterbeek. Boekjes, albums, video's en overige documenten."
      />
      <Banner
        jokonta={JokontaMedia}
        allegro={AllegroMedia}
        text="Foto's en Video's"
      />
      <More />
      <Highlighted />
      <TopVideos />
      <TopAlbums />
    </Layout>
  )
}

export default MediaPage
