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
      <form
        name="Contact Allegro"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        hidden
      >
        <input type="hidden" name="form-name" value="Contact Allegro" />
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="chiro" value="Allegro" />
        <input type="text" name="naam" />
        <input type="email" name="email" />
        <input type="tel" name="telefoon" />
        <input type="text" name="onderwerp" />
        <textarea name="bericht"></textarea>
      </form>
      <form
        name="Contact Jokonta"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        hidden
      >
        <input type="hidden" name="form-name" value="Contact Jokonta" />
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="chiro" value="Jokonta" />
        <input type="text" name="naam" />
        <input type="email" name="email" />
        <input type="tel" name="telefoon" />
        <input type="text" name="onderwerp" />
        <textarea name="bericht"></textarea>
      </form>
    </Layout>
  )
}

export default ContactPage
