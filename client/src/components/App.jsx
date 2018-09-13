import React from 'react';
import SimilarListings from './SimilarListings.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SimilarListings roomId={this.props.roomId}/>
      </div>
    );
  }
}

export default App;
