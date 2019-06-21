import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * Note Pagepart
 */
class NotePagepart extends Component {
  /**
   * Render react component
   *
   * @returns react component
   */
  render() {
    /**
     * @var text: object, text to be displayed
     */
    const { text } = this.props

    return (
      <div className={`note-pp pagepart`}>
        <div className={`note-pp__container pagepart__container`}>
          {text && (
            <p className={`note-pp__text pagepart__text`}>{text.text}</p>
          )}
        </div>
      </div>
    )
  }
}

NotePagepart.propTypes = {
  text: PropTypes.string,
}

NotePagepart.defaultProps = {}

export default NotePagepart
