import React from "react"
import { AlbumItem } from "./mediaStyles"
import Chevron from "../../assets/icons/chevron.svg"

const Album = ({ album }) => {
  return (
    <AlbumItem
      gender={
        album.gender === "Jokonta" ? 1 : album.gender === "Allegro" ? 2 : 3
      }
    >
      <div className="album__header">
        {album.gender === "Itterbeek" ? "Algemeen" : album.gender}
      </div>
      <div className="album__body">
        <div className="album__title">{album.title}</div>
        <a
          aria-label="Album bekijken"
          href={album.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Bekijk album</span>
          <Chevron />
        </a>
      </div>
    </AlbumItem>
  )
}

export default Album
