import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CodeExamplePagepart extends Component {
  render() {
    const { title, userId, embedCode, output, caption } = this.props

    let outputString = ''
    output.forEach((element, key, output) => {
      outputString += `${element}${output.length - 1 - key > 0 ? `,` : ``}`
    })

    return (
      <div className={`codepen-pp pagepart`}>
        <div className={`codepen-pp__container pagepart__container`}>
          {embedCode && (
            <iframe
              src={`http://jsfiddle.net/${userId}/${embedCode}/embedded/${outputString}/`}
              title={title ? title : embedCode}
              className="codepen-pp__iframe"
            />
          )}

          {caption && (
            <caption className={`codepen-pp__caption pagepart__caption`}>
              {caption.caption}
            </caption>
          )}
        </div>
      </div>
    )
  }
}

CodeExamplePagepart.propTypes = {
  title: PropTypes.string,
  userId: PropTypes.string,
  embedCode: PropTypes.string,
  output: PropTypes.string,
  caption: PropTypes.string,
}

CodeExamplePagepart.defaultProps = {
  userId: 'nonexistent',
}

export default CodeExamplePagepart
