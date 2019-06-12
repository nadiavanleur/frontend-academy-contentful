import React, { Component } from 'react'
import PropTypes from 'prop-types'

import VideoPagepart from './video-pagepart'

class VideoFilePagepart extends Component {
  render() {
    const { file } = this.props

    return (
      <VideoPagepart {...this.props}>
        {file && (
          <video className="video-pp__video">
            <source src={file} type="video/mp4" />
            <source src={file} type="video/ogg" />
            "Your browser does not support HTML5 video."
          </video>
        )}
      </VideoPagepart>
    )
  }
}

VideoFilePagepart.propTypes = {
  title: PropTypes.string,
  file: PropTypes.string,
  caption: PropTypes.string,
}

export default VideoFilePagepart
