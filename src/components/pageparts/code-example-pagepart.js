import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * Code Example Pagepart
 */
class CodeExamplePagepart extends Component {
  /**
   * Render react component
   *
   * @returns react component
   */
  render() {
    /**
     * @var title: string, title for iframe
     * @var userId: string, used in embed link
     * @var embedCode: string, used in embed link
     * @var output: string array, used in embed link
     * @var caption: object, used to describe code example
     */
    const { title, userId, embedCode, output, caption } = this.props

    /**
     * Programming language array to string
     */
    let outputString = '' // Placeholder for array -> string
    output.forEach((element, key, output) => {
      outputString += `${element}${output.length - 1 - key > 0 ? `,` : ``}`
    })

    return (
      <div className={`codepen-pp pagepart`}>
        <div className={`codepen-pp__container pagepart__container`}>
          {embedCode && (
            <iframe
              src={`//jsfiddle.net/${userId}/${embedCode}/embedded/${outputString}/`}
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
