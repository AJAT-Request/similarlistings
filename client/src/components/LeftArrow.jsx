import React from 'react';
import { Arrow } from '../../../css/styles.jsx';

const LeftArrow = ({ changeIndices }) => {
  return (
    <Arrow className="backArrow" onClick={changeIndices}>
      <i className="fa fa-angle-left" aria-hidden="true" />
    </Arrow>
  );
};

export default LeftArrow;
