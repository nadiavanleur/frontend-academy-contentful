const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const tutorial = path.resolve('./src/templates/tutorial.js')
    resolve(
      graphql(
        `
          {
            allContentfulTutorial(
              sort: { order: ASC, fields: createdAt }
              filter: { id: { ne: "047d56ba-1457-50e5-9345-00d7b4cfb065" } }
            ) {
              edges {
                node {
                  id
                  title
                  introduction {
                    childMarkdownRemark {
                      excerpt(format: PLAIN)
                    }
                  }
                  slug
                  tags
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const allTutorials = result.data.allContentfulTutorial.edges
        let numberOfPosts = {
          all: allTutorials.length,
          html: 0,
          css: 0,
          javascript: 0,
        }
        const postsPerPage = 6

        // Tutorial pages
        allTutorials.forEach(({ node }) => {
          const slug = node.slug
          const languages = node.tags
          const template = `src/templates/tutorial.js`

          const langString = languages.toString().toLowerCase()

          if (langString.includes('html')) {
            numberOfPosts.html++
          }

          if (langString.includes('css')) {
            numberOfPosts.css++
          }

          if (langString.includes('javascript')) {
            numberOfPosts.javascript++
          }

          createPage({
            path: slug,
            component: path.resolve(template),
            context: {
              slug,
              id: node.id,
              limit: 1,
              skip: 1,
              tutorialNumber: numberOfPosts.all,
              postsPerPage: postsPerPage,
            },
          })
        })

        // General tutorial overview page
        createOverviewPages(numberOfPosts.all, postsPerPage, 'tutorials')

        // HTML tutorial overview page
        createOverviewPages(
          numberOfPosts.html,
          postsPerPage,
          'tutorials/html',
          'html'
        )

        // CSS tutorial overview page
        createOverviewPages(
          numberOfPosts.css,
          postsPerPage,
          'tutorials/css',
          'css'
        )

        // Javascript tutorial overview page
        createOverviewPages(
          numberOfPosts.javascript,
          postsPerPage,
          'tutorials/javascript',
          'javascript'
        )

        function createOverviewPages(
          numberOfPosts,
          postsPerPage,
          slug,
          programmingLanguage
        ) {
          const numPages = Math.ceil(numberOfPosts / postsPerPage)

          const all = programmingLanguage ? '' : '-all'

          Array.from({ length: numPages }).forEach((_, i) => {
            if (i === 0) {
              createPage({
                path: `/${slug}/`,
                component: path.resolve(`./src/templates/overview${all}.js`),
                context: {
                  limit: postsPerPage,
                  skip: i * postsPerPage,
                  currentPage: i + 1,
                  totalPages: numPages,
                  slug: slug,
                  programmingLanguage: programmingLanguage,
                },
              })
            }

            createPage({
              path: `/${slug}/${i + 1}`,
              component: path.resolve(`./src/templates/overview${all}.js`),
              context: {
                limit: postsPerPage,
                skip: i * postsPerPage,
                currentPage: i + 1,
                totalPages: numPages,
                slug: slug,
                programmingLanguage: programmingLanguage,
              },
            })
          })
        }

        // const tutorials = result.data.allContentfulTutorial.edges
        // tutorials.forEach((tutorial, index) => {
        //   createPage({
        //     path: `/tutorials/${tutorial.node.slug}/`,
        //     component: tutorial,
        //     context: {
        //       slug: tutorial.node.slug,
        //     },
        //   })
        // })
      })
    )
  })
}
