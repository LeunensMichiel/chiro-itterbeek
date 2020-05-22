/** @jsx jsx */
import { jsx } from "theme-ui"
import Img from "gatsby-image"

import { Group, LeidingItem } from "./groupStyles"

export const AgeGroup = ({ color, group }) => {
  return (
    <Group color={color}>
      <h2
        sx={{
          variant: "text.headingAlternative",
        }}
        className="group__header"
      >
        {group.name}
      </h2>
      <Img
        className="group__image"
        fluid={group.banner.fluid}
        title={group.name}
        alt={group.name}
      />
      <div className="group__description">
        <h4>Voor welke leeftijd?</h4>
        <p>{`${group.age[0]} tot ${group.age[1]} jaar`}</p>
        <h4>Voor wie?</h4>
        <p>{group.description.description}</p>
      </div>
      <div className="group__leiding">
        <h3
          sx={{
            variant: "text.navHeadingWhite",
          }}
          className="group__leiding__header"
        >
          Leiding
        </h3>
        <div className="group__leiding__items">
          {group.leiding.map(leiding => (
            <LeidingItem>
              <div className="group__leiding__title">{leiding.firstname}</div>
              <Img
                className="group__leiding__image"
                fixed={leiding.profilePicture.fixed}
                alt={leiding.firstname}
                title={leiding.firstname}
              />
            </LeidingItem>
          ))}
        </div>
      </div>
    </Group>
  )
}
