import React from 'react';
import DesignLine from './DesignLine';
import styled from 'styled-components';

const defaultLengths = [
  {
    height: 12,
    width: '92vw',
    marginBottom: 5,
    color: 'blue',
  },
  {
    height: 4,
    width: '96vw',
    color: 'darkBlue',
    marginBottom: 15,
  },
  {
    height: 8,
    width: '90vw',
    color: 'red',
    marginBottom: 0,
  },
];

const DesignLinesContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
`;

const DesignLines = () => {
  return (
    <DesignLinesContainer>
      {defaultLengths.map(item => (
        <DesignLine {...item} key={item.color} />
      ))}
    </DesignLinesContainer>
  );
};

export default DesignLines;
