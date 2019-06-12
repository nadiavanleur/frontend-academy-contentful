import React, { Component } from 'react'

class HeadingPagepart extends Component {
  render() {
    const { title } = this.props

    return (
      // <div className='pagepart'>
      <h3 className={`pagepart__title`}>{title}</h3>
      // </div>
    )
  }
}

export default HeadingPagepart
