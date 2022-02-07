import React, { Component } from 'react';

 class Person extends Component {
     constructor(){
         super()

         this.state = {
             name: 'Scott',
             city: 'Hyderbad',
             isAdmin: false
         }
     }
  render() {
      const {name, city, isAdmin} = this.state
    return <div>
        <h1>Name : {name} </h1>
        <h1>City : {city} </h1>
        <h1>isAdmin : {isAdmin? "True": "False"} </h1>
    </div>;
  }
}

export default Person;
