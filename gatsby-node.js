const fs = require("fs")
const path = require("path")

const today = new Date()
const firstDay = new Date(today.getFullYear(), today.getMonth(), 1)

exports.createSchemaCustomization = ({ actions, schema }) => {
  actions.createTypes([
    // Rich text `references` is only inferred when at least one post embeds
    // something; declare it so the news query works either way.
    `type ContentfulBerichtBody {
      raw: String
      references: [ContentfulReference] @link(from: "references___NODE")
    }`,
    schema.buildObjectType({
      name: "ContentfulKalenderItem",
      interfaces: ["Node"],
      fields: {
        isFuture: {
          type: "Boolean!",
          resolve: source => new Date(source.date) >= firstDay,
        },
      },
    }),
    schema.buildObjectType({
      name: "ContentfulLeeftijdsgroep",
      interfaces: ["Node"],
      fields: {
        rang: {
          type: "Int!",
          resolve: source => Number(source.age[0]),
        },
      },
    }),
  ])
}

// Mapbox's stylesheet is only needed on /contact/. Imported through webpack it
// would end up in Gatsby's single global CSS bundle, inlined into every page,
// so it's copied as a plain file and linked from the contact page's <Head>.
exports.onPostBootstrap = ({ store }) => {
  const publicDir = path.join(store.getState().program.directory, "public")
  fs.mkdirSync(publicDir, { recursive: true })
  fs.copyFileSync(
    require.resolve("mapbox-gl/dist/mapbox-gl.css"),
    path.join(publicDir, "mapbox-gl.css")
  )
}

// SVGs inside src/assets/icons are imported as React components (via SVGR),
// every other SVG keeps Gatsby's default behaviour (imported as a URL).
const ICONS_DIR = /[\\/]src[\\/]assets[\\/]icons[\\/]/

exports.onCreateWebpackConfig = ({ getConfig, actions, loaders }) => {
  const config = getConfig()

  config.module.rules = config.module.rules.map(rule => {
    if (!(rule.test instanceof RegExp)) return rule
    if (rule.test.test(".svg")) {
      return { ...rule, exclude: ICONS_DIR }
    }
    // Always emit fonts as files. Gatsby's default inlines files < 10 KB as
    // base64, which put the (never used) .woff fallbacks of small font
    // subsets into the inlined CSS of every single page.
    if (rule.test.test(".woff2")) {
      return { ...rule, use: [loaders.file()] }
    }
    return rule
  })

  config.module.rules.push({
    test: /\.svg$/,
    include: ICONS_DIR,
    use: [
      {
        loader: require.resolve("@svgr/webpack"),
        options: {
          // keep the markup untouched (same output as the old svg-react-loader)
          svgo: false,
          ref: true,
        },
      },
    ],
  })

  actions.replaceWebpackConfig(config)
}

const paginate = ({ createPage, count, perPage, basePath, component, key }) => {
  const numPages = Math.ceil(count / perPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `${basePath}/` : `${basePath}/${i + 1}`,
      component,
      context: {
        limit: perPage,
        skip: i * perPage,
        [key]: numPages,
        currentPage: i + 1,
      },
    })
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      albums: allContentfulAlbum {
        totalCount
      }
      videos: allContentfulVideo {
        totalCount
      }
      boekjes: allContentfulBoekje {
        totalCount
      }
      documents: allContentfulDocument {
        totalCount
      }
      news: allContentfulBericht(
        sort: { date: DESC }
        filter: { title: { ne: "dummy" } }
      ) {
        totalCount
        nodes {
          slug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(
      `Error while running GraphQL pagination query.`,
      result.errors
    )
    return
  }

  const { albums, videos, boekjes, documents, news } = result.data
  const albumsPerPage = 15
  const videosPerPage = 4
  const newsPerPage = 9

  paginate({
    createPage,
    count: albums.totalCount,
    perPage: albumsPerPage,
    basePath: "/media/albums",
    component: path.resolve("./src/templates/allAlbums.js"),
    key: "numAlbumPages",
  })
  paginate({
    createPage,
    count: boekjes.totalCount,
    perPage: albumsPerPage,
    basePath: "/media/krantjes",
    component: path.resolve("./src/templates/allBoekjes.js"),
    key: "numBoekjePages",
  })
  paginate({
    createPage,
    count: documents.totalCount,
    perPage: albumsPerPage,
    basePath: "/media/documenten",
    component: path.resolve("./src/templates/allDocuments.js"),
    key: "numDocumentPages",
  })
  paginate({
    createPage,
    count: videos.totalCount,
    perPage: videosPerPage,
    basePath: "/media/videos",
    component: path.resolve("./src/templates/allVideos.js"),
    key: "numVideoPages",
  })
  paginate({
    createPage,
    count: news.totalCount,
    perPage: newsPerPage,
    basePath: "/nieuws",
    component: path.resolve("./src/templates/allNews.js"),
    key: "numNewsPages",
  })

  // single news pages
  news.nodes.forEach(({ slug }) => {
    createPage({
      path: `/nieuws/${slug}`,
      component: path.resolve(`./src/templates/newsPost.js`),
      context: { slug },
    })
  })
}
