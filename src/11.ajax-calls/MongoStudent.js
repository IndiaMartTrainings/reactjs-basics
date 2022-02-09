import React, { Component } from 'react'

export class MongoStudent extends Component {
    constructor(){
        super()

        this.state = {
            students: [],
            _id: '',
            name: '',
            email: '',
            city: ''
        }
    }

    componentDidMount(){
        this.getStudents()
    }

    getStudents(){
        fetch("http://localhost:3001/api/students")
        .then(response => response.json())
        .then(data => this.setState({students: data}))
    }
    
    clearFields(){
        this.setState({
            name: '',
            email: '',
            city: ''
        })
    }

    addStudent(){
        const postRequest = {
            headers: {
                'Content-Type': 'application/json'
              },
              method: "POST",
              body: JSON.stringify({
                  name: this.state.name,
                  email: this.state.email,
                  city: this.state.city
              })
        }
        fetch("http://localhost:3001/api/students", postRequest)
        .then(response => response.json())
        .then(data => {
            this.getStudents()
            this.clearFields()
        })
    }

    // editStudent(id){
    //     fetch(`http://localhost:3001/api/students/${id}`)
    //     .then(response => response.json())
    //     .then(data => {
    //         const {_id, name, email, city} = data
    //         this.setState({_id, name, email, city})
    //     })
    // }

    editStudent(student){
        const {_id, name, email, city} = student
        this.setState({_id, name, email, city})
    }

    updateStudent(){
        const putRequest = {
            headers: {
                'Content-Type': 'application/json'
              },
              method: "PUT",
              body: JSON.stringify({
                  name: this.state.name,
                  email: this.state.email,
                  city: this.state.city
              })
        }
        fetch(`http://localhost:3001/api/students/${this.state._id}`, putRequest)
        .then(response => response.json())
        .then(data => {
            this.getStudents()
            this.clearFields()
        })
    }

    deleteStudent(id){
        const deleteRequest = {
            headers: {
                'Content-Type': 'application/json'
              },
              method: "DELETE"
        }
        fetch(`http://localhost:3001/api/students/${id}`, deleteRequest)
        .then(response => response.json())
        .then(data => {
            this.getStudents()
        })
    }

  render() {
    return (
      <div className="container">
          <h1>Student List - Fetched from MongoDB</h1>
          <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Actions</th>
                </tr>
                <tr>
                    <th>
                        <input type="text" 
                               value={this.state.name}
                               onChange={(event) => this.setState({name:event.target.value})}
                        />
                    </th>
                    <th>
                        <input type="text" 
                               value={this.state.email}
                               onChange={(event) => this.setState({email:event.target.value})}
                        />
                    </th>
                    <th>
                        <input type="text" 
                               value={this.state.city}
                               onChange={(event) => this.setState({city:event.target.value})}
                        />
                    </th>
                    <td>
                        <button className="btn btn-primary" onClick={() => this.addStudent()}
                        >Add</button> &nbsp;&nbsp;
                        <button className="btn btn-warning" onClick={() => this.updateStudent()}
                        >Update</button> &nbsp;&nbsp;
                    </td>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.students.map(student => (
                     <tr key={student._id}>
                                <td>{student.name}</td>
                                <td>{student.email}</td>
                                <td>{student.city}</td>
                                <td>
                                    <button className="btn btn-warning"
                                            onClick={() => this.editStudent(student)}
                                    >Edit</button> &nbsp;&nbsp;
                                    <button className="btn btn-danger"
                                            onClick={() => this.deleteStudent(student._id)}
                                    >Delete</button> &nbsp;&nbsp;
                                </td>
                            </tr>
                    ))
                }
            </tbody>
          </table>
      </div>
    )
  }
}

export default MongoStudent