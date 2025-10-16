import { GatsbyImage, getImage } from "gatsby-plugin-image"

import React, { Component } from "react"

import * as blogStyles from "../../styles/Components/blogTile.module.css"

export default class BlogTile extends Component {
  render() {
    const image = getImage(this.props.imageData)

    return (
      <React.Fragment>
        <div className={`row ${blogStyles.maindiv}`}>
          <div className={blogStyles.imgDiv}>
            <div className={blogStyles.midImgDiv}>
              <GatsbyImage
                className={blogStyles.img}
                image={image}
                alt={this.props.name}
                title={this.props.name}
              />
            </div>
          </div>
          <div className={blogStyles.sideDiv}>
            <a href={this.props.url}>
              <div className={blogStyles.name}>{this.props.name}</div>
            </a>
            {/* <div className={blogStyles.desc}>
              {this.props.desc}
            </div> */}
          </div>
        </div>
      </React.Fragment>
    )
  }
}
