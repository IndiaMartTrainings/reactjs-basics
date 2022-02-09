import React, {useState} from 'react'

function HookWithArray() {
    const [items, setItems] = useState([])

    const addNumbers = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() *20) + 1
        }])
    }


  return (
    <div className="container">
        <br />
        <button className="btn btn-primary"
                onClick={addNumbers}
        >Add numbers</button>
        <ul>
            {
                items.map(item => (
                    <li key={item.id}>{item.value}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default HookWithArray