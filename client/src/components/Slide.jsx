import React from 'react';

const style = {
  height: '100px',
  width: '100px'
}


const Slide = ({ names, photoUrls, index }) => (
  <div>
    <img style={style} src={photoUrls[index]}></img>
    <span>{names[index]}</span> 
  </div>
)

export default Slide;
