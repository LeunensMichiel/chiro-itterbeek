import React, { useContext, useRef, useEffect } from "react"
import loadable from "@loadable/component"
import { gsap } from "gsap"

import { GenderContext } from "../context/GenderContext"

import Layout from "../components/layout"
import SEO from "../components/seo/seo"
import { Toast } from "../components/contact/contactStyles"

const ChoosePage = loadable(() => import("../components/chooser/choosePage"))
const Form = loadable(() => import("../components/contact/form"))
const Map = loadable(() => import("../components/contact/map"))
const ContactInfo = loadable(() => import("../components/contact/info"))

const ContactPage = ({ location }) => {
  const { genderState } = useContext(GenderContext)
  const toast = useRef(null)

  useEffect(() => {
    if (location && location.search.includes("submit=ok")) {
      setTimeout(() => {
        gsap.to(toast.current, {
          duration: 0.3,
          ease: "expo.inOut",
          bottom: "30px",
          opacity: 1,
        })
        gsap.to(toast.current, {
          duration: 0.3,
          delay: 6,
          ease: "expo.inOut",
          bottom: 0,
          opacity: 0,
        })
      }, 0.01)
    }
  }, [])

  return (
    <Layout>
      <SEO
        title="Contact"
        description="Contactgevens van Chiro Itterbeek. Stuur ons gerust een berichtje!"
      />
      {location && location.search.includes("submit=ok") && (
        <Toast ref={toast}>Bericht succesvol verzonden!</Toast>
      )}
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
