import React from 'react';
import PropTypes from 'prop-types';
import headerTadaBg from 'assets/png/header-tada-bg.png';
import styled from 'styled-components';
import { flexCenter, pxToRem } from 'styles/mixins';

const propTypes = {
  image: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
};
const FieldHeaderProfileElement = styled.div`
  ${flexCenter}
  position: absolute;
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  width: ${({ theme }) => theme.components.field.profile.width};
  height: ${({ theme }) => theme.components.field.profile.height};
  border-radius: 100%;
  border: 10px solid ${props => props.color};
  background: url(${headerTadaBg});
  background-size: cover;
  background-position: center center;
  z-index: 3;
`;

const LogoImage = styled.img`
  width: ${pxToRem(180)};
  height: auto;
`;

const FieldHeaderProfile = ({ image, color }) => (
  <FieldHeaderProfileElement color={color}>
    <LogoImage src={image} alt="Imagine arie" />
  </FieldHeaderProfileElement>
);
FieldHeaderProfile.propTypes = propTypes;
export default FieldHeaderProfile;
