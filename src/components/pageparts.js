import { Link, graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React, { Component } from 'react'

import ImagePagepart from './pageparts/image-pagepart'
import CodePagepart from './pageparts/code-pagepart'
import HeadingPagepart from './pageparts/heading-pagepart'
import TextPagepart from './pageparts/text-pagepart'
import VideoEmbedPagepart from './pageparts/video-embed-pagepart'
import VideoFilePagepart from './pageparts/video-file-pagepart'
import NotePagepart from './pageparts/note-pagepart'
import CodeExamplePagepart from './pageparts/code-example-pagepart'

class Pageparts extends Component {
  render() {
    const { content } = this.props

    const Components = {
      ContentfulTutorialAfbeelding: ImagePagepart,
      ContentfulTutorialCode: CodePagepart,
      ContentfulTutorialKopteksts: HeadingPagepart,
      ContentfulTutorialTekst: TextPagepart,
      ContentfulTutorialVideoEmbed: VideoEmbedPagepart,
      ContentfulTutorialVideoFile: VideoFilePagepart,
      ContentfulTutorialNote: NotePagepart,
      ContentfulTutorialCodeExample: CodeExamplePagepart,
    }

    return (
      <div className="pageparts-container">
        {content &&
          !content.content &&
          content.map(pagepart => {
            const Pagepart = Components[pagepart.__typename]
            return <Pagepart {...pagepart} />
          })}
        {content && content.content && <div>{content.content}</div>}
      </div>
    )
  }
}

export default Pageparts
