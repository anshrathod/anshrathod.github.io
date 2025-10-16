import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Contact from "../../components/Contact"
import Navbar from "../../components/Navbar"
import ScrollButton from "../../components/widgets/backToTop"
import Seo from "../../components/SEO"

import * as animeStyles from "../../styles/anime.module.css"
import "../../styles/global.css"

const query = graphql`
  query SeriesQuery {
    dataJson(title: { eq: "Series" }) {
      series_list {
        name
        id
        url
      }
    }
  }
`

export default function Series() {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <React.Fragment>
          <Seo title="Series" />
          <div className="nav">
            <Navbar></Navbar>
          </div>
          <div className="notNav">
            <div className="container">
              <div className={animeStyles.divider}></div>
              <div className={animeStyles.title}>
                SERIES
                <div className={animeStyles.desc}>&lt;TV & WEB/&gt;</div>
              </div>
              <div className={`row ${animeStyles.list}`}>
                {data.dataJson.series_list.map(series => (
                  <div className={`row ${animeStyles.btn}`}>
                    <a href={series.url}>
                      <div className={animeStyles.name}>
                        <div className={animeStyles.id}>{series.id}</div>
                        {series.name}
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <Contact></Contact>
            <ScrollButton></ScrollButton>
          </div>
        </React.Fragment>
      )}
    />
  )
}
