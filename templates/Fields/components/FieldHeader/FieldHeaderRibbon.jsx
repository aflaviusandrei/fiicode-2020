import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FieldRibbonSvg from 'assets/svg/imgs/field-ribbon.svg';
import uniqid from 'uniqid';
import { withTranslation } from 'translations';

const propTypes = {
  image: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  roundsInfo: PropTypes.object.isRequired,
};
const FieldHeaderRibbonElement = styled.div`
  position: absolute;
  top: 50%;
  right: 100%;
  height: 500px;
  width: ${({ theme }) => theme.components.field.profile.width};
  z-index: 1;
  & > svg {
    width: 100%;
    height: 100%;
  }
`;
const FieldRibbonContent = styled.div`
  position: absolute;
  color: ${({ theme }) => theme.colors.white};
  top: 50%;
  transform: translateY(-50%);
  margin: 24px;
  padding: 4px;
`;
const FieldRibbonContentHeader = styled.h3`
  margin: 0 6px;
`;
const FieldRibbonContentSubHeader = styled.h4`
  margin: 10px 12px 2px;
`;
const FieldRibbonContentInfo = styled.span`
  margin-left: 12px;
`;
const FieldHeaderRibbon = ({ roundsInfo, color, t }) => (
  <FieldHeaderRibbonElement color={color}>
    <FieldRibbonSvg color={color} />
    <FieldRibbonContent>
      <FieldRibbonContentHeader>{t('calendar-title')}</FieldRibbonContentHeader>
      {roundsInfo.map(({ title, content }) => (
        <Fragment key={uniqid()}>
          <FieldRibbonContentSubHeader>{title}</FieldRibbonContentSubHeader>
          <FieldRibbonContentInfo>{content}</FieldRibbonContentInfo>
        </Fragment>
      ))}
    </FieldRibbonContent>
  </FieldHeaderRibbonElement>
);
FieldHeaderRibbon.propTypes = propTypes;
export default withTranslation('fields')(FieldHeaderRibbon);
