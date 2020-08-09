import React from 'react';
import PropTypes from 'prop-types';
import HmburgerSvg from 'assets/svg/icons/hamburger.svg';
import styled from 'styled-components';
import { flexCenter } from 'styles/mixins';
import media from 'styles/media';

const propTypes = {
  onClick: PropTypes.func,
};

const HamburgerIcon = styled(HmburgerSvg)`
  fill: white;
  font-size: 2rem;
`;
const NavbarHamburgerContainer = styled.div`
  height: 100%;
  ${flexCenter}
  display: none;
  z-index: 2;
  ${media.lg`
    display: flex;
  `}
`;

const NavbarHamburger = ({ onClick }) => (
  <NavbarHamburgerContainer onClick={onClick}>
    <HamburgerIcon />
  </NavbarHamburgerContainer>
);
NavbarHamburger.propTypes = propTypes;
export default NavbarHamburger;
