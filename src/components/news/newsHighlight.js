import React from "react"
import { HighlightWrapper, HighlightItem } from "./newsStyles"
import Img from "gatsby-image"
import { Link } from "gatsby"

import Chevron from "../../assets/icons/chevron.svg"
export const NewsHighlight = ({ margin, img }) => {
  return (
    <HighlightWrapper margin={margin ? 1 : 0}>
      <h2>Uitgelicht bericht</h2>
      <HighlightItem>
        <Img className="headline__image" fluid={img} />
        <div className="headline__text">
          <h3>Toxken blijkt dan toch een schattig ventjn te zijn</h3>
          <small>Vrijdag 1 april om 21:00</small>
          <Link>
            <span>Lees meer</span>
            <Chevron />
          </Link>
        </div>
      </HighlightItem>
      <hr />
    </HighlightWrapper>
  )
}
