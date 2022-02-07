import React from 'react';

function Child(props) {
  return <div>
      <button className='btn btn-primary'
              onClick={() =>props.callParent('Child')}
      >Call Parent</button>
  </div>;
}

export default Child;
