import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool,
  hasIcon: PropTypes.bool,
};
const defaultProps = {
  isActive: false,
  hasIcon: false,
};

const NavbarMenuItem = styled.span`
  z-index: 1;
  text-transform: uppercase;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  height: 100%;
  cursor: pointer;
  ${props =>
    props.hasIcon &&
    css`
      padding-left: 36px;
    `};
  position: relative;
  &:not(:first-of-type) {
    margin-left: 1.3vw;
  }
`;

NavbarMenuItem.propTypes = propTypes;
NavbarMenuItem.defaultProps = defaultProps;
export default NavbarMenuItem;
