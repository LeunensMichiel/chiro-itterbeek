import React from "react"
import { NewsWrapper } from "./newsStyles"
import { NewsItem } from "./newsItem"

import Chevron from "../../assets/icons/chevron.svg"

export const News = () => {
  return (
    <NewsWrapper>
      <div className="news__navigation">
        <button
          onClick={() => {
            console.log("clicked")
          }}
        >
          <Chevron />
        </button>
        <div className="news__navigation__number">1</div>
        <button
          onClick={e => {
            console.log("clicked")
          }}
        >
          <Chevron />
        </button>
      </div>
      <div className="news__grid">
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </div>
    </NewsWrapper>
  )
}
