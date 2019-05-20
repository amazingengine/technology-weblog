import React from "react"
import { StaticQuery, Link } from "gatsby"
import ToggleBar from "./toggleBar.js"

const Header = () => {
  return (
    <header>
      <ToggleBar />
      <section className="hero is-medium">
        <header className="hero-body">
          <div className="container">
            <Link to={'/'} className="title" title="Home"><img src="/assets/amazingengine-logo.png" /></Link>
            <br />
            <Link to={'/'} className="subtitle" title="Home">technology blog</Link>
          </div>
        </header>
      </section>
    </header>
  )
}

export default Header

