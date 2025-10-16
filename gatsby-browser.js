import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import WebVitals from "./src/components/WebVitals"
import ErrorBoundary from "./src/components/ErrorBoundary"

// Wrap root element to include Web Vitals tracking and Error Boundary
export const wrapRootElement = ({ element }) => (
  <ErrorBoundary>
    <WebVitals />
    {element}
  </ErrorBoundary>
)
