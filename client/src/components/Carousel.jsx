import React from 'react';
import $ from 'jquery';
import LeftArrow from './LeftArrow.jsx';
import RightArrow from './RightArrow.jsx';
import Slideshow from './Slideshow.jsx';

class Carousel extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	  firstIndex: 0,
  	  middleIndex: 1,
  	  lastIndex: 2
  	};
  	this.onRightArrowClick = this.onRightArrowClick.bind(this);
  	this.onLeftArrowClick = this.onLeftArrowClick.bind(this);
  }

  onLeftArrowClick() {
  	if (this.state.middleIndex > 1) {
  	  this.setState({
  	    firstIndex: (this.state.firstIndex) - 1,
  	    middleIndex: (this.state.middleIndex) - 1,
  	    lastIndex: (this.state.lastIndex) - 1
  	  });
  	}
  	console.log(this.state)
  }

  onRightArrowClick() {
  	if (this.state.lastIndex < 4) {
  	  this.setState({
  	    firstIndex: (this.state.firstIndex) + 1,
  	    middleIndex: (this.state.middleIndex) + 1,
  	    lastIndex: (this.state.lastIndex) + 1
  	  });	
  	}
  	console.log(this.state)
  }

  render() {
    return (
  	  <div className="carousel">
  	  	<Slideshow currentMiddleIndex={this.state.currentMiddleIndex} firstIndex={this.state.firstIndex} 
  	  	middleIndex={this.state.middleIndex} lastIndex={this.state.lastIndex} roomId={this.props.roomId}/>
  	  	<LeftArrow changeIndices={this.onLeftArrowClick}/>
  	    <RightArrow changeIndices={this.onRightArrowClick}/>
  	  </div>
  	);
  }
}

export default Carousel;
