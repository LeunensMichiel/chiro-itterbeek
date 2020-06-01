/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, Link } from "gatsby"
import loadable from "@loadable/component"

import Layout from "../components/layout"
import {
  TopAlbumWrapper,
  MediaNavitation,
} from "../components/media/mediaStyles"
import Chevron from "../assets/icons/chevron.svg"

const Boekje = loadable(() => import("../components/media/boekje"))

const allBoekjes = ({ pageContext, data }) => {
  const { currentPage, numBoekjePages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numBoekjePages
  const prevPage =
    currentPage - 1 === 1
      ? "/media/krantjes/"
      : `/media/krantjes/${currentPage - 1}`
  const nextPage = `/media/krantjes/${currentPage + 1}`

  return (
    <Layout>
      <TopAlbumWrapper>
        <Link to="/media/">
          <Chevron />
          <span>Ga terug</span>
        </Link>
        <h2
          sx={{
            variant: "text.headingAlternative",
          }}
        >
          Alle Krantjes
        </h2>
        <MediaNavitation isFirst={isFirst} isLast={isLast}>
          <Link to={prevPage}>
            <Chevron />
          </Link>
          <div className="media__pagenumber">{currentPage}</div>
          <Link to={nextPage}>
            <Chevron />
          </Link>
        </MediaNavitation>
        <div className="album__grid">
          {data.boekjes.edges.map(boekje => (
            <Boekje key={boekje.node.id} boekje={boekje.node} />
          ))}
        </div>
      </TopAlbumWrapper>
    </Layout>
  )
}

export default allBoekjes

export const boekjesListQuery = graphql`
  query allBoekjesQuery($skip: Int!, $limit: Int!) {
    boekjes: allContentfulBoekje(
      sort: { fields: enddate, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          gender
          title
          url
          id
          enddate
          startdate
        }
      }
    }
  }
`
