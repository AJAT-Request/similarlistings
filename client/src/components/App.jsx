import React from 'react';
import SimilarListings from './SimilarListings.jsx';

const App = ({ roomId }) => (
  <div>
    <SimilarListings roomId={roomId} />
  </div>
);

export default App;
