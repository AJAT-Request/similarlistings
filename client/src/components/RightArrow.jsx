import React from 'react';

const arrowStyle = {
  fontSize: '50px',
};

const RightArrow = ({ changeIndices }) => {
  return (
    <div onClick={changeIndices}>
      <i style={arrowStyle} className="fa fa-angle-right" aria-hidden="true" />
    </div>
  );
};

export default RightArrow;
