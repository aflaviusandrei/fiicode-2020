import React from 'react';
import Fields from 'templates/Fields/Fields';
import { webMobile } from 'config/fields/fields';
import { withTranslation } from 'translations';
import FrontWrapper from '../templates/FrontWrapper/FrontWrapper';

const WebMobile = ({ i18n }) => (
  <FrontWrapper>
    <Fields config={webMobile[i18n.language]} />
  </FrontWrapper>
);

export default withTranslation('fields')(WebMobile);
