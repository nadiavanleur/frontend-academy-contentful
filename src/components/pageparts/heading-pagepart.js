import React, { Component } from 'react'

class HeadingPagepart extends Component {
  render() {
    const { heading, underline } = this.props

    return (
      <h3
        className={`pagepart__title`}
        data-heading={heading.replace(/\s/g, '_').toLowerCase()}
      >
        {(underline === true || underline === 'true') && (
          <u className="pagepart__title-underline">{heading}</u>
        )}
        {(underline !== true || underline !== 'true') && (
          <React.Fragment>{heading}</React.Fragment>
        )}
      </h3>
    )
  }
}

export default HeadingPagepart
