import React from 'react';
import PropTypes from 'prop-types';
import { Ratings, SingleStar } from '../../../css/styles.jsx';

const Stars = ({ numberOfStars }) => {
  const stars = [];
  for (let i = 0; i < numberOfStars; i += 1) {
    stars.push(i);
  }

  return (
    <Ratings>
      {stars.map(star => <SingleStar><i className="fas fa-star" /></SingleStar>)}
    </Ratings>
  );
};

export default Stars;

Stars.defaultProps = {
  numberOfStars: null,
};

Stars.propTypes = {
  numberOfStars: PropTypes.number,
};
