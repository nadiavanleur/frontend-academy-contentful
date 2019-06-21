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

/**
 * Pageparts componenten
 */
class Pageparts extends Component {
  /**
   * Render react component
   *
   * @returns react component
   */
  render() {
    /**
     * @var content: object, get content from props
     * @var Components: object, all available pageparts (capital letter so react recognises it when used as component)
     */
    const { content } = this.props
    const Components = {
      ContentfulTutorialAfbeelding: ImagePagepart,
      ContentfulTutorialCode: CodePagepart,
      ContentfulTutorialKopteksts: HeadingPagepart,
      ContentfulTutorialTekst: TextPagepart,
      ContentfulTutorialVideoEmbed: VideoEmbedPagepart,
      ContentfulTutorialVideo: VideoFilePagepart,
      ContentfulTutorialNotitie: NotePagepart,
      ContentfulTutorialCodeVoorbeeld: CodeExamplePagepart,
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
