import React from 'react';
import LeftArrow from './LeftArrow.jsx';
import RightArrow from './RightArrow.jsx';
import Slideshow from './Slideshow.jsx';

const arrowStyle = {
  display: 'inline-block',
  position: 'relative',
  bottom: '110px',
};

const slideshowStyle = {
  display: 'inline-block',
};

const titleStyle = {
  position: 'relative',
  left: '38px',
};

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstIndex: 0,
      middleIndex: 1,
      lastIndex: 2,
    };
    this.onRightArrowClick = this.onRightArrowClick.bind(this);
    this.onLeftArrowClick = this.onLeftArrowClick.bind(this);
  }

  onLeftArrowClick() {
    const { firstIndex, middleIndex, lastIndex } = this.state;
    if (middleIndex > 1) {
      this.setState({
        firstIndex: (firstIndex) - 1,
        middleIndex: (middleIndex) - 1,
        lastIndex: (lastIndex) - 1,
      });
    }
  }

  onRightArrowClick() {
    const { firstIndex, middleIndex, lastIndex } = this.state;
    if (lastIndex < 4) {
      this.setState({
        firstIndex: (firstIndex) + 1,
        middleIndex: (middleIndex) + 1,
        lastIndex: (lastIndex) + 1,
      });
    }
  }

  render() {
    const { firstIndex, middleIndex, lastIndex } = this.state;
    const { roomId } = this.props;
    return (
      <div>
        <div style={titleStyle}>Similar Listings</div>
        <div style={arrowStyle}>
          <LeftArrow changeIndices={this.onLeftArrowClick} />
        </div>
        <div style={slideshowStyle}>
          <Slideshow
            firstIndex={firstIndex}
            middleIndex={middleIndex}
            lastIndex={lastIndex}
            roomId={roomId}
          />
        </div>
        <div style={arrowStyle}>
          <RightArrow changeIndices={this.onRightArrowClick} />
        </div>
      </div>
    );
  }
}

export default Carousel;
