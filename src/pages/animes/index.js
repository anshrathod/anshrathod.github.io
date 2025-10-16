import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Contact from "../../components/Contact"
import Navbar from "../../components/Navbar"
import ScrollButton from "../../components/widgets/backToTop"
import Seo from "../../components/SEO"

import * as animeStyles from "../../styles/anime.module.css"
import "../../styles/global.css"

const query = graphql`
  query AnimesQuery {
    dataJson(title: { eq: "Animes" }) {
      animes {
        name
        id
        url
      }
    }
  }
`

export default function Anime() {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <React.Fragment>
          <Seo title="Anime" />
          <div className="nav">
            <Navbar></Navbar>
          </div>
          <div className="notNav">
            <div className="container">
              <div className={animeStyles.divider}></div>
              <div className={animeStyles.title}>
                ANIMES
                <div className={animeStyles.desc}>&lt;WATCHED & READ/&gt;</div>
              </div>
              <div className={`row ${animeStyles.list}`}>
                {data.dataJson.animes.map(anime => (
                  <div className={`row ${animeStyles.btn}`}>
                    <a href={anime.url}>
                      <div className={animeStyles.name}>
                        <div className={animeStyles.id}>{anime.id}</div>
                        {anime.name}
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
