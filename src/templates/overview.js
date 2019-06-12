import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import OverviewTemplate from '../templates/overview-template'

class Overview extends React.Component {
  render() {
    return <OverviewTemplate {...this.props} />
  }
}

export default Overview

export const pageQuery = graphql`
  query tutorialOverviewQuery(
    $skip: Int!
    $limit: Int!
    $programmingLanguage: String!
  ) {
    tutorials: allContentfulTutorial(
      sort: { order: DESC, fields: createdAt }
      filter: { tags: { in: [$programmingLanguage] } }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          id
          title
          image {
            title
            sizes {
              ...GatsbyContentfulSizes
            }
            fluid {
              ...GatsbyContentfulFluid
            }
            file {
              contentType
              fileName
              url
            }
          }
          introduction {
            childMarkdownRemark {
              excerpt(format: PLAIN)
            }
          }
          slug
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
    default: contentfulTutorials {
      title
    }
  }
`
