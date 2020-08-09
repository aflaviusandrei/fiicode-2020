import React from 'react';
import styled from 'styled-components';
import { flexCenter } from 'styles/mixins';
import LogoSquarePng from 'assets/png/logo-square.png';

const propTypes = {};
const NavbarDrawerLogoContainer = styled.div`
  height: 30vh;
  margin-bottom: 1rem;
  ${flexCenter};
`;
const NavbarLogoImage = styled.img`
  width: 40%;
  max-width: 7rem;
`;
const NavbarDrawerLogo = () => {
  return (
    <NavbarDrawerLogoContainer>
      <NavbarLogoImage src={LogoSquarePng} alt="Fiicode logo" />
    </NavbarDrawerLogoContainer>
  );
};
NavbarDrawerLogo.propTypes = propTypes;
export default NavbarDrawerLogo;
