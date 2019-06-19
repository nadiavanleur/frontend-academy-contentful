import React, { Component } from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

class ImagePagepart extends Component {
  render() {
    const { image, caption } = this.props

    return (
      <div className={`image-pp pagepart`}>
        <div className={`image-pp__container pagepart__container`}>
          <div className="image-pp__main-element">
            {image && (
              <Img
                sizes={image.sizes}
                alt={image.title ? image.title : 'image'}
                className="image-pp__image"
              />
            )}

            {caption && (
              <caption className={`image-pp__caption pagepart__caption`}>
                {caption}
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
