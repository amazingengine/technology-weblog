const _ = require(`lodash`)
const path = require(`path`)
const slash = require(`slash`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(
    `
      {
        dataJson {
          list
        }
        allAsciidoc(
          sort: {
            fields: [revision___date]
            order: DESC
          }
        ) {
          edges {
            node {
              id
              document {
                title
              }
              pageAttributes {
                category
              }
              revision {
                date
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const articleTemplate = path.resolve(`./src/templates/article.js`)
    const categoryTemplate = path.resolve(`./src/templates/category.js`)
    // const dateTemplate = path.resolve(`./src/templates/date.js`)

    const posts = result.data.allAsciidoc.edges
    
    posts.forEach(({node}, index) => {
      const path = node.fields.slug
      createPage({
        path: node.fields.slug,
        component: slash(articleTemplate),
        context: {
          slug: node.fields.slug,
          next: index === (posts.length - 1) ? null : posts[index +1].node,
          prev: index === 0 ? null : posts[index -1].node,
        }
      })
    })

    // _.each(result.data.allAsciidoc.edges, edge => {
    //   createPage({
    //     path: edge.node.fields.slug,
    //     component: slash(articleTemplate),
    //     context: {
    //       slug: edge.node.fields.slug,
    //     },
    //   })
    // })

    // _.each(result.data.allAsciidoc.edges, edge => {
    //   console.log(edge.node.fields.date)
    //   createPage({
    //     path: edge.node.revision.date,
    //     component: slash(dateTemplate),
    //     context: {
    //       date: edge.node.revision.date,
    //     },
    //   })
    // })

    result.data.dataJson.list.forEach(category => {
      createPage({
        path: category,
        component: slash(categoryTemplate),
        context: {
          category: category
        }, 
      })
    })
  })
}

exports.onCreateNode = async ({ node, actions, getNode, loadNodeContent }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Asciidoc`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
