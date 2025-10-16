import React from "react"

/**
 * Skip Link Component
 * Allows keyboard and screen reader users to skip navigation and jump directly to main content
 */
const SkipLink = () => {
  return (
    <a
      href="#main-content"
      className="skip-link"
      style={{
        position: "absolute",
        left: "-9999px",
        zIndex: 9999,
        padding: "1rem 1.5rem",
        backgroundColor: "var(--primary)",
        color: "white",
        textDecoration: "none",
        borderRadius: "0 0 8px 8px",
        fontWeight: "600",
        transition: "all 0.2s",
      }}
      onFocus={e => {
        e.target.style.left = "1rem"
        e.target.style.top = "1rem"
      }}
      onBlur={e => {
        e.target.style.left = "-9999px"
        e.target.style.top = "auto"
      }}
    >
      Skip to main content
    </a>
  )
}

export default SkipLink
