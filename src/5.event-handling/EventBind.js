import React, { Component } from 'react';

 class EventBind extends Component {
     constructor() {
         super()

         this.state = {
             message: 'Hello'
         }
         // 3rd Approach
        // this.changeMessage = this.changeMessage.bind(this)
     }

    //  changeMessage(){
    //      console.log(this)
    //     this.setState({
    //         message : 'Thank You'
    //     }) 
    //  }
    // 4th Approach
    changeMessage = () =>{
        console.log(this)
       this.setState({
           message : 'Thank You'
       }) 
    }
  render() {
    return (
        <div>
            <h1>{this.state.message}</h1>
            {/* <button onClick={this.changeMessage}
                    className="btn btn-primary"
            >Change Message</button> */}
           
            {/* 1st Approach */}
            {/* <button onClick={this.changeMessage.bind(this)}
                    className="btn btn-primary"
            >Change Message</button> */}
            
            {/* 2nd Approach */}
            {/* <button onClick={() => this.changeMessage()}
                    className="btn btn-primary"
            >Change Message</button> */}

            {/* 3rd Approach */}
            {/* <button onClick={this.changeMessage}
                    className="btn btn-primary"
            >Change Message</button> */}

            {/* 4th Approach */}
            <button onClick={this.changeMessage}
                    className="btn btn-primary"
            >Change Message</button>
        </div>
    )
  }
}

export default EventBind;
