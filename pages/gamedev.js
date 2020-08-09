import React from 'react';
import Fields from 'templates/Fields/Fields';
import { gamedev } from 'config/fields/fields';
import { withTranslation } from 'translations';
import FrontWrapper from '../templates/FrontWrapper/FrontWrapper';

const GameDev = ({ i18n }) => (
  <FrontWrapper>
    <Fields config={gamedev[i18n.language]} />
  </FrontWrapper>
);
export default withTranslation('fields')(GameDev);
