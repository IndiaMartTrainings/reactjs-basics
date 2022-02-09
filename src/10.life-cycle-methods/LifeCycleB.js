import React, { Component } from 'react';

export class LifeCycleB extends Component {
    constructor(){
        super()
        this.state = {
            
        }
        console.log('constructor of B is called')
    }

    static getDerivedStateFromProps(props, state){

        console.log('getDerivedStateFromProps of B is called')
        return null
    }

    componentDidMount(){
        console.log('componentDidMount of B is called')
    }

    render() {
        console.log('render of B is called')
        return <div>
            <h1></h1>
        </div>;
    }
}

export default LifeCycleB;
