import React, { Component } from 'react'

/**
 * Heading Pagepart
 */
class HeadingPagepart extends Component {
  /**
   * Render react component
   *
   * @returns react component
   */
  render() {
    /**
     * @var heading: string, text to be displayed
     * @var underline: boolean, if text should be underlined
     */
    const { heading, underline } = this.props

    return (
      <h3
        className={`pagepart__title`}
        data-heading={heading.replace(/\s/g, '_').toLowerCase()}
      >
        {/* If heading has underline */}
        {underline === true && (
          <u className="pagepart__title-underline">{heading}</u>
        )}
        {/* If heading does not have underline */}
        {underline !== true && <React.Fragment>{heading}</React.Fragment>}
      </h3>
    )
  }
}

export default HeadingPagepart
