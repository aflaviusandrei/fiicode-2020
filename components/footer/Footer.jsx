import React from 'react';
import FiiCodeLogoImg from 'assets/png/fiicodeImg.png';
import styled from 'styled-components';
import PartenerWink from 'assets/png/winkLogo.png';
import PartenerProfidata from 'assets/png/profidataLogo.png';
import PartenerJump from 'assets/png/jump.png';
import PartenerMambuSvg from 'assets/svg/imgs/mambu-logo.svg';
import PartenerBloombergSvg from 'assets/svg/imgs/bloomberg-logo.svg';
import InstagramIcon from 'assets/svg/icons/Instagram-icon.svg';
import FacebookIcon from 'assets/svg/icons/facebook-icon.svg';
import media from 'styles/media';
import uniqid from 'uniqid';
import { pxToRem } from 'styles/mixins';
import { withTranslation } from 'translations';

const FooterStyled = styled.footer`
  padding: 50px ${({ theme }) => theme.spacing.xlarge};
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top: 10px solid transparent;
  border-image: url(/assets/png/footer-nipple.png) round;
  border-image-outset: 34px;
  border-image-width: 36px;
  border-image-slice: 27;
`;
const FooterLogo = styled.img`
  margin-bottom: 10px;
`;
const FooterMain = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #fff;
  margin-bottom: 3px;
  padding-bottom: 30px;
  ${media.xl`
    flex-direction: column;
    align-items: center;
  `}
`;
const FooterLeftSide = styled.div`
  color: white;
  width: auto;
  max-width: 450px;

  ${media.xl`
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
    text-align: center;
  `}
`;
const FooterRightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50vw;
  ${media.xl`
    width: auto;
  `}
`;
const FooterPartenersTitle = styled.div`
  color: white;
  margin-bottom: 30px;
  text-align: center;
  display: flex;
  justify-content: center;
  font-weight: bold;
`;
const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  border-top: 2px solid white;
  padding-top: 12px;
`;
const FooterSocialMedia = styled.div`
  display: flex;
`;
const FooterSocialMediaItem = styled.div`
  svg {
    color: white;
    fill: white;
    margin-left: 5px;
  }
`;
const FooterDescription = styled.div``;
const FooterCopyright = styled.div``;
const FooterOrganization = styled.div``;
const FooterPartenersItems = styled.div`
  display: flex;
  justify-content: flex-end;
  color: ${({ theme }) => theme.colors.white};
  ${media.xl`
    justify-content: center;
    flex-wrap: wrap;
  `}
`;
const FooterPartenersItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  margin-top: 18px;
`;
const FooterPartenersItemImage = styled.img`
  height: auto;
  max-height: 50px;
  max-width: 200px;
  margin-top: 15px;
`;
const FooterPartenersItemTitle = styled.span`
  margin-bottom: 0.5rem;
  font-weight: bold;
`;
const FooterPartenersItemSvgImage = styled.span`
  svg {
    max-height: ${pxToRem(60)};
    font-size: ${pxToRem(130)};
  }
`;
const PJ = () => (
  <FooterPartenersItemImage
    style={{ maxHeight: 160, margin: 0 }}
    src={PartenerJump}
  />
);
const partners = [
  {
    title: ({ t }) => t('partners-diamond'),
    images: [PartenerMambuSvg, PartenerBloombergSvg, PJ],
  },
  {
    title: ({ t }) => t('partners-gold'),
    images: [PartenerProfidata],
  },

  {
    title: ({ t }) => t('partners-media'),
    images: [PartenerWink],
  },
];

const Footer = ({ t }) => {
  const year = new Date().getFullYear();
  const footerPartners = partners.map(({ title: Title, images }) => (
    <FooterPartenersItem>
      <FooterPartenersItemTitle>
        <Title t={t} />:
      </FooterPartenersItemTitle>
      {images.map((Image) =>
        typeof Image == 'function' && React.isValidElement(Image()) ? (
          <FooterPartenersItemSvgImage>
            <Image key={uniqid()} />
          </FooterPartenersItemSvgImage>
        ) : (
          <FooterPartenersItemImage key={uniqid()} src={Image} />
        )
      )}
    </FooterPartenersItem>
  ));

  return (
    <FooterStyled>
      <FooterMain>
        <FooterLeftSide>
          <FooterLogo src={FiiCodeLogoImg} alt="fii-code-img" />
          <FooterDescription>{t('fiicode-info')}</FooterDescription>
        </FooterLeftSide>
        <FooterRightSide>
          <FooterPartenersTitle>
            {t('partners-title')} {year}:
          </FooterPartenersTitle>
          <FooterPartenersItems>{footerPartners}</FooterPartenersItems>
        </FooterRightSide>
      </FooterMain>
      <FooterBottom>
        <FooterCopyright>Copyright © FIICode {year}</FooterCopyright>
        <FooterOrganization>{t('fiicode-organized')}</FooterOrganization>
        <FooterSocialMedia>
          <FooterSocialMediaItem>
            <FacebookIcon />
          </FooterSocialMediaItem>
          <FooterSocialMediaItem>
            <InstagramIcon />
          </FooterSocialMediaItem>
        </FooterSocialMedia>
      </FooterBottom>
    </FooterStyled>
  );
};

export default withTranslation('footer')(Footer);
