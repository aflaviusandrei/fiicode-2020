import React from 'react';
import Fields from 'templates/Fields/Fields';
import { algo } from 'config/fields/fields';
import { withTranslation } from 'translations';
import FrontWrapper from '../templates/FrontWrapper/FrontWrapper';

const Algo = ({ i18n }) => (
  <FrontWrapper>
    <Fields config={algo[i18n.language]} />
  </FrontWrapper>
);
export default withTranslation('fields')(Algo);
