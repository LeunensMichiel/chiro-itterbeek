const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

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

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        albums: allContentfulAlbum(sort: { fields: date, order: DESC }) {
          edges {
            node {
              title
              url
              id
              gender
              date
            }
          }
        }
        videos: allContentfulVideo(sort: { fields: createdAt, order: DESC }) {
          edges {
            node {
              gender
              url
              title
              id
            }
          }
        }
        boekjes: allContentfulBoekje(sort: { fields: enddate, order: DESC }) {
          edges {
            node {
              gender
              title
              url
              enddate
              id
              startdate
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL pagination query.`)
    return
  }

  const albumsPerPage = 15
  const videosPerPage = 4
  const numAlbumPages = Math.ceil(
    result.data.albums.edges.length / albumsPerPage
  )
  const numBoekjePages = Math.ceil(
    result.data.boekjes.edges.length / albumsPerPage
  )
  const numVideoPages = Math.ceil(
    result.data.videos.edges.length / videosPerPage
  )

  Array.from({ length: numAlbumPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/media/albums` : `/media/albums/${i + 1}`,
      component: path.resolve("./src/templates/allAlbums.js"),
      context: {
        limit: albumsPerPage,
        skip: i * albumsPerPage,
        numAlbumPages,
        currentPage: i + 1,
      },
    })
  })
  Array.from({ length: numBoekjePages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/media/krantjes` : `/media/krantjes/${i + 1}`,
      component: path.resolve("./src/templates/allBoekjes.js"),
      context: {
        limit: albumsPerPage,
        skip: i * albumsPerPage,
        numBoekjePages,
        currentPage: i + 1,
      },
    })
  })
  Array.from({ length: numVideoPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/media/videos` : `/media/videos/${i + 1}`,
      component: path.resolve("./src/templates/allVideos.js"),
      context: {
        limit: videosPerPage,
        skip: i * videosPerPage,
        numVideoPages,
        currentPage: i + 1,
      },
    })
  })
}
