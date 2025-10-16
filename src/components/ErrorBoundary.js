import React, { Component } from "react"
import PropTypes from "prop-types"

/**
 * Error Boundary Component
 * Catches JavaScript errors anywhere in the child component tree and displays a fallback UI
 * instead of crashing the whole application.
 */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // Log error to console in development
    if (process.env.NODE_ENV === "development") {
      console.error("ErrorBoundary caught an error:", error, errorInfo)
    }

    // Store error details in state
    this.setState({
      error: error,
      errorInfo: errorInfo,
    })

    // You can also log the error to an error reporting service here
    // Example: logErrorToService(error, errorInfo)
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    })
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback
      }

      // Default fallback UI
      return (
        <div
          style={{
            padding: "2rem",
            textAlign: "center",
            minHeight: "50vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
              Oops! Something went wrong
            </h1>
            <p
              style={{
                fontSize: "1.2rem",
                marginBottom: "2rem",
                opacity: 0.8,
              }}
            >
              We're sorry, but something unexpected happened. Please try
              refreshing the page.
            </p>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <button
                onClick={this.handleReset}
                style={{
                  padding: "0.75rem 1.5rem",
                  fontSize: "1rem",
                  borderRadius: "8px",
                  border: "none",
                  backgroundColor: "var(--primary)",
                  color: "white",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onMouseOver={e => {
                  e.target.style.backgroundColor = "var(--primary-light)"
                }}
                onMouseOut={e => {
                  e.target.style.backgroundColor = "var(--primary)"
                }}
              >
                Try Again
              </button>
              <button
                onClick={() => (window.location.href = "/")}
                style={{
                  padding: "0.75rem 1.5rem",
                  fontSize: "1rem",
                  borderRadius: "8px",
                  border: "1px solid var(--border-color)",
                  backgroundColor: "transparent",
                  color: "var(--text-color)",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onMouseOver={e => {
                  e.target.style.backgroundColor = "var(--card-color2)"
                }}
                onMouseOut={e => {
                  e.target.style.backgroundColor = "transparent"
                }}
              >
                Go Home
              </button>
            </div>
            {process.env.NODE_ENV === "development" && this.state.error && (
              <details
                style={{
                  marginTop: "2rem",
                  textAlign: "left",
                  backgroundColor: "var(--card-color)",
                  padding: "1rem",
                  borderRadius: "8px",
                  border: "1px solid var(--border-color)",
                }}
              >
                <summary
                  style={{
                    cursor: "pointer",
                    fontWeight: "bold",
                    marginBottom: "1rem",
                  }}
                >
                  Error Details (Development Only)
                </summary>
                <pre
                  style={{
                    overflow: "auto",
                    fontSize: "0.875rem",
                    backgroundColor: "var(--card-color2)",
                    padding: "1rem",
                    borderRadius: "4px",
                  }}
                >
                  {this.state.error.toString()}
                  {"\n\n"}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  fallback: PropTypes.node,
}

export default ErrorBoundary
