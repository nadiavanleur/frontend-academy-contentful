import React from 'react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Filter from '../components/filter'

/**
 * Root Index
 */
class RootIndex extends React.Component {
  /**
   * Render react component
   *
   * @returns react component
   */
  render() {
    /**
     * @var siteUrl
     * @var title
     * @var image
     * @var button1
     * @var button2
     * @var button3
     */
    const { siteUrl } = this.props.data.site.siteMetadata
    const { title, image, button1, button2, button3 } = this.props.data.page

    return (
      <Layout page="index">
        <Helmet>
          <link rel="canonical" href={`${siteUrl}`} />
        </Helmet>
        <SEO title={title} keywords={[`gatsby`, `application`, `react`]} />
        <section className="hero">
          <div className="wrapper-inner hero__container">
            {image && image.fluid && image.fluid.src !== null && (
              <Img
                fluid={image.fluid}
                objectFit="contain"
                className="hero__image"
                alt="hero"
              />
            )}
            {image &&
              image.fluid.src === null &&
              image.file &&
              image.file !== null && (
                <img src={image.file.url} alt="hero" className="hero__image" />
              )}
            {image && image.fluid.src === null && image.file === null && (
              <img src={image} alt="hero" className="hero__image" />
            )}

            {(button1 || button2 || button3) && (
              <div className="hero__buttons">
                {button1 && (
                  <Link to={button1.url} className="hero__button btn">
                    {button1.label}
                  </Link>
                )}
                {button2 && (
                  <Link to={button2.url} className="hero__button btn">
                    {button2.label}
                  </Link>
                )}
                {button3 && (
                  <Link to={button3.url} className="hero__button btn">
                    {button3.label}
                  </Link>
                )}
              </div>
            )}
          </div>
        </section>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    page: contentfulHome {
      title
      image {
        sizes {
          src
        }
        fluid {
          ...GatsbyContentfulFluid
        }
        file {
          fileName
          url
          contentType
        }
      }
      button1 {
        title
        label
        url
      }
      button2 {
        title
        label
        url
      }
      button3 {
        title
        label
        url
      }
    }
  }
`
