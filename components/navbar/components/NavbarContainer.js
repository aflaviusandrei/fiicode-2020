import styled from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const NavbarContainer = styled.div`
  background-color: ${({ theme }) => theme.components.navbar.backgroundColor};
  height: ${({ theme }) => theme.components.navbar.height};
  box-shadow: 0px 6px 2px #00000029;
  border-color: ${({ theme }) => theme.colors.white};
  border-width: 3px 0 3px;
  position: absolute;
  top: ${({ theme }) => theme.spacing.normal};
  left: 0;
  right: 0;
  border-style: solid;
  padding: 0 ${({ theme }) => theme.spacing.normal};
  display: flex;
  justify-content: space-between;
  &:after {
    content: ' ';
    position: absolute;
    width: 100%;
    top: 1px;
    bottom: 1px;
    left: 0;
    right: 0;
    background: transparent;
    border-color: ${({ theme }) => theme.colors.white};
    border-width: 2px 0 2px;
    border-style: dashed;
  }
`;
NavbarContainer.propTypes = propTypes;
export default NavbarContainer;
