/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

const React = require("react")

exports.onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
  // Set lang attribute on html element
  setHtmlAttributes({ lang: "en" })

  // Add resource hints for performance optimization
  setHeadComponents([
    // Preconnect to Google Fonts
    <link
      key="preconnect-gstatic"
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous"
    />,
    <link
      key="preconnect-googleapis"
      rel="preconnect"
      href="https://fonts.googleapis.com"
    />,

    // DNS prefetch for external resources
    <link
      key="dns-prefetch-gstatic"
      rel="dns-prefetch"
      href="https://fonts.gstatic.com"
    />,
  ])
}
