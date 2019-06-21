import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * Progress
 */
class Progress extends Component {
  /**
   * Render react component
   *
   * @returns react component
   */
  render() {
    /**
     * @var progress
     * @var elementClass
     */
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
