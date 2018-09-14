import React from 'react';
import $ from 'jquery';
import Slide from './Slide.jsx';

const style = {
  display: 'inline-block',
};

class Slideshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [],
      photoUrls: [],
      basicInfo: [],
    };
  }

  componentDidMount() {
    const { roomId } = this.props;
    $.ajax({
      url: `http://localhost:3000/listings${roomId}`,
      method: 'GET',
      contentType: 'application/json',
      success: (listings) => {
        const names = [];
        const photoUrls = [];
        const basicInfo = [];
        listings.forEach(listing => names.push(listing.name));
        listings.forEach(listing => photoUrls.push(listing.image_url));
        listings.forEach(listing => basicInfo.push(listing.basic_info));
        this.setState({
          names: names,
          photoUrls: photoUrls,
          basicInfo: basicInfo
        });
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  render() {
    const { names, photoUrls, basicInfo } = this.state;
    const { firstIndex, middleIndex, lastIndex } = this.props;
    return (
      <div>
        <div style={style}>
          <Slide names={names} photoUrls={photoUrls} index={firstIndex} />
        </div>
        <div style={style}>
          <Slide names={names} photoUrls={photoUrls} index={middleIndex} />
        </div>
        <div style={style}>
          <Slide names={names} photoUrls={photoUrls} index={lastIndex} />
        </div>
      </div>
    );
  }
}

export default Slideshow;
