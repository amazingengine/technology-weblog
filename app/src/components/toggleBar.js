import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

function toggleOn() {
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)

  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach( el => {
        const target = el.dataset.target
        const $target = document.getElementById('navMenu')

        el.classList.toggle('is-active')
        $target.classList.toggle('is-active');
    });
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        dataJson {
          list
        }
      }
    `}
    render={data => (
      <nav id="navbar-tab" className="container navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <a role="button" onClick={toggleOn} className="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
        <div className="navbar-menu" id="navMenu">
          <div className="navbar-start">
            <Link to={'/'} className="navbar-item title" title="Home"><img src="/assets/amazingengine-icon32.png"/></Link>
          </div>
          <div className="navbar-end">
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                カテゴリー
              </a>
              <div className="navbar-dropdown">
                {data.dataJson.list.map((category) => (
                  <Link className="navbar-item" key={category} to={`/${category}`} >{category}</Link>
                ))}
              </div>
            </div>
            <a href="https://amazingengine.co.jp/#h_about" className="navbar-item">会社概要</a>
          </div>
        </div>
      </nav>
    )}
  />
)
