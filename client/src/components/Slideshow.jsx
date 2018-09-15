import React from 'react';
import $ from 'jquery';
import Slide from './Slide.jsx';
import { Listings } from '../../../css/styles.jsx';

class Slideshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [],
      photoUrls: [],
      basicInfo: [],
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
          basicInfo: listings.basicInfo,
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
    const { names, photoUrls, basicInfo, prices, reviews } = this.state;
    const { firstIndex, middleIndex, lastIndex } = this.props;
    return (
      <Listings>
        <Slide
          names={names}
          photoUrls={photoUrls}
          basicInfo={basicInfo}
          prices={prices}
          reviews={reviews}
          index={firstIndex}
        />
        <Slide
          names={names}
          photoUrls={photoUrls}
          basicInfo={basicInfo}
          prices={prices}
          reviews={reviews}
          index={middleIndex}
        />
        <Slide
          names={names}
          photoUrls={photoUrls}
          basicInfo={basicInfo}
          prices={prices}
          reviews={reviews}
          index={lastIndex}
        />
      </Listings>
    );
  }
}

export default Slideshow;
