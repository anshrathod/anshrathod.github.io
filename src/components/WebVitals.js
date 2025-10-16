import { useEffect } from "react"

/**
 * Web Vitals Performance Monitoring Component
 * Tracks Core Web Vitals metrics (LCP, INP, CLS, FCP, TTFB)
 */
const WebVitals = () => {
  useEffect(() => {
    if (typeof window === "undefined") return

    // Dynamically import web-vitals to avoid SSR issues
    import("web-vitals").then(webVitals => {
      // Report handler - can be customized to send metrics to analytics
      const reportMetric = metric => {
        // Log to console in development
        if (process.env.NODE_ENV === "development") {
          console.log(`[Web Vitals] ${metric.name}:`, metric.value, metric)
        }

        // In production, you can send metrics to your analytics service
        // Example: sendToAnalytics(metric)
        if (typeof window.gtag !== "undefined") {
          window.gtag("event", metric.name, {
            value: Math.round(
              metric.name === "CLS" ? metric.value * 1000 : metric.value
            ),
            event_label: metric.id,
            non_interaction: true,
          })
        }
      }

      // Track all Core Web Vitals
      webVitals.onCLS(reportMetric) // Cumulative Layout Shift
      webVitals.onFCP(reportMetric) // First Contentful Paint
      webVitals.onLCP(reportMetric) // Largest Contentful Paint
      webVitals.onTTFB(reportMetric) // Time to First Byte

      // Track INP (Interaction to Next Paint) - replaces FID in web-vitals v3+
      if (webVitals.onINP) {
        webVitals.onINP(reportMetric)
      }

      // Fallback to FID if using older version of web-vitals
      if (webVitals.onFID) {
        webVitals.onFID(reportMetric)
      }
    })
  }, [])

  return null
}

export default WebVitals
