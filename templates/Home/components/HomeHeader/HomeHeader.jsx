import React from 'react';
import styled from 'styled-components';
import headerTadaBg from 'assets/png/header-tada-bg.png';
import { flexCenter, pxToRem } from 'styles/mixins';
import media from 'styles/media';
import { Button } from 'components';
import { Link, withTranslation, Trans } from 'translations';
const HomeHeaderStyled = styled.div`
  position: 'absolute';
  height: 100%;
  max-height: 520px;
  width: auto;
  background: url(${headerTadaBg});
  background-size: cover;
  background-position: center center;
  border-radius: 30px;
  ${flexCenter};
  flex-direction: column;
  color: ${({ theme }) => theme.colors.primary};
`;

const HomeHeaderTextHandWrited = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Pacifico&display=swap');
  font-family: 'Pacifico', sans-serif;
  margin-bottom: -20px;
  font-size: ${pxToRem('70')};
  text-align: center;
  word-wrap: break-word;
  ${media.lg`
    font-size: ${pxToRem('50')};
  `}
  ${media.md`
      font-size: ${pxToRem('30')};
  `}
`;

const HomeHeaderTextBold = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Bebas Neue');
  font-family: 'Bebas Neue', sans-serif;
  font-size: ${pxToRem('100')};
  ${media.lg`
    font-size: ${pxToRem('50')};
  `}
  ${media.md`
    font-size: ${pxToRem('35')};
  `}
  text-align: center;
  align-self: center;
  margin: ${pxToRem('15')};
`;

const HomeHeaderStartDate = styled.div`
  font-size: ${pxToRem('30')};
  ${media.lg`
    font-size: ${pxToRem('20')};
  `}
  ${media.md`
    font-size: ${pxToRem('15')};
  `}
  text-align: center;
  span {
    font-weight: 600;
    text-transform: uppercase;
  }
  margin: ${pxToRem('15')};
`;

const RegisterButton = styled(Button)`
  max-width: ${pxToRem('300')};
  margin: ${pxToRem('20')};
`;

const InfoBanner = styled.div`
  padding: ${pxToRem('20')};
  background: ${({ theme }) => theme.colors.red};
  width: 50%;
  margin: ${pxToRem('20')};
  text-align: center;
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.8;
  box-shadow: 0px 6px 13px -4px #0000008c;
`;

const HomeHeader = ({ t }) => (
  <HomeHeaderStyled>
    <HomeHeaderTextHandWrited>
      {t('home:header.title1')},
    </HomeHeaderTextHandWrited>
    <HomeHeaderTextBold>{t('header.title2')}.</HomeHeaderTextBold>
    <HomeHeaderStartDate>
      <Trans i18nKey="home:header.title3">
        a<span>a</span>
      </Trans>
    </HomeHeaderStartDate>
    <InfoBanner>{t('header.banner-info')}</InfoBanner>
    {/* <Link href="/register">
      <RegisterButton>{t('header.register')}!</RegisterButton>
    </Link> */}
  </HomeHeaderStyled>
);

export default withTranslation('home')(HomeHeader);
