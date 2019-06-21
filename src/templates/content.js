import React, { Component } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Pageparts from '../components/pageparts'

/**
 * Content Page Template
 */
class ContentTemplate extends Component {
  /**
   * Render react component
   *
   * @returns react component
   */
  render() {
    /**
     * @var title
     * @var slug
     * @var siteUrl
     * @var content
     */
    const { title, slug, siteUrl, content } = this.props

    /**
     * Page header
     */
    const pageHeader = (
      <h2 className="page__title">
        {title}
        {title.substr(title.length - 1) === '?' ||
        title.substr(title.length - 1) === '!' ||
        title.substr(title.length - 1) === '.'
          ? ''
          : '.'}
      </h2>
    )

    return (
      <Layout pageHeader={pageHeader} page="about">
        <Helmet>
          <link rel="canonical" href={`${siteUrl}/${slug}`} />
        </Helmet>
        <SEO title={title} keywords={[`gatsby`, `application`, `react`]} />
        <section className="wrapper-inner">
          <Pageparts content={content} />
        </section>
      </Layout>
    )
  }
}

export default ContentTemplate

ContentTemplate.propTypes = {
  title: PropTypes.string,
}

ContentTemplate.defaultProps = {}
