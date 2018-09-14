import React from 'react';
import styled from 'styled-components';

const Arrow = styled.section`
  font-size: 50px;
  color: #505050;
`;

const RightArrow = ({ changeIndices }) => {
  return (
    <Arrow onClick={changeIndices}>
      <i className="fa fa-angle-right" aria-hidden="true" />
    </Arrow>
  );
};

export default RightArrow;
