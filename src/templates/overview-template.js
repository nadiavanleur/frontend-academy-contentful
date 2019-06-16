import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { instanceOf } from 'prop-types'
import { withCookies, Cookies } from 'react-cookie'
import Layout from '../components/layout'
import SEO from '../components/seo'
import PostItem from '../components/post-item'
import Pagination from '../components/pagination'

class OverviewTemplate extends React.Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    this.renderPosts()
  }

  componentWillUnmount() {}

  renderPosts() {
    const { edges: tutorials } = this.props.data.tutorials

    tutorials.map(({ node: tutorial }) => {
      const id = tutorial.id
      const progress = this.getCookie(`tutorial_progress-${id}`)

      this.setProgress(id, progress)
      return true
    })
  }

  getCookie(key) {
    const { cookies } = this.props

    return cookies.get(`cookies-accepted`) === 'true'
      ? cookies.get(key) || 0
      : 0
  }

  setProgress(id, progress) {
    this.setState({ [id]: progress })
  }

  ifLastVisited(id) {
    const lastVisited = this.getCookie(`last-visited-tutorial`)

    return lastVisited === id
  }

  render() {
    const { data, pageContext } = this.props

    const { title } = data.default

    const { edges: tutorials } = data.tutorials

    const { currentPage, totalPages, slug, titleTag } = pageContext

    const { siteUrl } = data.site.siteMetadata

    const pageHeader = (
      <h2 className="page__title">
        {`${title}${titleTag ? ` - ${titleTag}` : ''}.`}
      </h2>
    )

    return (
      <Layout pageHeader={pageHeader} page="overview">
        <Helmet>
          <link rel="canonical" href={`${siteUrl}/tutorials`} />
        </Helmet>
        <SEO
          title={`${title} ${titleTag ? `- ${titleTag}` : ''}`}
          keywords={[`gatsby`, `application`, `react`]}
        />

        <div className="wrapper-inner overview">
          <section className="posts-container">
            {tutorials.map(({ node: tutorial }) => (
              <PostItem
                tutorial={tutorial}
                slug={tutorial.slug}
                progress={this.state[tutorial.id]}
                elementClass={
                  this.ifLastVisited(tutorial.id) ? 'in-progress' : ''
                }
                key={tutorial.id}
              />
            ))}
          </section>

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              pageNumbers={true}
              slug={slug}
            />
          )}
        </div>
      </Layout>
    )
  }
}

export default withCookies(OverviewTemplate)
