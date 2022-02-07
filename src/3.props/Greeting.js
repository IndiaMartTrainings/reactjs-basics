import React from 'react';

function Greeting(props) {
  let {name, skill, age, children} = props
   console.log(typeof age)
   console.log(props)

  return (
      <div>
          <h1> {name} : {skill} : {age} {children} </h1>

      </div>
  )
}

export default Greeting;

