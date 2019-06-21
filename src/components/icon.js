import React, { Component } from 'react'

const spriteLocation = '/svg-sprite.svg' // Spritesheet location

/**
 * Icon component
 */
class Icon extends Component {
  /**
   * Render react component
   *
   * @returns react component
   */
  render() {
    /**
     * @var type: what icon to use
     * @var className: class for element
     */
    const { type, className } = this.props

    return (
      <svg className={`icon ${className}`} viewBox="0 0 16 16">
        <use xlinkHref={`${spriteLocation}#${type}`} />
      </svg>
    )
  }
}

export default Icon
