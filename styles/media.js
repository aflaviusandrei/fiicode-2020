import { css } from 'styled-components';

export const sizes = {
  xl: 1280,
  lg: 992,
  md: 768,
  sm: 576,
};

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
