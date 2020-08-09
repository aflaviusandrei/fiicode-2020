import styled from 'styled-components';
import PropTypes from 'prop-types';
import media from 'styles/media';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const NavbarMenuItemsContainer = styled.div`
  display: flex;
  height: 100%;
  ${media.lg`
    display: none;
  `}
`;

NavbarMenuItemsContainer.propTypes = propTypes;
export default NavbarMenuItemsContainer;
