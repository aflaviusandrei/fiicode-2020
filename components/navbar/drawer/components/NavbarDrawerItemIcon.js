import styled from 'styled-components';
import { flexCenter } from 'styles/mixins';

const propTypes = {};
const NavbarDrawerItemIcon = styled.span`
  ${flexCenter}
  display: inline-flex;
  margin-right: 1rem;
  & > svg {
    fill: ${({ theme }) => theme.colors.white};
    font-size: 1rem;
  }
`;
NavbarDrawerItemIcon.propTypes = propTypes;
export default NavbarDrawerItemIcon;
