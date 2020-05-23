import React from "react"
import { AlbumItem } from "./mediaStyles"
import Chevron from "../../assets/icons/chevron.svg"

export const Album = ({ album }) => {
  return (
    <AlbumItem
      gender={
        album.gender === "Jokonta" ? 1 : album.gender === "Allegro" ? 2 : 3
      }
    >
      <div className="album__header">{album.gender}</div>
      <div className="album__body">
        <div className="album__title">{album.title}</div>
        <a href={album.url} target="_blank" rel="noopener noreferrer">
          <span>Bekijk album</span>
          <Chevron />
        </a>
      </div>
    </AlbumItem>
  )
}
