import React, { Component } from 'react';
import MessageOne from './MessageOne';

class Message extends Component {

    details = {
        name: 'Uma'
    }
    constructor(){
        super()

        this.state = {
            name: 'Uma',
            message: 'Welcome',
            data: []
        }

       let obj 
    }
    subscribe(){
        this.setState({        
            name: 'Mr.Scott Desatnick',
            message: 'Hey'
        })
       // this.details.name ="Mahesh"
        // console.log(this.details.name)
    }
  render() {
    return <div>
        <h1>{this.state.name} {this.state.message}</h1>
        <button className='btn btn-primary'
                onClick={() => this.subscribe()}
        >Subscribe</button>
        {/* <MessageOne message={this.state.message}/> */}
    </div>;
  }
}

export default Message;
