import { graphql, Link, StaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import React, { Component } from "react"

import * as landingStyles from "../styles/landing.module.css"

export default class Landing extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query HiQuery {
            file(relativePath: { eq: "hiii.png" }) {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        `}
        render={data => {
          const image = getImage(data.file)
          return (
            <React.Fragment>
              <div
                className={`container ${landingStyles.divider}`}
                data-sal="slide-up"
                data-sal-delay="300"
                data-sal-easing="ease"
              ></div>
              <div className="container">
                <section
                  className={`row ${landingStyles.mainDiv}`}
                  aria-label="Hero section"
                >
                  <div className={landingStyles.imgDiv}>
                    <GatsbyImage
                      className={landingStyles.landing_image}
                      image={image}
                      alt="Hello There - Ansh Rathod welcoming you"
                      title="Hello"
                    />
                  </div>
                  <div className={landingStyles.sideDiv}>
                    <h1 className={landingStyles.locationText}>
                      Developer from <b>Mumbai, India.</b>
                    </h1>
                    <div className={landingStyles.flip} aria-live="polite">
                      <div>
                        <div>Web App Developer</div>
                      </div>
                      <div>
                        <div>Flutter Developer</div>
                      </div>
                      <div>
                        <div>
                          <Link to="/animes">Anime Enthusiast</Link>
                        </div>
                      </div>
                    </div>
                    <p className={landingStyles.locationText}>
                      Battling bugs since 2017.
                    </p>
                  </div>
                </section>
              </div>
            </React.Fragment>
          )
        }}
      />
    )
  }
}
