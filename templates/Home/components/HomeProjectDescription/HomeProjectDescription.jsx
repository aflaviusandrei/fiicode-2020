import React from 'react';
import styled from 'styled-components';
import { BebasHeading } from 'components';
import { flexCenter, pxToRem } from 'styles/mixins';
import InstagramIcon from 'assets/svg/icons/Instagram-icon.svg';
import FacebookIcon from 'assets/svg/icons/facebook-icon.svg';
import { Link, withTranslation, Trans } from 'translations';

const HomeProjectStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // max-width: 90%;
  ${flexCenter};
  color: ${({ theme }) => theme.colors.primary};
`;

const ProjectTitle = styled.div`
  margin-bottom: 24px;
  font-size: ${pxToRem('30')};
  display: flex;
  width: 100%;
  align-items: center;
`;
const ProjectDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: ${pxToRem('17')};
  margin-bottom: 9px;
  width: 100%;
  p {
    margin: 0;
    margin-bottom: 15px;
    padding: 0;
    span {
      font-weight: 600;
    }
  }
`;

const DecorationLine = styled.div`
  height: 3px;
  background-color: ${({ theme }) => theme.colors.primary};
  margin: 0 10px;
  flex: 1;
`;

const DecorationCircle = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  margin: 0 10px;
`;

const ProjectBottomDecotations = styled.div`
  width: 100%;
  ${flexCenter};
`;

const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const SocialMediaIcon = styled.a`
  svg {
    color: white;
    fill: white;
    margin-left: 5px;
    font-size: 3rem;
  }
`;

const HomeProjectDescription = ({ t }) => {
  return (
    <HomeProjectStyled>
      <ProjectTitle>
        <DecorationLine />
        <DecorationCircle />
        <BebasHeading>FIICode</BebasHeading>
        <DecorationCircle />
        <DecorationLine />
      </ProjectTitle>
      <ProjectDescription>
        <p>
          <Trans i18nKey="home:header-description.text1">
            <span>FIICode</span> este un proiect organizat de <span>ASII</span>{' '}
            și de <span>Facultatea de Informatică din Iași</span>, ce are la
            bază dezvoltarea abilităților pe partea de programare la nivel
            competitiv.
          </Trans>
        </p>
        <p>
          <Trans i18nKey="home:header-description.text2">
            Fiind la a 4-a ediție, acesta are o arie largă ce cuprinde
            <span>web&mobile development</span>,<span>game development</span>
            și <span>algoritmică</span>.
          </Trans>
        </p>
        <p>{t('header-description.text3')}</p>
        <p>{t('header-description.text4')}</p>
      </ProjectDescription>
      <ProjectBottomDecotations>
        <DecorationLine />
        <DecorationCircle />
        <DecorationLine />
      </ProjectBottomDecotations>
      <SocialMediaIcons>
        <SocialMediaIcon href="https://www.facebook.com/FIICode/">
          <FacebookIcon />
        </SocialMediaIcon>
        <SocialMediaIcon href="https://www.instagram.com/fiicode/">
          <InstagramIcon />
        </SocialMediaIcon>
      </SocialMediaIcons>
    </HomeProjectStyled>
  );
};
export default withTranslation('home')(HomeProjectDescription);
