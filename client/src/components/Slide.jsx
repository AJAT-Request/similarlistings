import React from 'react';
import styled from 'styled-components';

const imageStyle = {
  height: '220px',
  width: '340px',
  paddingLeft: '10px',
};

const Description = styled.section`
  font-family: -apple-system, BlinkMacSystemFont;
  font-size: 12px;
  font-weight: 700;
  padding-left: 10px;
  text-transform: uppercase;
  color: rgb(115, 79, 33);
`;

const Name = styled.section`
  font-family: -apple-system, BlinkMacSystemFont;
  font-size: 16px;
  font-weight: 450;
  padding-top: 3px;
  padding-left: 10px;
  text-transform: capitalize;
  color: #505050;
`;

const Price = styled.section`
  font-family: -apple-system, BlinkMacSystemFont;
  font-size: 14px;
  font-weight: 300;
  padding-top: 3px;
  padding-left: 10px;
  color: #505050;
`;

const Listing = styled.section`
  display: inline-block;
`;


const Slide = ({ names, photoUrls, basicInfo, prices, index }) => (
  <Listing>
    <img style={imageStyle} src={photoUrls[index]} alt="" />
    <Description>{basicInfo[index]}</Description>
    <Name>{names[index]}</Name>
    <Price>${prices[index]} per night</Price>
  </Listing>
);

export default Slide;
