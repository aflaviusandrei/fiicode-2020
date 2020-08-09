import React from 'react';
import { Span, Item } from 'react-html-email';
import { fontSize, colors, spacing } from '../theme';

const Title = ({ children }) => (
  <Item style={{ textAlign: 'center', padding: spacing.xsmall }}>
    <Span color={colors.white} fontSize={fontSize.lg}>
      {children}
    </Span>
  </Item>
);

export default Title;
