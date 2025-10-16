import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import * as educationStyles from "../../styles/Components/educationTile.module.css"

export default function EducationTile({
  imageData,
  institute,
  degree,
  location,
  year,
}) {
  const image = getImage(imageData)

  return (
    <div className={educationStyles.card}>
      <div className={educationStyles.imageHeader}>
        <GatsbyImage
          className={educationStyles.logo}
          image={image}
          alt={institute}
          title={institute}
        />
      </div>

      <div className={educationStyles.content}>
        <h3 className={educationStyles.degree}>{degree}</h3>
        <p className={educationStyles.institute}>{institute}</p>

        <div className={educationStyles.meta}>
          {location && (
            <span className={educationStyles.location}>
              <svg
                className={educationStyles.icon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              {location}
            </span>
          )}
          <span className={educationStyles.year}>
            <svg
              className={educationStyles.icon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            {year}
          </span>
        </div>
      </div>
    </div>
  )
}
