import React, { Component } from 'react'
import UpdateCounter from './UpdateCounter'

export class HoverCounter extends Component {
  render() {
    const {count, incrementCount} = this.props
    return (
    <div className="container">
        <h2 onMouseOver={incrementCount}>Hovered {count} Times</h2> 
     </div>
    )
  }
}

export default UpdateCounter(HoverCounter)