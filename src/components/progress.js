import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Progress extends Component {
  render() {
    const { progress, elementClass } = this.props

    return (
      <React.Fragment>
        <progress
          className={`${elementClass} progress sr-only`}
          value={progress !== undefined && progress !== null ? progress : 0}
          max="100"
        />
        <div className={`${elementClass} progress`}>
          <span
            class="progress__inner"
            style={{ transform: `translateX(` + progress + `%)` }}
          />
        </div>
      </React.Fragment>
    )
  }
}

Progress.propTypes = {
  elementClass: PropTypes.string,
}

export default Progress
