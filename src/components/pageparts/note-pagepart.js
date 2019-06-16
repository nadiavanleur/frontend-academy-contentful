import React, { Component } from 'react'
import PropTypes from 'prop-types'

class NotePagepart extends Component {
  render() {
    const { title, text } = this.props

    return (
      <div className={`note-pp pagepart`}>
        {/* {title !== 'undefined' && title !== '' && title && (
          <h3 className={`note-pp__title pagepart__title`}>{title}</h3>
        )} */}

        <div className={`note-pp__container pagepart__container`}>
          {text !== 'undefined' && text !== '' && text && (
            <p className={`note-pp__text pagepart__text`}>{text}</p>
          )}
        </div>
      </div>
    )
  }
}

NotePagepart.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
}

NotePagepart.defaultProps = {}

export default NotePagepart
