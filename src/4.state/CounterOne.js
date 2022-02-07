import React, { Component } from 'react';

export class CounterOne extends Component {
    constructor(){
        super()

        this.state = {
            count: 0
        }
    }

    addCount(){
        // this.state.count = this.state.count + 1
        // console.log(this.state.count)
        // this.setState({
        //     count: this.state.count + 1
        // }, function(){
        //     console.log(this.state.count)
        // })
        this.setState({count: this.state.count + 1})
    }
  render() {
    return <div>
        <h1>Count : {this.state.count}</h1>
        <button className='btn btn-primary'
                onClick={() => this.addCount()}
        >Increment</button>
    </div>;
  }
}

export default CounterOne;

