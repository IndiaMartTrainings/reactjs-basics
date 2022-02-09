import React, { Component } from 'react'
import UpdateCounter from './UpdateCounter'

export class ClickCounter extends Component {
  render() {
      const {count, incrementCount} = this.props
    return (
      <div className="container">
          <h1>Counter: {count} </h1>
          <button className="btn btn-primary"
                  onClick={incrementCount}
          >Increment</button>
      </div>
    )
  }
}

export default UpdateCounter(ClickCounter)