import React from 'react';
import PropTypes from 'prop-types';
import { Arrow, HiddenArrow } from '../../../css/styles.jsx';

const LeftArrow = ({ changeIndices, firstIndex }) => {
  if (firstIndex > 0) {
    return (
      <Arrow onClick={changeIndices}>
        <i className="fa fa-angle-left" />
      </Arrow>
    );
  }
  return (
    <HiddenArrow>
      <i className="fa fa-angle-left" />
    </HiddenArrow>
  );
};

export default LeftArrow;

LeftArrow.defaultProps = {
  changeIndices: null,
  firstIndex: null,
};

LeftArrow.propTypes = {
  changeIndices: PropTypes.func,
  firstIndex: PropTypes.number,
};
