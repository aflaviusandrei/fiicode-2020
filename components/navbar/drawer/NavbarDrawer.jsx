import React from 'react';
import PropTypes from 'prop-types';
import { Portal } from 'components';
import styled, { css } from 'styled-components';
import NavbarDrawerLogo from './components/NavbarDrawerLogo';
import media from 'styles/media';

const propTypes = {
  children: PropTypes.node.isRequired,
  isOpened: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

const NavbarDrawerContent = styled.div`
  z-index: 9;
  position: fixed;
  box-shadow: 0px 0px 26px 0px #3b3b3b;
  top: 0;
  left: 0;
  bottom: 0;
  width: ${({ theme }) => theme.components.navbarDrawer.width};
  max-width: 600px;
  min-width: 200px;
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  transition: all ${({ theme }) => theme.transition.default};
  display: none;
  ${media.lg`display: block;`}
  ${props =>
    !props.isOpened &&
    css`
      left: calc(-${({ theme }) => theme.components.navbarDrawer.width} - 30px);
    `}
`;

const NavbarDrawerOverlay = styled.div`
  z-index: 8;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  visibility: visible;
  opacity: 1;
  transition: all ${({ theme }) => theme.transition.default};
  display: none;
  ${media.lg`display: block;`}
  ${props =>
    !props.isOpened &&
    css`
      visibility: hidden;
      opacity: 0;
    `};
`;
const NavbarDrawer = ({ isOpened, onClose, children }) => {
  function handleOnClose() {
    onClose();
  }
  return (
    <>
      <NavbarDrawerOverlay isOpened={isOpened} onClick={handleOnClose} />
      <NavbarDrawerContent isOpened={isOpened}>
        <NavbarDrawerLogo />
        {children}
      </NavbarDrawerContent>
    </>
  );
};

NavbarDrawer.propTypes = propTypes;

export default NavbarDrawer;
