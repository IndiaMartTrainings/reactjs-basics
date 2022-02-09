import React, { Component } from 'react'
import UpdateCounter from './UpdateCounter'

export class InputCounter extends Component {
  render() {
    const {count, incrementCount} = this.props
    return (
      <div className="container">
        <input type="text" 
               className='form-control w-50'
               onChange={incrementCount}
        />
        <label>InputBox Clicked {count} Times</label>
      </div>
    )
  }
}

export default UpdateCounter(InputCounter)