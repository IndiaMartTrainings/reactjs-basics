import React from 'react';

function FunctionClick() {

    function clickHandler(){
        console.log('Click the button - from Function')
    }
  return <div>
       <h1>Using Function Component</h1>
      <button className="btn btn-primary" onClick={clickHandler}>Click</button>
  </div>;
}

export default FunctionClick;
