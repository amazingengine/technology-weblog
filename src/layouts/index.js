import React from "react"
import "./index.scss"
import SEO from "../components/SEO"
import Header from "../components/header"
import Footer from "../components/footer"
import { Link } from "gatsby"

class DefaultLayout extends React.Component {
  render() {
    return (
      <div>
        <SEO />
        <Header />
        <div id="main" className="container">
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
}

export default DefaultLayout
