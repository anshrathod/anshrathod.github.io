import React from "react"

import Blogs from "../components/Blogs"
import Contact from "../components/Contact"
import Education from "../components/Education"
import Experience from "../components/Experience"
import Landing from "../components/Landing"
import Navbar from "../components/Navbar"
import Projects from "../components/Projects"
import TechStack from "../components/TechStack"
import ScrollButton from "../components/widgets/backToTop"
import Seo from "../components/SEO"
import SkipLink from "../components/SkipLink"

import "../styles/global.css"

export default function Main() {
  return (
    <React.Fragment>
      <Seo
        title="Home"
        description="Ansh Rathod - Software Developer from Mumbai, India. Full-stack web and mobile app developer specializing in React, Flutter, and modern web technologies."
        url="/"
      />
      <SkipLink />
      <header className="nav">
        <Navbar></Navbar>
      </header>
      <main id="main-content" className="notNav">
        <Landing></Landing>
        <TechStack></TechStack>
        <Education></Education>
        <Experience></Experience>
        <Projects></Projects>
        <Blogs></Blogs>
        <Contact></Contact>
        <ScrollButton></ScrollButton>
      </main>
    </React.Fragment>
  )
}
