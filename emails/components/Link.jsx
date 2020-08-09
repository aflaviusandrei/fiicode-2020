import React from 'react';
import PropTypes from 'prop-types';
import { Item, A } from 'react-html-email';
import { fontSize, colors, spacing } from '../theme';

const Link = ({ children, to }) => (
  <Item style={{ textAlign: 'center', padding: spacing.xsmall }}>
    <A color={colors.white} fontSize={fontSize.md} download={to} href={to}>
      {children}
    </A>
  </Item>
);

Link.propTypes = {
  to: PropTypes.string.isRequired
};

export default Link;
