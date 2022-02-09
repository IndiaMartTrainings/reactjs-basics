import React, { Component } from 'react';
import LifeCycleB from './LifeCycleB';

export class LifeCycleA extends Component {
    constructor(){
        super()
        this.state = {
            
        }
        console.log('constructor of A is called')
    }

    static getDerivedStateFromProps(props, state){

        console.log('getDerivedStateFromProps of A is called')
        return null
    }

    componentDidMount(){
        console.log('componentDidMount of A is called')
    }

    render(){
        console.log('render of A is called')
        return (
            <div>
                <h1>Life Cycle events</h1>
                <LifeCycleB />
            </div>
        )
    }
}

export default LifeCycleA;
