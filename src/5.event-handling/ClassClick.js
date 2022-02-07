import React, { Component } from 'react';

 class ClassClick extends Component {

    clickHandler(){
        console.log('Click the button - from Class')
    }

  render() {
    return <div>
        <h1>Using Class Component</h1>
        <button className="btn btn-primary" onClick={this.clickHandler}>Click</button>

    </div>;
  }
}

export default ClassClick;
