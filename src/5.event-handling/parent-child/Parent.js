import React, { Component } from 'react';
import Child from './Child';

 class Parent extends Component {
     constructor(){
         super()
        this.state ={
            name: 'Parent'
        }

       // this.callParent = this.callParent.bind(this)
     }

    //  callParent(childName){
    //      console.log(this)
    //     alert(`Calling ${this.state.name} from ${childName}`)
    //  }

     callParent = (childName) =>{
        console.log(this)
       alert(`Calling ${this.state.name} from ${childName}`)
    }
  render() {
    return (
        <div>
            <h1>Parent to Child</h1>
            <Child callParent={this.callParent} />
        </div>
    )
  }
}

export default Parent;
