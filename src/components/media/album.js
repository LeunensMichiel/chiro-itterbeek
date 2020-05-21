import React from "react"
import { AlbumItem } from "./mediaStyles"
import Chevron from "../../assets/icons/chevron.svg"

export const Album = ({ gender = 0 }) => {
  return (
    <AlbumItem gender={gender}>
      <div className="album__header">
        {gender == 1 ? "Jokonta" : gender === 2 ? "Allegro" : "Algemeen"}
      </div>
      <div className="album__body">
        <div className="album__title">Kampfoto's 2019</div>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <span>Bekijk album</span>
          <Chevron />
        </a>
      </div>
    </AlbumItem>
  )
}
