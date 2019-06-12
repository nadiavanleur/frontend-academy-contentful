import { Link, graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React, { Component } from 'react'

import Navigation from '../components/navigation.js'

class Header extends Component {
  render() {
    const { pageHeader, page } = this.props
    const { logo } = this.props.data

    return (
      <header className={`header header--${page}`}>
        <div className="wrapper-inner header__inner">
          <h1 className="header__title">
            <Link
              to="/"
              activeClassName="active"
              className="header__title-link"
            >
              {logo && logo.fluid && logo.fluid.src !== null && (
                <Img
                  alt={title ? title : 'logo'}
                  className="header__logo"
                  fluid={logo.fluid}
                />
              )}
              {logo &&
                logo.fluid &&
                logo.fluid.src === null &&
                logo.file !== null && (
                  <img
                    src={logo.file.url}
                    alt={logo.title ? logo.title : '.academy logo'}
                    className="header__logo"
                  />
                )}
            </Link>
          </h1>

          <Navigation itemClassName="header" />
        </div>
        <div className="header__bottom wrapper-inner">{pageHeader}</div>
      </header>
    )
  }
}

export default props => (
  <StaticQuery
    query={headerQuery}
    render={data => <Header data={data} {...props} />}
  />
)

export const headerQuery = graphql`
  query HeaderQuery {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    logo: contentfulAsset(title: { eq: "logo" }) {
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
