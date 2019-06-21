import React, { Component } from 'react'
import Link from 'gatsby-link'
import { instanceOf } from 'prop-types'
import { withCookies, Cookies } from 'react-cookie'

/**
 * Cookie Notification
 */
class CookieNotification extends Component {
  /**
   * @var propTypes: object, stores cookies
   */
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
  }

  /**
   * Set state.cookiesAccepted
   */
  constructor(props) {
    super(props)

    /**
     * @var this.state.cookiesAccepted: boolean, true if user accepted cookies
     */
    this.state = {
      cookiesAccepted: this.getCookie(`cookies-accepted`),
    }
  }

  /**
   * When user clicks accept cookies button set cookie "cookies-accepted" and this.state.cookiesAccepted to true
   */
  onButtonAccept = () => {
    this.setCookie(`cookies-accepted`, 'true')

    this.setState({ cookiesAccepted: 'true' })
  }

  /**
   * Set cookies with expiration date of 20 years
   *
   * @param key: string
   * @param value: string
   */
  setCookie(key, value) {
    const { cookies } = this.props // Get cookies from this.props

    const expires = new Date() // Create new date
    expires.setTime(expires.getTime() + 1000 * 60 * 60 * 24 * 365 * 20) // Set date to expire 20 years from now

    cookies.set(key, value, { path: '/', expires: expires })
  }

  /**
   * Get cookie value or return 0
   *
   * @param key
   * @returns cookie or 0
   */
  getCookie(key) {
    const { cookies } = this.props // Get cookies from this.props

    return cookies.get(key) || 0
  }

  /**
   * Render react component
   *
   * @returns react component
   */
  render() {
    return (
      <div
        className={`cookie-notification wrapper-inner ${
          this.state.cookiesAccepted === 'true' ? 'hide' : ''
        }`}
      >
        <h3 className="cookie-notification__title">Cookies!</h3>
        <p className="cookie-notification__text">
          Wij gebruiken cookies om je voortgang bij te houden.{' '}
          <Link to="/cookie-verklaring" className="cookie-notification__link">
            Klik hier voor meer informatie.
          </Link>
        </p>
        <button
          className="cookie-notification__button btn"
          onClick={this.onButtonAccept}
        >
          &#10004;
        </button>
      </div>
    )
  }
}

CookieNotification.propTypes = {}

export default withCookies(CookieNotification)
