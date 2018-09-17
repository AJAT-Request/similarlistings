import styled from 'styled-components';

const Arrow = styled.section`
  font-size: 50px;
  color: #505050;
  display: inline-flex;
  padding-top: 80px;
  padding-left: 10px;
`;

const Description = styled.section`
  font-family: -apple-system, BlinkMacSystemFont;
  font-size: 12px;
  font-weight: 500;
  padding-left: 10px;
  text-transform: uppercase;
  color: rgb(115, 79, 33);
`;

const HiddenArrow = styled.section`
  display: inline-block;
  font-size: 50px;
  position: relative;
  bottom: 150px;
  padding-left: 10px;
  visibility: hidden;
`;

const ImageStyle = {
  height: '220px',
  width: '340px',
  paddingLeft: '10px',
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
  padding-left: 10px;
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
  padding-left: 10px;
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
  padding-left: 10px;
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
  ImageStyle,
  Listing,
  Listings,
  Name,
  NumberOfReviews,
  Price,
  Ratings,
  Reviews,
  SingleStar,
  Title,
};
