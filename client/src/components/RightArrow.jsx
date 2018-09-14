import React from 'react';
import { Arrow } from '../../../css/styles.jsx';

const RightArrow = ({ changeIndices }) => {
  return (
    <Arrow onClick={changeIndices}>
      <i className="fa fa-angle-right" aria-hidden="true" />
    </Arrow>
  );
};

export default RightArrow;
