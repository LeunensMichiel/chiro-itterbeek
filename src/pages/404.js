import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import Klok from "../assets/icons/klok.svg"

const NotFoundWrapper = styled.div`
  grid-column: 2 / span 12;
  margin-top: ${p => p.theme.space[6]}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  svg {
    width: 100%;
    max-width: 360px;
  }
`
const NotFound = () => {
  return (
    <Layout>
      <NotFoundWrapper>
        <Klok />
        <h1>Deze pagina bestaat niet!</h1>
      </NotFoundWrapper>
    </Layout>
  )
}

export default NotFound
