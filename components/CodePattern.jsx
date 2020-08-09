import PatternImg from 'assets/png/patternImg.png';
import styled from 'styled-components';

const PatternContainer = styled.img`
  margin-top: -400px;
  max-width: 100vw;
  background: white;
`;

import React from 'react';

const CodePattern = () => {
  return <PatternContainer src={PatternImg} alt="pattern" />;
};

export default CodePattern;
