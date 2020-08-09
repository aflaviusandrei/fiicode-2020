import React from 'react';
import styled from 'styled-components';
import EnvelopeIcon from 'assets/png/envelope.png';
import { BlueContainer } from 'components';
import media from 'styles/media';
import { flexCenter } from 'styles/mixins';
import { withTranslation } from 'translations';

const HomeBlueContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const EnvelopeComponent = styled.img`
  background-position: center center;
  background-size: cover;
  font-size: 10px;
  max-width: 100%;
  height: auto;
  @media (max-width: 1500px) {
    max-height: 600px;
  }
  ${media.md`
    display: none;  
  `}
  ${media.xl`
    max-height: 500px;
  `}
  ${media.lg`
    max-width: 100vw;
    max-height: 100%;
  `}
`;

const EnvelopeComponentContainer = styled.div`
  position: relative;
`;
const EnvelopeComponentText = styled.div`
  position: absolute;
  top: 40%;
  max-width: 350px;
  left: 20%;
  transform: rotate(-10deg);
  ${media.md`
    position: static;
    transform: rotate(0deg);
    font-size: 1.4rem;
  `}
`;

const BlueSection = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.normal};
`;

const BlueSectionInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -150px;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  @media (min-width: 1500px) {
    justify-content: center;
  }

  ${media.lg`
    flex-direction: column;
  `}

  ${media.xl`
    ${flexCenter}  
  `}
`;

const BlueSectionProjectCategories = styled.div`
  display: flex;
  flex-direction: column;
  ${media.lg`
    padding: 0 20px;
    display: flex;
    justify-content: center;
    margin-top: 50px;
  `}
`;

const BlueSectionProjectCategory = styled.img`
  max-height: 150px;

  ${media.xl`
    margin-right: 0;
    max-height: 100px;
  `}
  ${media.lg`
    display: flex;
    justify-content: center;
  `}
`;

const HomeBlueSection = ({ categories = [], t }) => {
  return (
    <HomeBlueContainer>
      <BlueContainer />
      <BlueSection>
        <BlueSectionInner>
          <EnvelopeComponentContainer>
            <EnvelopeComponent src={EnvelopeIcon} />
            <EnvelopeComponentText>{t('letter')}</EnvelopeComponentText>
          </EnvelopeComponentContainer>
          <BlueSectionProjectCategories>
            {categories.map(({ text, image }) => (
              <BlueSectionProjectCategory src={image} alt={text} key={text} />
            ))}
          </BlueSectionProjectCategories>
        </BlueSectionInner>
      </BlueSection>
    </HomeBlueContainer>
  );
};
export default withTranslation('home')(HomeBlueSection);
