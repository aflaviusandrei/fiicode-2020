import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const propTypes = {
  children: PropTypes.node.isRequired,
};
const NavbarDrawerItem = styled.div`
  padding: 1rem 1rem 1rem 5vw;
  display: flex;
  align-items: center;
  font-weight: 800;
  ${props =>
    props.active &&
    css`
      background-color: ${({ theme }) => theme.colors.primaryLight};
    `}
`;

NavbarDrawerItem.propTypes = propTypes;
export default NavbarDrawerItem;
