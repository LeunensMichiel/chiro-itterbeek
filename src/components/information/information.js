/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"
import { useContext } from "react"
import { GenderContext } from "../../context/GenderContext"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import {
  InformationWrapper,
  InformationNavigation,
  InformationBlock,
} from "./informationStyles"

export const Information = () => {
  const data = useStaticQuery(graphql`
    query {
      infoImage: file(relativePath: { eq: "images/jongens.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 950, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const { genderState } = useContext(GenderContext)
  const [colorMode] = useColorMode()

  return (
    <InformationWrapper>
      <InformationNavigation gender={genderState.gender}>
        <button
          sx={{
            variant: "text.navHeading",
          }}
        >
          Algemeen
        </button>
        <button
          sx={{
            variant: "text.navHeading",
          }}
        >
          Inschrijven
        </button>
        <button
          sx={{
            variant: "text.navHeading",
          }}
        >
          Uniform
        </button>
      </InformationNavigation>
      <InformationBlock isDark={colorMode === "dark"}>
        <Img
          className="information__image__container"
          fluid={data.infoImage.childImageSharp.fluid}
        />
        <div className="information__article">
          <h4>wie zijn wij?</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi
            quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus.
            Lacus vel facilisis volutpat est velit egestas dui. At urna
            condimentum mattis pellentesque id. Nisl nunc mi ipsum faucibus
            vitae aliquet. Nulla posuere sollicitudin aliquam ultrices sagittis.
            Tortor at risus viverra adipiscing. Amet nisl purus in mollis nunc
            sed. Est lorem ipsum dolor sit. Risus commodo viverra maecenas
            accumsan lacus. Ac felis donec et odio pellentesque diam. Massa sed
            elementum tempus egestas sed sed risus pretium quam. Ultrices
            tincidunt arcu non sodales neque sodales ut etiam sit. Blandit
            cursus risus at ultrices mi tempus imperdiet. Nunc lobortis mattis
            aliquam faucibus purus. Magna fermentum iaculis eu non diam
            phasellus vestibulum lorem sed. Eget aliquet nibh praesent
            tristique. Adipiscing bibendum est ultricies integer quis auctor
            elit.
          </p>
          <p>
            Gravida rutrum quisque non tellus orci ac. Tempus iaculis urna id
            volutpat lacus laoreet non curabitur gravida. Ac felis donec et odio
            pellentesque diam volutpat commodo sed. Diam phasellus vestibulum
            lorem sed. Duis at tellus at urna condimentum mattis pellentesque.
            Facilisi cras fermentum odio eu feugiat pretium nibh ipsum.
            Facilisis magna etiam tempor orci eu. Pretium fusce id velit ut.
            Aliquet lectus proin nibh nisl condimentum id venenatis a. Ipsum a
            arcu cursus vitae congue mauris rhoncus aenean vel. Pretium quam
            vulputate dignissim suspendisse in. At erat pellentesque adipiscing
            commodo elit. Amet dictum sit amet justo donec. In eu mi bibendum
            neque egestas congue.
          </p>
        </div>
      </InformationBlock>
    </InformationWrapper>
  )
}
