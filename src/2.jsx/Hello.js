import React from 'react'

// const Hello = () => {
//     return (
//         <div id='divId' className='header'>
//             <h1 id='headId' className='hOne'>Hello Uma</h1>
//         </div>
//     )
// }

// Without JSX

const Hello = () => {
    return React.createElement('div', 
                                {id: 'divId', className: 'header'}, 
           React.createElement('h1', 
                                {id: 'headId', className: 'hOne'}, 
                                "Hello Uma")
    )
}

export default Hello