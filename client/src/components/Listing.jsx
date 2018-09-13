import React from 'react';

const Listing = (props) => (
  <div>
    {
      props.listings.map(listing => 
      	<h1>
      	  {listing.name}
      	  <img src={listing.image_url}></img>
      	</h1>

      	)

    }
  </div>	

);


export default Listing;