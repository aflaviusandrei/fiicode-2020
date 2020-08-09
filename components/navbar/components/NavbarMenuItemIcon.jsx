import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import HomeFlagSvg from 'assets/svg/imgs/homeFlag.svg';
import { foldDown } from 'styles/animations';

const propTypes = {
  children: PropTypes.node.isRequired,
  hasFlag: PropTypes.bool,
};
const HomeFlag = styled(HomeFlagSvg)`
  position: absolute;
  top: 0;
  animation: ${foldDown} 0.2s;
  font-size: 78px;
  width: 34px;
  fill: ${({ theme }) => theme.colors.white};
`;
const IconWrapper = styled.div``;
const NavbarMenuItemIconContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 34px;
  svg {
    fill: ${({ theme }) => theme.colors.white};
  }
  & > ${IconWrapper} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
`;

const NavbarMenuItemIcon = ({ children, hasFlag = false }) => {
  return (
    <NavbarMenuItemIconContainer>
      <IconWrapper>{children}</IconWrapper>
      {hasFlag && <HomeFlag />}
    </NavbarMenuItemIconContainer>
  );
};
NavbarMenuItemIcon.propTypes = propTypes;
export default NavbarMenuItemIcon;
