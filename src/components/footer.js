import React, { Component } from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Navigation from '../components/navigation.js'

/**
 * Footer
 */
class Footer extends Component {
  /**
   * Render react component
   *
   * @returns react component
   */
  render() {
    /**
     * @var logo: object, e-sites logo
     */
    const { logo } = this.props.data

    return (
      <footer className="footer page__footer">
        <div className="wrapper-inner footer__container">
          <Navigation itemClassName="footer" />
          <p className="footer__credits">
            © {new Date().getFullYear()}, Mogelijk gemaakt door
            {` `}
            <a href="https://www.e-sites.nl" className="footer__credits-link">
              {logo && logo.fluid && logo.fluid.src !== null && (
                <Img
                  alt={logo.title ? logo.title : 'E-sites'}
                  className="footer__credits-logo"
                  fluid={logo.fluid}
                />
              )}
              {logo &&
                logo.fluid &&
                logo.fluid.src === null &&
                logo.file !== null && (
                  <img
                    src={logo.file.url}
                    alt={logo.title ? logo.title : 'E-sites'}
                    className="footer__credits-logo"
                  />
                )}
            </a>
          </p>
        </div>
      </footer>
    )
  }
}

/**
 * Uses static query to get data for footer
 */
export default props => (
  <StaticQuery
    query={footerQuery}
    render={data => <Footer data={data} {...props} />}
  />
)

/**
 * Graphql query to get footer data
 */
export const footerQuery = graphql`
  query FooterQuery {
    logo: contentfulAsset(title: { eq: "e-sites logo" }) {
      id
      file {
        contentType
        fileName
        url
      }
      title
      fluid {
        ...GatsbyContentfulFluid
      }
    }
  }
`
