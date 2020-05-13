import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"

const StyledHeader = styled.h1`
  color: ${p => p.theme.colors.header};
`

const IndexPage = () => {
  return (
    <Layout>
      <h1>titel</h1>
    </Layout>
  )
}

export default IndexPage
