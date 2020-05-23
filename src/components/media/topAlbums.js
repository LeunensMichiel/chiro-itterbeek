/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { TopAlbumWrapper } from "./mediaStyles"
import { useStaticQuery, graphql } from "gatsby"

import { GenderContext } from "../../context/GenderContext"
import { Album } from "./album"

export const TopAlbums = () => {
  const data = useStaticQuery(graphql`
    query {
      albums: allContentfulAlbum(sort: { fields: date }) {
        edges {
          node {
            gender
            id
            date
            title
            url
          }
        }
      }
    }
  `)
  const { genderState } = useContext(GenderContext)
  const filteredAlbums = data.albums.edges.filter(album =>
    genderState.gender === 1
      ? album.node.gender === "Itterbeek" || album.node.gender === "Jokonta"
      : album.node.gender === "Itterbeek" || album.node.gender === "Allegro"
  )
  return (
    <TopAlbumWrapper>
      <h2
        sx={{
          variant: "text.headingAlternative",
        }}
      >
        Recente Albums
      </h2>
      <div className="album__grid">
        {filteredAlbums.map(album => (
          <Album album={album.node} />
        ))}
      </div>
    </TopAlbumWrapper>
  )
}
