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

const Slide = ({ names, photoUrls, numberOfBeds, prices, reviews, index }) => (
  <Listing>
    <Image photoUrls={photoUrls} index={index} />
    <Description>{`ENTIRE HOUSE • ${numberOfBeds[index]} BEDS`}</Description>
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
  numberOfBeds: [],
  prices: [],
  reviews: [],
  index: null,
};

Slide.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string),
  photoUrls: PropTypes.arrayOf(PropTypes.string),
  numberOfBeds: PropTypes.arrayOf(PropTypes.number),
  prices: PropTypes.arrayOf(PropTypes.number),
  reviews: PropTypes.arrayOf(PropTypes.number),
  index: PropTypes.number,
};
