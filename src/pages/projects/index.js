import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"

import Contact from "../../components/Contact"
import Navbar from "../../components/Navbar"
import ProjectsTile from "../../components/widgets/ProjectsTile"
import ScrollButton from "../../components/widgets/backToTop"
import Seo from "../../components/SEO"

import * as projectsStyles from "../../styles/projects.module.css"
import "../../styles/global.css"

const query = graphql`
  query ProjectQuery {
    dataJson(title: { eq: "Projects" }) {
      projects {
        name
        desc
        url
        img {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
        techs {
          name
          url
          img {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
        urls {
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
  }
`

export default function Projects() {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <React.Fragment>
          <Seo
            title="Projects"
            description="Explore all my personal projects including web applications, mobile apps, and open-source contributions. Built with React, Flutter, Node.js, and more."
            url="/projects"
          />
          <header className="nav">
            <Navbar></Navbar>
          </header>
          <main className="notNav">
            <section
              className="container"
              aria-labelledby="all-projects-heading"
            >
              <div className={projectsStyles.divider}></div>
              <h1 id="all-projects-heading" className={projectsStyles.title}>
                PROJECTS
                <div className={projectsStyles.desc}>PERSONAL PROJECTS</div>
              </h1>
              <div className={`row ${projectsStyles.row}`}>
                {data.dataJson.projects.map(project => (
                  <ProjectsTile
                    key={project.name}
                    name={project.name}
                    desc={project.desc}
                    url={project.url}
                    imageData={project.img.childImageSharp.gatsbyImageData}
                    techStack={project.techs}
                    urls={project.urls}
                  />
                ))}
              </div>
              <nav className={`row ${projectsStyles.moreProjectsDiv}`}>
                <Link className={`${projectsStyles.moreProjects}`} to="/">
                  {" "}
                  &lt; Go Back &gt;
                </Link>
              </nav>
            </section>
            <Contact></Contact>
            <ScrollButton></ScrollButton>
          </main>
        </React.Fragment>
      )}
    />
  )
}
