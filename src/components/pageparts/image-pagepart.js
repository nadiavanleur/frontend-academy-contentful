import React, { Component } from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

/**
 * Image Pagepart
 */
class ImagePagepart extends Component {
  /**
   * Render react component
   *
   * @returns react component
   */
  render() {
    /**
     * @var image: image, image to be displayed
     * @var caption: object, used to describe image
     */
    const { image, caption } = this.props

    return (
      <div className={`image-pp pagepart`}>
        <div className={`image-pp__container pagepart__container`}>
          <div className="image-pp__main-element">
            {image && image.fluid && image.fluid.src !== null && (
              <Img
                sizes={image.sizes}
                alt={image.title ? image.title : 'image'}
                className="image-pp__image"
              />
            )}
            {image &&
              image.fluid.src === null &&
              image.file &&
              image.file !== null && (
                <img
                  src={image.file.url}
                  alt={image.title ? image.title : 'image'}
                  className="image-pp__image"
                />
              )}

            {caption && (
              <caption className={`image-pp__caption pagepart__caption`}>
                {caption.caption}
              </caption>
            )}
          </div>
        </div>
      </div>
    )
  }
}

ImagePagepart.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
  caption: PropTypes.string,
}

ImagePagepart.defaultProps = {}

export default ImagePagepart
