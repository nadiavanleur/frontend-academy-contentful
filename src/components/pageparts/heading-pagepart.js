import React, { Component } from 'react'

class HeadingPagepart extends Component {
  render() {
    const { heading, underline } = this.props

    return (
      // <div className='pagepart'>
      <h3 className={`pagepart__title`}>
        {(underline === true || underline === 'true') && (
          <u className="pagepart__title-underline">{heading}</u>
        )}
        {(underline !== true || underline !== 'true') && (
          <React.Fragment>{heading}</React.Fragment>
        )}
      </h3>
      // </div>
    )
  }
}

export default HeadingPagepart
