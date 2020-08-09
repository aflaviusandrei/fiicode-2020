import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import theme from './theme';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const ThemeProvider = ({ children }) => (
  <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
);

ThemeProvider.propTypes = propTypes;

export default ThemeProvider;
