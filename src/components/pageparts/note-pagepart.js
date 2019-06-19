import React, { Component } from 'react'
import PropTypes from 'prop-types'

class NotePagepart extends Component {
  render() {
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
