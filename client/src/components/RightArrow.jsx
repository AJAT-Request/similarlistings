import React from 'react';
import PropTypes from 'prop-types';
import { Arrow, HiddenArrow } from '../../../css/styles.jsx';

const RightArrow = ({ changeIndices, lastIndex }) => {
  if (lastIndex < 4) {
    return (
      <Arrow onClick={changeIndices}>
        <i className="fa fa-angle-right" />
      </Arrow>
    );
  }
  return (
    <HiddenArrow>
      <i className="fa fa-angle-right" />
    </HiddenArrow>
  );
};

export default RightArrow;

RightArrow.defaultProps = {
  changeIndices: null,
  lastIndex: null,
};

RightArrow.propTypes = {
  changeIndices: PropTypes.func,
  lastIndex: PropTypes.number,
};
