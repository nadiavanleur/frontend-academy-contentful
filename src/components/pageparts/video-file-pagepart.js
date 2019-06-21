import React, { Component } from 'react'
import PropTypes from 'prop-types'

import VideoPagepart from './video-pagepart' // Uses VideoPagepart for general video pagepart elements

/**
 * Video File Pagepart
 */
class VideoFilePagepart extends Component {
  /**
   * Render react component
   *
   * @returns react component
   */
  render() {
    /**
     * @var video: object
     * @var file: video, taken from video var, video to be displayed
     */
    const { video } = this.props
    const { url: file } = video.file

    return (
      <VideoPagepart {...this.props}>
        {file && (
          <video className="video-pp__video" controls>
            <source src={file} type="video/mp4" />
            <source src={file} type="video/ogg" />
            "Your browser does not support HTML5 video."
            <p>
              Je browser ondersteunt HTML5 video niet. Gebruik in plaat hiervan{' '}
              <a href="myVideo.mp4">de link naar de video</a>.
            </p>
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
