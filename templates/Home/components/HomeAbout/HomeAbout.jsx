import React from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import { withTranslation } from 'translations';
const HomeAboutContainer = styled.div`
  height: 100%;
  min-height: 300px;
  width: 100%;
  background: white;
  margin-top: -50px;
  z-index: 1000;
  padding-top: 50px;
  padding-bottom: 100px;
`;
const HomeAboutInner = styled.div`
  top: 0;
  padding: 0 ${({ theme }) => theme.spacing.xlarge};
  ${media.sm`
    padding: 50px 10px;
  `}
`;

const HomeAboutTitle = styled.div`
  font-size: 50px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
`;

const HomeAboutDescription = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 18px;
`;

const HomeAbout = ({ t }) => (
  <HomeAboutContainer>
    <HomeAboutInner>
      <HomeAboutTitle>{t('about.title')}</HomeAboutTitle>
      <HomeAboutDescription>
        <p>{t('about.text1')}</p>
        <p>{t('about.text2')}</p>
      </HomeAboutDescription>
    </HomeAboutInner>
  </HomeAboutContainer>
);

export default withTranslation('home')(HomeAbout);
