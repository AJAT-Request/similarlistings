import React from 'react';
import { StarStyle } from '../../../css/styles.jsx';

const Star = (props) => {
  return (
    <StarStyle>
      <i className="fas fa-star" style={{height:"50%", width:"50%"}}/>
    </StarStyle>
  );
};

export default Star;
