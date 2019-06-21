import React, { Component } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import Icon from '../components/icon'

/**
 * Pagination
 */
class Pagination extends Component {
  /**
   * Create pagination
   *
   * @param currentPage
   * @param totalPages
   * @param slug
   *
   * @returns list: array of components
   */
  createPagination(currentPage, totalPages, slug) {
    let list = [] // Empty array
    const maxPages = totalPages < 5 ? totalPages : 5 // Calculate maximum number of pages
    const pageRange = Math.floor(maxPages / 2) // Set range of page numbers

    for (let i = 1; i < maxPages + 1; i++) {
      let pageNumber

      if (
        currentPage <= maxPages &&
        currentPage <= pageRange &&
        currentPage <= totalPages - pageRange
      ) {
        pageNumber = i
      } else if (currentPage <= totalPages - pageRange) {
        pageNumber = currentPage - pageRange + i - 1
      } else if (
        currentPage >= pageRange &&
        currentPage >= totalPages - pageRange
      ) {
        pageNumber = totalPages - maxPages + i
      }

      list.push(
        <li className="pagination__page-number">
          <Link
            to={`/${slug}/${pageNumber}`}
            className={`pagination__page-link ${
              currentPage === pageNumber ? `active` : ``
            }`}
            key={pageNumber}
          >
            {pageNumber}
          </Link>
        </li>
      )
    }

    return list
  }

  /**
   * Render react component
   *
   * @returns react component
   */
  render() {
    /**
     * @var currentPage
     * @var totalPages
     * @var pageNumbers: boolean, if show page numbers
     * @var prevPage
     * @var nextPage
     * @var slug
     */
    const {
      currentPage,
      totalPages,
      pageNumbers,
      prevPage,
      nextPage,
      slug,
    } = this.props

    return (
      <div className="pagination">
        <div className="pagination__btn-container pagination__btn-container--prev">
          {(prevPage || currentPage > 1) && (
            <Link
              activeClassName="active"
              className="pagination__btn--prev pagination__btn btn"
              to={prevPage ? prevPage : `/${slug}/${currentPage - 1}`}
            >
              <Icon
                type="arrow-left"
                className="pagination__btn-image pagination__btn-image--prev"
              />
            </Link>
          )}
        </div>

        <ul className="pagination__pages">
          {pageNumbers && createPagination(currentPage, totalPages, slug)}
        </ul>

        <div className="pagination__btn-container pagination__btn-container--next">
          {(nextPage || currentPage < totalPages) && (
            <Link
              activeClassName="active"
              className="pagination__btn--next pagination__btn btn"
              to={nextPage ? nextPage : `/${slug}/${currentPage + 1}`}
            >
              <Icon
                type="arrow-right"
                className="pagination__btn-image pagination__btn-image--next"
              />
            </Link>
          )}
        </div>
      </div>
    )
  }
}

Pagination.propTypes = {
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
}

Pagination.defaultProps = {}

export default Pagination
