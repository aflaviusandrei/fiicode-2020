import styled from 'styled-components';
import { pxToRem } from 'styles/mixins';

export const H1 = styled.h1`
  margin: ${pxToRem(1)};
`;
export const H2 = styled.h2`
  margin: ${pxToRem(1)};
`;
export const P = styled.p`
  text-align: ${props => (props.center ? 'center' : 'left')};
`;

export const BebasHeading = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Bebas Neue');
  font-family: 'Bebas Neue', sans-serif;
`;
