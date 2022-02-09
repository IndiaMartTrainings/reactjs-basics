import React from 'react';

const heading = { color: 'blue',fontSize: "72px"}

function Inline() {
  return <div>
      <h1 style={heading}>This is using inline styling</h1>
      <h2 style={{ color: 'blue',fontSize: "72px"}}>This is another way</h2>
  </div>;
}

export default Inline;
