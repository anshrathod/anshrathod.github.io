// import { StaticQuery } from "gatsby";
import { graphql, StaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React, { useState } from "react"
import * as darkModeStyles from "../../styles/Components/darkMode.module.css"

const DarkModeButton = () => {
  const [darkMode, setDarkMode] = useState(true)

  // const toggleDarkMode = () => {
  //   if (darkMode) {
  //     document.body.classList.add('dark');
  //     document.body.classList.remove('light');
  //     setDarkMode(false);
  //   } else {
  //     document.body.classList.add('light');
  //     document.body.classList.remove('dark');
  //     setDarkMode(true);
  //   }
  // }

  const applyLightMode = () => {
    if (darkMode) {
      setDarkMode(false)
      const outerDiv = document.querySelector("#outerdiv")
      outerDiv.classList.add("rotate")
      outerDiv.classList.remove("rotate-reverse")
      setTimeout(() => {
        document.body.classList.add("dark")
        document.body.classList.remove("light")
      }, 1500)
    }
  }

  const applyDarkMode = () => {
    if (!darkMode) {
      setDarkMode(true)
      const outerDiv = document.querySelector("#outerdiv")
      outerDiv.classList.remove("rotate")
      outerDiv.classList.add("rotate-reverse")
      setTimeout(() => {
        document.body.classList.add("light")
        document.body.classList.remove("dark")
      }, 1500)
    }
  }

  return (
    <StaticQuery
      query={graphql`
        query DarkModeQuery {
          allFile(filter: { relativeDirectory: { eq: "DarkMode" } }) {
            edges {
              node {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED)
                }
                name
              }
            }
          }
        }
      `}
      render={data => {
        const sunImage = getImage(data.allFile.edges[1].node)
        const moonImage = getImage(data.allFile.edges[0].node)
        return (
          <React.Fragment>
            <div
              className={darkModeStyles.maindiv}
              // onClick={toggleDarkMode}
            >
              <div id="outerdiv" className={darkModeStyles.outerdiv}>
                <div
                  role="button"
                  className={darkModeStyles.lightmode}
                  onClick={applyLightMode}
                  tabIndex="0"
                  id="sun"
                >
                  <GatsbyImage
                    className={darkModeStyles.img}
                    image={sunImage}
                    alt="Light mode"
                  />
                </div>
                <div
                  role="button"
                  onClick={applyDarkMode}
                  id="moon"
                  tabIndex="0"
                  className={darkModeStyles.darkmode}
                >
                  <GatsbyImage
                    className={darkModeStyles.img}
                    image={moonImage}
                    alt="Dark mode"
                  />
                </div>
              </div>
            </div>
          </React.Fragment>
        )
      }}
    ></StaticQuery>
  )
}

export default DarkModeButton
