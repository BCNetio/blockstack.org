import React, { Component } from 'react'

import './loader.scss'

class DotLoader extends Component {
  render() {
    return (
      <span
        className={
          this.props.className
            ? 'dot-loader ' + this.props.className
            : 'dot-loader'
        }
      >
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
      </span>
    )
  }
}

export default DotLoader
