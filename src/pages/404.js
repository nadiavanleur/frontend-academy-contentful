import React, { Component } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import ContentTemplate from '../templates/content'

class PageNotFound extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const { site, page } = this.props.data

    return <ContentTemplate {...site.siteMetadata} {...page} />
  }
}

export default PageNotFound

export const query = graphql`
  query pageNotFoundQuery {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    page: contentful404 {
      title
      content {
        content
      }
    }
  }
`

PageNotFound.propTypes = {
  title: PropTypes.string,
}

PageNotFound.defaultProps = {}
