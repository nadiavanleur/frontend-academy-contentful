let contentfulConfig

try {
  // Load the Contentful config from the .contentful.json
  contentfulConfig = require('./.contentful')
} catch (_) {}

// Overwrite the Contentful config with environment variables if they exist
contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID || contentfulConfig.spaceId,
  accessToken:
    process.env.CONTENTFUL_DELIVERY_TOKEN || contentfulConfig.accessToken,
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the delivery token need to be provided.'
  )
}

module.exports = {
  siteMetadata: {
    title: `e-sites.academy`,
    description: `Jij kan dit`,
    author: `Nadia van Leur <nvleur@e-sites.nl>`,
    siteUrl: `https://frontend-academy-contentful.netlify.com`,
    // siteUrl: `https://e-sites.academy`,
    keywords: `frontend, Nederlands, tutorials, uitleg`,
  },
  pathPrefix: '/gatsby-contentful-starter',
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `e-sites-academy`,
        short_name: `academy`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/img/favicon.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
  ],
}
