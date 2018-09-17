import React from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';
import Slide from './Slide.jsx';
import { Listings } from '../../../css/styles.jsx';

class Slideshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [],
      photoUrls: [],
      numberOfBeds: [],
      prices: [],
      reviews: [],
    };
  }

  componentDidMount() {
    const { roomId } = this.props;
    $.ajax({
      url: `http://localhost:3000/listings/${roomId}`,
      method: 'GET',
      contentType: 'application/json',
      success: (listings) => {
        this.setState({
          names: listings.names,
          photoUrls: listings.photoUrls,
          numberOfBeds: listings.numberOfBeds,
          prices: listings.prices,
          reviews: listings.reviews,
        });
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  render() {
    const { names, photoUrls, numberOfBeds, prices, reviews } = this.state;
    const { firstIndex, middleIndex, lastIndex } = this.props;
    return (
      <Listings>
        <Slide
          names={names}
          photoUrls={photoUrls}
          numberOfBeds={numberOfBeds}
          prices={prices}
          reviews={reviews}
          index={firstIndex}
        />
        <Slide
          names={names}
          photoUrls={photoUrls}
          numberOfBeds={numberOfBeds}
          prices={prices}
          reviews={reviews}
          index={middleIndex}
        />
        <Slide
          names={names}
          photoUrls={photoUrls}
          numberOfBeds={numberOfBeds}
          prices={prices}
          reviews={reviews}
          index={lastIndex}
        />
      </Listings>
    );
  }
}

export default Slideshow;

Slideshow.defaultProps = {
  roomId: null,
  firstIndex: null,
  middleIndex: null,
  lastIndex: null,
};

Slideshow.propTypes = {
  roomId: PropTypes.string,
  firstIndex: PropTypes.number,
  middleIndex: PropTypes.number,
  lastIndex: PropTypes.number,
};
