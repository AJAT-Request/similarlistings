import React from 'react';
import $ from 'jquery';
import Listing from './Listing.jsx';

class SimilarListings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: [],
    };
  }

  componentDidMount() {
    $.ajax({
 	  url: `http://localhost:3000/listings${this.props.roomId}`,
 	  method: 'GET',
      contentType: 'application/json',
      success: (listings) => {
      	console.log(listings)
        this.setState({
    	  listings: listings
        });
 	  },
      error: (err) => {
	 	console.log(err);
	 }
	})
  }

  render() {
    return (
      <div>
        Similar Listings
        <Listing listings={this.state.listings}/>
      </div>
    );
  }
}

export default SimilarListings;