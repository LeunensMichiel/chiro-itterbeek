import { React } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import {
  Banner,
  Calendar,
  Information,
  Groups,
  ContactBanner,
} from "../components"

import JokontaCal from "../assets/banners/jokonta-bg-kalender.svg"
import AllegroCal from "../assets/banners/allegro-bg-kalender.svg"
import JokontaInfo from "../assets/banners/jokonta-bg-info.svg"
import AllegroInfo from "../assets/banners/allegro-bg-info.svg"
import JokontaGroep from "../assets/banners/jokonta-bg-groepen.svg"
import AllegroGroep from "../assets/banners/allegro-bg-groepen.svg"
import { NewsHighlight } from "../components/news/newsHighlight"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      headlineImage: file(relativePath: { eq: "images/jongens.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 950, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Banner
        jokonta={<JokontaCal />}
        allegro={<AllegroCal />}
        text={`Programma`}
      />
      <NewsHighlight img={data.headlineImage.childImageSharp.fluid} />
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
      <Groups />
      <ContactBanner />
    </Layout>
  )
}

export default IndexPage
