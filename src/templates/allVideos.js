/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo/seo"
import {
  TopVideoWrapper,
  MediaNavitation,
  Disclaimer,
} from "../components/media/mediaStyles"

import Chevron from "../assets/icons/chevron.svg"

const allVideos = ({ pageContext, data }) => {
  const { currentPage, numVideoPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numVideoPages
  const prevPage =
    currentPage - 1 === 1
      ? "/media/videos/"
      : `/media/videos/${currentPage - 1}`
  const nextPage = `/media/videos/${currentPage + 1}`

  return (
    <Layout>
      <SEO
        title="Alle video's"
        description="Bekijk hier alle video's van Chiro Itterbeek. Zowel van de jongens als de meisjes!"
      />
      <TopVideoWrapper>
        <Link to="/media/">
          <Chevron />
          <span>Ga terug</span>
        </Link>
        <h2
          sx={{
            variant: "text.headingAlternative",
          }}
        >
          Alle Video's
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
        <div className="media__vidcontainer">
          {data.videos.edges.map(vid => (
            <div className="media__video__wrapper" key={vid.node.id}>
              <iframe
                width="100%"
                height="100%"
                scrolling="no"
                title={vid.node.title}
                src={vid.node.url}
                style={{ border: "none", overflow: "hidden" }}
                frameBorder="0"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                importance="low"
                loading="lazy"
              ></iframe>
            </div>
          ))}
        </div>
      </TopVideoWrapper>
      <Disclaimer>
        Disclaimer: de video's maken gebruik van externe cookies, aangezien deze
        op Facebook en Youtube geüpload staan.
      </Disclaimer>
    </Layout>
  )
}

export default allVideos

export const videoListQuery = graphql`
  query allVideosQuery($skip: Int!, $limit: Int!) {
    videos: allContentfulVideo(
      sort: { fields: createdAt, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          gender
          url
          title
          id
        }
      }
    }
  }
`
