import React from "react"
import { Link, graphql } from "gatsby"
import Card from "../components/card"

import Layout from "../layouts/index"

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="columns is-multiline">
          404 not found
        </div>
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allAsciidoc(sort: { fields: [revision___date], order: DESC }) {
      edges {
        node {
          id
          pageAttributes {
            category
            thumbnail
          }
          document {
            title
          }
          fields {
            slug
          }
          author {
            fullName
          }
          revision {
            date
          }
        }
      }
    }
  }
`
