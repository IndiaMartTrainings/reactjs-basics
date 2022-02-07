import React, { Component } from 'react';

export class UserGreetingOne extends Component {
    constructor(){
        super()

        this.state = {
            isLoggedIn: true
        }
    }
  render() {
      // Using Element Variables
      let message =""
      if(this.state.isLoggedIn){
          message = <div><h1>Welcome Uma</h1></div>
      } else {
        message = <div><h1>Welcome Guest</h1></div>
      }
      return message
  }
}

export default UserGreetingOne;
