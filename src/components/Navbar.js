import { graphql, Link, StaticQuery } from "gatsby"
import React from "react"

import DarkModeButton from "./widgets/darkMode"

import * as navbarStyles from "../styles/navbar.module.css"

function Navbar() {
  return (
    <StaticQuery
      query={graphql`
        query NavbarDetailsQuery {
          dataJson(title: { eq: "Social Media" }) {
            name
            resumeUrl
          }
        }
      `}
      render={data => (
        <React.Fragment>
          <nav
            className={`container ${navbarStyles.navbar} d-flex justify-content-between`}
          >
            <div className={`${navbarStyles.nav_title}`}>
              <Link to="/">{data.dataJson.name}</Link>
            </div>

            <div className="row">
              <div className={`col-6 ${navbarStyles.mode}`}>
                <DarkModeButton></DarkModeButton>
              </div>
              <div className={`col-6 ${navbarStyles.nav_resume}`}>
                <a href={data.dataJson.resumeUrl}>Resume</a>
              </div>
            </div>
          </nav>
        </React.Fragment>
      )}
    ></StaticQuery>
  )
}

export default Navbar
