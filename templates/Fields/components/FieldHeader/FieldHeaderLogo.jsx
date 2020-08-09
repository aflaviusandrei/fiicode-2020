import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import StarSvg from 'assets/svg/imgs/star.svg';
import media from 'styles/media';

const propTypes = {
  children: PropTypes.node.isRequired,
};
const FieldHeaderLogoElement = styled.div`
  display: flex;
`;
const FieldHeaderDecoration = styled.div`
  position: relative;
  width: 136px;
  margin: 0 10px;
  ${props =>
    props.reversed &&
    css`
      transform: scaleX(-1);
    `}
  ${media.sm`
    display: none;
  `}
  & > svg {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    & > * {
      fill: ${({ theme }) => theme.colors.white};
    }
  }
`;
const FieldHeaderDecorationLine = styled.span`
  position: absolute;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.white};
  right: 25px;
  ${props =>
    props.large &&
    css`
      top: 10px;
      left: 0;
    `}
${props =>
    props.normal &&
  css`
    top: 50%;
    left: 40%;
  `}
${props =>
    props.small &&
  css`
    top: calc(100% - 10px);
    left: 70%;
  `}
`;
const FieldHeaderText = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: 2.2rem;
  user-select: none;
  font-weight: bold;
  text-transform: uppercase;
  ${media.md`
    font-size: 1.9rem;
    margin: 0 1rem;
  `}
`;
const FieldHeaderLogo = ({ children }) => (
  <FieldHeaderLogoElement>
    <FieldHeaderDecoration>
      <StarSvg />
      <FieldHeaderDecorationLine large />
      <FieldHeaderDecorationLine normal />
      <FieldHeaderDecorationLine small />
    </FieldHeaderDecoration>
    <FieldHeaderText>{children}</FieldHeaderText>
    <FieldHeaderDecoration reversed>
      <StarSvg />
      <FieldHeaderDecorationLine large />
      <FieldHeaderDecorationLine normal />
      <FieldHeaderDecorationLine small />
    </FieldHeaderDecoration>
  </FieldHeaderLogoElement>
);
FieldHeaderLogo.propTypes = propTypes;
export default FieldHeaderLogo;
