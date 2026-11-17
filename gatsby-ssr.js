import React from "react"

export { default as wrapRootElement } from "./src/wrapRootElement"

/*
 * The contact form only renders client-side (it depends on the chosen chiro),
 * so Netlify can't detect it in the static HTML. These hidden copies register
 * both forms with Netlify at deploy time. Field names must match
 * src/components/contact/form.js.
 */
const netlifyForm = name => (
  <form
    key={name}
    name={name}
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    hidden
  >
    <input type="hidden" name="form-name" value={name} />
    <input type="text" name="bot-field" />
    <input type="text" name="chiro" />
    <input type="text" name="naam" />
    <input type="email" name="email" />
    <input type="tel" name="telefoon" />
    <input type="text" name="onderwerp" />
    <textarea name="bericht" />
  </form>
)

export const onRenderBody = ({
  setHtmlAttributes,
  setPostBodyComponents,
  pathname,
}) => {
  setHtmlAttributes({ lang: "nl" })
  if (pathname && pathname.startsWith("/contact")) {
    setPostBodyComponents([
      netlifyForm("Contact Jokonta"),
      netlifyForm("Contact Allegro"),
    ])
  }
}
