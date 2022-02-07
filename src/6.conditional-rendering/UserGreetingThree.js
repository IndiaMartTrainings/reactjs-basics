import React, { Component } from 'react';

export class UserGreetingThree extends Component {
    constructor(){
        super()

        this.state = {
            isLoggedIn: false
        }
    }
  render() {
      // Using Element Variables
     return(
         this.state.isLoggedIn && <div><h1>Welcome Scott</h1></div> 
     )
  }
}

export default UserGreetingThree;
