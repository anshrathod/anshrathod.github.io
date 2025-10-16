import { graphql, Link, StaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React, { Component } from "react"

import * as contactStyles from "../styles/contacts.module.css"

const query = graphql`
  query SocialsQuery {
    dataJson(title: { eq: "Social Media" }) {
      socials {
        handle
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
`

class Contact extends Component {
  render() {
    return (
      <StaticQuery
        query={query}
        render={data => (
          <React.Fragment>
            <section
              className="container"
              aria-labelledby="contact-heading"
              data-sal="fade"
              data-sal-delay="50"
              data-sal-easing="ease"
            >
              <div className={contactStyles.divider}></div>
              <div className={contactStyles.headerWrapper}>
                <h2 id="contact-heading" className={contactStyles.title}>
                  Contact
                </h2>
                <div className={contactStyles.desc}>
                  &lt;Reach out to me!/&gt;
                </div>
              </div>
            </section>
            <div className={contactStyles.textDiv}>
              <p className="text text-center">Hit me up with anything.</p>
            </div>
            <nav
              className={contactStyles.socialDiv}
              aria-label="Social media links"
            >
              {data.dataJson.socials.map(social => {
                const image = getImage(social.img)
                return (
                  <React.Fragment key={social.url}>
                    <div>
                      <a
                        href={social.url}
                        aria-label={`Visit ${social.name} profile`}
                      >
                        <GatsbyImage
                          className={contactStyles.img}
                          image={image}
                          alt={`${social.name} icon`}
                          title={`${social.handle} on ${social.name}`}
                        />
                      </a>
                    </div>
                  </React.Fragment>
                )
              })}
            </nav>
            <footer className={contactStyles.textDiv}>
              <div className="text text-center mt-4">
                <Link to="/series">Bears. Beets. Battlestar Gallactica.</Link>
              </div>
            </footer>
          </React.Fragment>
        )}
      />
    )
  }
}

export default Contact
