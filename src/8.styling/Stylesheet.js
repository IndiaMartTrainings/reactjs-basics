import React from 'react';
import "./styling.css"

function Stylesheet(props) {
  let className = props.primary ? "primary enlarge-text" : ''

  return (
      <div>
          <h1 className={className} >Using Stylesheet</h1>
      </div>
  )
}

export default Stylesheet;
