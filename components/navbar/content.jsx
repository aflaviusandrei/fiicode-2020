import React from 'react';
import HomeIconSvg from 'assets/svg/icons/homeIcon.svg';
import GamepadIconSvg from 'assets/svg/icons/gamepadIcon.svg';
import CodeIconSvg from 'assets/svg/icons/codeIcon.svg';
import SignInSvg from 'assets/svg/icons/signInIcon.svg';
import EnvelopeSvg from 'assets/svg/icons/envelopeicon.svg';
import CubesSvg from 'assets/svg/icons/cubesIcon.svg';
import RomaniaFlagSvg from 'assets/svg/flags/ro.svg';
import AmericaFlagSvg from 'assets/svg/flags/en.svg';
import { Dropdown, DropdownItem } from 'components';
import { useTranslation } from 'translations';

const LanguageDropdown = () => {
  const { i18n, t } = useTranslation();
  const currentLanguage = langConf.availableLanguages.find(
    ({ key }) => key === i18n.language
  );
  return (
    <Dropdown head={currentLanguage && currentLanguage.icon}>
      {langConf.availableLanguages.map(({ key, icon, onClick }) => (
        <DropdownItem onClick={() => onClick({ i18n })} key={key}>
          {icon}
        </DropdownItem>
      ))}
    </Dropdown>
  );
};

export const rightLinks = [
  {
    content: ({ t }) => t('home'),
    icon: <HomeIconSvg />,
    href: '/',
  },
  {
    content: () => 'web/mobile',
    icon: <CodeIconSvg />,
    href: '/web-mobile',
  },
  {
    content: () => 'gamedev',
    icon: <GamepadIconSvg />,
    href: '/gamedev',
  },
];
export const leftLinks = [
  {
    content: ({ t }) => t('algorithmics'),
    icon: <CubesSvg />,
    href: '/algoritmica',
  },
  {
    content: () => 'contact',
    icon: <EnvelopeSvg />,
    href: '/contact',
  },
  {
    content: () => 'Sign In',
    icon: <SignInSvg />,
    href: '/login',
  },
  {
    content: () => <LanguageDropdown />,
  },
];
export const langConf = {
  availableLanguages: [
    {
      key: 'ro-RO',
      icon: <RomaniaFlagSvg width={50} height={26} />,
      onClick: ({ i18n }) => {
        i18n.changeLanguage('ro-RO');
      },
    },
    {
      key: 'en-US',
      icon: <AmericaFlagSvg width={50} height={26} />,
      onClick: ({ i18n }) => {
        i18n.changeLanguage('en-US');
      },
    },
  ],
};
