import React from "react"
import { AlbumItem } from "./mediaStyles"
import Chevron from "../../assets/icons/chevron.svg"

const Document = ({ document }) => {
  const formatter = new Intl.DateTimeFormat("nl-BE", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <AlbumItem
      gender={
        document.gender === "Jokonta"
          ? 1
          : document.gender === "Allegro"
          ? 2
          : 3
      }
    >
      <div className="album__header">
        {document.gender === "Itterbeek" ? "Algemeen" : document.gender}
      </div>
      <div className="album__body">
        <small>{`Geüpload: ${formatter.format(
          new Date(document.createdAt)
        )}`}</small>
        <div className="album__title">{document.title}</div>
        <a
          aria-label="Document bekijken"
          href={document.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Bekijk document</span>
          <Chevron />
        </a>
      </div>
    </AlbumItem>
  )
}

export default Document
