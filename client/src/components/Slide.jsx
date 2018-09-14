import React from 'react';

const style = {
  height: '220px',
  width: '340px',
  paddingLeft: '10px',
};

const Slide = ({ names, photoUrls, basicInfo, prices, index }) => (
  <div>
    <div>
      <img style={style} src={photoUrls[index]} alt="" />
    </div>
    <div>
      <span>{names[index]}</span>
    </div>
    <div>
      <span>{basicInfo[index]}</span>
    </div>
    <div>
      <span>${prices[index]} per night</span>
    </div>
  </div>
);

export default Slide;
