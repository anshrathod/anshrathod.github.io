import { graphql, StaticQuery } from "gatsby"
import React, { Component } from "react"

import TechButton from "./widgets/TechButton"

import * as techStyles from "../styles/techStack.module.css"

class TechStack extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query TechStackQuery {
            dataJson(title: { eq: "TechStack" }) {
              techs {
                name
                url
                img {
                  childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <React.Fragment>
            <section
              className="container"
              aria-labelledby="techstack-heading"
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-easing="ease"
            >
              <div className={techStyles.divider}></div>
              <div className={techStyles.headerWrapper}>
                <h2 id="techstack-heading" className={techStyles.title}>
                  TECH STACK
                </h2>
                <div className={techStyles.desc}>
                  &lt;LANGUAGES & FRAMEWORKS/&gt;
                </div>
              </div>
              <div className={`row ${techStyles.row}`}>
                {data.dataJson.techs.map(tech => (
                  <TechButton
                    key={tech.name}
                    url={tech.url}
                    imageData={tech.img.childImageSharp.gatsbyImageData}
                    name={tech.name}
                  />
                ))}
              </div>
            </section>
          </React.Fragment>
        )}
      />
    )
  }
}

export default TechStack
