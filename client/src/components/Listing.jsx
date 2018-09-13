import React from 'react';

const Listing = ({ listings }) => (
  <div>
    {listings.map(listing => <h1>{listing.name}</h1>)}
  </div>
);

export default Listing;
