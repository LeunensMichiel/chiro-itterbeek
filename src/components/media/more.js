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
        <Link>
          <span>Bekijk alle boekjes</span>
          <Chevron />
        </Link>
        <Link>
          <span>Bekijk alle foto's</span>
          <Chevron />
        </Link>
        <Link>
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
