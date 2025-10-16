import { graphql, StaticQuery } from "gatsby"
import React, { Component } from "react"

import BlogTile from "./widgets/BlogTile"

import * as blogStyles from "../styles/blogs.module.css"

const query = graphql`
  query BlogsQuery {
    dataJson(title: { eq: "Blogs" }) {
      blogs {
        name
        desc
        url
        img {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
  }
`

class Blogs extends Component {
  render() {
    return (
      <StaticQuery
        query={query}
        render={data => (
          <React.Fragment>
            <section
              className="container"
              aria-labelledby="blogs-heading"
              data-sal="fade"
              data-sal-delay="50"
              data-sal-easing="ease"
            >
              <div className={blogStyles.divider}></div>
              <div className={blogStyles.headerWrapper}>
                <h2 id="blogs-heading" className={blogStyles.title}>
                  BLOGS
                </h2>
                <div className={blogStyles.desc}>
                  &lt;WRITINGS & THOUGHTS/&gt;
                </div>
              </div>
              <div className={`row ${blogStyles.row}`}>
                {data.dataJson.blogs.slice(0, 4).map(blog => (
                  <BlogTile
                    key={blog.name}
                    name={blog.name}
                    desc={blog.desc}
                    url={blog.url}
                    imageData={blog.img.childImageSharp.gatsbyImageData}
                  />
                ))}
              </div>
            </section>
            {/* <div className={`row ${projectsStyles.moreProjectsDiv}`}>
          <Link className={`${projectsStyles.moreProjects}`}
            to="/projects"
          > &lt; More Projects &gt;</Link>
        </div> */}
          </React.Fragment>
        )}
      />
    )
  }
}

export default Blogs
