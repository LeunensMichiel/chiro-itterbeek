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

const Document = loadable(() => import("../components/media/document"))

const allDocuments = ({ pageContext, data }) => {
  const { currentPage, numDocumentPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numDocumentPages
  const prevPage =
    currentPage - 1 === 1
      ? "/media/documenten/"
      : `/media/documenten/${currentPage - 1}`
  const nextPage = `/media/documenten/${currentPage + 1}`

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
          Overige Documeten
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
          {data.documents.edges.map(doc => (
            <Document key={doc.node.id} document={doc.node} />
          ))}
        </div>
      </TopAlbumWrapper>
    </Layout>
  )
}

export default allDocuments

export const docListQuery = graphql`
  query alldocQuery($skip: Int!, $limit: Int!) {
    documents: allContentfulDocument(
      sort: { fields: title }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          gender
          createdAt
          id
          title
          url
        }
      }
    }
  }
`
