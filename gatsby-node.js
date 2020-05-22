const today = new Date()
const firstDay = new Date(today.getFullYear(), today.getMonth(), 1)

exports.createSchemaCustomization = ({ actions, schema, getNode }) => {
  actions.createTypes([
    schema.buildObjectType({
      name: "ContentfulKalenderItem",
      interfaces: ["Node"],
      fields: {
        isFuture: {
          type: "Boolean!",
          resolve: source => {
            return new Date(source.date) >= firstDay
          },
        },
      },
    }),
    schema.buildObjectType({
      name: "ContentfulLeeftijdsgroep",
      interfaces: ["Node"],
      fields: {
        rang: {
          type: "Int!",
          resolve: source => {
            return Number(source.age[1])
          },
        },
      },
    }),
  ])
}

// const Promise = require('bluebird')
// const path = require('path')

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions

//   return new Promise((resolve, reject) => {
//     const blogPost = path.resolve('./src/templates/blog-post.js')
//     resolve(
//       graphql(
//         `
//           {
//             allContentfulBlogPost {
//               edges {
//                 node {
//                   title
//                   slug
//                 }
//               }
//             }
//           }
//         `
//       ).then(result => {
//         if (result.errors) {
//           console.log(result.errors)
//           reject(result.errors)
//         }

//         const posts = result.data.allContentfulBlogPost.edges
//         posts.forEach(post => {
//           createPage({
//             path: `/blog/${post.node.slug}/`,
//             component: blogPost,
//             context: {
//               slug: post.node.slug,
//             },
//           })
//         })
//       })
//     )
//   })
// }
