import React, {useState} from 'react'

function HookWithObject() {
    const [name, setName] = useState({firstName: '', lastName: ''})
    console.log(useState({firstName: '', lastName: ''}))
    //console.log({...name})
  return (
    <div className="container">
        <h1>Hook with Object</h1>
        <label>FirstName</label>
        <input type="text" 
               value={name.firstName}
               className="form-control w-50"
               onChange={(event) =>setName({...name, firstName: event.target.value})}
        /> <br />
        <label>LastName</label>
        <input type="text" 
               value={name.lastName}
               className="form-control w-50"
               onChange={(event) =>setName({...name, lastName: event.target.value})}
        />
        <br />
        <h2>Your Firstname is : {name.firstName}</h2> <br />
        <h2>Your Lastname is  : {name.lastName}</h2>
    </div>
  )
}

export default HookWithObject