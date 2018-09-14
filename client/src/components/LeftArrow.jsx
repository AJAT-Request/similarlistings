import React from 'react';
import styled from 'styled-components';

const Arrow = styled.section`
  font-size: 50px;
  color: #505050;
`;

const LeftArrow = ({ changeIndices }) => {
  return (
    <Arrow className="backArrow" onClick={changeIndices}>
      <i className="fa fa-angle-left" aria-hidden="true" />
    </Arrow>
  );
};

export default LeftArrow;
