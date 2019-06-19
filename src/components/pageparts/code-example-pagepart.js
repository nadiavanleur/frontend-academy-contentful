import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CodeExamplePagepart extends Component {
  render() {
    const { title, userid, embedcode, output, caption } = this.props

    return (
      <div className={`codepen-pp pagepart`}>
        <div className={`codepen-pp__container pagepart__container`}>
          {embedcode && (
            <iframe
              src={`//jsfiddle.net/${userid}/${embedcode}/embedded/${output}/`}
              title={title ? title : embedcode}
              className="codepen-pp__iframe"
            />
          )}

          {caption && (
            <caption className={`codepen-pp__caption pagepart__caption`}>
              {caption}
            </caption>
          )}
        </div>
      </div>
    )
  }
}

CodeExamplePagepart.propTypes = {
  title: PropTypes.string,
  userid: PropTypes.string,
  embedcode: PropTypes.string,
  output: PropTypes.string,
  caption: PropTypes.string,
}

CodeExamplePagepart.defaultProps = {
  userid: 'nonexistent',
}

export default CodeExamplePagepart
