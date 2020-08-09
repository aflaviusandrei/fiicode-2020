import React, { useState } from 'react';
import { ActiveLink } from 'components';
import NavbarMenuItemsContainer from './components/NavbarMenuItemsContainer';
import NavbarMenuItem from './components/NavbarMenuItem';
import NavbarLogo from './components/NavbarLogo';
import NavbarContainer from './components/NavbarContainer';
import NavbarMenuItemContent from './components/NavbarMenuItemContent';
import NavbarMenuItemIcon from './components/NavbarMenuItemIcon';
import NavbarHamburger from './components/NavbarHamburger';
import NavbarDrawer from './drawer/NavbarDrawer';
import uniqid from 'uuid';
import { rightLinks, leftLinks } from './content';
import NavbarDrawerItem from './drawer/components/NavbarDrawerItem';
import NavbarDrawerItemIcon from './drawer/components/NavbarDrawerItemIcon';
import { withTranslation } from 'translations';

const displayNavbarLinks = (links, t) =>
  links.map(({ content: Content, icon, href }) => (
    <ActiveLink key={uniqid()} href={href}>
      {active => (
        <NavbarMenuItem hasIcon={!!icon}>
          {icon && (
            <NavbarMenuItemIcon hasFlag={active}>{icon}</NavbarMenuItemIcon>
          )}
          {Content && (
            <NavbarMenuItemContent>
              <Content t={t} />
            </NavbarMenuItemContent>
          )}
        </NavbarMenuItem>
      )}
    </ActiveLink>
  ));

const displayNavbarDrawerLinks = (links, t) =>
  links.map(({ content: Content, icon, href }) => (
    <ActiveLink key={uniqid()} href={href}>
      {active => (
        <NavbarDrawerItem active={active}>
          {icon && <NavbarDrawerItemIcon>{icon}</NavbarDrawerItemIcon>}
          <Content t={t} />
        </NavbarDrawerItem>
      )}
    </ActiveLink>
  ));
const Navbar = ({ t }) => {
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);
  function handleNavbarHamburgerClick() {
    setIsDrawerOpened(v => !v);
  }
  return (
    <NavbarContainer>
      <NavbarHamburger onClick={handleNavbarHamburgerClick} />
      <NavbarDrawer
        isOpened={isDrawerOpened}
        onClose={handleNavbarHamburgerClick}
      >
        {displayNavbarDrawerLinks([...rightLinks, ...leftLinks], t)}
      </NavbarDrawer>
      <NavbarMenuItemsContainer>
        {displayNavbarLinks(rightLinks, t)}
      </NavbarMenuItemsContainer>
      <ActiveLink href={'/'}>
        <NavbarLogo />
      </ActiveLink>
      <NavbarMenuItemsContainer>
        {displayNavbarLinks(leftLinks, t)}
      </NavbarMenuItemsContainer>
    </NavbarContainer>
  );
};
export default withTranslation('navbar')(Navbar);
