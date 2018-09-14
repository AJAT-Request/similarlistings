import React from 'react';

const style = {
  height: '220px',
  width: '340px',
  paddingLeft: '10px',
};

const Slide = ({ names, photoUrls, index }) => (
  <div>
    <div>
      <img style={style} src={photoUrls[index]} alt="" />
    </div>
    <div>
      <span>{names[index]}</span>
    </div>
  </div>
);

export default Slide;
