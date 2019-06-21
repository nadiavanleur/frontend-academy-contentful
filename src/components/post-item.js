import React, { Component } from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

import Progress from './progress'

/**
 * Post Item
 */
class PostItem extends Component {
  /**
   * Render react component
   *
   * @returns react component
   */
  render() {
    /**
     * @var slug
     * @var tutorial
     * @var progress
     * @var elementClass
     * @var title
     * @var introduction
     * @var image
     */
    const { slug, tutorial, progress, elementClass } = this.props
    const { title, introduction, image } = tutorial

    return (
      <article className="post-item__container">
        <div className={`post-item ${elementClass}`}>
          {image && image.sizes !== null && (
            <Img
              className="post-item__image"
              sizes={image.sizes}
              alt={image.title}
            />
          )}

          <div className="post-item__content">
            <h3 className="post-item__title">
              <Link
                to={slug}
                activeClassName="active"
                className="post-item__link"
              >
                {title}
                {title.substr(title.length - 1) === '?' ||
                title.substr(title.length - 1) === '!' ||
                title.substr(title.length - 1) === '.'
                  ? ''
                  : '.'}
              </Link>
            </h3>

            <p className="post-item__description">
              {introduction.childMarkdownRemark.excerpt}
            </p>
          </div>
        </div>
        <Progress elementClass="post-item__progress" progress={progress} />
      </article>
    )
  }
}

PostItem.propTypes = {
  title: PropTypes.string,
  image: PropTypes.object,
  id: PropTypes.string,
  introduction: PropTypes.string,
  active: PropTypes.bool,
}

PostItem.defaultProps = {}

export default PostItem
