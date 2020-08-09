import styled from 'styled-components';
import NavbarLogoSvg from 'assets/svg/imgs/navbar-logo.svg';
import media from 'styles/media';

export default styled(NavbarLogoSvg)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, calc(-46% - .4vw));
  z-index: 1;
  user-select: none;
  cursor: pointer;
  font-size: 21vw;
  max-width: 500px;
  max-height: 144px;
  ${media.xl`
    display: none;
  `}

  ${media.lg`
    transform: translate(-50%, -48%);
    font-size: 20rem;
    display: block;
  `}
  ${media.sm`
    transform: translate(-30%, -49%);
    font-size: 15rem;
  `}
`;
