import { graphql, Link, StaticQuery } from "gatsby"
import React, { Component } from "react"

import ProjectsTile from "./widgets/ProjectsTile"

import * as projectsStyles from "../styles/projects.module.css"

const query = graphql`
  query ProjectsQuery {
    dataJson(title: { eq: "Projects" }) {
      projects {
        name
        desc
        url
        img {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 800)
          }
        }
        techs {
          name
          url
          img {
            childImageSharp {
              gatsbyImageData(layout: FIXED, width: 50)
            }
          }
        }
        urls {
          name
          url
          img {
            childImageSharp {
              gatsbyImageData(layout: FIXED, width: 30)
            }
          }
        }
      }
    }
  }
`

class Projects extends Component {
  render() {
    return (
      <StaticQuery
        query={query}
        render={data => (
          <React.Fragment>
            <section
              className="container"
              aria-labelledby="projects-heading"
              // data-sal="fade"
              // data-sal-delay="50"
              // data-sal-easing="ease"
            >
              <div className={projectsStyles.divider}></div>
              <div className={projectsStyles.headerWrapper}>
                <h2 id="projects-heading" className={projectsStyles.title}>
                  PROJECTS
                </h2>
                <div className={projectsStyles.desc}>
                  &lt;PERSONAL PROJECTS/&gt;
                </div>
              </div>
              <div className={`row ${projectsStyles.row}`}>
                {data.dataJson.projects.slice(0, 4).map(project => (
                  <ProjectsTile
                    key={project.name}
                    name={project.name}
                    desc={project.desc}
                    url={project.url}
                    imageData={project.img}
                    techStack={project.techs}
                    urls={project.urls}
                  />
                ))}
              </div>
            </section>
            <nav className={`row ${projectsStyles.moreProjectsDiv}`}>
              <Link className={`${projectsStyles.moreProjects}`} to="/projects">
                {" "}
                &lt; More Projects /&gt;
              </Link>
            </nav>
          </React.Fragment>
        )}
      />
    )
  }
}
export default Projects
