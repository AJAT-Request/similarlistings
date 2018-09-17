import React from 'react';
import PropTypes from 'prop-types';
import Stars from './Stars.jsx';
import {
  Description,
  Heart,
  ImageStyle,
  Name,
  Price,
  ListingWrapper,
  ListingInfo,
  Reviews,
  NumberOfReviews,
} from '../../../css/styles.jsx';

const Listing = ({ names, photoUrls, numberOfBeds, prices, reviews, stars, index }) => (
  <ListingWrapper>
    <img style={ImageStyle} src={photoUrls[index]} alt="" />
    <Heart><i className="far fa-heart" /></Heart>
    <ListingInfo>
      <Description>{`ENTIRE HOUSE • ${numberOfBeds[index]} BEDS`}</Description>
      <Name>{names[index]}</Name>
      <Price>{`$${prices[index]} per night`}</Price>
      <Reviews>
        <Stars numberOfStars={stars[index]} />
        <NumberOfReviews>{reviews[index]}</NumberOfReviews>
      </Reviews>
    </ListingInfo>
  </ListingWrapper>
);

export default Listing;

Listing.defaultProps = {
  names: [],
  photoUrls: [],
  numberOfBeds: [],
  prices: [],
  reviews: [],
  index: null,
};

Listing.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string),
  photoUrls: PropTypes.arrayOf(PropTypes.string),
  numberOfBeds: PropTypes.arrayOf(PropTypes.number),
  prices: PropTypes.arrayOf(PropTypes.number),
  reviews: PropTypes.arrayOf(PropTypes.number),
  index: PropTypes.number,
};
