import React, { Component } from 'react';

export class FakeUserList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         users: []
      }
    }

    componentDidMount(){
        fetch("http://localhost:3001/user-list")
        .then(response => response.json())
        .then(data => this.setState({users: data}))
    }
    
  render() {
    return (
        <div>
            <h1>Todo List</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>UserId</th>
                        <th>Id</th>
                        <th>title</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       this.state.users.map(todo => (
                           <tr key={todo.id}>
                               <td>{todo.name}</td>
                               <td>{todo.email}</td>
                               <td>{todo.phone}</td>
                               <td>{todo.website}</td>
                           </tr>
                       )) 
                    }
                </tbody>
            </table>
        </div>
    )
  }
}

export default FakeUserList;
