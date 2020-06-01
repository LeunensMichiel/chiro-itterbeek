/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { TopVideoWrapper } from "./mediaStyles"
import { useStaticQuery, graphql } from "gatsby"
import { GenderContext } from "../../context/GenderContext"

const TopVideos = () => {
  const data = useStaticQuery(graphql`
    query {
      featured: allContentfulVideo(
        sort: { fields: createdAt, order: ASC }
        filter: { featured: { eq: true } }
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
  `)
  const { genderState } = useContext(GenderContext)
  const filteredFeatured = data.featured.edges.filter(feat =>
    genderState.gender === 1
      ? feat.node.gender === "Itterbeek" || feat.node.gender === "Jokonta"
      : feat.node.gender === "Itterbeek" || feat.node.gender === "Allegro"
  )
  return (
    <TopVideoWrapper>
      <h2
        sx={{
          variant: "text.headingAlternative",
        }}
      >
        Uitgelichte video's
      </h2>
      <div className="media__vidcontainer">
        {filteredFeatured.map(ft => (
          <div className="media__video__wrapper" key={ft.node.id}>
            <iframe
              width="100%"
              height="100%"
              scrolling="no"
              title={ft.node.title}
              src={ft.node.url}
              style={{ border: "none", overflow: "hidden" }}
              frameBorder="0"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </TopVideoWrapper>
  )
}

export default TopVideos
