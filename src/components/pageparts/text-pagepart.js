import React, { Component } from 'react'

class TextPagepart extends Component {
  render() {
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
