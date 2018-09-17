import styled from 'styled-components';

const Arrow = styled.section`
  font-size: 50px;
  color: #505050;
  display: inline-flex;
  padding-top: 80px;
  padding-left: 12px;
`;

const Description = styled.section`
  font-family: -apple-system, BlinkMacSystemFont;
  font-size: 12px;
  font-weight: 500;
  padding-left: 12px;
  text-transform: uppercase;
  color: rgb(115, 79, 33);
`;

const Heart = styled.section`
  color: white;
  transform: scale(1.8, 1.8);
  position: relative;
  z-index: 2;
  bottom: 205px;
  left: 450px;
`;

const HiddenArrow = styled.section`
  display: inline-block;
  font-size: 50px;
  position: relative;
  bottom: 150px;
  padding-left: 12px;
  visibility: hidden;
`;

const ListingInfo = styled.section`
  position: relative;
  bottom: 10px;
`;

const ImageStyle = {
  height: '220px',
  width: '340px',
  paddingLeft: '10px',
  zIndex: 1,
};

const Listing = styled.section`
  display: inline-block;
`;

const Listings = styled.section`
  display: inline-flex;
`;

const Name = styled.section`
  font-family: -apple-system, BlinkMacSystemFont;
  font-size: 16px;
  font-weight: 450;
  padding-top: 3px;
  padding-left: 12px;
  text-transform: capitalize;
  color: #505050;
`;

const NumberOfReviews = styled.section`
  display: inline-block;
  position: relative;
  top: 1px;
  font-weight: 400;
`;

const Price = styled.section`
  font-family: -apple-system, BlinkMacSystemFont;
  font-size: 14px;
  font-weight: 300;
  padding-top: 3px;
  padding-left: 12px;
  color: #505050;
`;

const Ratings = styled.section`
  display: inline-block;
  position: relative;
  padding-top: 3px;
  padding-right: 2px;
`;

const Reviews = styled.section`
  position: relative;
  padding-left: 12px;
  font-family: -apple-system, BlinkMacSystemFont;
  font-size: 12px;
  font-weight: 300;
`;

const SingleStar = styled.section`
  display: inline-flex;
  justify-content: space-evenly;
  color: #008489;
  padding-top: 3px;
`;


const Title = styled.section`
  position: relative;
  left: 45px;
  padding-bottom: 24px;
  font-family: -apple-system, BlinkMacSystemFont;
  font-weight: 700;
  font-size: 22px;
  color: #505050;
`;

export {
  Arrow,
  Description,
  HiddenArrow,
  Heart,
  ImageStyle,
  Listing,
  ListingInfo,
  Listings,
  Name,
  NumberOfReviews,
  Price,
  Ratings,
  Reviews,
  SingleStar,
  Title,
};
