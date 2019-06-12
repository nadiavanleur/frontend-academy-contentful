import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { instanceOf } from 'prop-types'
import { withCookies, Cookies } from 'react-cookie'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Progress from '../components/progress'
import Pagination from '../components/pagination'
import Pageparts from '../components/pageparts'

class TutorialTemplate extends React.Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      progress: 0,
      id: props.data.tutorial.id,
      tutorialNumber: props.pageContext.tutorialNumber,
      postsPerPage: props.pageContext.postsPerPage,
    }
    console.log(props.data.tutorial.id, this.state.id)
  }

  componentDidMount() {
    this.setState({
      progress: this.getCookie(`tutorial_progress-${this.state.id}`),
    })

    this.setCookie(`last-visited-tutorial`, this.state.id)

    const tutorialPage = Math.ceil(
      this.state.tutorialNumber / this.state.postsPerPage
    )
    this.setCookie(`tutorial-page`, tutorialPage)

    this.scrollDown(this.getCookie(`tutorial_progress-${this.state.id}`))

    this.addProgressTracker()
  }

  componentWillUnmount() {
    this.setCookie(`tutorial_progress-${this.state.id}`, this.state.progress)

    this.removeProgressTracker()
  }

  addProgressTracker() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.setProgress)
    }
  }

  removeProgressTracker() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', this.setProgress)
    }
  }

  setProgress = () => {
    const value = this.getCurrentProgress()

    if (value > this.state.progress) {
      this.setState({ progress: value })
    }
  }

  getCurrentProgress() {
    const windowHeight = window.innerHeight
    const documentHeight = document.body.offsetHeight
    const maxHeight = documentHeight - windowHeight
    const scrollPostition =
      window.pageYOffset !== undefined ? window.pageYOffset : window.scrollTop
    const percentage = Math.round((100 * scrollPostition) / maxHeight)

    return percentage
  }

  setCookie(key, value) {
    if (this.getCookie(`cookies-accepted`)) {
      const { cookies } = this.props

      const expires = new Date()
      expires.setTime(expires.getTime() + 1000 * 60 * 60 * 24 * 365 * 20) // Expire 20 years from now

      cookies.set(key, value, { path: '/', expires: expires })
    }
  }

  getCookie(key) {
    const { cookies } = this.props

    return cookies.get(`cookies-accepted`) === 'true'
      ? cookies.get(key) || 0
      : 0
  }

  scrollDown(percentage) {
    setTimeout(function() {
      const windowHeight = window.innerHeight
      const documentHeight = document.body.offsetHeight
      const maxHeight = documentHeight - windowHeight

      const scrollPosition = (percentage * maxHeight) / 100

      window.scrollTo({
        top: scrollPosition,
        left: 0,
        behavior: 'smooth',
      })
    }, 50)
  }

  render() {
    const { data } = this.props
    const { siteUrl } = data.site.siteMetadata
    const {
      slug,
      title,
      image,
      introduction,
      know,
      learn,
      content,
      next,
      previous,
    } = data.tutorial

    return (
      <Layout page="tutorial">
        <Helmet>
          <link rel="canonical" href={`${siteUrl}${slug}`} />
        </Helmet>
        <SEO title={title} keywords={[`gatsby`, `application`, `react`]} />

        <section className="tutorial__intro wrapper-inner">
          <h2 className="page__title tutorial__title">{title}.</h2>
          <Progress
            elementClass="tutorial__progress"
            progress={this.state.progress}
          />
          <p className="tutorial__description">
            {introduction.childMarkdownRemark.excerpt}
          </p>
          {(learn || know) && (
            <div className="tutorial__list-wrapper">
              <div className="tutorial__list-wrapper-content">
                {learn && (
                  <div className="tutorial__intro-list-container tutorial__intro-list-container--learn">
                    <div className="tutorial__intro--learn-inner">
                      <span />
                      <span />
                      <span />
                    </div>
                    <h3 className="tutorial__intro-list-title">
                      Dit ga je leren
                    </h3>
                    <div
                      className="tutorial__intro-list"
                      dangerouslySetInnerHTML={{
                        __html: learn.childMarkdownRemark.html,
                      }}
                    />
                  </div>
                )}

                {know && (
                  <div className="tutorial__intro-list-container tutorial__intro-list-container--know">
                    <h3 className="tutorial__intro-list-title">
                      Dit moet je weten
                    </h3>
                    <div
                      className="tutorial__intro-list"
                      dangerouslySetInnerHTML={{
                        __html: know.childMarkdownRemark.html,
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          )}
        </section>

        <div className="wrapper-inner">
          <Pageparts content={content} />

          {(next || previous) && (
            <Pagination
              nextPage={next ? next.slug : null}
              prevPage={previous ? previous.slug : null}
            />
          )}
        </div>
      </Layout>
    )
  }
}

export default withCookies(TutorialTemplate)

export const pageQuery = graphql`
  query TutorialBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    tutorial: contentfulTutorial(slug: { eq: $slug }) {
      title
      id
      image {
        sizes {
          ...GatsbyContentfulSizes
        }
        fluid {
          ...GatsbyContentfulFluid
        }
        file {
          contentType
          fileName
          url
        }
      }
      introduction {
        childMarkdownRemark {
          excerpt(format: PLAIN)
        }
      }
      slug
      content {
        ... on ContentfulTutorialAfbeelding {
          id
          caption
          title
          image {
            sizes {
              ...GatsbyContentfulSizes
            }
            fluid {
              ...GatsbyContentfulFluid
            }
            file {
              contentType
              fileName
              url
            }
          }
        }
        ... on ContentfulTutorialCode {
          id
          code {
            code
          }
          title
          language
        }
        ... on ContentfulTutorialKopteksts {
          id
          heading
          title
        }
        ... on ContentfulTutorialTekst {
          id
          title
          text {
            childMarkdownRemark {
              html
            }
          }
        }
      }
      next {
        slug
      }
      previous {
        slug
      }
      learn {
        childMarkdownRemark {
          html
        }
      }
      know {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
