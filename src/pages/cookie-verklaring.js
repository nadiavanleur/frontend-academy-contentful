import React, { Component } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import ContentTemplate from '../templates/content'

/**
 * Cookie Statement
 */
class CookieStatement extends Component {
  /**
   * Render react component
   *
   * @returns react component
   */
  render() {
    /**
     * @var site
     * @var page
     */
    const { site, page } = this.props.data

    return <ContentTemplate {...site.siteMetadata} {...page} />
  }
}

export default CookieStatement

export const query = graphql`
  query CookieQuery {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    page: contentfulCookieverklaring {
      title
      content {
        content
      }
    }
  }
`

CookieStatement.propTypes = {
  title: PropTypes.string,
}

CookieStatement.defaultProps = {}
