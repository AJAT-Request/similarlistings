import React from 'react';
import Slide from './Slide.jsx';
import $ from 'jquery';

const style = {
  display: 'inline-block'
}

class Slideshow extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	  listings: [],
  	  names: [],
  	  photoUrls: []
  	}
  }

  componentDidMount() {
    $.ajax({
      url: `http://localhost:3000/listings${this.props.roomId}`,
      method: 'GET',
      contentType: 'application/json',
      success: (listings) => {
      	const names = [];
      	const photoUrls = [];
        listings.forEach(listing => names.push(listing.name));
        listings.forEach(listing => photoUrls.push(listing.image_url))
        this.setState({
          names: names,
          photoUrls: photoUrls
        });

      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  render() {
  	return (
  	  <div>
  	  	<div style={style}>
  	  	  <Slide names={this.state.names} photoUrls={this.state.photoUrls} index={this.props.firstIndex} />
  	  	</div>
  	  	<div style={style}>
  	  	  <Slide names={this.state.names} photoUrls={this.state.photoUrls} index={this.props.middleIndex} />
  	  	</div>
  	  	<div style={style}>
  	  	  <Slide names={this.state.names} photoUrls={this.state.photoUrls} index={this.props.lastIndex} />
  	  	</div>
      </div>
  	);
  }
}

export default Slideshow;
