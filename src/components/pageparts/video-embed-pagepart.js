import React, { Component } from 'react'
import PropTypes from 'prop-types'

import VideoPagepart from './video-pagepart' // Uses VideoPagepart for general video pagepart elements

/**
 * Video Embed Pagepart
 */
class VideoEmbedPagepart extends Component {
  /**
   * Render react component
   *
   * @returns react component
   */
  render() {
    /**
     * @var title: string, iframe title
     * @var embedCode: string, used in embed link
     * @var platform: string, used to determine embed link
     */
    const { title, embedCode, platform } = this.props

    const platforms = {
      youtube: `https://www.youtube.com/embed/${embedCode}`,
      vimeo: `https://player.vimeo.com/video/${embedCode}`,
      other: `${embedCode}`,
    } // Object of possible embed links

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
        />
      </VideoPagepart>
    )
  }
}

VideoEmbedPagepart.propTypes = {
  title: PropTypes.string,
  embedCode: PropTypes.string,
  platform: PropTypes.string,
  caption: PropTypes.string,
}

VideoEmbedPagepart.defaultProps = {
  platform: 'youtube',
}

export default VideoEmbedPagepart
