import { GatsbyImage, getImage } from "gatsby-plugin-image"

import React, { Component } from "react"

import * as projectStyles from "../../styles/Components/projectTile.module.css"

export default class ProjectsTile extends Component {
  render() {
    const image = getImage(this.props.imageData)

    return (
      <div className={`row ${projectStyles.maindiv}`}>
        <div className={projectStyles.imgDiv}>
          <div className={projectStyles.midImgDiv}>
            <GatsbyImage
              className={projectStyles.img}
              image={image}
              alt={this.props.name}
              title={this.props.name}
            />
          </div>
        </div>
        <div className={projectStyles.sideDiv}>
          <a href={this.props.url}>
            <div className={projectStyles.name}>{this.props.name}</div>
          </a>
          <div className={projectStyles.desc}>{this.props.desc}</div>
          {this.props.techStack.map(tech => {
            const techImage = getImage(tech.img)
            return (
              //   <div className={projectStyles.techBtn} key={tech.techText}>
              //     <a href={tech.url}>
              //       <div className={`row ${projectStyles.row} `}>
              //         <div className={projectStyles.techText}>{tech.name}</div>
              //         <div className={projectStyles.techImg}>
              //           <GatsbyImage
              //             image={techImage}
              //             alt={tech.name}
              //             title={tech.name}
              //           />
              //         </div>
              //       </div>
              //     </a>
              //   </div>
              <div className={projectStyles.techBtn} key={tech.name}>
                <a href={tech.url}>
                  <div className={`row ${projectStyles.row} `}>
                    <div className={projectStyles.techImg}>
                      <GatsbyImage
                        image={techImage}
                        alt={tech.name}
                        title={tech.name}
                      />
                    </div>
                    <div className={projectStyles.techText}>{tech.name}</div>
                  </div>
                </a>
              </div>
            )
          })}
        </div>
        <div className={projectStyles.linkDiv}>
          <div className={projectStyles.midLinkDiv}>
            <div className={projectStyles.linkRow}>
              {this.props.urls.map(url => {
                const urlImage = getImage(url.img)
                return (
                  <div className={projectStyles.linkBtn} key={url.name}>
                    <a href={url.url}>
                      <div className={`row ${projectStyles.row} `}>
                        <div className={projectStyles.linkImg}>
                          <GatsbyImage
                            image={urlImage}
                            alt={url.name}
                            title={url.name}
                          />
                        </div>
                        <div className={projectStyles.linkText}>{url.name}</div>
                      </div>
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
