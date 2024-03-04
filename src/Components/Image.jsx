import React from 'react';


function Image({CurrentImage}) {
  return (
    <div>
      <img src={CurrentImage} alt="" style={{height : '300px',width : '600px'}} className="rounded"/>
    </div>
  )
}

export default Image
