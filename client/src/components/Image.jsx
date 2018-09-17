import React from 'react';
import PropTypes from 'prop-types';
import { ImageStyle } from '../../../css/styles.jsx';

const Image = ({ photoUrls, index }) => (
  <img style={ImageStyle} src={photoUrls[index]} alt="" />
);

export default Image;

Image.defaultProps = {
  photoUrls: [],
  index: null,
};

Image.propTypes = {
  photoUrls: PropTypes.arrayOf(PropTypes.string),
  index: PropTypes.number,
};
