import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import Klok from "../assets/images/klok.svg"

const NotFoundWrapper = styled.div`
  grid-column: 2 / span 12;
  margin-top: ${p => p.theme.space[1]}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 66vh;
  img {
    width: 100%;
    max-width: 360px;
  }
  @media ${p => p.theme.mq.mobileM} {
    min-height: 30vh;
    img {
      max-width: 200px;
    }
    h1 {
      font-size: ${p => p.theme.fontSizes[3]}px;
    }
  }
`
const NotFound = () => {
  return (
    <Layout>
      <NotFoundWrapper>
        <img src={Klok} alt="Klok" />
        <h1>Deze pagina bestaat niet!</h1>
      </NotFoundWrapper>
    </Layout>
  )
}

export default NotFound
