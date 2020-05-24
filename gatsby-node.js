const path = require("path")

const today = new Date()
const firstDay = new Date(today.getFullYear(), today.getMonth(), 1)

exports.createSchemaCustomization = ({ actions, schema }) => {
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
              id
              date
            }
          }
        }
        videos: allContentfulVideo(sort: { fields: createdAt, order: DESC }) {
          edges {
            node {
              id
            }
          }
        }
        boekjes: allContentfulBoekje(sort: { fields: enddate, order: DESC }) {
          edges {
            node {
              enddate
              id
            }
          }
        }
        documents: allContentfulDocument(sort: { fields: title }) {
          edges {
            node {
              title
            }
          }
        }
        news: allContentfulBericht(sort: { fields: date, order: DESC }) {
          edges {
            node {
              slug
              id
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
  const newsPerPage = 9
  const numAlbumPages = Math.ceil(
    result.data.albums.edges.length / albumsPerPage
  )
  const numBoekjePages = Math.ceil(
    result.data.boekjes.edges.length / albumsPerPage
  )
  const numDocumentPages = Math.ceil(
    result.data.documents.edges.length / albumsPerPage
  )
  const numVideoPages = Math.ceil(
    result.data.videos.edges.length / videosPerPage
  )
  const numNewsPages = Math.ceil(result.data.news.edges.length / newsPerPage)

  Array.from({ length: numAlbumPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/media/albums/` : `/media/albums/${i + 1}`,
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
      path: i === 0 ? `/media/krantjes/` : `/media/krantjes/${i + 1}`,
      component: path.resolve("./src/templates/allBoekjes.js"),
      context: {
        limit: albumsPerPage,
        skip: i * albumsPerPage,
        numBoekjePages,
        currentPage: i + 1,
      },
    })
  })
  Array.from({ length: numDocumentPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/media/documenten/` : `/media/documenten/${i + 1}`,
      component: path.resolve("./src/templates/allDocuments.js"),
      context: {
        limit: albumsPerPage,
        skip: i * albumsPerPage,
        numDocumentPages,
        currentPage: i + 1,
      },
    })
  })
  Array.from({ length: numVideoPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/media/videos/` : `/media/videos/${i + 1}`,
      component: path.resolve("./src/templates/allVideos.js"),
      context: {
        limit: videosPerPage,
        skip: i * videosPerPage,
        numVideoPages,
        currentPage: i + 1,
      },
    })
  })
  Array.from({ length: numNewsPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/nieuws/` : `/nieuws/${i + 1}`,
      component: path.resolve("./src/templates/allNews.js"),
      context: {
        limit: newsPerPage,
        skip: i * newsPerPage,
        numNewsPages,
        currentPage: i + 1,
      },
    })
  })

  //create single nieuws-page
  result.data.news.edges.forEach(({ node }) => {
    createPage({
      path: `/nieuws/${node.slug}`,
      component: path.resolve(`./src/templates/newsPost.js`),
      context: {
        slug: node.slug,
      },
    })
  })
}
