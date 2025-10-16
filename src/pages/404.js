import { Link } from "gatsby"
import React, { Component } from "react"
import Seo from "../components/SEO"
import "../styles/404.css"

export default class PageNotFound extends Component {
  render() {
    return (
      <React.Fragment>
        <Seo
          title="404 - Page Not Found"
          description="Sorry, the page you're looking for doesn't exist."
          url="/404"
        />
        <main className="container align-items-center">
          <div id="notfound">
            <div className="notfound">
              <div className="notfound-404">
                <h1>:(</h1>
              </div>
              <h2>404 - Page not found</h2>
              <p>
                The page you are looking for might have been removed had its
                name changed or is temporarily unavailable.
              </p>
              <Link to="/">home page</Link>
            </div>
          </div>
        </main>
      </React.Fragment>
    )
  }
}
