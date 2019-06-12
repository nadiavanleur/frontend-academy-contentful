import React, { Component } from 'react'
import PropTypes from 'prop-types'

import VideoPagepart from './video-pagepart'

class VideoEmbedPagepart extends Component {
  render() {
    const { title, embedcode, platform } = this.props
    const platforms = {
      youtube: `https://www.youtube.com/embed/${embedcode}`,
      vimeo: `https://player.vimeo.com/video/${embedcode}`,
      other: `${embedcode}`,
      file: `ignore`,
    }

    return (
      <VideoPagepart {...this.props}>
        <iframe
          src={platforms[platform]}
          width="560"
          height="315"
          frameborder="0"
          allowfullscreen
          title={title ? title : 'video'}
          className="video-pp__iframe"
        >
          "Your browser does not support HTML5 video."
        </iframe>
      </VideoPagepart>
    )
  }
}

VideoEmbedPagepart.propTypes = {
  title: PropTypes.string,
  embedcode: PropTypes.string,
  platform: PropTypes.string,
  caption: PropTypes.string,
}

VideoEmbedPagepart.defaultProps = {
  platform: 'youtube',
}

export default VideoEmbedPagepart
