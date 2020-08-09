import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FieldHeaderLogo from './FieldHeaderLogo';
import FieldHeaderProfile from './FieldHeaderProfile';
import FieldContainer from '../FieldContainer';
import FieldHeaderRibbon from './FieldHeaderRibbon';
import media from 'styles/media';

const propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  image: PropTypes.node.isRequired,
  roundsInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  }).isRequired
};

const FieldHeaderBannerElement = styled.div`
  position: relative;
  height: ${({ theme }) => theme.components.field.header.height};
  background-color: ${props => props.color};
  box-shadow: -1px 2px 5px 0px ${({ theme }) => theme.colors.black};
  display: flex;
  align-items: center;
  &:after {
    content: '';
    position: absolute;
    top: 6px;
    bottom: 6px;
    left: 0;
    right: 0;
    border: 2px dashed ${({ theme }) => theme.colors.white};
    border-right: 0;
    border-left: 0;
  }
  ${media.sm`
    height: ${({ theme }) => theme.components.field.header.smheight};
  `}
`;

const FieldHeaderBanner = ({ title, color, image, roundsInfo }) => (
  <FieldHeaderBannerElement color={color}>
    <FieldContainer>
      <FieldHeaderProfile image={image} color={color} />
      <FieldHeaderLogo>{title}</FieldHeaderLogo>
      <FieldHeaderRibbon color={color} roundsInfo={roundsInfo} />
    </FieldContainer>
  </FieldHeaderBannerElement>
);
FieldHeaderBanner.propTypes = propTypes;
export default FieldHeaderBanner;
