import { createGlobalStyle } from 'styled-components';
import segoeUi from './fonts/segoeUi';
import media from './media';

export default createGlobalStyle`
  ${segoeUi}
  * {
    box-sizing: border-box;
    font-family: "Segoe UI", sans-serif;
  }
  #__next {
    height: 100%;
    width: 100%;
  }
  body, html {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.black};
    ${media.md`
      font-size: 14px;
    `}
  }
`;
