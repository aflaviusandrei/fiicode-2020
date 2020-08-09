import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PatternImgPng from 'assets/png/patternImg.png';
import { flexCenter, pxToRem } from 'styles/mixins';
import media from 'styles/media';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const LoginFancyIconsContainer = styled.div`
  background: #193c46 center;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  flex: 2;
  padding: 100px 0;
  position: relative;
  ${flexCenter}
  flex-direction: column;
  justify-content: space-between;
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
  background-image: url(${PatternImgPng});
  background-position: center -240px;
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.colors.white};
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  ${media.md`
    padding: ${pxToRem('5')};
    flex-direction: column;
    border-top-right-radius: 0;
    border-bottom-left-radius: 15px;
  `}
`;

const LoginPanelContainer = styled.div`
  width: 60vw;
  min-height: 600px;
  max-height: 70vh;
  margin: 0 auto;
  display: flex;
  box-shadow: 9px 9px 2px #00000029;
  border-radius: 15px;
  ${media.lg`
    width: 90%;
  `}
  ${media.md`
    flex-direction: column;
    max-height: initial ;
  `}
`;

const StepContainer = styled.div`
  height: ${pxToRem(50)};
  width: ${pxToRem(50)};
  border-radius: 50%;
  border: 3px solid white;
  font-weight: 600;
  z-index: 2;
  background-color: ${props =>
    props.active ? '#193c46' : props.beforeActive ? 'white' : '#193c46'};
  ${flexCenter}
  color: ${props => (props.beforeActive ? '#193c46' : 'white')};
  font-size: ${pxToRem(20)};
  ${media.md`
    width: ${pxToRem(80)};
    height: ${pxToRem(80)};
  `}
  ${media.sm`
    width: ${pxToRem(40)};
    height: ${pxToRem(40)};
  `}
`;

const RegisterLine = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  height: calc(100% - 250px);
  width: 2px;
  background-color: white;
  z-index: 1;
  margin-top: 120px;
`;

const LoginPanel = ({ children, activeStep = 2, stepsCount = 5 }) => {
  return (
    <LoginPanelContainer>
      <LoginFancyIconsContainer>
        <RegisterLine />
        {new Array(stepsCount).fill(0).map((item, key) => (
          <StepContainer
            active={activeStep === key + 1}
            beforeActive={activeStep > key + 1}
            key={key}
          >
            {key + 1}
          </StepContainer>
        ))}
      </LoginFancyIconsContainer>
      <LoginContentContainer>{children}</LoginContentContainer>
    </LoginPanelContainer>
  );
};
LoginPanel.propTypes = propTypes;
export default LoginPanel;
