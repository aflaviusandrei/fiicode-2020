import React from 'react';
import { Navbar, Footer } from 'components';
import NextApp from 'next/app';
import Head from 'next/head';
import axios from 'axios';
import ThemeProvider from 'styles/ThemeProvider';
import GlobalStyle from 'styles/GlobalStyle';
import styled from 'styled-components';
import media from 'styles/media';
import { appWithTranslation } from '../i18n';

axios.defaults.baseURL = 'https://api.asii.ro/fiicode/api';

const PaddedContainer = styled.div`
  padding-top: calc(
    ${({ theme }) => theme.spacing.xxlarge} +
      ${({ theme }) => theme.components.navbar.height}
  );
  padding-bottom: ${({ theme }) => theme.spacing.xxlarge};
  background-color: ${({ theme }) => theme.colors.beige};
  ${media.sm`
    padding-top: calc(
      ${({ theme }) => theme.spacing.large} + 
      ${({ theme }) => theme.components.navbar.height}
    );
  `}
`;

class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>FIICode</title>
        </Head>
        <ThemeProvider>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}
export default appWithTranslation(App);
