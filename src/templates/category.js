import React from "react"
import { Link, graphql } from "gatsby"
import Card from "../components/card"

import Layout from "../layouts/index"
// import Category from "../components/category"

class CatPage extends React.Component {
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

export default CatPage

export const pageQuery = graphql`
  query CategoryPage($category: String){
    allAsciidoc(
      sort: { fields: [revision___date], order: DESC }
      filter: { pageAttributes: { category: { eq: $category }}}
    ) {
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
