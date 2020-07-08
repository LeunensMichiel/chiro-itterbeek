import React, { useContext } from "react"
import loadable from "@loadable/component"

import { GenderContext } from "../context/GenderContext"

import Layout from "../components/layout"
import SEO from "../components/seo/seo"

import JokontaMedia from "../assets/banners/jokonta-bg-media.svg"
import AllegroMedia from "../assets/banners/allegro-bg-media.svg"
import { Disclaimer } from "../components/media/mediaStyles"
const ChoosePage = loadable(() => import("../components/chooser/choosePage"))
const Banner = loadable(() => import("../components/banner/banner"))
const More = loadable(() => import("../components/media/more"))
const Highlighted = loadable(() => import("../components/media/highlighted"))
const TopVideos = loadable(() => import("../components/media/topVideos"))
const TopAlbums = loadable(() => import("../components/media/topAlbums"))

const MediaPage = () => {
  const { genderState } = useContext(GenderContext)

  return (
    <Layout>
      <SEO
        title="Media"
        description="Bekijk hier alle soorten media van Chiro Itterbeek. Boekjes, albums, video's en overige documenten."
      />
      {genderState.gender === 0 ? (
        <ChoosePage />
      ) : (
        <>
          <Banner
            jokonta={JokontaMedia}
            allegro={AllegroMedia}
            text="Foto's en Video's"
          />
          <More />
          <Highlighted />
          <TopVideos />
          <TopAlbums />
          <Disclaimer>
            Disclaimer: de video's maken gebruik van externe cookies, aangezien
            deze op Facebook en Youtube geüpload staan.
          </Disclaimer>
        </>
      )}
    </Layout>
  )
}

export default MediaPage
