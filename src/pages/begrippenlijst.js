import React, { Component } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import SEO from '../components/seo'

/**
 * Glossary
 */
class Glossary extends Component {
  /**
   * Turn array into groups
   *
   * @param array
   *
   * @returns groupedArray
   */
  groupArray(array) {
    let prevFirstLetter = ''
    let groupedArray = []

    array.map(definition => {
      const firstLetter = definition.label.charAt(0)

      if (firstLetter !== prevFirstLetter) {
        groupedArray.push({
          firstLetter: firstLetter,
          definitions: [definition],
        })
        prevFirstLetter = firstLetter
      } else {
        groupedArray[groupedArray.length - 1].definitions.push(definition)
      }
      return 0
    })

    return groupedArray
  }

  /**
   * Render react component
   *
   * @returns react component
   */
  render() {
    /**
     * @var data
     * @var title
     * @var definitions
     * @var siteUrl
     */
    const { data } = this.props
    const { title, definitions } = data.page
    const { siteUrl } = data.site.siteMetadata

    /**
     * Alphabetically sort defintions
     */
    const sortedDefinitions = definitions.sort(function(a, b) {
      if (a.label < b.label) {
        return -1
      }
      if (a.label > b.label) {
        return 1
      }
      return 0
    })

    /**
     * Group definition
     */
    const groupedDefinitions = this.groupArray(sortedDefinitions)

    const pageHeader = <h2 className="page__title">begrippenlijst.</h2>

    return (
      <Layout pageHeader={pageHeader} page="glossary">
        <Helmet>
          <link rel="canonical" href={`${siteUrl}/begrippenlijst`} />
        </Helmet>
        <SEO title={title} keywords={[`gatsby`, `application`, `react`]} />
        <section className="wrapper-inner glossary">
          {groupedDefinitions.map(({ firstLetter, definitions }) => {
            return (
              <div className="glossary__group" key={firstLetter}>
                <h3
                  className="glossary__group-title"
                  id={`letter-${firstLetter}`}
                >
                  <a
                    href={`/begrippenlijst#letter-${firstLetter}`}
                    className="glossary__group-link"
                  >
                    {firstLetter}.
                  </a>
                </h3>
                <dl className="glossary__list">
                  {definitions.map(({ label, description }) => {
                    return (
                      <div
                        className="glossary__item"
                        id={label.toLowerCase()}
                        key={label}
                        activeClassName="active"
                      >
                        <dt className="glossary__title">{label}</dt>
                        <dd
                          className="glossary__description"
                          dangerouslySetInnerHTML={{
                            __html: description.childMarkdownRemark.html,
                          }}
                        />
                      </div>
                    )
                  })}
                </dl>
              </div>
            )
          })}
        </section>
      </Layout>
    )
  }
}

Glossary.propTypes = {
  title: PropTypes.string,
  definitions: PropTypes.array,
}

Glossary.defaultProps = {}

export default Glossary

export const query = graphql`
  query glossaryQuery {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    page: contentfulBegrippenlijst {
      title
      definitions {
        title
        label
        description {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`
