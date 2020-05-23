import React from "react"
import { AlbumItem } from "./mediaStyles"
import Chevron from "../../assets/icons/chevron.svg"

export const Boekje = ({ boekje }) => {
  const startdate = new Date(boekje.startdate)
  const enddate = new Date(boekje.enddate)
  const formatter = new Intl.DateTimeFormat("nl-BE", { month: "long" })

  return (
    <AlbumItem gender={boekje.gender ? 1 : 2}>
      <div className="album__header">
        {boekje.gender ? "Jokonta" : "Allegro"}
      </div>
      <div className="album__body">
        <small>{`Editie ${formatter.format(startdate)} - ${formatter.format(
          enddate
        )} ${enddate.getFullYear()}`}</small>
        <div className="album__title">{boekje.title}</div>
        <a href={boekje.url} target="_blank" rel="noopener noreferrer">
          <span>Lees boekje</span>
          <Chevron />
        </a>
      </div>
    </AlbumItem>
  )
}
