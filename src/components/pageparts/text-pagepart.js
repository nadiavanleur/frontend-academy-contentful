import React, { Component } from 'react'

class TextPagepart extends Component {
  render() {
    const { title, text } = this.props

    return (
      <div className={`text-pp pagepart`}>
        {/* {title !== 'undefined' && title !== '' && (
          <h3 className={`text-pp__title pagepart__title`}>{title}</h3>
        )} */}

        <div className={`text-pp__container pagepart__container`}>
          {text !== 'undefined' && text !== '' && (
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
