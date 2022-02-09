import React, {useEffect, useState} from 'react'

function ApiHook() {
  const [users, setusers] = useState([])

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => setusers(data))
  }, [])

  return (
    <div className="container">
      <h1>List of users fetched using Hooks</h1>
      <table className="table">
        <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Website</th>
            </tr>
        </thead>
        <tbody>
          {
            users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default ApiHook