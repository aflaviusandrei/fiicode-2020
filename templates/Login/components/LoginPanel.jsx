import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import headerTadaBg from 'assets/png/header-tada-bg.png';
import algoritmicaPng from 'assets/png/algoritmica.png';
import webmobilePng from 'assets/png/webmobile.png';
import gamedevPng from 'assets/png/gamedev.png';
import PatternImgPng from 'assets/png/patternImg.png';
import { flexCenter, pxToRem } from 'styles/mixins';
import media from 'styles/media';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const LoginFancyIconsContainer = styled.div`
  background: url(${headerTadaBg}) center;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  flex: 2;
  ${flexCenter}
  flex-direction: column;
  justify-content: space-around;
  ${media.md`
    flex-direction: row;
    border-bottom-left-radius: 0;
    border-top-right-radius: 15px;
  `}
`;

const LoginContentContainer = styled.div`
  flex: 3;
  ${flexCenter}
  align-items: flex-start;
  flex-direction: column;
  padding: ${pxToRem('64')};
  background-image: url(${PatternImgPng});
  background-position: center -240px;
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.colors.white};
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  ${media.md`
    padding: ${pxToRem('30')};
    flex-direction: column;
    border-top-right-radius: 0;
    border-bottom-left-radius: 15px;
  `}
`;

const LoginPanelContainer = styled.div`
  width: 60vw;
  height: 600px;
  margin: 0 auto;
  display: flex;
  box-shadow: 9px 9px 2px #00000029;
  border-radius: 15px;
  ${media.lg`
    width: 90%;
  `}
  ${media.md`
    flex-direction: column;
  `}
`;

const FancyImage = styled.img`
  width: ${pxToRem(150)};
  height: auto;
  ${media.md`
    width: ${pxToRem(120)};
  `}
  ${media.sm`
    width: ${pxToRem(100)};
  `}
`;

const LoginPanel = ({ children }) => {
  return (
    <LoginPanelContainer>
      <LoginFancyIconsContainer>
        <FancyImage src={webmobilePng} alt="Web-mobile" />
        <FancyImage src={algoritmicaPng} alt="Algoritmica" />
        <FancyImage src={gamedevPng} alt="Gamedev" />
      </LoginFancyIconsContainer>
      <LoginContentContainer>{children}</LoginContentContainer>
    </LoginPanelContainer>
  );
};
LoginPanel.propTypes = propTypes;
export default LoginPanel;
