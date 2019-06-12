import React, { Component } from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import PropTypes, { instanceOf } from 'prop-types'
import { withCookies, Cookies } from 'react-cookie'

class Navigation extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      tutorialPage: '',
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        tutorialPage: this.getCookie(`tutorial-page`),
      })
    }, 50)
  }

  getCookie(key) {
    const { cookies } = this.props

    return cookies.get(`cookies-accepted`) === 'true'
      ? cookies.get(key) || ''
      : ''
  }

  render() {
    const { itemClassName } = this.props

    return (
      <div
        role="navigation"
        className={`${itemClassName}__nav-wrapper nav__wrapper`}
      >
        <ul className={`${itemClassName}__nav nav`}>
          <li className={`${itemClassName}__nav-item nav__item`}>
            <Link
              to={`/tutorials/${this.state.tutorialPage}`}
              activeClassName="active"
              partiallyActive={true}
              className={`${itemClassName}__nav-link nav__link`}
            >
              Tutorials
            </Link>
          </li>
          <li className={`${itemClassName}__nav-item nav__item`}>
            <Link
              to={`/begrippenlijst`}
              activeClassName="active"
              partiallyActive={true}
              className={`${itemClassName}__nav-link nav__link`}
            >
              Begrippenlijst
            </Link>
          </li>
          <li className={`${itemClassName}__nav-item nav__item`}>
            <Link
              to={`/over-ons`}
              activeClassName="active"
              partiallyActive={true}
              className={`${itemClassName}__nav-link nav__link`}
            >
              Over ons
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default withCookies(Navigation)
