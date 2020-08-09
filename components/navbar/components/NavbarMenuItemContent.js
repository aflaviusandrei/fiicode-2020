import styled from 'styled-components';
import PropTypes from 'prop-types';
import { flexCenter } from 'styles/mixins';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const NavbarMenuItemContent = styled.span`
  user-select: none;
  ${flexCenter}
  height: 100%;
`;

NavbarMenuItemContent.propTypes = propTypes;
export default NavbarMenuItemContent;
