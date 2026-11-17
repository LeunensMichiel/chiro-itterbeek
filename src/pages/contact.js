import React, { useContext, useRef, useEffect, lazy, Suspense } from "react"
import { gsap } from "gsap"

import { GenderContext } from "../context/GenderContext"

import Layout from "../components/layout"
import Seo from "../components/seo/seo"
import { Toast } from "../components/contact/contactStyles"

import ChoosePage from "../components/chooser/choosePage"
import Form from "../components/contact/form"
import ContactInfo from "../components/contact/info"

// Lazy so Mapbox only loads on this page, after mount.
const ContactMap = lazy(() => import("../components/contact/map"))

const ContactPage = ({ location }) => {
  const { genderState } = useContext(GenderContext)
  const toast = useRef(null)
  const submitted = Boolean(location?.search?.includes("submit=ok"))

  useEffect(() => {
    if (!submitted) return undefined
    let tweens = []
    const timeout = setTimeout(() => {
      tweens = [
        gsap.to(toast.current, {
          duration: 0.3,
          ease: "expo.inOut",
          bottom: "30px",
          opacity: 1,
        }),
        gsap.to(toast.current, {
          duration: 0.3,
          delay: 6,
          ease: "expo.inOut",
          bottom: 0,
          opacity: 0,
        }),
      ]
    }, 0)
    return () => {
      clearTimeout(timeout)
      tweens.forEach(tween => tween.kill())
    }
  }, [submitted])

  return (
    <Layout>
      {submitted && <Toast ref={toast}>Bericht succesvol verzonden!</Toast>}
      {genderState.gender === 0 ? (
        <ChoosePage />
      ) : (
        <>
          <Form />
          <Suspense fallback={null}>
            <ContactMap />
          </Suspense>
          <ContactInfo />
        </>
      )}
    </Layout>
  )
}

export default ContactPage

export const Head = () => (
  <Seo
    title="Contact"
    description="Contactgevens van Chiro Itterbeek. Stuur ons gerust een berichtje!"
  >
    {/* copied from mapbox-gl in gatsby-node.js (onPostBootstrap) */}
    <link rel="stylesheet" href="/mapbox-gl.css" />
  </Seo>
)
