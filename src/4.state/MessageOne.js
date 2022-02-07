import React, { Component } from 'react';

export class MessageOne extends Component {
    constructor(){
        super()

        this.state = {
            name: 'Mahesh'
        }
    }
  render() {

    return <div>
        <h1>{this.props.message}{this.state.name}</h1>
    </div>;
  }
}

export default MessageOne;
