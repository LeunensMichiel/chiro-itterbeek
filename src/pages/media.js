import React, { useContext } from "react"

import { GenderContext } from "../context/GenderContext"

import Layout from "../components/layout"
import Seo from "../components/seo/seo"

import JokontaMedia from "../assets/banners/jokonta-bg-media.svg"
import AllegroMedia from "../assets/banners/allegro-bg-media.svg"
import { Disclaimer } from "../components/media/mediaStyles"
import ChoosePage from "../components/chooser/choosePage"
import Banner from "../components/banner/banner"
import More from "../components/media/more"
import Highlighted from "../components/media/highlighted"
import TopVideos from "../components/media/topVideos"
import TopAlbums from "../components/media/topAlbums"

const MediaPage = () => {
  const { genderState } = useContext(GenderContext)

  return (
    <Layout>
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

export const Head = () => (
  <Seo
    title="Media"
    description="Bekijk hier alle soorten media van Chiro Itterbeek. Boekjes, albums, video's en overige documenten."
  />
)
