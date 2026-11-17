/** @jsxImportSource theme-ui */
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { Group, LeidingItem } from "./groupStyles"

const AgeGroup = ({ color, group }) => {
  const age = [...group.age].sort((a, b) => parseInt(a) - parseInt(b))
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
      <GatsbyImage
        className="group__image"
        image={getImage(group.banner)}
        title={group.name}
        alt={group.name}
      />
      <div className="group__description">
        <h4>Voor welke leeftijd?</h4>
        <p>{`${age[0]} tot ${age[1]} jaar`}</p>
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
            <LeidingItem key={leiding.id}>
              <div className="group__leiding__title">{leiding.firstname}</div>
              <GatsbyImage
                className="group__leiding__image"
                image={getImage(leiding.profilePicture)}
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

export default AgeGroup
