import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FieldTabCurrentSvg from 'assets/svg/imgs/tab-current.svg';
import uniqid from 'uniqid';
import { pxToRem } from 'styles/mixins';
import media from 'styles/media';

const propTypes = {
  onSelect: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  selectedIndex: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
const FieldTabSelectorsElement = styled.div`
  position: absolute;
  right: 0;
  top: 400px;
  ${media.sm`
    top: 300px;
    position: fixed;
  `}
`;
const FieldTabElement = styled.div`
  text-transform: uppercase;
  position: relative;
  margin-bottom: 1rem;
  margin-right: -4px;
  cursor: pointer;
  & > svg {
    height: ${({ theme }) => theme.components.field.tabSelector.height};
    width: ${({ theme }) => theme.components.field.tabSelector.width};
  }
  ${media.md`
    margin-right: -${pxToRem(260)};
  `};
`;

const FieldTabContent = styled.div`
  position: absolute;
  top: calc(50% - 1px);
  transform: translateY(-50%);
  width: 100%;
  text-align: center;
  font-weight: bold;
  user-select: none;
  color: ${props => (props.isSelected ? '#E4E2C5' : props.theme.colors.black)};
`;
const FieldTabSelectors = ({ color, items, onSelect, selectedIndex }) => (
  <FieldTabSelectorsElement>
    {items.map((e, i) => (
      <FieldTabElement onClick={() => onSelect(i)} key={uniqid()}>
        <FieldTabCurrentSvg color={i === selectedIndex ? color : '#D6CCB2'} />
        <FieldTabContent isSelected={i === selectedIndex}>{e}</FieldTabContent>
      </FieldTabElement>
    ))}
  </FieldTabSelectorsElement>
);
FieldTabSelectors.propTypes = propTypes;
export default FieldTabSelectors;
