import React from 'react';

const LeftArrow = ({ changeIndices }) => {
  return (
  	<div className="backArrow" onClick={changeIndices}>
      <i className="fas fa-arrow-left" aria-hidden="true"></i>
  	</div>
  );
}

export default LeftArrow;
