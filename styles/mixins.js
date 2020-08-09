import { css } from 'styled-components';

export const flexCenter = () => css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const pxToRem = px => `${px / 16}rem`;
