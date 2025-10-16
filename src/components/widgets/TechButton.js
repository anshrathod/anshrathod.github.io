import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import * as techStyles from "../../styles/Components/techButton.module.css"

export default function TechButton({ imageData, name, url }) {
  const image = imageData ? getImage(imageData) : null

  return (
    <a href={url} className={techStyles.techButton}>
      {image && (
        <div className={techStyles.iconBox}>
          <GatsbyImage
            image={image}
            alt={name}
            title={name}
            className={techStyles.icon}
          />
        </div>
      )}
      <span className={techStyles.label}>{name}</span>
    </a>
  )
}
