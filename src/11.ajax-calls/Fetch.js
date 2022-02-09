import React, { Component } from 'react';

export class Fetch extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         todos: []
      }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(data => this.setState({todos: data}))
    }
    
  render() {
    return (
        <div>
            <h1>Todo List</h1>
            {
                this.state.todos.map(todo => (
                    <ul key={todo.id}>
                        <li>{todo.userId}</li>
                        <li>{todo.id}</li>
                        <li>{todo.title}</li>
                        <li>{todo.completed ? "true": "false"}</li>
                    </ul>
                ))
            }
        </div>
    )
  }
}

export default Fetch;
