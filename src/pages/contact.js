import React, { useContext } from "react"
import loadable from "@loadable/component"

import { GenderContext } from "../context/GenderContext"

import Layout from "../components/layout"
import SEO from "../components/seo/seo"

const ChoosePage = loadable(() => import("../components/chooser/choosePage"))
const Form = loadable(() => import("../components/contact/form"))
const Map = loadable(() => import("../components/contact/map"))
const ContactInfo = loadable(() => import("../components/contact/info"))

const ContactPage = () => {
  const { genderState } = useContext(GenderContext)
  return (
    <Layout>
      <SEO
        title="Contact"
        description="Contactgevens van Chiro Itterbeek. Stuur ons gerust een berichtje!"
      />
      {genderState.gender === 0 ? (
        <ChoosePage />
      ) : (
        <>
          <Form />
          <Map />
          <ContactInfo />
        </>
      )}
    </Layout>
  )
}

export default ContactPage
