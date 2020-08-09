import React from 'react';
import { Span, Item } from 'react-html-email';
import { fontSize, colors, spacing } from '../theme';

const Text = ({ children }) => (
  <Item style={{ padding: spacing.xsmall }}>
    <Span color={colors.white} fontSize={fontSize.md}>
      {children}
    </Span>
  </Item>
);

export default Text;
