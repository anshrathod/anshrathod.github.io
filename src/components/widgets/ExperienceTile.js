import { GatsbyImage, getImage } from "gatsby-plugin-image"

import React, { Component } from "react"

import * as experienceStyles from "../../styles/Components/experienceTile.module.css"

class ExperienceTile extends Component {
  render() {
    const image = getImage(this.props.imageData)

    return (
      <div className={`row ${experienceStyles.maindiv}`}>
        <div className={experienceStyles.imgDiv}>
          <div className={experienceStyles.midImgDiv}>
            <GatsbyImage
              className={experienceStyles.img}
              image={image}
              alt={`${this.props.name} at ${this.props.company}`}
              title={`${this.props.name} at ${this.props.company}`}
            />
          </div>
        </div>
        <div className={experienceStyles.sideOuterDiv}>
          <div className={experienceStyles.sideMidDiv}>
            <div className={experienceStyles.sideDiv}>
              <div className={experienceStyles.name}>{this.props.name}</div>
              <div className={experienceStyles.company}>
                {this.props.company}
              </div>
              {/* <div className={experienceStyles.desc}>
            {this.props.desc}
          </div> */}
              <div className={experienceStyles.year}>{this.props.year}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ExperienceTile
