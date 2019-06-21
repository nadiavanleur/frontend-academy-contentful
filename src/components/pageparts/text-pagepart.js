import React, { Component } from 'react'

/**
 * Text Pagepart
 */
class TextPagepart extends Component {
  /**
   * Render react component
   *
   * @returns react component
   */
  render() {
    /**
     * @var text: object, text to be displayed
     */
    const { text } = this.props

    return (
      <div className={`text-pp pagepart`}>
        <div className={`text-pp__container pagepart__container`}>
          {text && (
            <p
              className={`text-pp__text pagepart__text`}
              dangerouslySetInnerHTML={{
                __html: text.childMarkdownRemark.html,
              }}
            />
          )}
        </div>
      </div>
    )
  }
}

export default TextPagepart
