import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../layouts"

class Article extends React.Component {
  render() {
    const asciidocData = this.props.data.asciidoc
    const pageContext = this.props.pageContext
    return (
      <Layout>
        <div className="content">
          <section className="hero">
            <div className="hero-body">
              <h1 className="title">{asciidocData.document.title}</h1>
              <p className="subtitle">{asciidocData.author.fullName} \ {asciidocData.revision.date}</p>
              <Link to={`/${asciidocData.pageAttributes.category}`} className="button is-light" title={`Category:${asciidocData.pageAttributes.category}`}>{asciidocData.pageAttributes.category}</Link>
            </div>
          </section>
          <span dangerouslySetInnerHTML={{__html: asciidocData.html}}></span>
          <nav className="section pagination columns is-centered" role="navigation" aria-label="pagination">
            <div className="column is-6">
              {pageContext.prev ? 
                <Link to={pageContext.prev.fields.slug} className="pagination-previous button">←{pageContext.prev.document.title}</Link>:
                null
              }
            </div>
            <div className="column is-6">
              {pageContext.next ? 
                <Link to={pageContext.next.fields.slug} className="pagination-next button">{pageContext.next.document.title}→</Link>:
                null
              }
            </div>
          </nav>
        </div>
      </Layout>
    )
  }
}

export default Article

export const pageQuery = graphql`
  query($slug: String!) {
    asciidoc(fields: {slug: { eq: $slug }}) {
      html
      pageAttributes {
        category
      }
      document {
        title
      }
      author {
        fullName
      }
      revision {
        date(formatString: "YYYY/MM/DD")
      }
      fields {
        slug
      }
    }
  }
`
