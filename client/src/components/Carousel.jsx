import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import photoData from '../../../database/data/dummyData.js';
import LeftArrow from './LeftArrow.jsx';
import RightArrow from './RightArrow.jsx';
import Listing from './Listing.jsx';
import { Title, Listings } from '../../../css/styles.jsx';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstIndex: 0,
      middleIndex: 1,
      lastIndex: 2,
      names: ['House', 'Cool House', 'Grass House', 'Your House', 'My House'],
      photoUrls: photoData,
      numberOfBeds: [5, 5, 5, 5, 5],
      prices: [100, 100, 100, 100, 100],
      reviews: [100, 100, 100, 100, 100],
      stars: [5, 5, 5, 5, 5],
    };
    this.onRightArrowClick = this.onRightArrowClick.bind(this);
    this.onLeftArrowClick = this.onLeftArrowClick.bind(this);
  }

  componentDidMount() {
    const { roomId } = this.props;
    $.ajax({
      url: `http://localhost:3001/listings/${roomId}`,
      method: 'GET',
      contentType: 'application/json',
      success: (listings) => {
        this.setState({
          names: listings.names,
          photoUrls: listings.photoUrls,
          numberOfBeds: listings.numberOfBeds,
          prices: listings.prices,
          reviews: listings.reviews,
          stars: listings.stars,
        });
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  onLeftArrowClick() {
    const { firstIndex, middleIndex, lastIndex } = this.state;
    if (middleIndex > 1) {
      this.setState({
        firstIndex: firstIndex - 1,
        middleIndex: middleIndex - 1,
        lastIndex: lastIndex - 1,
      });
    }
  }

  onRightArrowClick() {
    const { firstIndex, middleIndex, lastIndex } = this.state;
    if (lastIndex < 4) {
      this.setState({
        firstIndex: firstIndex + 1,
        middleIndex: middleIndex + 1,
        lastIndex: lastIndex + 1,
      });
    }
  }

  render() {
    const {
      firstIndex,
      middleIndex,
      lastIndex,
      names,
      photoUrls,
      numberOfBeds,
      prices,
      reviews,
      stars,
    } = this.state;
    return (
      <div>
        <Title>Similar Listings</Title>
        <Listings>
          <LeftArrow changeIndices={this.onLeftArrowClick} firstIndex={firstIndex} />
          <Listing
            names={names}
            photoUrls={photoUrls}
            numberOfBeds={numberOfBeds}
            prices={prices}
            reviews={reviews}
            stars={stars}
            index={firstIndex}
          />
          <Listing
            names={names}
            photoUrls={photoUrls}
            numberOfBeds={numberOfBeds}
            prices={prices}
            reviews={reviews}
            stars={stars}
            index={middleIndex}
          />
          <Listing
            names={names}
            photoUrls={photoUrls}
            numberOfBeds={numberOfBeds}
            prices={prices}
            reviews={reviews}
            stars={stars}
            index={lastIndex}
          />
          <RightArrow changeIndices={this.onRightArrowClick} lastIndex={lastIndex} />
        </Listings>
      </div>
    );
  }
}

export default Carousel;

Carousel.defaultProps = {
  roomId: null,
};

Carousel.propTypes = {
  roomId: PropTypes.string,
};
