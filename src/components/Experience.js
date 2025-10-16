import { graphql, StaticQuery } from "gatsby"
import React, { Component } from "react"

import ExperienceTile from "./widgets/ExperienceTile"

import * as experienceStyles from "../styles/experience.module.css"

class Experience extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query ExperienceQuery {
            dataJson(title: { eq: "Experience" }) {
              jobs {
                name
                company
                year
                desc
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
              aria-labelledby="experience-heading"
              data-sal="fade"
              data-sal-delay="50"
              data-sal-easing="ease"
            >
              <div className={experienceStyles.divider}></div>
              <div className={experienceStyles.headerWrapper}>
                <h2 id="experience-heading" className={experienceStyles.title}>
                  EXPERIENCE
                </h2>
                <div className={experienceStyles.desc}>
                  &lt;INTERNSHIPS & WORK/&gt;
                </div>
              </div>
              <div className={`row ${experienceStyles.row}`}>
                {data.dataJson.jobs.map(job => (
                  <ExperienceTile
                    key={job.name + job.year}
                    name={job.name}
                    company={job.company}
                    desc={job.desc}
                    year={job.year}
                    imageData={job.img.childImageSharp.gatsbyImageData}
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
export default Experience
