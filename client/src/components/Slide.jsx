import React from 'react';
import PropTypes from 'prop-types';
import Stars from './Stars.jsx';
import Image from './Image.jsx';
import {
  Description,
  Name,
  Price,
  Listing,
  Reviews,
  NumberOfReviews,
} from '../../../css/styles.jsx';

const Slide = ({ names, photoUrls, basicInfo, prices, reviews, index }) => (
  <Listing>
    <Image photoUrls={photoUrls} index={index} />
    <Description>{basicInfo[index]}</Description>
    <Name>{names[index]}</Name>
    <Price>{`$${prices[index]} per night`}</Price>
    <Reviews>
      <Stars />
      <NumberOfReviews>{reviews[index]}</NumberOfReviews>
    </Reviews>
  </Listing>
);

export default Slide;

Slide.defaultProps = {
  names: [],
  photoUrls: [],
  basicInfo: [],
  prices: [],
  reviews: [],
  index: null,
};

Slide.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string),
  photoUrls: PropTypes.arrayOf(PropTypes.string),
  basicInfo: PropTypes.arrayOf(PropTypes.string),
  prices: PropTypes.arrayOf(PropTypes.number),
  reviews: PropTypes.arrayOf(PropTypes.number),
  index: PropTypes.number,
};
