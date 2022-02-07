import React, { Component } from 'react';

 class EventBindOne extends Component {
     constructor() {
         super()

         this.state = {
             message: 'Hello'
         }

     }

     changeMessageUsingBind(message){
         console.log(this)
        this.setState({
            message : message
        }) 
     }

     changeMessageUsingFatArrow(message){
        console.log(this)
       this.setState({
           message : message
       }) 
    }

  render() {
    return (
        <div>
            <h1>{this.state.message}</h1>
           
            {/* 1st Approach */}
            <button onClick={this.changeMessageUsingBind.bind(this, "You have used Bind")}
                    className="btn btn-primary"
            >Change Message - Bind</button>
            <br /><br />
            {/* 2nd Approach */}
            <button onClick={() => this.changeMessageUsingFatArrow("You have used fat Arrow")}
                    className="btn btn-primary"
            >Change Message - Fat Arrow</button>


        </div>
    )
  }
}

export default EventBindOne;
