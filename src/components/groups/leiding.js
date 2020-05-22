/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState, useContext, useEffect } from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { SwitchTransition, CSSTransition } from "react-transition-group"

import { GenderContext } from "../../context/GenderContext"

import {
  GroupWrapper,
  GroupNavigation,
  GroupNavigationItem,
  Group,
  LeidingItem,
} from "./groupStyles"

export const Leiding = ({ color, gender }) => {
  return (
    <Group color={color}>
      <h2
        sx={{
          variant: "text.headingAlternative",
        }}
        className="group__header"
      >
        Leiding
      </h2>
      {/* <Img
        className="group__image"
        fluid={filteredGroups[activeGroup].node.banner.fluid}
        title={filteredGroups[activeGroup].node.name}
        alt={filteredGroups[activeGroup].node.name}
      /> */}
      <div className="group__description">
        <h4>{`Ontmoet je ${gender === 1 ? "leiding" : "leidsters"}!`}</h4>
        {gender === 1 ? (
          <p>
            Deze klassebakken staan elke zondag voor je klaar! Klik op een
            leider om hem beter te leren kennen!
          </p>
        ) : (
          <p>
            Deze topvrouwen staan elke zondag voor je klaar! Klik op een
            leidster om haar beter te leren kennen!
          </p>
        )}
      </div>
      {/* <div className="group__leiding">
        <h3
          sx={{
            variant: "text.navHeadingWhite",
          }}
          className="group__leiding__header"
        >
          Leiding
        </h3>
        <div className="group__leiding__items">
          {filteredGroups[activeGroup].node.leiding.map(leiding => (
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
      </div> */}
    </Group>
  )
}
