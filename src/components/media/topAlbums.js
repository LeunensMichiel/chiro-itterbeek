/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { TopAlbumWrapper } from "./mediaStyles"
import { GenderContext } from "../../context/GenderContext"
import { Album } from "./album"

export const TopAlbums = () => {
  const { genderState } = useContext(GenderContext)

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
        <Album />
        <Album />
        <Album />
        <Album />
      </div>
    </TopAlbumWrapper>
  )
}
