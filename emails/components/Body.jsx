import React from 'react';
import { Email, Item, Image } from 'react-html-email';
import { colors, spacing } from '../theme';

const css = `
    *{ color: ${colors.white}; }
`;

const Body = ({ children }) => (
  <Email
    title="Test Email"
    style={{
      background: colors.primary,
      padding: spacing.xsmall,
    }}
    headCSS={css}
  >
    <Item
      style={{
        padding: spacing.xsmall,
        borderBottom: '1px solid ' + colors.primaryLight,
      }}
    >
      <Image
        alt="react"
        src="https://fiicode.asii.ro/_next/static/images/logo-square-cd9af9d1d40f3d494b035d8debe7cc1c.png"
        width={100}
        height={100}
        style={{ margin: 'auto' }}
      />
    </Item>
    {children}
    <Item
      style={{
        borderTop: '1px solid ' + colors.primaryLight,
        padding: spacing.xsmall,
      }}
    >
      ©{new Date().getFullYear()} FIICode
    </Item>
  </Email>
);
export default Body;
