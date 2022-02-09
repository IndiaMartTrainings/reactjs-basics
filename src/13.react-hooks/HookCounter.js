import React, {useState} from 'react'

function HookCounter() {
    //console.log(useState(0))
    const [count, setState] = useState(0)

  const  incrementCount = () => {
        setState(count + 1)
  }
  return (
    <div className="container">
        <h1>Count: {count} </h1>
        <button className="btn btn-warning"
                onClick={incrementCount}
        >Increment-Hook</button>
    </div>
  )
}

export default HookCounter