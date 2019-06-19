import React, { Component } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'

class CodePagepart extends Component {
  render() {
    const { code, caption, text, language } = this.props

    return (
      <div className={`code-pp pagepart`}>
        <div className={`code-pp__container pagepart__container`}>
          <div className="code-pp__main-element pagepart__main-element">
            {code.code && (
              <div className="code-pp__code">
                <SyntaxHighlighter
                  language={language}
                  style={docco}
                  showLineNumbers={true}
                >
                  {code.code}
                </SyntaxHighlighter>
              </div>
            )}
            {caption && (
              <caption className={`code-pp__caption pagepart__caption`}>
                {caption}
              </caption>
            )}
          </div>
          {text && <p className={`code-pp__text pagepart__text`}>{text}</p>}
        </div>
      </div>
    )
  }
}

export default CodePagepart
