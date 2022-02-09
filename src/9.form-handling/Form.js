import React, { Component } from 'react';

 class Form extends Component {
     constructor() {
       super()
     
       this.state = {
          username: '',
          comments: '',
          country :'',
          gender: '',
          isAdmin: false
       }
     }

     getFormData(){
        console.log(this.state.username)
        console.log(this.state.comments)
        console.log(this.state.country)
        console.log(this.state.gender)
        console.log(this.state.isAdmin)
     }

     getUserName(event){
        this.setState({
            username: event.target.value
        })
     }

     getComments(event){
        this.setState({
            comments: event.target.value
        })
     }

     getCountry(event){
        this.setState({
            country: event.target.value
        })
     }

     getGender(event){
        this.setState({
            gender: event.target.value
        })
     }

     checkIfAdmin(){
         this.setState({
             isAdmin: !this.state.isAdmin
         })
     }
     
  render() {
      const countryList =[
          {id: 0, name: "select"},
          {id: 1, name: "Bharat"},
          {id: 2, name: "Japan"},
          {id: 3, name: "Australia"}
      ]
    return (
        <div className="container">
            <h1>User Form</h1>
            <div>
               <label>UserName</label>
               <input type="text" 
                      className="form-control w-50"
                      value={this.state.username}
                      onChange={(event) => this.getUserName(event)}
               />
            </div>
            <br />
            <div>
                <label>Comments</label>
                <textarea className="form-control w-50"
                          value={this.state.comments}
                          onChange={(event) => this.getComments(event)}
                ></textarea>
            </div>
            <br />
            <div>
                <label>Country</label>
                <select className="form-select w-50"
                        value={this.state.value}
                        onChange={(event) => this.getCountry(event)}
                >
                    {countryList.map(country => (
                        <option key={country.id} value={country.id}>{country.name}</option>
                    ))}
                    {/* <option value="">select</option>
                    <option value="1">Bharat</option>
                    <option value="2">Japan</option>
                    <option value="3">Australia</option> */}
                </select>
            </div>
            <br />
            <div>
               <label>Gender</label>&nbsp;&nbsp;&nbsp;
               <input type="radio"  
                      className="form-check-input" 
                      name="gender"
                      value={1}
                      onChange={(event) => this.getGender(event)}
                />&nbsp;&nbsp;Female &nbsp;&nbsp;&nbsp;
                <input type="radio"  
                      className="form-check-input" 
                      name="gender"
                      value={0}
                      onChange={(event) => this.getGender(event)}
                />&nbsp;&nbsp;Male &nbsp;&nbsp;&nbsp;
            </div>  
            <br />
            <div>
               <label>IsAdmin</label> &nbsp;&nbsp;&nbsp;
               <input type="checkbox" 
                      className="form-check-input"
                      value={this.state.isAdmin}
                      onChange={() => this.checkIfAdmin()}
               />
            </div>
            <br />
            <div>
                <button className="btn btn-primary"
                        onClick={this.getFormData.bind(this)}
                >Submit</button>
            </div>
        </div>
    )
  }
}

export default Form;
