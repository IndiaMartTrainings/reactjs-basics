import React, { Component } from 'react';

 class FormOne extends Component {
     constructor() {
       super()
     
       this.state = {
          username: '',
          comments: '',
          country :'',
          gender: '',
          isAdmin: false,
          formErrors: {}
       }

       //this.state.username ='Uma'

       this.initialState = this.state; 
     }

     getFormData(){
         if(this.handleFormValidation()){
            console.log(this.state.username)
            console.log(this.state.comments)
            console.log(this.state.country)
            console.log(this.state.gender)
            console.log(this.state.isAdmin)
         }

     }

     handleFormValidation(){
         const {username, comments, country, gender, isAdmin} = this.state

         let formErrors = {}
         let formIsValid = true

         console.log(username)
         if(!username){
             formIsValid = false 
             formErrors.userNameErr = "Username is required"
         }

         this.setState({
             formErrors : formErrors
         })
         return formIsValid
     }

     validateUser(event){
         if(event.target.value.length>0) {
            this.setState({username: event.target.value}, 
            () =>  {
                this.handleFormValidation() 
               // this.setState(this.initialState) 
            })
            
         } else {
            this.setState({username: event.target.value}, 
                () =>  {
                    this.handleFormValidation() 
                    // this.setState(this.initialState) 
                })
         }
     }

     
  render() {
      const countryList =[
          {id: 0, name: "select"},
          {id: 1, name: "Bharat"},
          {id: 2, name: "Japan"},
          {id: 3, name: "Australia"}
      ]
      const showError = {    
        borderColor: "#a94442 !important",
        color: "#a94442 !important",   
        marginBottom: "15px"  
      }

      const { userNameErr} = this.state.formErrors;
    return (
        <div className="container">
            <h1>User Form</h1>
            <div>
               <label>UserName</label>
               <input type="text" 
                      className="form-control w-50"
                      value={this.state.username}
                      onChange={(event) => this.validateUser(event)}
                      className={`form-control w-50 ${userNameErr ? showError : ''}`}
               />
                {userNameErr &&    
                    <div style={{ color: "red", paddingBottom: 10 }}>{userNameErr}</div>    
                } 
            </div>
            <br />
            <div>
                <label>Comments</label>
                <textarea className="form-control w-50"
                          value={this.state.comments}
                          onChange={(event) => this.setState({comments: event.target.value})}
                ></textarea>
            </div>
            <br />
            <div>
                <label>Country</label>
                <select className="form-select w-50"
                        value={this.state.value}
                        onChange={(event) =>  this.setState({country: event.target.value})}
                >
                {countryList.map(country => (
                    <option key={country.id} value={country.id}>{country.name}</option>
                ))}
                </select>
            </div>
            <br />
            <div>
               <label>Gender</label>&nbsp;&nbsp;&nbsp;
               <input type="radio"  
                      className="form-check-input" 
                      name="gender"
                      value={1}
                      onChange={(event) =>  this.setState({gender: event.target.value})}
                />&nbsp;&nbsp;Female &nbsp;&nbsp;&nbsp;
                <input type="radio"  
                      className="form-check-input" 
                      name="gender"
                      value={0}
                      onChange={(event) =>  this.setState({gender: event.target.value})}
                />&nbsp;&nbsp;Male &nbsp;&nbsp;&nbsp;
            </div>  
            <br />
            <div>
               <label>IsAdmin</label> &nbsp;&nbsp;&nbsp;
               <input type="checkbox" 
                      className="form-check-input"
                      value={this.state.isAdmin}
                      onChange={() => this.setState({isAdmin: !this.state.isAdmin})}
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

export default FormOne;
