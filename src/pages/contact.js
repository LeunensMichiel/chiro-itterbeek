import React from "react"
import loadable from "@loadable/component"

import Layout from "../components/layout"
const Form = loadable(() => import("../components/contact/form"))
const Map = loadable(() => import("../components/contact/map"))
const ContactInfo = loadable(() => import("../components/contact/info"))

const ContactPage = () => {
  return (
    <Layout>
      <Form />
      <Map />
      <ContactInfo />
    </Layout>
  )
}

export default ContactPage
