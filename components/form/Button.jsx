import PropTypes from 'prop-types';
import styled from 'styled-components';
import { pxToRem } from 'styles/mixins';

const propTypes = {
  children: PropTypes.node.isRequired,
};
const Button = styled.button`
  padding: ${pxToRem(12)};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.white};
  border: none;
  font-weight: bold;
  cursor: pointer;
  &[disabled] {
    cursor: not-allowed;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.black};
  }
`;

Button.propTypes = propTypes;

export default Button;
