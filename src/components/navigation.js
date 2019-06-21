import React, { Component } from 'react'
import { Link } from 'gatsby'
import { instanceOf } from 'prop-types'
import { withCookies, Cookies } from 'react-cookie'

/**
 * Navigation
 */
class Navigation extends Component {
  /**
   * @var cookies
   */
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
  }

  /**
   * @var this.state.tutorialPage: corresponding overview page for last tutorial
   */
  constructor(props) {
    super(props)

    this.state = {
      tutorialPage: '',
    }
  }

  /**
   * When component has mounted set tutorial page
   */
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        tutorialPage: this.getCookie(`tutorial-page`),
      })
    }, 50)
  }

  /**
   * Get cookie value or return ''
   *
   * @param key
   * @returns cookie or ''
   */
  getCookie(key) {
    const { cookies } = this.props

    return cookies.get(`cookies-accepted`) === 'true'
      ? cookies.get(key) || ''
      : ''
  }

  /**
   * Render react component
   *
   * @returns react component
   */
  render() {
    /**
     * @var itemClassName: string, class name for navigation
     */
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
