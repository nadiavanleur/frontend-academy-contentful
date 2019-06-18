import { Link, graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React, { Component } from 'react'

import Navigation from '../components/navigation.js'

class Filter extends Component {
  render() {
    const { button1, button2, button3 } = this.props.data.page

    return (
      <React.Fragment>
        {(button1 || button2 || button3) && (
          <ul className="filter nav">
            {button1 && (
              <li className="filter__item nav__item">
                <Link
                  to={button1.url}
                  className="filter__link nav__link"
                  activeClassName="active"
                  partiallyActive={true}
                >
                  {button1.label}
                </Link>
              </li>
            )}
            {button2 && (
              <li className="filter__item nav__item">
                <Link
                  to={button2.url}
                  className="filter__link nav__link"
                  activeClassName="active"
                  partiallyActive={true}
                >
                  {button2.label}
                </Link>
              </li>
            )}
            {button3 && (
              <li className="filter__item nav__item">
                <Link
                  to={button3.url}
                  className="filter__link nav__link"
                  activeClassName="active"
                  partiallyActive={true}
                >
                  {button3.label}
                </Link>
              </li>
            )}
          </ul>
        )}
      </React.Fragment>
    )
  }
}

export default props => (
  <StaticQuery
    query={filterQuery}
    render={data => <Filter data={data} {...props} />}
  />
)

export const filterQuery = graphql`
  query FilterQuery {
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
