import React from 'react';


function Image({CurrentImage}) {
  return (
    <div>
      <img src={CurrentImage} alt="" style={{height : '400px',width : '600px'}}/>
    </div>
  )
}

export default Image
