import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { flexCenter } from 'styles/mixins';
import CaretDownSvg from 'assets/svg/icons/caretDown.svg';

const propTypes = {
  children: PropTypes.node.isRequired,
  hasCaret: PropTypes.bool,
  isCaretReversed: PropTypes.bool,
};
const DropdownHeadElement = styled.div`
  height: 100%;
  ${flexCenter}
`;

const CaretDownSvgElement = styled(CaretDownSvg)`
  height: 20px !important;
  width: 20px !important;
  fill: ${({ theme }) => theme.colors.white};
  ${props =>
    props.isCaretReversed &&
    css`
      transform: rotate(180deg);
    `}
`;

const DropdownHead = ({
  children,
  hasCaret = true,
  isCaretReversed = false,
  ...props
}) => (
  <DropdownHeadElement {...props}>
    {children}
    {hasCaret && <CaretDownSvgElement isCaretReversed={isCaretReversed} />}
  </DropdownHeadElement>
);

DropdownHead.propTypes = propTypes;
export default DropdownHead;
