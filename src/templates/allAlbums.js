/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, Link } from "gatsby"
import loadable from "@loadable/component"

import Layout from "../components/layout"
import SEO from "../components/seo/seo"
import {
  TopAlbumWrapper,
  MediaNavitation,
} from "../components/media/mediaStyles"
import Chevron from "../assets/icons/chevron.svg"

const Album = loadable(() => import("../components/media/album"))

const allAlbums = ({ pageContext, data }) => {
  const { currentPage, numAlbumPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numAlbumPages
  const prevPage =
    currentPage - 1 === 1
      ? "/media/albums/"
      : `/media/albums/${currentPage - 1}`
  const nextPage = `/media/albums/${currentPage + 1}`

  return (
    <Layout>
      <SEO
        title="Albums"
        description="Alle albums van chiro Jokonta en chiro Allegro."
      />
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
          Alle Albums
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
          {data.albums.edges.map(album => (
            <Album key={album.node.id} album={album.node} />
          ))}
        </div>
      </TopAlbumWrapper>
    </Layout>
  )
}

export default allAlbums

export const albumListQuery = graphql`
  query allAlbumsQuery($skip: Int!, $limit: Int!) {
    albums: allContentfulAlbum(
      sort: { fields: date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          title
          url
          id
          gender
          date
        }
      }
    }
  }
`
