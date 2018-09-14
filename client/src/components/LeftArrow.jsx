import React from 'react';

const arrowStyle = {
  fontSize: '50px',
};

const LeftArrow = ({ changeIndices }) => {
  return (
    <div className="backArrow" onClick={changeIndices}>
      <i style={arrowStyle} className="fa fa-angle-left" aria-hidden="true" />
    </div>
  );
};

export default LeftArrow;
