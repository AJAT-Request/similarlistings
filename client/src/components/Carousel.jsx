import React from 'react';
import styled from 'styled-components';
import LeftArrow from './LeftArrow.jsx';
import RightArrow from './RightArrow.jsx';
import Slideshow from './Slideshow.jsx';

const Arrow = styled.section`
  display: inline-block;
  position: relative;
  bottom: 140px;
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
        <Title>Similar Listings</Title>
        <Arrow><LeftArrow changeIndices={this.onLeftArrowClick} /></Arrow>
        <Listings>
          <Slideshow
            firstIndex={firstIndex}
            middleIndex={middleIndex}
            lastIndex={lastIndex}
            roomId={roomId}
          />
        </Listings>
        <Arrow><RightArrow changeIndices={this.onRightArrowClick} /></Arrow>
      </div>
    );
  }
}

export default Carousel;
