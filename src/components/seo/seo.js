import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

/**
 * Rendered from a page's `export const Head` (Gatsby Head API), so all tags
 * end up in the statically generated HTML. `<html lang>` is set in
 * gatsby-ssr.js instead: an <html> element here makes Gatsby re-sync the
 * html attributes on every navigation, wiping theme-ui's color mode class.
 */
const Seo = ({ description, title, children }) => {
  const { site, image } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          keywords
          siteUrl
        }
      }
      image: file(relativePath: { eq: "images/itterbeek.jpg" }) {
        childImageSharp {
          resize(quality: 40) {
            src
            width
            height
          }
        }
      }
    }
  `)

  const { siteMetadata } = site
  const metaDescription = description || siteMetadata.description
  const fullTitle = title
    ? `${siteMetadata.title} - ${title}`
    : siteMetadata.title
  const resized = image?.childImageSharp?.resize
  const metaImage = resized?.src
    ? `${siteMetadata.siteUrl}${resized.src}`
    : null

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={siteMetadata.keywords.join(",")} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={siteMetadata.siteUrl} />
      <meta property="og:type" content="website" />
      <meta name="twitter:creator" content={siteMetadata.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {metaImage ? (
        <>
          <meta property="og:image" content={metaImage} />
          <meta property="og:image:alt" content={title} />
          <meta property="og:image:width" content={resized.width} />
          <meta property="og:image:height" content={resized.height} />
          <meta name="twitter:card" content="summary_large_image" />
        </>
      ) : (
        <meta name="twitter:card" content="summary" />
      )}
      {children}
    </>
  )
}

Seo.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export default Seo
