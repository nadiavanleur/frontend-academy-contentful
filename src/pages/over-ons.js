import React, { Component } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import ContentTemplate from '../templates/content'

class About extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const { site, page } = this.props.data

    return <ContentTemplate {...site.siteMetadata} {...page} />
  }
}

export default About

export const query = graphql`
  query aboutQuery {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    page: contentfulOverOns {
      title
      content {
        content
      }
    }
  }
`

About.propTypes = {
  title: PropTypes.string,
}

About.defaultProps = {}
