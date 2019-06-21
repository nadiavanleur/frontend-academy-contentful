import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * Video Pagepart
 */
class VideoPagepart extends Component {
  /**
   * Render react component
   *
   * @returns react component
   */
  render() {
    /**
     * @var caption: object, used to describe video
     * @var children: object/react component, (video) component shown in pagepart
     */
    const { caption, children } = this.props

    return (
      <div className={`video-pp pagepart`}>
        <div className={`video-pp__container pagepart__container`}>
          <div className="video-pp__main-element">
            {children && (
              <div className="video-pp__video-wrapper">
                <div className="video-pp__iframe-wrapper">{children}</div>
              </div>
            )}

            {caption && (
              <caption className={`video-pp__caption pagepart__caption`}>
                {caption.caption}
              </caption>
            )}
          </div>
        </div>
      </div>
    )
  }
}

VideoPagepart.propTypes = {
  title: PropTypes.string,
  caption: PropTypes.string,
}

export default VideoPagepart
