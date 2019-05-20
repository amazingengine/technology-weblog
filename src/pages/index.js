import React from "react"
import { Link, graphql } from "gatsby"
import Card from "../components/card"

import Layout from "../layouts/index"

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="columns is-multiline">
          {this.props.data.allAsciidoc.edges.map(({ node }) => (
            <Card
              key={node.id}
              thumbnail={node.pageAttributes.thumbnail}
              slug={node.fields.slug}
              title={node.document.title}
              fullName={node.author.fullName}
              date={node.revision.date}
              category={node.pageAttributes.category}
            />
          ))}
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
