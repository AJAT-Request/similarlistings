import React from 'react';
import Star from './Star.jsx';
import { Description, Name, Price, Listing, ImageStyle, Reviews } from '../../../css/styles.jsx';

const Slide = ({ names, photoUrls, basicInfo, prices, reviews, index }) => (
  <Listing>
    <img style={ImageStyle} src={photoUrls[index]} alt="" />
    <Description>{basicInfo[index]}</Description>
    <Name>{names[index]}</Name>
    <Price>${prices[index]} per night</Price>
    <Star />
    <Star />
    <Star />
    <Star />
    <Star />
    <Reviews>{reviews[index]}</Reviews>
  </Listing>
);

export default Slide;
