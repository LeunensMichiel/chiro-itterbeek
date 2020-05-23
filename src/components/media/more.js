/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { MoreMedia } from "./mediaStyles"
import { GenderContext } from "../../context/GenderContext"
import { Link } from "gatsby"

import Chevron from "../../assets/icons/chevron.svg"
export const More = () => {
  const { genderState } = useContext(GenderContext)

  return (
    <MoreMedia gender={genderState.gender}>
      <h2>Meer Media!</h2>
      <div className="media__links">
        <Link to="/media/krantjes">
          <span>Bekijk alle krantjes</span>
          <Chevron />
        </Link>
        <Link to="/media/albums">
          <span>Bekijk alle foto's</span>
          <Chevron />
        </Link>
        <Link to="/media/videos">
          <span>Bekijk alle filmpjes</span>
          <Chevron />
        </Link>
        <Link>
          <span>Overige documenten</span>
          <Chevron />
        </Link>
        <small>
          Wil je meer up to date blijven? Bezoek dan zeker ook onze instagram en
          facebook!
        </small>
      </div>
    </MoreMedia>
  )
}
