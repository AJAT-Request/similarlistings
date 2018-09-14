import styled from 'styled-components';

const Arrow = styled.section`
  font-size: 50px;
  color: #505050;
  display: inline-block;
  position: relative;
  bottom: 150px;
`;

const Listings = styled.section`
  display: inline-block;
`;

const Title = styled.section`
  position: relative;
  left: 38px;
  padding-bottom: 24px;
  font-family: -apple-system, BlinkMacSystemFont;
  font-weight: 700;
  font-size: 22px;
  color: #505050;
`;

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

const ImageStyle = {
  height: '220px',
  width: '340px',
  paddingLeft: '10px',
};

const StarStyle = styled.section`
  display: inline-block;
  color: #008489;
  padding-left: 15px;
`;

export { Arrow, Listings, Title, Description, Name, Price, Listing, ImageStyle, StarStyle };
