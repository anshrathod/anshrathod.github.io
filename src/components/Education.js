import { graphql, StaticQuery } from "gatsby"
import React, { Component } from "react"

import EducationTile from "./widgets/EducationTile"

import * as educationStyles from "../styles/education.module.css"

class Education extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query EducationQuery {
            dataJson(title: { eq: "Education" }) {
              courses {
                course
                location
                name
                year
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
              aria-labelledby="education-heading"
              data-sal="fade"
              data-sal-delay="50"
              data-sal-easing="ease"
            >
              <div className={educationStyles.divider}></div>
              <div className={educationStyles.headerWrapper}>
                <h2 id="education-heading" className={educationStyles.title}>
                  EDUCATION
                </h2>
                <div className={educationStyles.desc}>
                  &lt;COLLEGE & COURSES/&gt;
                </div>
              </div>
              <div className={`row ${educationStyles.row}`}>
                {data.dataJson.courses.map(course => (
                  <EducationTile
                    key={course.name}
                    degree={course.name}
                    institute={course.course}
                    location={course.location}
                    year={course.year}
                    imageData={course.img.childImageSharp.gatsbyImageData}
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
export default Education
