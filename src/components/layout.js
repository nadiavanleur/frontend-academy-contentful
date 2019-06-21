import React, { Component } from 'react'

import Header from './header'
import Footer from './footer'
import CookieNotification from './cookie-notification'

import { CookiesProvider } from 'react-cookie'

import '../styles/style.scss'

/**
 * Layout
 */
class Layout extends Component {
  /**
   * Render react component
   *
   * @returns react component
   */
  render() {
    /**
     * @var children
     * @var pageHeader
     * @var page
     */
    const { children, pageHeader, page } = this.props

    return (
      <CookiesProvider>
        <div className={`page page--${page}`}>
          <Header pageHeader={pageHeader} />

          <main className="page__main">{children}</main>

          <Footer />

          <CookieNotification />
        </div>
      </CookiesProvider>
    )
  }
}

export default Layout
