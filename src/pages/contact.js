import React from "react"
import loadable from "@loadable/component"

import Layout from "../components/layout"
import SEO from "../components/seo/seo"
const Form = loadable(() => import("../components/contact/form"))
const Map = loadable(() => import("../components/contact/map"))
const ContactInfo = loadable(() => import("../components/contact/info"))

const ContactPage = () => {
  return (
    <Layout>
      <SEO
        title="Contact"
        description="Contactgevens van Chiro Itterbeek. Stuur ons gerust een berichtje!"
      />
      <Form />
      <Map />
      <ContactInfo />
    </Layout>
  )
}

export default ContactPage
