import React from 'react';

const RightArrow = ({ changeIndices }) => {
  return (
    <div className="nextArrow" onClick={changeIndices}>
      <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
    </div>
  );
};

export default RightArrow;
